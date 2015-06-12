//=======================================タイムシート画像を作る
/*
	暫定版画像タイムシート用

タイトルはDBから取得
カット番号と秒数は指定
用紙の色は、選択式

*/
/Photoshop用ライブラリ読み込み
if(typeof app.nas =="undefined"){
   var myLibLoader=new File(Folder.userData.fullName+"/nas/lib/Photoshop_Startup.jsx");
   $.evalFile(myLibLoader);
}else{
   nas=app.nas;
}
//+++++++++++++++++++++++++++++++++ここまで共用

function checkSelection(){var flg = true;try {activeDocument.selection.translate(0,0);}catch(e){flg = false;};return flg;}
//ドキュメント情報からドキュメント名を作成する
var currentName=nas.workTitles.bodys[nas.axe.dmCurrent[0]][2]+nas.Zf(nas.axe.dmCurrent[1],2)+"c"+nas.Zf(nas.axe.dmCurrent[2],3);
//var clipB=($.fileName.match(/addNewDocument/))? false:true;//クリップボードモードをファイル名で判定
var clipB=true
//	アクティブドキュメントから選択範囲をコピー
if(clipB){
if(checkSelection()){
    activeDocument.selection.copy(true);
}else{
    clipB=false;//選択範囲がないのでモードを通常作成に
}
}

