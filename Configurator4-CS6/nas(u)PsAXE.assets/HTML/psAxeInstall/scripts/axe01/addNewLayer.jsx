/*
	新規レイヤを追加する 
	オプション新設 新規レイヤの背景色に透明を追加
	新規エントリーの継続時間を指定（タイムラインモードでのみ有効）
	
*/

//オプションで背景レイヤをパラパラに雑ぜるか否かを調整
//最下層レイヤではなく、「背景レイヤ」限定? 考慮

	var nas=app.nas;

//add newLayer for animation drawing
//記録してある色と背景色を照合して、異なっていたら背景色を変更
var myColor=new SolidColor();
	myColor.rgb.red  =Math.floor(nas.axe.lyBgColors[nas.axe.lyBgColor][1][0]*255);
	myColor.rgb.green=Math.floor(nas.axe.lyBgColors[nas.axe.lyBgColor][1][1]*255);
	myColor.rgb.blue =Math.floor(nas.axe.lyBgColors[nas.axe.lyBgColor][1][2]*255);
if (app.backgroundColor!=myColor){app.backgroundColor=myColor};//背景色変更はUNDO対象外
	myColor.opacity  =Math.floor(nas.axe.lyBgColors[nas.axe.lyBgColor][1][3]*100);
//新規レイヤ追加して
	var currentLayer=app.activeDocument.activeLayer;
	var newName=nas.incrStr(currentLayer.name);
//名前に番号がない場合は01を付加する
	if(newName.match(/^\D+$/)){newName+="001";};
	var wasFold=(
 (app.activeDocument.activeLayer.parent.typename=="Document") &&
 (app.activeDocument.activeLayer.typename=="LayerSet")
 )?true:false;
var myDocLayers=(wasFold)?app.activeDocument.activeLayer:app.activeDocument.activeLayer.parent;

//	"新規動画レイヤ作成";
var myUndoStr=localize(nas.uiMsg["addNewLayer"]);
var myExcute="";

myExcute+="myDocLayers.artLayers.add();";//この操作でアクティブレイヤ移動
myExcute+="app.activeDocument.selection.selectAll();";
if(myColor.opacity){
myExcute+="app.activeDocument.selection.fill(app.backgroundColor,ColorBlendMode.NORMAL,myColor.opacity);";
}
myExcute+="if(wasFold){";
myExcute+="app.activeDocument.activeLayer.move(currentLayer,ElementPlacement.PLACEATBEGINNING)}else{"
myExcute+="app.activeDocument.activeLayer.move(currentLayer,ElementPlacement.PLACEBEFORE)};"
myExcute+="app.activeDocument.activeLayer.name=newName;";
myExcute+="if(nas.axe.newLayerTpr){app.activeDocument.activeLayer.opacity=nas.axe.onsOpc*100};";
if(nas.axeVTC.getDuration()){
	myExcute+='nas.axeVTC.setDuration(nas.axe.skipFrames+1);';
}
	if((app.documents.length)&&(activeDocument.suspendHistory)){
		activeDocument.suspendHistory(myUndoStr,myExcute);
	}else{
		eval(myExcute);
	}

//レイヤ名を変更する場合のアルゴリズム見直し
