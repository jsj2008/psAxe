/*(afSelectAll)
	アニメフレームを全選択
 */
	var nas=app.nas;
//	"アニメフレームを全選択";
var myUndoStr=nas.localize(nas.uiMsg["animationFrameSelectAll"]);
var myExcute="";
//=============== コード
myExcute+="nas.axeAFC.selectFramesAll();";
//=================================　Execute width Undo
ErrStrs = {}; ErrStrs.USER_CANCELLED=localize("$$$/ScriptingSupport/Error/UserCancelled=User cancelled the operation"); try {
	if(activeDocument.suspendHistory){
		activeDocument.suspendHistory(myUndoStr,myExcute);
	}else{
		eval(myExcute)
	}
} catch(e){if (e.toString().indexOf(ErrStrs.USER_CANCELLED)!=-1) {;} else{alert(localize("$$$/ScriptingSupport/Error/CommandNotAvailable=The command is currently not available"));}}