//ダイアログを出力してドキュメントの指定条件を取得　"選択範囲からドキュメントを作成"
if(clipB){
	var w=nas.GUI.newWindow("dialog",localize({
		en:"Create a new exposure sheet document (picture) from the selected range",
		ja:"選択範囲から新規タイムシート(画像)ドキュメントを作成"
	}),9,9,320,240);
}else{
	var w=nas.GUI.newWindow("dialog",localize({
		en:"Create a new exposure sheet document (picture) ",
		ja:"新規タイムシート(画像)ドキュメントを作成します"
	}),9,9,320,240);
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
   w.cutInc= nas.GUI.addButton(w,"+",3.7 ,1,0.6,1);
   w.cutDec= nas.GUI.addButton(w,"-",4   ,1,0.6,1);

 w.timeText= nas.GUI.addEditText(w,nas.Frm2FCT(nas.FCT2Frm(nas.axe.dmCurrent[3]),3),5.5,1,1.5,1);
   w.secInc= nas.GUI.addButton(w,"+1",4.8  ,2,.75,1);
   w.secDec= nas.GUI.addButton(w,"-1",5.25,2,.75,1);
   w.frmInc= nas.GUI.addButton(w,"+6",5.8  ,2,.75,1);
   w.frmDec= nas.GUI.addButton(w,"-6",6.25,2,.75,1);

// w.titleCB= nas.GUI.addEditText(w,nas.workTitles.names(0),nas.workTitles.selected,2,0,4,1);
　w.edPanel=nas.GUI.addPanel(w,localize(nas.uiMsg.Edit),0,3,7,6); //"編集"

w.edPanel.lb0 = nas.GUI.addStaticText(w.edPanel,localize({en:"title (template) :",ja:"タイトル（テンプレート）:"}),0,0.5,2,1);
w.edPanel.selectTT=nas.GUI.addComboBox(w.edPanel,nas.workTitles.names(0),nas.workTitles.selected,2,0.5,4,1)

w.edPanel.lb1 = nas.GUI.addStaticText(w.edPanel,localize(nas.uiMsg.backgroundColor)+":",0,2,3,1).justify="right";//"背景色:"
w.edPanel.selectCl=nas.GUI.addDropDownList(w.edPanel,nas.axe.lyBgColors,1,3,2,3,1);
//w.edPanel.SP = nas.GUI.addStaticText(w.edPanel,"==================================================================================================================",0,1,2,1);
//====================================================
/*
w.edPanel.lb1 = nas.GUI.addStaticText(w.edPanel,"標準フレーム:",0,2,3,1).justify="right";
w.edPanel.selectIM=nas.GUI.addDropDownList(w.edPanel,nas.inputMedias.names(0),nas.workTitles.selectedRecord[3],3,2,4,1);
w.edPanel.lb2 = nas.GUI.addStaticText(w.edPanel,"用紙 :",0,3,3,1).justify="right";
w.edPanel.selectDP=nas.GUI.addDropDownList(w.edPanel,nas.paperSizes.names(0),nas.paperSizes.selected,3,3,4,1);
w.edPanel.lb3 = nas.GUI.addStaticText(w.edPanel,"タップ:",0,4,3,1).justify="right";
w.edPanel.selectRM=nas.GUI.addDropDownList(w.edPanel,nas.registerMarks.names(0),nas.registerMarks.selected,3,4,4,1);
w.edPanel.lb4 = nas.GUI.addStaticText(w.edPanel,"初期ワークセット(レイヤセット):",0,5,3,1).justify="right";
w.edPanel.selectWS=nas.GUI.addDropDownList(w.edPanel,["なし","フレームのみ","フレーム+1(A)","フレーム+2(A,B)","フレーム+3(A,B,C)","フレーム+4(A,B,C,D)"],3,3,5,4,1);
 */




//w.edPanel.lbWIDTH = nas.GUI.addStaticText(w.edPanel,"幅:",1,6,2,1).justify="right";
//w.edPanel.lbHEIGHT = nas.GUI.addStaticText(w.edPanel,"高:",1,7,2,1).justify="right";
w.edPanel.lbRESOLUTION = nas.GUI.addStaticText(w.edPanel,localize({en:"resolution:",ja:"解像度:"}),1,3,2,1).justify="right";
//w.edPanel.etWIDTH = nas.GUI.addEditText(w.edPanel,Math.round(nas.decodeUnit(nas.paperSizes.selectedRecord[1]+"mm","px")),3,6,2,1);
//w.edPanel.etHEIGHT = nas.GUI.addEditText(w.edPanel,Math.round(nas.decodeUnit(nas.paperSizes.selectedRecord[2]+"mm","px")),3,7,2,1);
w.edPanel.etRESOLUTION = nas.GUI.addEditText(w.edPanel,"200",3,3,2,1);
//解像度の標準値を nas.RESOLUTIONから外すほうが良い
//w.edPanel.pstWIDTH = nas.GUI.addStaticText(w.edPanel,"pixel",5,6,2,1);
//w.edPanel.pstHEIGHT = nas.GUI.addStaticText(w.edPanel,"pixel",5,7,2,1);
w.edPanel.pstRESOLUTION = nas.GUI.addStaticText(w.edPanel,"dpi",5,3,2,1);

//alert(localize(nas.uiMsg.fileName));
w.edPanel.lbx =  nas.GUI.addStaticText(w.edPanel,localize({en:"Data mode is RGB / 8bit depth fixed.",ja:"データモードはRGB/8bit深度固定です。"}),0,4,6,1);

//=========================
 w.okBt=nas.GUI.addButton(w,"OK",7,0,2,1);
 w.cnBt=nas.GUI.addButton(w,"Cancel",7,1,2,1);
/*
 w.tsBt=nas.GUI.addButton(w,"タイトルを保存",7,2,2,1).enabled=false;
 w.isBt=nas.GUI.addButton(w,"入力メディアを保存",7,3,2,1).enabled=false;
*/
//=============　コントロールメソッド
//タイトルセレクタ更新　各コントロール更新してドキュメント名を作成
w.edPanel.selectTT.onChange=function(){
	//alert(this.value)
 nas.workTitles.select(this.selected);//選択タイトルを切り替える？
 nas.axe.dmCurrent[0]=nas.workTitles.selected;
 this.parent.parent.fileName.update();
// this.parent.selectIM.items[nas.workTitles.selectedRecord[3]].selected=true;
}
/*
//カラーセレクタ更新
w.edPanel.selectCl.onChange=function(){
 alert(this.selection.index);
}
//IMセレクタ更新　各コントロール更新してドキュメント名を作成
w.edPanel.selectIM.onChange=function(){
 nas.inputMedias.select(this.selection.index);
 nas.RESOLUTION=nas.inputMedias.selectedRecord[3]/2.540;//dpc
w.edPanel.etWIDTH.text = Math.round(nas.decodeUnit(nas.paperSizes.selectedRecord[1]+"mm","px"));
w.edPanel.etHEIGHT.text = Math.round(nas.decodeUnit(nas.paperSizes.selectedRecord[2]+"mm","px"));
w.edPanel.etRESOLUTION.text = nas.Dpi();//nas.inputMedias.selectedRecord[3];
}
//用紙セレクタ更新　各コントロール更新してドキュメント名を作成
w.edPanel.selectDP.onChange=function(){
//alert(nas.RESOLUTION)
 nas.paperSizes.select(this.selection.index);
w.edPanel.etWIDTH.text = Math.round(nas.decodeUnit(nas.paperSizes.selectedRecord[1]+"mm","px"));
w.edPanel.etHEIGHT.text = Math.round(nas.decodeUnit(nas.paperSizes.selectedRecord[2]+"mm","px"));
//w.edPanel.etRESOLUTION.text = nas.inputMedias.selectedRecord[3];
}
//タップセレクタ更新
w.edPanel.selectRM.onChange=function(){
 nas.registerMarks.select(this.selection.index);
}
    
 */
//ファイル名更新（一方通行で）
w.fileName.update=function(){
	var myPrefix=(w.edPanel.selectTT.value == nas.workTitles.bodys[nas.axe.dmCurrent[0]][0])?
		nas.workTitles.bodys[nas.axe.dmCurrent[0]][2] :w.edPanel.selectTT.value;
var currentName=myPrefix+this.parent.opusNumber.text+"c"+this.parent.cutNumber.text;
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
myMsg+="RGB:8bit/pxel";
myMsg+=nas.GUI.LineFeed;
myMsg+="=====";

 w.notice=nas.GUI.addStaticText(w,myMsg,7,5,2,4);

//解像度が直接変更された場合、nas.RESOLUTIONを更新?
 w.edPanel.etRESOLUTION.onChange=function(){
	if(isNaN(this.text)){
		this.text=nas.Dpi();return;
	}else{
		nas.RESOLUTION=this.text/2.540;
	}
 }
//=======================================作成
 w.okBt.onClick=function(){
 //A3縦位置固定　解像度は特に変更が無ければ200dpi
  var myResolution=this.parent.edPanel.etRESOLUTION.text*1;
  var myWidth=Math.floor((29.7/2.54)*myResolution)+" px";
  var myHeight=Math.floor((42/2.54)*myResolution)+" px";
  var myName=w.fileName.text+"xps";
  var myLayerCounts=2;//変換サボってるけどインデックスがレイヤセット数
//指定の名前で新しいドキュメントを作成
  myNewDocument=app.documents.add(
	myWidth,myHeight,myResolution,myName,
	NewDocumentMode.RGB,DocumentFill.BACKGROUNDCOLOR,
	1,BitsPerChannelType.EIGHT,
  )
//オプションにしたがってドキュメントを整形
/*	初期レイヤを背景レイヤから通常レイヤへ変換	*/
var startupLayer=myNewDocument.layers[0];
startupLayer.isBackgroundLayer=false;
//用紙の色を付ける
var myColor=new SolidColor();
	myColor.rgb.red  =Math.floor(nas.axe.lyBgColors[this.parent.edPanel.selectCl.selection.index][1][0]*255);
	myColor.rgb.green=Math.floor(nas.axe.lyBgColors[this.parent.edPanel.selectCl.selection.index][1][1]*255);
	myColor.rgb.blue =Math.floor(nas.axe.lyBgColors[this.parent.edPanel.selectCl.selection.index][1][2]*255);
myNewDocument.selection.selectAll();
myNewDocument.selection.fill (myColor);
myNewDocument.selection.deselect();

/*	レイヤセットを作成	*/
 if(myLayerCounts>0){
  var myWorkSets=[];
  for(var lys=0;lys<myLayerCounts;lys++){myWorkSets.push(myNewDocument.layerSets.add());myWorkSets[lys].name=["Frames","Sheet"][lys];};
 }
//if(myLayerCounts>1){startupLayer.move(myWorkSets[1],ElementPlacement.INSIDE)};

	startupLayer.name="BackDrop";
//移動の必要があれば[Frames]を最上位へ
if(myLayerCounts>1){myWorkSets[0].move(app.activeDocument,ElementPlacement.PLACEATBEGINNING)};

//フレームセットにレジスタ画像とフレームを読み込み(フレームセットがない場合はスキップ)
var currentUnitBase=app.preferences.rulerUnits;//控える
app.preferences.rulerUnits=Units.MM;
if(myLayerCounts>0){
//シート罫線を読み込み
  var myRuleFile=new File(Folder.nas.fullName+"/lib/resource/timeSheet6sA3.eps");
  myRuleLayer=nas.axeAFC.placeEps(myRuleFile);
  myRuleLayer.blendMode=BlendMode.MULTIPLY;
var myOffset=(((myRuleLayer.bounds[3]-myRuleLayer.bounds[1])/2)+myRuleLayer.bounds[1]).as("mm")-nas.inputMedias.selectedRecord[7];
//  myRuleLayer.translate(new UnitValue("0 mm"),new UnitValue(((myRuleLayer.bounds[3]/2).as("mm")-myOffset)+" mm"));//タップからの距離を
  myRuleLayer.name="rule";
  myRuleLayer.move(myWorkSets[0],ElementPlacement.PLACEATEND);

//各種テキストを配置
var myTextLayer=myWorkSets[0].artLayers.add();//レイヤ追加
var myTextOffsetX=(((myTextLayer.bounds[2]-myTextLayer.bounds[0])/2)+myTextLayer.bounds[0]).as("mm");
var myTextOffsetY=(((myTextLayer.bounds[3]-myTextLayer.bounds[1])/2)+myTextLayer.bounds[1]).as("mm");
  myTextLayer.kind = LayerKind.TEXT;//テキストレイヤに変換
var titlePrefix=(nas.workTitles.selectedRecord[0]==w.edPanel.selectTT.value)?
	nas.workTitles.selectedRecord[1]:w.edPanel.selectTT.value;
  myTextLayer.textItem.contents =  titlePrefix+" #"+this.parent.opusNumber.text;
  
  myTextLayer.translate(
	new UnitValue(((myRuleLayer.bounds[0]-myTextLayer.bounds[0]).as("mm")+7)+" mm"),
	new UnitValue(((myRuleLayer.bounds[3]-myTextLayer.bounds[1]).as("mm")-394)+" mm")
  );//タップ位置を基準に調整
var myCutLayer=myWorkSets[0].artLayers.add();//レイヤ追加
  myCutLayer.kind = LayerKind.TEXT;//テキストレイヤに変換
  myCutLayer.textItem.contents = "c# "+this.parent.cutNumber.text;
  myCutLayer.translate(
	new UnitValue(((myRuleLayer.bounds[0]-myCutLayer.bounds[0]).as("mm")+122)+" mm"),
	new UnitValue(((myRuleLayer.bounds[3]-myCutLayer.bounds[1]).as("mm")-394)+" mm")
  );//タップ位置を基準に調整


//  myCutLayer.translate(new UnitValue(120+" mm"),new UnitValue(((myRuleLayer.bounds[3]/2).as("mm"))+" mm"));//タップからの距離を
var myTimeLayer=myWorkSets[0].artLayers.add();//レイヤ追加
  myTimeLayer.kind = LayerKind.TEXT;//テキストレイヤに変換
  myTimeLayer.textItem.contents = "( "+this.parent.timeText.text+" )";
  myTimeLayer.translate(
	new UnitValue(((myRuleLayer.bounds[0]-myTimeLayer.bounds[0]).as("mm")+170)+" mm"),
	new UnitValue(((myRuleLayer.bounds[3]-myTimeLayer.bounds[1]).as("mm")-396)+" mm")
  );//タップ位置を基準に調整
//  myTimeLayer.translate(new UnitValue("200 mm"),new UnitValue(((myRuleLayer.bounds[3]/2).as("mm"))+" mm"));//タップからの距離を
/**/

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
  myRuleLayer.move(myWorkSets[0],ElementPlacement.PLACEATEND);
}
app.preferences.rulerUnits=currentUnitBase;//復帰
    var newSheetLayer=myWorkSets[1].artLayers.add ();
    newSheetLayer.name="Sheet1";
//	app.activeDocument.activeLayer=startupLayer;
	app.activeDocument.activeLayer=newSheetLayer;

//ここでペーストして位置を調整する
if(clipB){
  var myPicture=app.activeDocument.paste();
  myPicture.translate(new UnitValue("0 mm"),new UnitValue(((myPegLayer.bounds[3]/2).as("mm")-myOffset)+" mm"));//タップからの距離を
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
