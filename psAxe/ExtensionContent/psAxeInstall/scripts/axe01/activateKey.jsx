/*
	キーフレームを有効化する
	プロパティのアニメーショントラックはスクリプトからキーを作成すると
	有効になっていない状態でキーが作成されるのでそれを有効化する
*/
nas=app.nas;nas.axeVTC.switchKeyTrack("enable");