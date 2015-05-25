/*
		Photoshop　レイヤ名変更パネル
	アクティブレイヤのレイヤ名を変更するよ
	隣のレイヤにパネル内で移動できる
	ぱらぱら機能付(名称変更を主眼に調整)
*/
//Photoshop用ライブラリ読み込み
	var nas=app.nas;
	var bootFlag=false;
	var nasLibFolderPath =Folder.nas.fullName+ "/lib/";
//+++++++++++++++++++++++++++++++++ここまで共用
/*------	nas一般メソッド新しいやつ暫定試験	------*/
/*	nas.numInc([string 旧番号],step);
	戻り値:新番号
カット版番号を文字列で与えて最初に現れる数値部分を1増加させて後置部分を切り捨てて戻す。
数値を含まない文字列を与えるとそれを前置部分として"001"を付けて戻す。
引数無しの場合は開始番号の"001"を戻す。
*/
nas.numInc =function(oldNumber,myStep){

	var currentValue="001";
	if(! myStep){myStep=1;}else{myStep=myStep*1;};
	if(oldNumber){currentValue=oldNumber};

	if (currentValue.match(/^([^0-9]*)([0-9]+)(.*)/)){
		preFix=RegExp.$1;numValue=RegExp.$2;postFix=RegExp.$3;
	}else{
		preFix=currentValue;numValue="001";postFix="";
	}
//桁あわせの文字数取得
	var myOrder=numValue.length;
//ポストフィックスがある場合は、無条件で廃棄
//プレフィックスは無条件で保持
	return preFix+nas.Zf(numValue*1+myStep,myOrder);
}

/*
	フリップ機能はローテーターを主機能で置換
*/


var myEasyFlip=new Object();
//properties
	myEasyFlip.targetLayers=activeDocument.activeLayer.parent.layers;
	myEasyFlip.wait=3*1000/24;
	myEasyFlip.bgFix=false;
	myEasyFlip.onLoop=true;
	myEasyFlip.playStatus="stop";
	myEasyFlip.previewLayer=activeDocument.activeLayer;

	myEasyFlip.playList=new Array();
	myEasyFlip.backupView=new Array();

	myEasyFlip.tableInit=function(){
		//テーブルの初期化
/*
	ターゲットトレーラーの参照配列を作る.
	作成時点の表示順をorderIndexとして記録しておく
*/
		for(var ix=0;ix<this.targetLayers.length;ix ++){
			this.targetLayers[ix].orderIndex=ix;
		}
	}

	myEasyFlip.tableInit();

	myEasyFlip.orderRestore=function(){
//以下復帰ルーチン
		for(var ix=0;ix<this.targetLayers.length;ix ++){
			if(this.targetLayers[0].orderIndex>ix){
				this.targetLayers[0].moveToEnd(app.activeDocument.activeLayer.parent);
			}
		}
	}

　
	myEasyFlip.flip=function(WD){
		var myOffset=(WD=="BWD")?-1:1;
		if(myOffset==1){
this.targetLayers[this.targetLayers.length-1].move(this.targetLayers[0],ElementPlacement.PLACEBEFORE);
		}else{
this.targetLayers[0].moveToEnd(app.activeDocument.activeLayer.parent);
		}
	}

//初期化


if(false){
		var startCount=new Date().getTime();
		var breakRimit=startCount+10000;//10秒制限
		var nextCount=startCount+1000;//1秒試験
//alert("start"+startCount +" / "+nextCount)
		while(true){
			currentCount=new Date().getTime()
			if(currentCount<nextCount){
				continue;
			}else{
				if(nextCount<breakRimit){
			nextCount=nextCount+1000;
			myEasyFlip.flip("FWD");
				}else{
break;}
			}
		}
		nextCount;
	}

//	GUI初期化
w=nas.GUI.newWindow("dialog","レイヤリネーム",5,5);
w.onClose=function(){myEasyFlip.orderRestore();};
w.onOpen=true;

