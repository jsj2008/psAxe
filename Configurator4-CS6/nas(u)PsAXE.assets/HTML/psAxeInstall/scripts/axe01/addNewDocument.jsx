/* addNewDocument.jsx

	デフォルトの値で新規ドキュメントを作成後に背景レイヤを通常レイヤに変換する
	IMDBの読み込み処理はあとで
    フレームを透過２０％ / タップの表示を差分 スイッチ増設　20140919
*/
// enable double clicking from the Macintosh Finder or the Windows Explorer
// #target photoshop
//Photoshop用ライブラリ読み込み
if(typeof app.nas =="undefined"){
   var myLibLoader=new File(Folder.userData.fullName+"/nas/lib/Photoshop_Startup.jsx");
   $.evalFile(myLibLoader);
}else{
   nas=app.nas;
}
//+++++++++++++++++++++++++++++++++ここまで共用

function checkSelection(){var flg = true;try {activeDocument.selection.translate(0,0);}catch(e){flg = false;};return flg;}
//ドキュメント情報からドキュメント名を作成する
var currentName=nas.workTitles.bodys[nas.axe.dmCurrent[0]][2]+nas.Zf(nas.axe.dmCurrent[1],2)+ "c" +nas.Zf(nas.axe.dmCurrent[2],3);
//var clipB=($.fileName.match(/addNewDocument/))? false:true;//クリップボードモードをファイル名で判定
var clipB=true
//	アクティブドキュメントから選択範囲をコピー
if(clipB){
if(checkSelection()){
//	alert("tryCopy")
    activeDocument.selection.copy(true);
}else{
    clipB=false;//選択範囲がないのでモードを通常作成に
}
}
if(nas.axe.dmDialog){
//ダイアログを出力してドキュメントの指定条件を取得
if(clipB){
	var w=nas.GUI.newWindow("dialog",localize({
		en:"Create a new document from the selected range",
		ja:"選択範囲から新規ドキュメントを作成"
	}),9,14,320,240);//
}else{
	var w=nas.GUI.newWindow("dialog",localize(nas.uiMsg.dm022),9,14,320,240);//022:"新規ドキュメントを作成します"
}
 w.lb0 = nas.GUI.addStaticText(w,localize(nas.uiMsg.fileName),0,0,2,1);
// w.fileName= nas.GUI.addEditText(w,nas.incrStr(currentName),2,0,5,1);
 w.fileName= nas.GUI.addEditText(w,currentName,2,0,5,1);

 w.lb1 = nas.GUI.addStaticText(w,localize(nas.uiMsg.opus),0,1,2,.75);//"制作#."
 w.lb2 = nas.GUI.addStaticText(w,localize(nas.uiMsg.sceneCut),2.25,1,2,.75);//"CUT#."
 w.lb3 = nas.GUI.addStaticText(w,"( TIME )",4.5,1,2,0.75);//

 w.opusNumber= nas.GUI.addEditText(w,nas.Zf(nas.axe.dmCurrent[1],2),0.75,1,1,1);
   w.opusInc= nas.GUI.addButton(w,"+",1.45 ,1,0.6,1);
   w.opusDec= nas.GUI.addButton(w,"-",1.75,1,0.6,1);

// w.cutNumber= nas.GUI.addEditText(w,nas.incrStr(nas.axe.dmCurrent[2].toString()),3,1,1,1);
 w.cutNumber= nas.GUI.addEditText(w,nas.axe.dmCurrent[2].toString(),3,1,1,1);
   w.cutInc= nas.GUI.addButton(w,"+" ,3.7 ,1,0.6,1);
   w.cutDec= nas.GUI.addButton(w,"-" ,4   ,1,0.6,1);

 w.timeText= nas.GUI.addEditText(w,nas.Frm2FCT(nas.FCT2Frm(nas.axe.dmCurrent[3]),3),5.5,1,1.5,1);
   w.secInc= nas.GUI.addButton(w,"+1",4.8  ,2,.75,1);
   w.secDec= nas.GUI.addButton(w,"-1",5.25,2,.75,1);
   w.frmInc= nas.GUI.addButton(w,"+6",5.8  ,2,.75,1);
   w.frmDec= nas.GUI.addButton(w,"-6",6.25,2,.75,1);

/*
    スタートアッププロパティ増設　21040919
    タップとフレームの表示初期値
 */
w.pegBlend=nas.GUI.addCheckBox(w,localize({en:"peg BlendingMode:DIFFERENCE",ja:"タップを差の絶対値で"}),7,9,2,1);
    w.pegBlend.value=nas.axe.pegBlend;
w.pegBlend.onClick=function(){nas.axe.pegBlend=this.value};
w.frameOpc=nas.GUI.addCheckBox(w,localize({en:"frame semi-transparent",ja:"フレームを半透明で"}),7,10,2,1);
    w.frameOpc.value=nas.axe.frameOpc;
w.frameOpc.onClick=function(){nas.axe.frameOpc=this.value};
// w.titleCB= nas.GUI.addEditText(w,nas.workTitles.names(0),nas.workTitles.selected,2,0,4,1);
　w.imPanel=nas.GUI.addPanel(w,localize({en:"drawing area",ja:"作画領域"}),0,3,7,11); 

w.imPanel.lb0 = nas.GUI.addStaticText(w.imPanel,localize({en:"title (template) :",ja:"タイトル（テンプレート）:"}),0,0.5,2,1);
w.imPanel.selectTT=nas.GUI.addComboBox(w.imPanel,nas.workTitles.names(0),nas.workTitles.selected,2,0.5,4,1)

//w.imPanel.SP = nas.GUI.addStaticText(w.imPanel,"==================================================================================================================",0,1,2,1);
//====================================================
w.imPanel.lb1 = nas.GUI.addStaticText(w.imPanel,localize({en:"base frame :",ja:"標準フレーム:"}),0,2,3,1).justify="right";
w.imPanel.selectIM=nas.GUI.addDropDownList(w.imPanel,nas.inputMedias.names(0),nas.workTitles.selectedRecord[3],3,2,4,1);

w.imPanel.lb2 = nas.GUI.addStaticText(w.imPanel,localize({en:"paper :",ja:"用紙 :"}),0,3,3,1).justify="right";
w.imPanel.selectDP=nas.GUI.addDropDownList(w.imPanel,nas.paperSizes.names(0),nas.paperSizes.selected,3,3,4,1);

w.imPanel.lb3 = nas.GUI.addStaticText(w.imPanel,localize({en:"peg :",ja:"タップ:"}),0,4,3,1).justify="right";
w.imPanel.selectRM=nas.GUI.addDropDownList(w.imPanel,nas.registerMarks.names(0),nas.registerMarks.selected,3,4,4,1);

w.imPanel.lb4 = nas.GUI.addStaticText(w.imPanel,localize({en:"startup warkset (LayerSet):",ja:"初期ワークセット(レイヤセット):"}),0,5,3,1).justify="right";
w.imPanel.selectWS=nas.GUI.addDropDownList(w.imPanel,[
	localize({en:"no",ja:"なし"}),
	localize({en:"only Frames",ja:"フレームのみ"}),
	localize({en:"Frames+1(A) ",ja:"フレーム+1(A)"}),
	localize({en:"Frames+2(A,B)",ja:"フレーム+2(A,B)"}),
	localize({en:"Frames+3(A,B,C)",ja:"フレーム+3(A,B,C)"}),
	localize({en:"Frames+4(A,B,C,D)",ja:"フレーム+4(A,B,C,D)"})
],3,3,5,4,1);

w.imPanel.lbWIDTH = nas.GUI.addStaticText(w.imPanel,localize({en:"width:",ja:"幅:"}),1,6,2,1).justify="right";
w.imPanel.lbHEIGHT = nas.GUI.addStaticText(w.imPanel,localize({en:"height:",ja:"高:"}),1,7,2,1).justify="right";
w.imPanel.lbRESOLUTION = nas.GUI.addStaticText(w.imPanel,localize({en:"resolution:",ja:"解像度:"}),1,8,2,1).justify="right";

w.imPanel.etWIDTH = nas.GUI.addEditText(w.imPanel,Math.round(nas.decodeUnit(nas.paperSizes.selectedRecord[1]+"mm","px")),3,6,2,1);
w.imPanel.etHEIGHT = nas.GUI.addEditText(w.imPanel,Math.round(nas.decodeUnit(nas.paperSizes.selectedRecord[2]+"mm","px" )),3,7,2,1);
w.imPanel.etRESOLUTION = nas.GUI.addEditText(w.imPanel,nas.Dpi(),3,8,2,1);

w.imPanel.pstWIDTH = nas.GUI.addStaticText(w.imPanel,"pixel",5,6,2,1);
w.imPanel.pstHEIGHT = nas.GUI.addStaticText(w.imPanel,"pixel",5,7,2,1);
w.imPanel.pstRESOLUTION = nas.GUI.addStaticText(w.imPanel,"dpi",5,8,2,1);

w.imPanel.lbx = nas.GUI.addStaticText(w.imPanel,localize({en:"Data mode is RGB / 8bit depth fixed.",ja:"データモードはRGB/8bit深度固定です。"}),0,9,6,1);

//=========================
 w.okBt=nas.GUI.addButton(w,"OK",7,0,2,1);
 w.cnBt=nas.GUI.addButton(w,"Cancel",7,1,2,1);
/*
 w.tsBt=nas.GUI.addButton(w,"タイトルを保存",7,2,2,1).enabled=false;
 w.isBt=nas.GUI.addButton(w,"入力メディアを保存",7,3,2,1).enabled=false;
*/
//=============　コントロールメソッド
//タイトルセレクタ更新　各コントロール更新してドキュメント名を作成
w.imPanel.selectTT.onChange=function(){
 nas.workTitles.select(this.selected);//選択タイトルを切り替える？
 nas.axe.dmCurrent[0]=nas.workTitles.selected;
 this.parent.parent.fileName.update();
 this.parent.selectIM.items[nas.workTitles.selectedRecord[3]].selected=true;
}

//IMセレクタ更新　各コントロール更新してドキュメント名を作成
w.imPanel.selectIM.onChange=function(){
 nas.inputMedias.select(this.selection.index);
 nas.RESOLUTION=nas.inputMedias.selectedRecord[3]/2.540;//dpc
w.imPanel.etWIDTH.text = Math.round(nas.decodeUnit(nas.paperSizes.selectedRecord[1]+"mm","px" ));
w.imPanel.etHEIGHT.text = Math.round(nas.decodeUnit(nas.paperSizes.selectedRecord[2]+"mm","px" ));
w.imPanel.etRESOLUTION.text = nas.Dpi();//nas.inputMedias.selectedRecord[3];
}
//用紙セレクタ更新　各コントロール更新してドキュメント名を作成
w.imPanel.selectDP.onChange=function(){
//alert(nas.RESOLUTION)
 nas.paperSizes.select(this.selection.index);
w.imPanel.etWIDTH.text = Math.round(nas.decodeUnit(nas.paperSizes.selectedRecord[1]+"mm","px"));
w.imPanel.etHEIGHT.text = Math.round(nas.decodeUnit(nas.paperSizes.selectedRecord[2]+"mm","px"));
//w.imPanel.etRESOLUTION.text = nas.inputMedias.selectedRecord[3];
}
//タップセレクタ更新
w.imPanel.selectRM.onChange=function(){
 nas.registerMarks.select(this.selection.index);
}
//ファイル名更新（一方通行で）
w.fileName.update=function(){
	var myPrefix=(w.imPanel.selectTT.value == nas.workTitles.bodys[nas.axe.dmCurrent[0]][0])?	
		nas.workTitles.bodys[nas.axe.dmCurrent[0]][2] :w.imPanel.selectTT.value;
var currentName=myPrefix+this.parent.opusNumber.text+"c" +this.parent.cutNumber.text;
this.text=currentName;
}
//値上下ボタン
w.opusInc.onClick=function(){this.parent.opusNumber.text=nas.Zf(nas.incrStr(this.parent.opusNumber.text),2);this.parent.opusNumber.onChange();};
w.opusDec.onClick=function(){this.parent.opusNumber.text=nas.Zf(nas.incrStr(this.parent.opusNumber.text,-1),2);this.parent.opusNumber.onChange();};
w.cutInc.onClick=function(){this.parent.cutNumber.text=nas.Zf(nas.incrStr(this.parent.cutNumber.text),3);this.parent.cutNumber.onChange();};
w.cutDec.onClick=function(){this.parent.cutNumber.text=nas.Zf(nas.incrStr(this.parent.cutNumber.text,-1),3);this.parent.cutNumber.onChange();};

w.secInc.onClick=function(){this.parent.timeText.text=nas.Frm2FCT(nas.FCT2Frm(this.parent.timeText.text)+Number(nas.FRATE),3);};
w.secDec.onClick=function(){this.parent.timeText.text=nas.Frm2FCT(nas.FCT2Frm(this.parent.timeText.text)-Number(nas.FRATE),3);};
w.frmInc.onClick=function(){this.parent.timeText.text=nas.Frm2FCT(nas.FCT2Frm(this.parent.timeText.text)+6,3);};
w.frmDec.onClick=function(){this.parent.timeText.text=nas.Frm2FCT(nas.FCT2Frm(this.parent.timeText.text)-6,3);};
//opusNo.cutNo更新
w.opusNumber.onChange=function(){this.parent.fileName.update();};
w.cutNumber.onChange=function(){this.parent.fileName.update();};
w.timeText.onChange=function(){this.text=nas.Frm2FCT(nas.FCT2Frm(this.text),3);};

var myMsg="";
myMsg+="RGB:8bit/pxel" ;
myMsg+=nas.GUI.LineFeed;
myMsg+="=====";

 w.notice=nas.GUI.addStaticText(w,myMsg,7,5,2,4);

//解像度が直接変更された場合、nas.RESOLUTIONを更新
 w.imPanel.etRESOLUTION.onChange=function(){
	if(isNaN(this.text)){
		this.text=nas.Dpi();return;
	}else{
		nas.RESOLUTION=this.text/2.540;
	}
 }
//=======================================作成
 w.okBt.onClick=function(){
  var myWidth=w.imPanel.etWIDTH.text+" px";
  var myHeight=w.imPanel.etHEIGHT.text+" px";
  var myResolution=w.imPanel.etRESOLUTION.text+" dpi";
  var myName=w.fileName.text;
  var myLayerCounts=w.imPanel.selectWS.selection.index;//変換サボってるけどインデックスがレイヤセット数
//指定の名前で新しいドキュメントを作成
  myNewDocument=app.documents.add(
	myWidth,myHeight,myResolution,myName,
	NewDocumentMode.RGB,DocumentFill.BACKGROUNDCOLOR,
	1,BitsPerChannelType.EIGHT,
  )
//オプションにしたがってドキュメントを整形

/* アニメーションモードがタイムラインならフレームモードに変換　ループを無限に */
if (nas.axeAFC.checkAnimationMode()!="frameAnimation"){
//==アニメフレーム作成
var idmakeFrameAnimation = stringIDToTypeID( "makeFrameAnimation" );
executeAction( idmakeFrameAnimation, undefined, DialogModes.NO );
//==無限ループへ
    var descObj = new ActionDescriptor();
        var refLoop = new ActionReference();
        refLoop.putEnumerated( stringIDToTypeID( "animationClass" ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );
    descObj.putReference( charIDToTypeID( "null" ), refLoop );
        var descLoop = new ActionDescriptor();
        descLoop.putEnumerated( stringIDToTypeID( "animationLoopEnum" ), stringIDToTypeID( "animationLoopType" ), stringIDToTypeID( "animationLoopForever" ) );
    descObj.putObject( charIDToTypeID( "T   " ), stringIDToTypeID( "animationClass" ), descLoop );
executeAction( charIDToTypeID( "setd" ), descObj, DialogModes.NO );

}
/*	初期レイヤを背景レイヤから通常レイヤへ変換	*/
var startupLayer=myNewDocument.layers[0];
startupLayer.isBackgroundLayer=false;

/*	レイヤセットを作成	*/
 if(myLayerCounts>0){
  var myWorkSets=[];
  for(var lys=0;lys<myLayerCounts;lys++){myWorkSets.push(myNewDocument.layerSets.add());myWorkSets[lys].name=["Frames","A","B","C","D","E","F","G","H","I","J","K","L" ][lys];};

if(myLayerCounts>1){startupLayer.move(myWorkSets[1],ElementPlacement.INSIDE)};
 }
	startupLayer.name="A001";
//移動の必要があれば[Frames]を最上位へ
if(myLayerCounts>1){myWorkSets[0].move(app.activeDocument,ElementPlacement.PLACEATBEGINNING)};

//フレームセットにレジスタ画像とフレームを読み込み(フレームセットがない場合はスキップ)
var currentUnitBase=app.preferences.rulerUnits;//控える
app.preferences.rulerUnits=Units.MM;
if(myLayerCounts>0){
//レジスタ
  var myPegFile=new File(Folder.nas.fullName+"/lib/resource/Pegs/" +nas.registerMarks.selectedRecord[1]);
  myPegLayer=nas.axeAFC.placeEps(myPegFile);
  myPegLayer.translate("0 px",-1*myPegLayer.bounds[1]);//上辺へはっつけ
  if(nas.axe.pegBlend){myPegLayer.blendMode=BlendMode.DIFFERENCE;};
  myPegLayer.name="peg";
  myPegLayer.move(myWorkSets[0],ElementPlacement.PLACEATEND);

//100フレーム枠を読み込み
  var myFrameFile=new File(Folder.nas.fullName+"/lib/resource/Frames/"
	+nas.inputMedias.selectedRecord[1]+"mm"
	+nas.inputMedias.selectedRecord[2].replace(/\//,"x")
	+".eps"
  );
  myFrameLayer=nas.axeAFC.placeEps(myFrameFile);
//フレーム配置　今日はセンタリングのみで左右はパス 20110820
var myOffset=(((myFrameLayer.bounds[3]-myFrameLayer.bounds[1])/2)+myFrameLayer.bounds[1]).as("mm")-nas.inputMedias.selectedRecord[7];
  myFrameLayer.translate(new UnitValue("0 mm"),new UnitValue(((myPegLayer.bounds[3]/2).as("mm")-myOffset)+" mm"));//タップからの距離を
  if(nas.axe.frameOpc){myFrameLayer.opacity=20;};
  myFrameLayer.name="frame";

//各種テキストを配置
var myTextLayer=myWorkSets[0].artLayers.add();//レイヤ追加
var myTextOffsetX=(((myTextLayer.bounds[2]-myTextLayer.bounds[0])/2)+myTextLayer.bounds[0]).as("mm" );
var myTextOffsetY=(((myTextLayer.bounds[3]-myTextLayer.bounds[1])/2)+myTextLayer.bounds[1]).as("mm" );
  myTextLayer.kind = LayerKind.TEXT;//テキストレイヤに変換

var titlePrefix=(nas.workTitles.selectedRecord[0]==w.imPanel.selectTT.value)?
	nas.workTitles.selectedRecord[1]:w.imPanel.selectTT.value;
  myTextLayer.textItem.contents =  titlePrefix+" #"+this.parent.opusNumber.text;
  myTextLayer.translate(
	new UnitValue(((myPegLayer.bounds[0]-myTextLayer.bounds[0]).as("mm")+0)+" mm"),
	new UnitValue(((myPegLayer.bounds[3]-myTextLayer.bounds[1]).as("mm")+5)+" mm")
  );//タップ位置を基準に調整
var myCutLayer=myWorkSets[0].artLayers.add();//レイヤ追加
  myCutLayer.kind = LayerKind.TEXT;//テキストレイヤに変換
  myCutLayer.textItem.contents = "c# "+this.parent.cutNumber.text;
  myCutLayer.translate(
	new UnitValue(((myPegLayer.bounds[0]-myCutLayer.bounds[0]).as("mm")+120)+" mm"),
	new UnitValue(((myPegLayer.bounds[3]-myCutLayer.bounds[1]).as("mm")+5)+" mm")
  );//タップ位置を基準に調整
//  myCutLayer.translate(new UnitValue(120+" mm"),new UnitValue(((myPegLayer.bounds[3]/2).as("mm"))+" mm"));//タップからの距離を
var myTimeLayer=myWorkSets[0].artLayers.add();//レイヤ追加
  myTimeLayer.kind = LayerKind.TEXT;//テキストレイヤに変換
  myTimeLayer.textItem.contents = "( "+this.parent.timeText.text+" )" ;
  myTimeLayer.translate(
	new UnitValue(((myPegLayer.bounds[0]-myTimeLayer.bounds[0]).as("mm")+200)+" mm"),
	new UnitValue(((myPegLayer.bounds[3]-myTimeLayer.bounds[1]).as("mm")+5)+" mm")
  );//タップ位置を基準に調整
//  myTimeLayer.translate(new UnitValue("200 mm"),new UnitValue(((myPegLayer.bounds[3]/2).as("mm"))+" mm"));//タップからの距離を

	app.preferences.rulerUnits = Units.POINTS;
 myTextLayer.textItem.size = 32;//32ポ
 myCutLayer.textItem.size = 32;//32ポ
 myTimeLayer.textItem.size = 24;//24ポ
	//バグが発生した場合指定ポイント数と異なるデータが返るのでそれを判定
if (Math.round(myTextLayer.textItem.size.as("point"))!=32){
  nas.PSCCFontSizeFix.setFontSizePoints( myTextLayer, 32);//32ポ
  nas.PSCCFontSizeFix.setFontSizePoints( myCutLayer, 32);//32ポ
  nas.PSCCFontSizeFix.setFontSizePoints( myTimeLayer, 24);//24ポ
};

//
  myFrameLayer.move(myWorkSets[0],ElementPlacement.PLACEATEND);
}
app.preferences.rulerUnits=currentUnitBase;//復帰

	app.activeDocument.activeLayer=startupLayer;

//ここでペーストして位置を調整する
if(clipB){
  var myPicture=app.activeDocument.paste();
  myPicture.translate(new UnitValue("0 mm" ),new UnitValue(((myPegLayer.bounds[3]/2).as("mm")-myOffset)+" mm"));//タップからの距離を
}
//nas.axe.dmCurrent 更新
	nas.axe.dmCurrent=[nas.workTitles.selected,this.parent.opusNumber.text,this.parent.cutNumber.text,this.parent.timeText.text];
if(bootFlag){nas.writePrefarence(["nas.axe","nas.RESOLUTION","nas.workTitles.selected","nas.registerMarks.selected"]);}
//alert(nas.axe.dmCurrent)
	this.parent.close();
};
 w.cnBt.onClick=function(){this.parent.close();};
/*
 w.tsBt.onClick=function(){;};
 w.isBt.onClick=function(){;};
*/
w.show();


}else{
var myExcute="";
//=============== コード


// =======================================================新規ドキュメント作成
myExcute+='var descNew = new ActionDescriptor();';
myExcute+='var descPreset = new ActionDescriptor();';
myExcute+='descPreset.putString(stringIDToTypeID("preset"),"640 x 480");';
myExcute+='descNew.putObject( charIDToTypeID("Nw  "), charIDToTypeID("Dcmn"), descPreset );';
myExcute+='var A =executeAction( charIDToTypeID("Mk  "), descNew, DialogModes.ALL);';
myExcute+='var newDocumentRef =app.activeDocument;';
myExcute+='newDocumentRef.layers[0].isBackgroundLayer=false;';
myExcute+='newDocumentRef = null;';

//=================================　Execute width Undo
//alert(myExcute);
//eval(myExcute);
ErrStrs = {}; ErrStrs.USER_CANCELLED=localize("$$$/ScriptingSupport/Error/UserCancelled=User cancelled the operation"); try {
//ファイルの新規作成なので、activeDocumentが存在しないケースがある。
//その場合エラートラップにかかってしまうのでオブジェクトの有無ではなくバージョン確認を行う
		eval(myExcute)
} catch(e){if (e.toString().indexOf(ErrStrs.USER_CANCELLED)!=-1) {;} else{alert(localize("$$$/ScriptingSupport/Error/CommandNotAvailable=The command is currently not available"));}}

}


