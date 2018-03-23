aBon = {};
aBon.TipController = {};
aBon.TipController.show = function (index) {
	if (exportRoot.index != index) {
		exportRoot.index = index;
		exportRoot.dispatchEvent(new createjs.Event("changeTip"));
	}
	exportRoot.dispatchEvent(new createjs.Event("showTip"));
}
aBon.TipController.hide = function () {
	exportRoot.dispatchEvent(new createjs.Event("hideTip"));
}