w.nameView=nas.GUI.addButton(w,myEasyFlip.previewLayer.name,1,0,4,1);
w.bt0=nas.GUI.addButton(w,"[ / ]",0,1,1,1);
w.bt1=nas.GUI.addButton(w,"[++]",0,2,1,1);
w.bt2=nas.GUI.addButton(w,"[--]",1,2,1,1);
w.namePad=nas.GUI.addEditText(w,myEasyFlip.previewLayer.name,1,1,4,1);

w.btL0=nas.GUI.addSelectButton(w,["BG","BOOK","LO","Frame","A","B","C","D","E","F","G","H","I","J","K","L"],3,0,3,1.5,1);
w.btL1=nas.GUI.addButton(w,"▲",1.5,3,1,1);
//w.btL2=nas.GUI.addButton(w,">>",2  ,3,0.7,1);


w.bt3=nas.GUI.addButton(w,"△goFWD△",2.5,2,2.5,1);
w.bt4=nas.GUI.addButton(w,"▼goBWD▼",2.5,3,2.5,1);
w.bt5=nas.GUI.addButton(w,"close",2.5,4,2.5,1);
w.bt6=nas.GUI.addButton(w,"label X",0,4,2.5,1);


w.nameView.onClick=function(){this.parent.namePad.text+=this.text;}

w.bt0.onClick=function(){this.parent.namePad.text+="/";}

w.bt1.onClick=function(){
	if(this.parent.namePad.text!=""){
		var myNameSet=this.parent.namePad.text.split("/");
		myNameSet[myNameSet.length-1]=nas.numInc(myNameSet[myNameSet.length-1]);
		this.parent.namePad.text=myNameSet.join("/");
	}
};
w.bt2.onClick=function(){
	if(this.parent.namePad.text!=""){
		var myNameSet=this.parent.namePad.text.split("/");
		myNameSet[myNameSet.length-1]=nas.numInc(myNameSet[myNameSet.length-1],-1);
		this.parent.namePad.text=myNameSet.join("/");
	}
};
w.btL1.onClick=function(){
	var myLabel=this.parent.btL0.value;
	if(this.parent.namePad.text!=""){
		var myNameSet=this.parent.namePad.text.split("/");
		myNameSet[myNameSet.length-1]=myNameSet[myNameSet.length-1].replace(/^([^0-9]*)/,myLabel);
		this.parent.namePad.text=myNameSet.join("/");
	}else{
		this.parent.namePad.text=myLabel
	}
}
w.btL0.onChange=w.btL1.onClick;
//w.btL2.onClick=function(){myShift(-1);}


//w.namePad.onChange=function(){myEasyFlip.flip("FWD");w.onOpen=false;this.active=true;};
w.bt3.onClick=function(){myEasyFlip.flip("FWD");w.onOpen=false;this.parent.namePad.active=true;};
w.bt4.onClick=function(){myEasyFlip.flip("BWD");w.onOpen=false;this.parent.namePad.active=true;};
w.bt5.onClick=function(){
//	myEasyFlip.viewRestore();
	this.parent.onOpen=false;
	this.parent.close();
};

w.bt6.onClick=function(){
//　対象トレーラのラベルを自動更新
	var myLabel=myEasyFlip.targetLayers[0].parent.name;
	var startNumber=1;
	var currentName=[myLabel,nas.Zf(startNumber,3)].join("-");
	for(var idx=myEasyFlip.playList.length-1;idx>=0;idx--){
		myEasyFlip.targetLayers[myEasyFlip.playList[idx]].name=currentName;
		currentName=nas.numInc(currentName);
	}
}
//============================================================== 
w.show();

//w.watch("onOpen",function(){alert(w.onOpen);w.unwatch("onOpen");});

//whle(true){}
	}else{alert("なんだかパタパタするものが無いみたい");}