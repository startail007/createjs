createjs.Function = createjs.Function || {};
//拖曳類方法
(function () {
    function CreateGhost(lib, attributes, f) {
        var mGhost = new lib;
        if (f != undefined) {
            //mGhost.on("tick", function () {
            mGhost.gotoAndStop(f)
                //}, this, true);
        }
        for (var temp in attributes) {
            mGhost[temp] = attributes[temp];
        }
        return mGhost;
    }
    createjs.Function.CreateGhost = CreateGhost;

    function DragFunction(mc, Fun) {
        mc.startDrag(null, Fun);
        var listener = stage.on("stagemouseup", mouseup, this);

        function mouseup(e) {
            stage.off("stagemouseup", listener);
            mc.stopDrag();
            if (Fun) {
                Fun("end");
            }
        }
    }
    createjs.Function.DragFunction = DragFunction;

    function MCTween(mc, attributes, duration, completeFun) {
        return createjs.Tween.get(mc).to(attributes, duration, createjs.Ease.none).call(completeFun.bind(this));
    }
    createjs.Function.MCTween = MCTween;

    function MCDrag(mc, obj) {
        var temp = {};
        createjs.objectAssign(temp, obj);
        temp.touch = mc;
        var listener = temp.touch.on("mousedown", mousedown0, null, false, temp);
        temp.touch.onRemoveStage(function (data) {
            temp.touch.visible = true;
            temp.mc.visible = true;
            if (temp.tip) {
                temp.tip.visible = true;
            }
            temp.touch.off("mousedown", listener);
            if (temp.removeStageFun) {
                temp.removeStageFun();
            }
        }, null, true);
    }
    createjs.Function.MCDrag = MCDrag;

    function mousedown0(e, data) {
        var touch = data.touch;
        var mc = data.mc;
        var tip = data.tip;
        var layer = data.layer;
        var hits = data.hits;
        touch.visible = false;
        mc.visible = false;
        if (tip) {
            tip.visible = false;
        }

        var temp0 = mc.localToLocal(0, 0, layer);
        var mGhost = CreateGhost(data.ghost, {
            x: temp0.x,
            y: temp0.y
        })
        layer.addChild(mGhost);

        DragFunction.call(this, mGhost, function (state) {
            if (state == "end") {
                var enabledHitBool = data.enabledHitBool != undefined ? data.enabledHitBool() : true;
                var index = -1;
                if (enabledHitBool) {
                    for (var i = 0; i < hits.length; i++) {
                        var tempPoint = hits[i].touch.globalToLocal(stage.mouseX, stage.mouseY);
                        if (hits[i].touch.hitTest(tempPoint.x, tempPoint.y)) {
                            index = i;
                            break;
                        }
                    }
                }
                var bool = (index != -1);
                bool = enabledHitBool && (data.hitBool != undefined ? data.hitBool(bool) : bool);
                if (bool) {
                    if (index != -1) {
                        var mPoint01 = hits[index].mc.localToLocal(0, 0, layer);
                        MCTween.call(e.currentTarget, mGhost, {
                            x: mPoint01.x,
                            y: mPoint01.y
                        }, 200, function () {
                            layer.removeChild(mGhost);
                            if (data.completeFun) {
                                data.completeFun(bool, mGhost, index);
                            }
                        })
                    }
                } else {
                    MCTween.call(e.currentTarget, mGhost, {
                        x: mGhost.DragOrigin.x,
                        y: mGhost.DragOrigin.y
                    }, 200, function () {
                        touch.visible = true;
                        mc.visible = true;
                        if (tip) {
                            tip.visible = true;
                        }
                        layer.removeChild(mGhost);
                        if (data.completeFun) {
                            data.completeFun(bool, mGhost, index);
                        }
                    })
                }
                if (data.mouseupFun) {
                    data.mouseupFun(bool, mGhost, index);
                }
            }
        });
        if (data.mousedownFun) {
            data.mousedownFun(mGhost);
        }
    }
}());

