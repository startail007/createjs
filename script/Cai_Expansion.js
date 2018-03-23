//點附加
(function () {
    var obj = {
        rotate: function (pValue) {
            var cos0 = Math.cos(pValue);
            var sin0 = Math.sin(pValue);
            return new createjs.Point(this.x * cos0 - this.y * sin0, this.y * cos0 + this.x * sin0);
        },
        getVector: function (pP) {
            return new createjs.vector(pP.x - this.x, pP.y - this.y);
        },        
        interpolationV: function (pV, t) {
            var v0 = pV.scale(t);
            return new createjs.Point(this.x + v0.x, this.y + v0.y);
        },
        interpolation: function (pP, t) {
            var v = this.getVector(pP);
            return this.interpolationV(v, t);
        }
    };
    createjs.objectAssign(createjs.Point.prototype, obj);
}());

//顯示物件附加
(function () {
    var obj = {
        getPoint: function () {
            return new createjs.Point(this.x, this.y);
        }
    };
    createjs.objectAssign(createjs.DisplayObject.prototype, obj);
}());

//拖曳
(function () {
    var Drag = {
        DragBool: false,
        DragOrigin: new createjs.Point(),
        startDrag: function (rangeDrag, fun) {
            this.rangeDrag = rangeDrag || null;
            if (!this.DragBool) {
                this.DragBool = true;
                this.DragOrigin.x = this.x;
                this.DragOrigin.y = this.y;
                var Offset = this.globalToLocal(stage.mouseX, stage.mouseY);
                if (this.rotation != 0) {
                    Offset = Offset.rotate(this.rotation * createjs.Angle.PI180);
                }
                this._Drag_listener = stage.on("stagemousemove", mousemove, this);
                if (fun) {
                    fun("start");
                }

                function mousemove(e) {
                    var tempPoint = this.parent.globalToLocal(e.stageX, e.stageY);
                    if (this.rangeDrag == null) {
                        this.x = tempPoint.x - Offset.x;
                        this.y = tempPoint.y - Offset.y;
                    } else {
                        this.x = createjs.numberCrop(tempPoint.x - Offset.x, this.rangeDrag.x, this.rangeDrag.x + this.rangeDrag.width);
                        this.y = createjs.numberCrop(tempPoint.y - Offset.y, this.rangeDrag.y, this.rangeDrag.y + this.rangeDrag.height);
                    }
                    if (fun) {
                        fun("update");
                    }
                }
            }
        },
        stopDrag: function () {
            if (this.DragBool) {
                this.DragBool = false;
                stage.off("stagemousemove", this._Drag_listener);
                delete this._Drag_listener;
            }
        },
        rangeDrag: null
    };
    createjs.objectAssign(createjs.DisplayObject.prototype, Drag);
}());
//按鈕模式
/*
//----V1----
(function () {
	var ButtonMode = {
		_rollover_listener: null,
		_rollout_listener: null,
		_mousedown_listener: null,
		_stagemouseup_listener: null,
		_ButtonActive: false,
		_mousedownBool: false,
		_rolloverBool: false,
		ButtonActive(value) {
			if (value == undefined) {
				return this._ButtonActive
			}
			this._ButtonActive = value;
			var buttonStateEvent = new createjs.Event("buttonState");
			buttonStateEvent.active = this._ButtonActive;
			if (this._mousedownBool) {
				buttonStateEvent.state = "down";
			} else {
				if (this._rolloverBool) {
					buttonStateEvent.state = "over";
				} else {
					buttonStateEvent.state = "basic";
				}
			}
			this.dispatchEvent(buttonStateEvent);
		},
		OnButtonMode: function () {
			this._rollover_listener = this.on("rollover", rollover, this);
			this._rollout_listener = this.on("rollout", rollout, this);
			this._mousedown_listener = this.on("mousedown", mousedown, this);
			this._stagemouseup_listener = stage.on("stagemouseup", mouseup, this);

			setTimeout(function () {
				this.ButtonActive(this._ButtonActive);
			}.bind(this), 0);
			function rollover(e) {
				this._rolloverBool = true;
				if (!this._mousedownBool) {
					this.ButtonActive(this._ButtonActive);
				}
			}
			function rollout(e) {
				this._rolloverBool = false;
				if (!this._mousedownBool) {
					this.ButtonActive(this._ButtonActive);
				}
			}
			function mousedown(e) {
				if (!this._mousedownBool) {
					this._mousedownBool = true;
					this.ButtonActive(this._ButtonActive);
				}
			}
			function mouseup(e) {
				if (this._mousedownBool) {
					this._mousedownBool = false;
					this.ButtonActive(this._ButtonActive);
				}
			}
		},
		OffButtonMode: function () {
			this.off("rollover", this._rollover_listener);
			this.off("rollout", this._rollout_listener);
			this.off("mousedown", this._mousedown_listener);
			stage.off("stagemouseup", this._stagemouseup_listener);
		}
	}
	createjs.DisplayObject.prototype = Object.assign(createjs.DisplayObject.prototype, ButtonMode)
}());*/
(function () {
    var ButtonMode = {
        _ButtonActive: false,
        ButtonModeBool: false,
        OnButtonMode: function () {
            if (!this.ButtonModeBool) {
                this.ButtonModeBool = true;
                this._mousedownBool = false;
                this._rolloverBool = false;
                this._rollover_listener = this.on("rollover", rollover, this);
                this._rollout_listener = this.on("rollout", rollout, this);
                this._mousedown_listener = this.on("mousedown", mousedown, this);
                this._stagemouseup_listener = stage.on("stagemouseup", mouseup, this);
                this.on("tick", init, this, true);

                function init(e) {
                    this.ButtonActive = this._ButtonActive;
                }
            }

            function rollover(e) {
                this._rolloverBool = true;
                if (!this._mousedownBool) {
                    this.ButtonActive = this._ButtonActive;
                }
            }

            function rollout(e) {
                this._rolloverBool = false;
                if (!this._mousedownBool) {
                    this.ButtonActive = this._ButtonActive;
                }
            }

            function mousedown(e) {
                if (!this._mousedownBool) {
                    this._mousedownBool = true;
                    this.ButtonActive = this._ButtonActive;
                }
            }

            function mouseup(e) {
                if (this._mousedownBool) {
                    this._mousedownBool = false;
                    this.ButtonActive = this._ButtonActive;
                }
            }
        },
        OffButtonMode: function () {
            if (this.ButtonModeBool) {
                this.ButtonModeBool = false;
                this.off("rollover", this._rollover_listener);
                this.off("rollout", this._rollout_listener);
                this.off("mousedown", this._mousedown_listener);
                stage.off("stagemouseup", this._stagemouseup_listener);
                delete this._mousedown_listener;
                delete this._rollout_listener;
                delete this._mousedown_listener;
                delete this._stagemouseup_listener;
                delete this._mousedownBool;
                delete this._rolloverBool;
            }
        }
    }
    createjs.objectAssign(createjs.DisplayObject.prototype, ButtonMode);
    Object.defineProperty(createjs.DisplayObject.prototype, 'ButtonActive', {
        get: function () {
            return this._ButtonActive;
        },
        set: function (value) {
            this._ButtonActive = value;
            var buttonStateEvent = new createjs.Event("buttonState");
            buttonStateEvent.active = this._ButtonActive;
            if (this._mousedownBool) {
                buttonStateEvent.state = "down";
            } else {
                if (this._rolloverBool) {
                    buttonStateEvent.state = "over";
                } else {
                    buttonStateEvent.state = "basic";
                }
            }
            this.dispatchEvent(buttonStateEvent);
        }
    });
}());
//判斷是否存在於場景上
(function () {
    var hasStage = {
        hasStage: function () {
            var temp = this;
            while (temp) {
                temp = temp.parent;
                if (temp == stage) {
                    return true;
                }
            }
            return false
        }
    }
    createjs.objectAssign(createjs.DisplayObject.prototype, hasStage);
}());
//判斷是否存在於父層上
(function () {
    var hasParent = {
        hasParent: function () {
            var temp = this.parent;
            if (temp) {
                return true;
            }
            return false
        }
    }
    createjs.objectAssign(createjs.DisplayObject.prototype, hasParent);
}());
//偵測是否存在於父層
//----V1----
/*
(function () {
    var removeParent = {
        onRemoveParent: function (listener, scope, once, data, useCapture) {
            once = once != undefined ? once : false;
            var listener01;
            var remove_listener = this.on("removed", removed, this);

            function removed(e) {
                setTimeout(function () {
                    if (!this.hasStage()) {
                        console.log("移除");
                        var removedEvent = new createjs.Event("removedStage");
                        this.dispatchEvent(removedEvent);
                        if (once == true) {
                            this.offRemoveParent(listener01);
                        }
                    }
                }.bind(this), 0);
            }
            var removeParent_listener = this.on("removedStage", listener, scope, false, data, useCapture);
            listener01 = {
                removeParent: removeParent_listener,
                remove: remove_listener
            }
            return listener01;
        },
        offRemoveParent: function (listener, useCapture) {
            this.off("removed", listener.remove);
            this.off("removedStage", listener.removeParent, useCapture);
        }
    }
    createjs.objectAssign(createjs.DisplayObject.prototype, removeParent);
}());
*/
(function () {
    var removeParent = {
        onRemoveParent: function (listener, scope, once, data, useCapture) {
            once = once != undefined ? once : false;
            var bool = this.hasStage();
            var listener01 = stage.on("tick", function (e) {
                var hasBool = this.hasParent();
                if (bool != hasBool) {
                    if (!hasBool) {
                        console.log("移除");
                        listener.call(scope, data);
                        if (once) {
                            e.remove();
                        }
                    }
                    bool = hasBool;
                }
            }, this, false, useCapture);
            return listener01;
        },
        offRemoveParent: function (listener, useCapture) {
            stage.off("tick", listener, useCapture);
        }
    }
    createjs.objectAssign(createjs.DisplayObject.prototype, removeParent);
}());
//偵測是否存在於場景
//----V1----
/*
(function () {
    var removeStage = {
        onRemoveStage: function (listener, scope, once, data, useCapture) {
            once = once != undefined ? once : false;
            var listeners01;

            function removed(e) {
                listener.call(scope, data);
                if (once == true) {
                    this.offRemoveStage(listeners01)
                }
            }
            var listeners = [];
            var obj = [];
            var temp = this;
            while (temp && temp != stage) {
                var listener01 = temp.onRemoveParent(removed, this, false, data, useCapture);
                listeners.push(listener01);
                obj.push(temp);
                temp = temp.parent;
            }
            listeners01 = {
                removeStage: listeners,
                obj: obj
            }
            return listeners01;
        },
        offRemoveStage: function (listener, useCapture) {
            for (var i = 0; i < listener.obj.length; i++) {
                listener.obj[i].offRemoveParent(listener.removeStage[i], useCapture)
            }
        }
    }
    createjs.objectAssign(createjs.DisplayObject.prototype, removeStage);
}());
*/
(function () {
    var removeStage = {
        onRemoveStage: function (listener, scope, once, data, useCapture) {
            once = once != undefined ? once : false;
            var bool = this.hasStage();
            var listener01 = stage.on("tick", function (e) {
                var hasBool = this.hasStage();
                if (bool != hasBool) {
                    if (!hasBool) {
                        console.log("移除");
                        listener.call(scope, data);
                        if (once) {
                            e.remove();
                        }
                    }
                    bool = hasBool;
                }
            }, this, false, useCapture);
            return listener01;
        },
        offRemoveStage: function (listener, useCapture) {
            stage.off("tick", listener, useCapture);
        }
    }
    createjs.objectAssign(createjs.DisplayObject.prototype, removeStage);
}());

(function () {
    var initFrame = {
        onInitFrame: function (listener, scope, data, useCapture) {
            var listener01 = this.on("tick", listener, scope, true, useCapture);
            return listener01;
        },
        offInitFrame: function (listener, useCapture) {
            this.off("tick", listener, useCapture);
        }
    }
    createjs.objectAssign(createjs.DisplayObject.prototype, initFrame);
}());
//更新日期20160110