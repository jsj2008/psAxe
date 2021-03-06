/*
	html language resource for psAxe
	2015 06.10

//変更書式　["エレメントid","プロパティ","値"]
//===========================================
	["pM00","innerHTML","ファイル"],
psAxeパネル上では、localeはホストのロケールを取得
ローカライズは、このファイル上に載せること
*/


nas.LangPack=new nas.LanguagePack;

nas.LangPack.en=[
	["rtBtm","title","upward shift"],
	["rtTop","title","downward shift"],
	["swpLy","title","swap layers"],
	["FcsTp","title","focus top layer"],
	["lnDup","title","duplicale layer"],
	["lnDel","title","remove layer"],
	["lyADDc","title","add correction sheet"],
	["lyADD","title","add new layer"],
	["lySMT","title","convert smart object & transform"],
		["lySMT","innerHTML","smt-transform"],
	["lyFIX","title","rasterize smart object"],
		["lyFIX","innerHTML","FIX"],
	["lyRST","title","reset smart object"],
		["lyRST","innerHTML","reform"],
	["lyRVS","title","reverse layer order"],
		["lyRVS","innerHTML","reverse"],
	["lySRT","title","sort layers by name"],
		["lySRT","innerHTML","sort"],
	["lyTRP","title","transparency setting"],
		["lyTRP","innerHTML","[layer]"],
	["lodSp","title","focus to label specified"],
		["lodSp","innerHTML","[JUMP]"],
	["ons2","title","2 transmissive"],
	["ons3","title","3 transmissive"],
	["ons4","title","4 transmissive"],
	["onsR","title","opacity reset"],
	["PcTl","title","pencil"],
	["PbTl","title","brush"],
	["ErTl","title","eracer"],
	["marqueeRectTool","title","marqueeRect"],
	["marqueeEllipTool","title","marqueeEllipTool"],
	["lassoTool","title","lassoTool"],
	["magicWandTool","title","magicWandTool"],
	["quickSelectTool","title","quickSelectTool"],
	["moveTool","title","moveTool"],
	["rotateTool","title","rotateTool"],
	["bucketTool","title","bucketTool"],
	["GrTl","title","gradation"],

	["penTool","title","penTool"],
	["freeformPenTool","title","freeformPenTool"],
	["addKnotTool","title","addKnotTool"],
	["deleteKnotTool","title","deleteKnotTool"],
	["convertKnotTool","title","convertKnotTool"],
	["directSelectTool","title","directSelectTool"],
	["pathComponentSelectTool","title","pathComponentSelectTool"],
	["rulerTool","title","rulerTool"],
	["drawClearP","title","Draw a path and Delete"],
	["draw2ClearP","title","Draw a path and Delete"],
	["drawClearP","title","Draw a path with brush and Delete"],
	["draw2ClearP","title","Draw a path with brush and Delete"],
	["fillClearP","title","Fill apath and Delete"],
	["poster2","title","Binarization for each channel"],

	["convertAFT","title","convert animation mode"],
		["convertAFT","innerHTML","(frame<>timeline)"],

	["atFst","title","go to start frame"],
		["atFst","innerHTML","|＜"],
	["atPrv","title","go to previous frame"],
		["atPrv","innerHTML","＜"],
	["atGo","title","move playhead to specified frame"],
		["atGo","innerHTML","[ go ]"],
	["atNxt","title","go to next frame"],
		["atNxt","innerHTML","＞"],
	["atEnd","title","go to end frame"],
		["atEnd","innerHTML","＞|"],
	["goWAsrt","title","playhead move to workarea start"],
		["goWAsrt","innerHTML","｛←"],
	["setWAsrt","title","set workarea start to playhead"],
		["setWAsrt","innerHTML","｛"],
	["liftWA","title","lift workarea"],
		["liftWA","innerHTML","凸"],
	["extractWA","title","extract workarea"],
		["extractWA","innerHTML","凹"],
	["setWAend","title","set workarea end to playhead"],
		["setWAend","innerHTML","｝"],
	["goWAend","innerHTML","playhead move to workarea end"],
		["goWAend","innerHTML","→｝"],
	["moveIP","title","move timeline head to playhead"],
		["moveIP","innerHTML","→【"],
	["trimIP","title","trim timeline in point"],
		["trimIP","innerHTML","【"],
	["sliceTL","title","split timeline at playhead"],
		["sliceTL","innerHTML","split"],
	["trimOP","title","trim out point timeline"],
		["trimOP","innerHTML","】"],
	["moveOP","title","move timeline tail to playhead/"],
		["moveOP","innerHTML","】←"],
		["setKey","title","put keyframe for playhead"],
		["rmKey","title","remove playhead"],
		["activateKey","title","enable key track"],

	["swcFav","title","show all clips"],
	["addFav","title","set favorite clips"],
	["ons","title","enable onion skins"],
	["setOns","title","onion skin settings"],
	["vtNewLyr","title","add new layer"],
		["vtNewLyr","innerHTML","New"],
	["moveSpanDuration","title","new layer duration / head move span"],

	["afSAl","title","select all frames"],
		["afSAl","innerHTML","selectAll"],
	["afRst","title","clear selection"],
		["afRst","innerHTML","clear"],
	["afNWF","title","duplicate animation frames"],
		["afNWF","innerHTML","new"],
	["afCpy","title","copy animation frames"],
		["afCpy","innerHTML","copy"],
	["afDel","title","remove animation farmes"],
		["afDel","innerHTML","remove"],
	["afPst","title","paste animation frames"],
		["afPst","innerHTML","paste"],
	["afRVS","title","reverse animation order"],
		["afRVS","innerHTML","reverse"],
	["afLF2","title","animation frame from selected layers"],
		["afLF2","innerHTML","expand layers"],
	["afLF1","title","animation frames from layerset"],
		["afLF1","innerHTML","expand layerset"],
	["afLF0","title","animationframes from all artlayers"],
		["afLF0","innerHTML","expand all layers"],
	["afSd1","title","set time 1f"],
		["afSd1","innerHTML","1f"],
	["afSd2","title","set time 2f"],
		["afSd2","innerHTML","2f"],
	["afSd3","title","set time 3f"],
		["afSd3","innerHTML","3f"],
	["afSdS","title","delay time specified panel"],
		["afSdS","innerHTML","[SPEC]"],
	["currentDuration","title","specified integer or TC"],
	["afDec","title","decrement"],
	["afInc","title","Increment"],
	["afSet","title","duration"],
		["afSet","innerHTML","set!"],
	["setFps","title","frame rate specified panel"],
		["setFps","innerHTML","[Fps]"],
	["handleXPS","title","timing controls"],
		["handleXPS","innerHTML","XPS(exposure sheet)"],
	["applyXps","title","apply Timing form XPS data"],
		["applyXps","innerHTML","apply XPS"],
	["editXps","title","edit XPS data"],
		["editXps","innerHTML","edit XPS"],
	["ezXpsL","title","apply Timing form XPS data(detail)"],
		["ezXpsL","innerHTML","[ apply Xsheet (detail) ]"],
	["handleLMN","title","layer name controls"],
		["handleLMN","innerHTML","layer label editor"],
	["getLNM","title","get label from current layer"],
		["getLNM","innerHTML","⇒"],
	["applyLNM","title","set Label"],
		["applyLNM","innerHTML","Label"],
	["setLNM","title","set　layerName"],
		["setLNM","innerHTML","Name"],
	["applyL2L","title","set　Label to Layers"],
		["applyL2L","title","set　Label to Layers"],
	["applyL2sL","title","set　Label to selected layers"],
		["applyL2sL","title","set　Label to selected layers"],
	["addLNMP","title","layer name add +"],
	["delLNMP","title","remove +"],
	["incLNMN","title","label number ++"],
	["decLNMN","title","label number --"],
	["pacPS","title","layer name change util"],
		["pacPS","innerHTML","［PacPs］"],
	["ezFlip","title","layer name panel"],
		["ezFlip","innerHTML","[layer names]"],

	["ccRd","title","set label color red"],
	["ccOr","title","set label color orange"],
	["ccYl","title","set label color yellow"],
	["ccGr","title","set label color green"],
	["ccBl","title","set label color blue"],
	["ccVl","title","set label color violet"],
	["ccGy","title","set label color gray"],
	["ccX","title","set label color clear"],

	["handleLYR","title","Management menu"],
		["handleLYR","innerHTML","document/layer manager"],
	["newDoc","title","new document"],
		["newDoc","innerHTML","[ new doc.]"],
	["newXps","title","new Xsheet(picture)"],
		["newXps","innerHTML","[ new Xsheet ]"],
	["import","title","import layers from files in specified folder"],
		["import","innerHTML","[ import ]"],
	["export","title","export layers as file"],
		["export","innerHTML","[ export ]"],
	["iptRGST","title","place register (peg) picuture"],
		["iptRGST","innerHTML","put register"],
	["cpyRGST","title","place register each selected layers"],
		["cpyRGST","innerHTML","duplicate reg."],
	["addTXT","title","insert text to document"],
		["addTXT","innerHTML","[ add text ]"],
	["edtTXT","title","edit layer text source"],
		["edtTXT","innerHTML","[ edit text ]"],
	["iptFCHT","title","place fieldChart to document"],
		["iptFCHT","innerHTML","fieldChart"],
	["iptRCHT","title","place referenceChart t o document"],
		["iptRCHT","innerHTML","referenceChart"],
	["bindDoc","title","bundle into one document"],
		["bindDoc","innerHTML","bundle"],
	["divLyr","title","Classified by layer name"],
		["divLyr","innerHTML","grouping"],
	["bindLyr","title","make a group from selected layers"],
		["bindLyr","innerHTML","layerset"],
	["renameSeq","title","Give the serial number to the group members"],
		["renameSeq","innerHTML","numbering"],
	["handleTRC","title","paint util."],
		["handleTRC","innerHTML","trace/paint"],

	["nomalizeLine","title","normalize picture"],
		["nomalizeLine","innerHTML","normalize"],
	["linSPLT","title","drawing color separations"],
		["linSPLT","innerHTML","separations"],
	["PPP","title","make a layer for paint"],
		["PPP","innerHTML","paint layer"],
	["thinnig","title","thinning"],
		["thinnig","innerHTML","thinnig"],
	["borderFill","title","border fill"],
		["borderFill","innerHTML","border fill"],
	["smooth","title","smooth"],
		["smooth","innerHTML","［Smooth］"],
	["putColorChip","title","make color chip"],
		["putColorChip","innerHTML","[ color box ]"],
	["getColorInfo","title","get color info"],
		["getColorInfo","innerHTML","[ color info ]"],
	["AFtR","title","Clip foreground in red"],
	["AFtG","title","Clip foreground in green"],
	["AFtB","title","Clip foreground in blue"],
	["AFtK","title","Clip foreground in K"],
	["AFtC","title","Clip foreground in cyan"],
	["AFtP","title","Clip foreground in purple"],
	["AFtY","title","Clip foreground in yellow"],
	["AFtGY","title","Clip foreground in Yellowgreen"],
	["AFtAll","title","Clipout white"],
	["AFtFG","title","Clip foreground"],
	["handleDBG","title","debug and others"],
		["handleDBG","innerHTML","debug / script"],
	["aesConsole","title","Adobe Script Console"],
		["aesConsole","innerHTML","[ Adobe Script Console ]"],
	["nasCalk","title","Calculator"],
		["nasCalk","innerHTML","/Calculator/"],
		["reload","innerHTML","/reload/"],
	["jsConsole","title","javascript console"],
		["jsConsole","　innerHTML","/javascript console"]
];
nas.LangPack.ja=[
	["rtBtm","title","上シフト"],
	["rtTop","title","下シフト"],
	["swpLy","title","レイヤ入換"],
	["FcsTp","title","表示レイヤにフォーカス"],
	["lnDup","title","レイヤ複製"],
	["lnDel","title","レイヤ削除"],
	["lyADDc","title","修正レイヤ"],
	["lyADD","title","新規レイヤ"],
	["lySMT","title","スマート変形"],
		["lySMT","innerHTML","スマート変形"],
	["lyFIX","title","スマートレイヤをラスタライス"],
		["lyFIX","innerHTML","ＦＩＸ"],
	["lyRST","title","スマートレイヤをリセット"],
		["lyRST","innerHTML","復帰"],
	["lyRVS","title","レイヤ順反転"],
		["lyRVS","innerHTML","逆順"],
	["lySRT","title","レイヤソート"],
		["lySRT","innerHTML","並替"],
	["lyTRP","title","透過設定"],
		["lyTRP","innerHTML","[ 透過 ]"],
	["lodSp","title","ラベル指定して移動"],
		["lodSp","title","[JUMP]"],
	["ons2","title","2枚透過"],
	["ons3","title","3枚透過"],
	["ons4","title","4枚透過"],
	["onsR","title","不透明度リセット"],
	["PcTl","title","pencil"],
	["PbTl","title","brush"],
	["ErTl","title","eracer"],
	["marqueeRectTool","title","marqueeRect"],
	["marqueeEllipTool","title","marqueeEllipTool"],
	["lassoTool","title","lassoTool"],
	["magicWandTool","title","magicWandTool"],
	["quickSelectTool","title","quickSelectTool"],
	["moveTool","title","moveTool"],
	["rotateTool","title","rotateTool"],
	["bucketTool","title","bucketTool"],
	["GrTl","title","gradation"],

	["penTool","title","penTool"],
	["freeformPenTool","title","freeformPenTool"],
	["addKnotTool","title","addKnotTool"],
	["deleteKnotTool","title","deleteKnotTool"],
	["convertKnotTool","title","convertKnotTool"],
	["directSelectTool","title","directSelectTool"],
	["pathComponentSelectTool","title","pathComponentSelectTool"],
	["rulerTool","title","rulerTool"],
	["drawClearP","title","Draw a path and Delete"],
	["draw2ClearP","title","Draw a path and Delete"],
	["drawClearP","title","Draw a path with brush and Delete"],
	["draw2ClearP","title","Draw a path with brush and Delete"],
	["fillClearP","title","Fill apath and Delete"],
	["poster2","title","Binarization for each channel"],

	["convertAFT","title","アニメーションモード変換"],
		["convertAFT","innerHTML","(フレーム<>タイムライン)"],

	["atFst","title","最初のフレームへ"],
		["atFst","innerHTML","|＜"],
	["atPrv","title","前のフレームへ"],
		["atPrv","innerHTML","＜"],
	["atGo","title","指定フレームへ移動"],
		["atGo","innerHTML","[ go ]"],
	["atNxt","title","次のフレームへ"],
		["atNxt","innerHTML","＞"],
	["atEnd","title","最後のフレームへ"],
		["atEnd","innerHTML","＞|"],
	["goWAsrt","title","playhead move to workarea start"],
		["goWAsrt","innerHTML","｛←"],
	["setWAsrt","title","set workarea start to playhead"],
		["setWAsrt","innerHTML","｛"],
	["liftWA","title","lift workarea"],
		["liftWA","innerHTML","凸"],
	["extractWA","title","extract workarea"],
		["extractWA","innerHTML","凹"],
	["extractWA","title","extract workarea"],
		["extractWA","innerHTML","凹"],
	["setWAend","title","set workarea end to playhead"],
		["setWAend","innerHTML","｝"],
	["goWAend","innerHTML","playhead move to workarea end"],
		["goWAend","innerHTML","→｝"],
	["moveIP","title","move timeline head to playhead"],
		["moveIP","innerHTML","→【"],
	["trimIP","title","trim timeline in point"],
		["trimIP","innerHTML","【"],
	["sliceTL","title","split timeline at playhead"],
		["sliceTL","innerHTML","split"],
	["trimOP","title","trim out point timeline"],
		["trimOP","innerHTML","】"],
	["moveOP","title","move timeline tail to playhead/"],
		["moveOP","innerHTML","】←"],
		["setKey","title","キーフレーム設置"],
		["rmKey","title","キーフレーム削除"],
		["activateKey","title","キーフレームを有効に"],

	["swcFav","title","お気に入りを解除"],
	["addFav","title","お気に入り設定"],
	["ons","title","オニオンスキン切り替え"],
	["setOns","title","オニオンスキン設定"],
	["vtNewLyr","title","新規レイヤ作成"],
		["vtNewLyr","innerHTML","New"],
	["moveSpanDuration","title","新規レイヤの長さ/ヘッド移動スパン"],

	["afSAl","title","全選択"],
		["afSAl","innerHTML","全選択"],
	["afRst","title","クリア"],
		["afRst","innerHTML","クリア"],
	["afNWF","title","新規"],
		["afNWF","innerHTML","新規"],
	["afCpy","title","コピー"],
		["afCpy","innerHTML","コピー"],
	["afDel","title","削除"],
		["afDel","innerHTML","削除"],
	["afPst","title","貼付"],
		["afPst","innerHTML","貼付"],
	["afRVS","title","反転"],
		["afRVS","innerHTML","反転"],
	["afLF2","title","選択レイヤをフレームへ"],
		["afLF2","innerHTML","レイヤ展開"],
	["afLF1","title","レイヤセットからフレームへ"],
		["afLF1","innerHTML","レイヤセット展開"],
	["afLF0","title","全レイヤをフレームへ"],
		["afLF0","innerHTML","全レイヤ展開"],
	["afSd1","title",""],
		["afSd1","innerHTML","１k"],
	["afSd2","title",""],
		["afSd2","innerHTML","２k"],
	["afSd3","title",""],
		["afSd3","innerHTML","３k"],
	["afSdS","title","遅延指定パネル"],
		["afSdS","innerHTML","[指定]"],
	["currentDuration","title","整数またはTCで指定"],
	["afDec","title","減値"],
	["afInc","title","増値"],
	["afSet","title","継続時間設定"],
		["afSet","innerHTML","set!"],
	["setFps","title","フレームレート指定パネル"],
		["setFps","innerHTML","[Fps]"],
	["handleXPS","title","タイムシート適用"],
		["handleXPS","innerHTML","XPSタイムシート"],
	["applyXps","title",""],
		["applyXps","innerHTML","XPS適用"],
	["editXps","title",""],
		["editXps","innerHTML","XPS編集"],
	["ezXpsL","title",""],
		["ezXpsL","innerHTML","[ タイムシート適用（詳細）]"],
	["handleLMN","title","レイヤラベル編集"],
		["handleLMN","innerHTML","レイヤラベルエディタ"],
	["getLNM","title","get label from current layer"],
		["getLNM","innerHTML","⇒"],
	["applyLNM","title","set Label"],
		["applyLNM","innerHTML","Label"],
	["setLNM","title","set　layerName"],
		["setLNM","innerHTML","Name"],
	["applyL2L","title","set　Label to Layers"],
		["applyL2L","title","set　Label to Layers"],
	["applyL2sL","title","set　Label to selected layers"],
		["applyL2sL","title","set　Label to selected layers"],
	["addLNMP","title","layer name add +"],
	["delLNMP","title","remove +"],
	["incLNMN","title","label number ++"],
	["decLNMN","title","label number --"],
	["pacPS","title","レイヤ名一括変更"],
		["pacPS","innerHTML","［PacPs］"],
	["ezFlip","title","レイヤ名変更パネル"],
		["ezFlip","innerHTML","[レイヤ名変更]"],

	["ccRd","title","set label color red"],
	["ccOr","title","set label color orange"],
	["ccYl","title","set label color yellow"],
	["ccGr","title","set label color green"],
	["ccBl","title","set label color blue"],
	["ccVl","title","set label color violet"],
	["ccGy","title","set label color gray"],
	["ccX","title","set label color clear"],

	["handleLYR","title","管理メニュー"],
		["handleLYR","innerHTML","ドキュメント/レイヤ管理"],
	["newDoc","title","新規ドキュメント"],
		["newDoc","innerHTML","[新規書類]"],
	["newXps","title","新規シート(画像)"],
		["newXps","innerHTML","[新規シート]"],
	["import","title","フォルダ指定でファイルをレイヤとして読み込む"],
		["import","innerHTML","[ 読込 ]"],
	["export","title","レイヤをファイルに書き出し"],
		["export","innerHTML","[ 書出 ]"],
	["iptRGST","title","レジスタマークを読み込み"],
		["iptRGST","innerHTML","レジスタ読込"],
	["cpyRGST","title","選択レイヤにレジスタマークを複製"],
		["cpyRGST","innerHTML","レジスタ複写"],
	["addTXT","title","カット番号を挿入"],
		["addTXT","innerHTML","[テキスト追加]"],
	["edtTXT","title","テキストレイヤのソースを編集"],
		["edtTXT","innerHTML","[テキスト編集]"],
	["iptFCHT","title","フィールドチャート読込"],
		["iptFCHT","innerHTML","fieldChart"],
	["iptRCHT","title","リファレンスチャート読込"],
		["iptRCHT","innerHTML","referenceChart"],
	["bindDoc","title","ドキュメントをひとつにまとめる"],
		["bindDoc","innerHTML","セル収集"],
	["divLyr","title","レイヤ名で振り分け"],
		["divLyr","innerHTML","振分"],
	["bindLyr","title","選択レイヤをグループに"],
		["bindLyr","innerHTML","レイヤセット化"],
	["renameSeq","title","セット内を連番"],
		["renameSeq","innerHTML","連番"],
	["handleTRC","title","彩色補助ツール"],
		["handleTRC","innerHTML","トレース/ペイント"],

	["nomalizeLine","title","normalize"],
		["nomalizeLine","innerHTML","線画前処理"],
	["linSPLT","title",""],
		["linSPLT","innerHTML","トレース分離"],
	["PPP","title",""],
		["PPP","innerHTML","彩色レイヤ作成"],
	["thinnig","title",""],
		["thinnig","innerHTML","細線化"],
	["borderFill","title","border fill"],
		["borderFill","innerHTML","境界線消去"],
	["smooth","title","smooth"],
		["smooth","innerHTML","［Smooth］"],
	["putColorChip","title","make color chip"],
		["putColorChip","innerHTML","[色指定BOX]"],
	["getColorInfo","title",""],
		["getColorInfo","innerHTML","[カラー情報]"],
	["AFtR","title","前景色を赤にクリップ"],
	["AFtG","title","前景色を緑にクリップ"],
	["AFtB","title","前景色を青にクリップ"],
	["AFtK","title","無彩色成分をクリップ"],
	["AFtC","title","前景色をシアンにクリップ"],
	["AFtP","title","前景色をパープルにクリップ"],
	["AFtY","title","前景色を黄色にクリップ"],
	["AFtGY","title","前景色を黄緑にクリップ"],
	["AFtAll","title","白成分クリップアウト"],
	["AFtFG","title","前景色クリップ"],
	["handleDBG","title","デバッグほか"],
		["handleDBG","innerHTML","デバッグ/スクリプト"],
	["aesConsole","title","Adobe Script Console"],
		["aesConsole","innerHTML","[ Adobe Script Console ]"],
	["nasCalk","title","電卓"],
		["nasCalk","innerHTML","/電卓/"],
		["reload","innerHTML","/reload/"],
	["jsConsole","title","エクスプレッションの評価"],
		["jsConsole","innerHTML","/Javascript Console"]
];
/*
言語リソース管理／編集ユーティリティーが必要と思うなりナリ
抽出とパースと整形のフィルタもいるなり
2015 06 10
*/