//按下類方法
(function () {
    function MCClick(mc, fun, data, removeStageFun) {
        var listener = mc.on("click", fun, null, false, data);
        mc.onRemoveStage(function () {
            mc.off("click", listener);
            if (removeStageFun) {
                removeStageFun(data);
            }
        }, null, true);
    }
    createjs.Function.MCClick = MCClick;
}());

//按鈕方法
(function () {
    var buttonHoverFun = function (pTouch01, pMC01, pHoverFun, data, pRemoveStageFun) {
        pTouch01.OnButtonMode();
        var Listener01 = pTouch01.on("buttonState", function (e) {
            if (e.active) {
                pMC01.gotoAndStop(3)
            } else {
                if (e.state == "basic") {
                    pMC01.gotoAndStop(0)
                } else if (e.state == "over") {
                    pMC01.gotoAndStop(1)
                } else if (e.state == "down") {
                    pMC01.gotoAndStop(2)
                }
            }
            if (pHoverFun) {
                pHoverFun(e.active, e.state, data);
            }
        }, this);

        pTouch01.onRemoveStage(function () {
            pTouch01.ButtonActive = false;
            pTouch01.OffButtonMode();
            pTouch01.off("buttonState", Listener01);
            if (pRemoveStageFun) {
                pRemoveStageFun(data);
            }
        }, this, true)
    }
    createjs.Function.buttonHoverFun = buttonHoverFun;
}());

//按鈕單選方法
(function () {
    var radioButtonFun = function (pBtn_touchs01, pSelectFun, pRemoveStageFun) {
        var Listeners01 = [];
        var radio01 = new createjs.radio();
        radio01.fun = function (old_index, index) {
            if (old_index != index) {
                if (old_index >= 0) {
                    pBtn_touchs01[old_index].visible = true;
                }
                if (index >= 0) {
                    pBtn_touchs01[index].visible = false;
                }
                if (pSelectFun) {
                    pSelectFun(old_index, index);
                }
            }
        }.bind(this);
        for (var i = 0; i < pBtn_touchs01.length; i++) {
            createjs.Function.MCClick(pBtn_touchs01[i], function (e, data) {
                radio01.select(data.index);
            }, {
                index: i
            }, function (data) {
                var index = data.index;
                pBtn_touchs01[index].visible = true;
                if (pRemoveStageFun) {
                    pRemoveStageFun(index);
                }
            });
        }
        return radio01;
    }
    var radioButtonFunEX = function (pBtn_touchs01, pObjs01, pSelectFun, pRemoveStageFun) {
        var radio01 = radioButtonFun(pBtn_touchs01, function (old_index, index) {
            if (pObjs01.tip) {
                if (old_index >= 0) {
                    pObjs01.tip[old_index].visible = true;
                }
                if (index >= 0) {
                    pObjs01.tip[index].visible = false;
                }
            }
            if (pObjs01.mc) {
                if (old_index >= 0) {
                    pBtn_touchs01[old_index].ButtonActive = false;
                }
                if (index >= 0) {
                    pBtn_touchs01[index].ButtonActive = true;
                }
            }
            if (pSelectFun) {
                pSelectFun(old_index, index);
            }
        }.bind(this), function (index) {
            if (pObjs01.tip) {
                pObjs01.tip[index].visible = true;
            }
            if (pRemoveStageFun) {
                pRemoveStageFun(index);
            }
        }.bind(this));

        var Listeners02 = [];
        if (pObjs01.mc) {
            for (var i = 0; i < pBtn_touchs01.length; i++) {
                createjs.Function.buttonHoverFun(pBtn_touchs01[i], pObjs01.mc[i]);
            }
        }
        return radio01;
    }
    createjs.Function.radioButtonFun = radioButtonFun;
    createjs.Function.radioButtonFunEX = radioButtonFunEX;
}());

//更新日期20160113