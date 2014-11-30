//shiftLyersU.jsx レイヤセットのメンバーを上方向シフトする
	//選択レイヤ取得
 if(app.documents.length){
 var myUndo="上シフト";var myAction="";
 var myDocLayers=((app.activeDocument.activeLayer.parent.typename=="Document") && (app.activeDocument.activeLayer.typename=="LayerSet"))?app.activeDocument.activeLayer:app.activeDocument.activeLayer.parent;
 var xLinks=(myDocLayers.xLinks)? myDocLayers.xLinks:[];//プロパティがない場合は初期値で
 var subMotionLayers=new Array();
 if((myDocLayers.typename!="Document")&&(xLinks.length)){
	for(var ix=0;ix<xLinks.length;ix++){if(app.activeDocument.layers[xLinks[ix]]===myDocLayers){continue}
		subMotionLayers.push(app.activeDocument.layers[xLinks[ix]])
	}
}
myAction="if(myDocLayers.layers.length>1){app.activeDocument.activeLayer=myDocLayers.layers[1];if(myDocLayers.layers[myDocLayers.layers.length-1].typename==\"ArtLayer\"){myDocLayers.layers[0].move(myDocLayers.layers[myDocLayers.layers.length-1],ElementPlacement.PLACEAFTER);}else{myDocLayers.layers[0].move(myDocLayers.layers[myDocLayers.layers.length-1],ElementPlacement.PLACEBEFORE);myDocLayers.layers[myDocLayers.layers.length-1].move(myDocLayers.layers[myDocLayers.layers.length-2],ElementPlacement.PLACEBEFORE);};if(subMotionLayers.length){for(var lx=0;lx<subMotionLayers.length;lx++){if(subMotionLayers[lx].layers.length){subMotionLayers[lx].layers[0].moveToEnd(subMotionLayers[lx])}}}}";

if(app.activeDocument.suspendHistory){app.activeDocument.suspendHistory(myUndo,myAction)}else{eval(myAction)}
}