/*(タイムシート適用)
	Xps Sheet　データをPSDフレームアニメーションに適用
    undo 設定を行わない。
    この機能はチューニングの余地が多すぎるのでまだ最適化しないで置いておく 2011/09/25
*/
//Photoshop用ライブラリ読み込み
if(typeof app.nas =="undefined"){
   var myLibLoader=new File(Folder.userData.fullName+"/nas/lib/Photoshop_Startup.jsx");
   $.evalFile(myLibLoader);
}else{
   nas=app.nas;
}
//+++++++++++++++++++++++++++++++++ここまで共用
//======制御オブジェクト/言語リソース
var aplXps=new Object
	aplXps.uiMsg={};

//動作抑制オブジェクト
	var XPS=new Xps();
//	nas.XPSStore=new XpsStore();

//動作チェック用タイムカウントオブジェクト
var myTimeCount=new Object();
	myTimeCount.start=new Date().getTime();
	myTimeCount.current=0;
	myTimeCount.datas=new Array();
	myTimeCount.datas.push(["started",0])
	myTimeCount.check=function(myLabel){
		now = new Date().getTime();
		this.datas.push([myLabel,now-this.start-this.current]);
		this.current=now-this.start;
	}

if((app.documents.length)&&(app.activeDocument.name.match(/.*\.psd$/i))){
myTimeCount.check("loadLib");
//
var myTarget=app.activeDocument;
myTarget.buildPsQueue=_buildPsQueue;
myTarget.setView=_setView;
if(myTarget.viewBuf){delete myTarget.viewBuf};//暫定的にviewBufクリア
var myXpsFile=new File([myTarget.fullName.path,myTarget.fullName.name.replace(/\.psd/,".xps")].join("/"));


if(myXpsFile.exists){
	//ファイルが存在するので読み込み
		var myOpenfile = new File(myXpsFile.fsName);
		myOpenfile.encoding="UTF8";
		myOpenfile.open("r");
		var myContent = myOpenfile.read();
	//	alert(myContent);
		if(myContent.length==0){alert("Zero Length!");}
		myOpenfile.close();
		XPS.readIN(myContent);
		myTimeCount.check("readIN");
//後処理に便利なのでシート参照配列を作成する。
	var myTargetOrder=0;//0はシート全体、そのほかは下から順に
if(myTarget.activeLayer.parent.typename!="Document"){
	for (var tlIx=0;tlIx<myTarget.layers.length;tlIx++){
		if(myTarget.layers[tlIx]==myTarget.activeLayer.parent){var myTargetOrder=(myTarget.layers.length-tlIx);break;}
	}
}
//ドキュメントの適用対象レイヤ数とシートのタイムライン数のうち小さい方をとってキュー配列をビルドする
//タイムシート上第一フレームが(カラでなく)未記入の場合は、スキップコードを埋める
var myTRs=new Array();
myTrCounts=(XPS.layers.length<myTarget.layers.length)? XPS.layers.length:myTarget.layers.length;
for(var idx=0;idx<myTrCounts;idx++){
	if(XPS.xpsBody[idx+1][0]==""){
		myTRs.push(-1);
	}else{
		if((myTargetOrder==0)||((idx+1)==myTargetOrder)){myTRs.push(idx+1)}else{myTRs.push(-1)}
	}
}
//alert(myTRs.toString());//確認用
/*
	ドキュメントの選択状態をスイッチとして動作を切り替えるべき
	第一階層のLayerSetまたはArtLayerを選択していた場合はシート全体の適用
	第二階層のLayerSetまたはArtLayerを選択していた場合は当該タイムラインの適用を行う
	シートがない場合の動作は同じ。
	myTRsを再構成することで実装?
	制御パネルを表示してユーザ設定を促すように変更　2015/06/06
	同じスクリプトでタイムラインモード対応の処理をする
*/


		var myQueue=myTarget.buildPsQueue(XPS,myTRs);
		myTimeCount.check("buildQueue");
		//取得したQueue列をアニメーションフレームへ転換
		//表示初期化
		//アニメーションテーブル初期化
//くみ上げたキューが多数の場合は時間がかかるのでこの場で警告して処理スキップできるようにする
	var doApply=true;
// alert("queue= "+ myQueue.length +": "+ myTimeCount.datas[3][1]);
	if((myQueue.length>50)||(myTimeCount.datas[3][1]>20000)){doApply=confirm("(警告！)適用に1分以上かかるかもしれません。続行しますか？");}

	if(doApply){
		//アニメウィンドウを初期化する＞要するに全て消す
        nas.axeAFC.initFrames();
		myTimeCount.check("clearFrames");
//==============================================================
		//第一（キー）フレームを設定
		var myIndex=myQueue[0].index;
		var myDuration=myQueue[0].duration/XPS.framerate;//継続フレームを時間に変換
		myTarget.setView(myQueue[0]);
		nas.axeAFC.setDly(myDuration);
		//第二フレーム以降をループ設定
		for(var idx=1;idx<myQueue.length;idx++){
		 nas.axeAFC.duplicateFrame();//作る（フォーカス移動）
		 myDuration=myQueue[idx].duration/XPS.framerate;//継続フレームを時間に変換
		 myTarget.setView(myQueue[idx]);
		 nas.axeAFC.setDly(myDuration);
		}
	}else{alert(localize(nas.uiMsg.aborted))};//処理中断

}else{
	//ターゲットのXPSが存在しないので、現状のドキュメントに従う（と思われる）XPSをカラで生成して保存する
	//可能ならその場で編集ユニットをコールする
	var myDuration=72;//frames
	var myFps=nas.FRATE;
	XPS.init(myTarget.layers.length,myDuration);
	XPS.framerate=myFps;
	XPS.mapfile=myTarget.fullName.fsName;
	XPS.title=nas.workTitles.select()[0];
	var mx=myTarget.layers.length;
	for(var lix=0;lix<mx;lix++){
		XPS.layers[lix].name=(myTarget.layers[mx-lix-1].name.replace(/\s/g,""));//name設定時にencoding設定してレイヤ名から空白をエスケープすること
		XPS.layers[lix].sizeX=myTarget.layers[mx-lix-1].bounds[2].as("px")-myTarget.layers[mx-lix-1].bounds[0].as("px");
		XPS.layers[lix].sizeY=myTarget.layers[mx-lix-1].bounds[3].as("px")-myTarget.layers[mx-lix-1].bounds[1].as("px");
		XPS.layers[lix].lot=(myTarget.layers[mx-lix-1].layers)?myTarget.layers[mx-lix-1].layers.length:1;
	}
//"タイムシートがありません。新規に作成して編集しますか？"
	if(confirm(nas.uiMsg.dm015)){
	var fileSaveResult=editXpsProp(XPS);
//	alert(fileSaveResult);
		if((fileSaveResult)&&(myXpsFile.exists)){myXpsFile.execute()};
//保存して　ドキュメントを呼び出す
    if(false){
		myXpsFile.encoding="utf8"
		myXpsFile.open("w");
		myXpsFile.write(XPS.toString());
		myXpsFile.close();

		myXpsFile.execute();
    }
	}
}
		myTimeCount.check("applyXPS");
		if (dbg){alert(myTimeCount.datas.toSource())};
}else{
	alert (localize(nas.uiMsg.savePsdPlease));//ドキュメントをpsd形式で保存してください。 
}
//alert(XPS.toString())