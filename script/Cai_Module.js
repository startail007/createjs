createjs.Module = createjs.Module || {};
//數值修改組件
(function () {
    var NumberModify = function (pMC) {
        var OnNumberModify = function (pNum, pMin, pMax, pStep, pFun) {
            pNum = pNum != undefined ? pNum : 0;
            pMin = pMin != undefined ? pMin : -99;
            pMax = pMax != undefined ? pMax : 100;
            pStep = pStep != undefined ? pStep : 1;
            this.up_touch.OnButtonMode();
            this.up_touch.on("buttonState", function (e) {
                if (e.active) {
                    this.up_touch.visible = false;
                    this.up_mc.gotoAndStop(3)
                } else {
                    this.up_touch.visible = true;
                    if (e.state == "basic") {
                        this.up_mc.gotoAndStop(0)
                    } else if (e.state == "over") {
                        this.up_mc.gotoAndStop(1)
                    } else if (e.state == "down") {
                        this.up_mc.gotoAndStop(2)
                    }
                }
            }, this);
            this.down_touch.OnButtonMode();
            this.down_touch.on("buttonState", function (e) {
                if (e.active) {
                    this.down_touch.visible = false;
                    this.down_mc.gotoAndStop(3)
                } else {
                    this.down_touch.visible = true;
                    if (e.state == "basic") {
                        this.down_mc.gotoAndStop(0)
                    } else if (e.state == "over") {
                        this.down_mc.gotoAndStop(1)
                    } else if (e.state == "down") {
                        this.down_mc.gotoAndStop(2)
                    }
                }
            }, this);
            this._NumberModifyListener01 = this.up_touch.on("click", click, this, false, {
                value: pStep
            });
            this._NumberModifyListener02 = this.down_touch.on("click", click, this, false, {
                value: -pStep
            });

            function click(e, data) {
                var index = createjs.numberCrop(radio01.index + data.value, pMin, pMax);
                radio01.select(index);
            }
            var radio01 = new createjs.radio();
            radio01.fun = function (old_index, index) {
                if (old_index != index) {
                    if (index <= pMin) {
                        this.down_touch.ButtonActive = true;
                    } else {
                        this.down_touch.ButtonActive = false;
                    }
                    if (index >= pMax) {
                        this.up_touch.ButtonActive = true;
                    } else {
                        this.up_touch.ButtonActive = false;
                    }
                    this.NumberModifyShow(index);
                    if (pFun) {
                        pFun(index);
                    }
                }
            }.bind(this);

            this.onInitFrame(function (e) {
                var temp = createjs.numberCrop(pNum, pMin, pMax);
                radio01.select(temp);
            }, this);

            this._ModuleRemoveStageListener = this.onRemoveStage(function (data) {
                this.OffNumberModify();
            }, this, false);
        };
        pMC.OnNumberModify = OnNumberModify.bind(pMC);
        var NumberModifyShow = function (pValue) {
            this.display.text = pValue;
        }
        pMC.NumberModifyShow = NumberModifyShow.bind(pMC);
        var OffNumberModify = function () {
            this.up_touch.OffButtonMode();
            this.down_touch.OffButtonMode();
            this.up_touch.off("click", this._NumberModifyListener01);
            this.down_touch.off("click", this._NumberModifyListener02);
            delete this._NumberModifyListener01;
            delete this._NumberModifyListener02;
            this.offRemoveStage(this._ModuleRemoveStageListener);
            delete this._ModuleRemoveStageListener;
        }
        pMC.OffNumberModify = OffNumberModify.bind(pMC);
    }
    createjs.Module.NumberModify = NumberModify;
}());

//假3D控制組件
(function () {
    var Controller3D = function (pMC) {
        function setScale(pValue) {
            this._Controller3D_scale01 = pValue;
            this.mc.scaleX = this._Controller3D_scaleX01 * this._Controller3D_scale01;
            this.mc.scaleY = this._Controller3D_scaleY01 * this._Controller3D_scale01;
        }
        var OnController3D = function (pZoomStep, pRotationStep, pZoomMin, pZoomMax) {
            pZoomStep = pZoomStep != undefined ? pZoomStep : 0.1;
            pRotationStep = pRotationStep != undefined ? pRotationStep : 1;
            pZoomMin = pZoomMin != undefined ? pZoomMin : 0.1;
            pZoomMax = pZoomMax != undefined ? pZoomMax : 4;
            this._Controller3D_scaleX01 = this.mc.scaleX;
            this._Controller3D_scaleY01 = this.mc.scaleY;
            this._Controller3D_scale01 = 1;
            this._btn_zoomOut_Listener01 = this.controller.btn_zoomOut.on("mousedown", mousedown, this, false, {
                zoom: pZoomStep
            });
            this._btn_zoomIn_Listener01 = this.controller.btn_zoomIn.on("mousedown", mousedown, this, false, {
                zoom: -pZoomStep
            });
            this._btn_left_Listener01 = this.controller.btn_left.on("mousedown", mousedown, this, false, {
                rotation: -pRotationStep
            });
            this._btn_right_Listener01 = this.controller.btn_right.on("mousedown", mousedown, this, false, {
                rotation: pRotationStep
            });
            var Listener01;

            function mousedown(e, data) {
                Listener01 = this.on("tick", tick, this, false, {
                    zoom: data.zoom,
                    rotation: data.rotation
                });
                stage.on("stagemouseup", stagemouseup01, this, true)
            }

            function stagemouseup01(e) {
                this.off("tick", Listener01);
                Listener01 = null;
            }

            function tick(e, data) {
                if (data && data.zoom) {
                    var temp = createjs.numberCrop(this._Controller3D_scale01 + data.zoom, pZoomMin, pZoomMax);
                    setScale.call(this, temp);
                } else if ((data && data.rotation) || offsetX != 0) {
                    var rotation01 = 0;
                    if (data && data.rotation) {
                        rotation01 = data.rotation
                    } else {
                        rotation01 = offsetX > 0 ? pRotationStep : -pRotationStep;
                    }
                    var temp = this.mc.cspin.currentFrame + rotation01;
                    temp = temp < 0 ? temp + this.mc.cspin.totalFrames - 1 : temp;
                    temp = temp % this.mc.cspin.totalFrames;
                    this.mc.cspin.gotoAndStop(temp)
                }
            }
            var stageX = null;
            var offsetX = 0;
            this._mc_mousedown_Listener01 = this.mc.touch.on("mousedown", mousedown01, this, false);
            var Listener02;

            function mousedown01(e) {
                Listener01 = this.on("tick", tick, this, false);
                stageX = e.stageX;
                Listener02 = stage.on("stagemousemove", stagemousemove, this, false);
                stage.on("stagemouseup", stagemouseup02, this, true)
            }

            function stagemousemove(e) {
                offsetX = e.stageX - stageX;
            }

            function stagemouseup02(e) {
                offsetX = 0;
                this.off("tick", Listener01);
                stage.off("stagemousemove", Listener02);
                Listener01 = null;
                Listener02 = null;
            }
            this._btn_reset_Listener01 = this.controller.btn_reset.on("click", click, this, false);

            function click(e) {
                this.Controller3DReset();
            }

            this.onInitFrame(function (e) {
                this.Controller3DReset();
            }, this);

            this._ModuleRemoveStageListener = this.onRemoveStage(function (data) {
                this.Controller3DReset();
                this.OffController3D();
            }, this, false);
        };
        pMC.OnController3D = OnController3D.bind(pMC);
        var OffController3D = function () {
            this.controller.btn_zoomOut.off("mousedown", this._btn_zoomOut_Listener01);
            this.controller.btn_zoomIn.off("mousedown", this._btn_zoomIn_Listener01);
            this.controller.btn_left.off("mousedown", this._btn_left_Listener01);
            this.controller.btn_right.off("mousedown", this._btn_right_Listener01);
            this.controller.btn_reset.off("click", this._btn_reset_Listener01);
            this.mc.touch.off("mousedown", this._mc_mousedown_Listener01);
            delete this._btn_zoomOut_Listener01;
            delete this._btn_zoomIn_Listener01;
            delete this._btn_left_Listener01;
            delete this._btn_right_Listener01;
            delete this._btn_reset_Listener01;
            delete this._Controller3D_scaleX01;
            delete this._Controller3D_scaleY01;
            delete this._Controller3D_scale01;
            delete this._mc_mousedown_Listener01;
            this.offRemoveStage(this._ModuleRemoveStageListener);
            delete this._ModuleRemoveStageListener;
        }
        pMC.OffController3D = OffController3D.bind(pMC);

        var Controller3DReset = function () {
            setScale.call(this, 1);
            this.mc.cspin.gotoAndStop(0);
        }
        pMC.Controller3DReset = Controller3DReset.bind(pMC);
    }
    createjs.Module.Controller3D = Controller3D;
}());



//滑塊組件
(function () {
    var Slider = function (pMC) {
        var OnSlider = function (pNum, pMin, pMax, pNumP, pFun) {
            pNum = pNum != undefined ? pNum : 0;
            pMin = pMin != undefined ? pMin : 0;
            pMax = pMax != undefined ? pMax : 100;
            pNumP = pNumP != undefined ? pNumP : 20;
            
            this._SliderMin = pMin;
            this._SliderMax = pMax;
            this._SliderNumP = pNumP;
            this._SliderProgress = (pNum - this._SliderMin) / (this._SliderMax - this._SliderMin);

            this._SliderA = pMin;
            this._SliderB = pMax;

            var radio01 = new createjs.radio();
            radio01.fun = function (old_index, index) {
                if (old_index != index) {
                    if (pFun) {
                        pFun(index, "update");
                    }
                }
            }.bind(this);

            this._SliderListener = this.btn.touch.on("mousedown", mousedown1, this);

            function mousedown1(e) {
                var rateS = (this._SliderA - this._SliderMin) / (this._SliderMax - this._SliderMin);
                var rate = (this._SliderB - this._SliderA) / (this._SliderMax - this._SliderMin);
                var ww = this.bar.nominalBounds.width * this.bar.scaleX;
                this.btn.startDrag(new createjs.Rectangle(this.bar.x + rateS * ww, this.btn.y, rate * ww, 0), function (state) {
                    if (state == "update") {
                        this._SliderProgress = (this.btn.x - this.bar.x) / ww;
                        radio01.select(value());
                    } else if (state == "start") {
                        if (pFun) {
                            pFun(value(), "mousedown");
                        }
                    }
                }.bind(this));
                
                var listener = stage.on("stagemouseup", mouseup, this);
                function mouseup(e) {
                    stage.off("stagemouseup", listener);
                    this.btn.stopDrag();    
                    if (pFun) {
                        pFun(value(), "mouseup");
                    }
                }
            }

            this._ModuleRemoveStageListener = this.onRemoveStage(function (data) {
                this.OffSlider();
            }, this, false);

            var set = function (pValue, pDuration) {
                pDuration = pDuration != undefined ? pDuration : 0;
                var temp = createjs.numberCrop(createjs.numberCrop(pValue, this._SliderMin, this._SliderMax), this._SliderA, this._SliderB);
                radio01.select(Number(temp.toFixed(this._SliderNumP)));
                var ww = this.bar.nominalBounds.width * this.bar.scaleX;
                this._SliderProgress = (temp - this._SliderMin) / (this._SliderMax - this._SliderMin);
                if (pDuration == 0) {
                    this.btn.x = this.bar.x + ww * this._SliderProgress;
                } else {
                    this.btn.touch.visible = false;
                    createjs.Tween.get(this.btn).to({
                        x: this.bar.x + ww * this._SliderProgress
                    }, pDuration, createjs.Ease.none).call(function () {
                        this.btn.touch.visible = true;
                    }.bind(this));
                }
            }.bind(this);

            var value = function (pNumP) {
                pNumP = pNumP != undefined ? pNumP : this._SliderNumP;
                var temp = this._SliderMin + (this._SliderMax - this._SliderMin) * this._SliderProgress;
                return Number(temp.toFixed(pNumP));
            }.bind(this);

            var limit = function (pMinNum, pMaxNum) {
                this._SliderA = pMinNum;
                this._SliderB = pMaxNum;
                var rateS = (this._SliderA - this._SliderMin) / (this._SliderMax - this._SliderMin);
                var rateE = (this._SliderB - this._SliderMin) / (this._SliderMax - this._SliderMin);
                if (this._SliderProgress < rateS) {
                    set(this._SliderA);
                } else if (this._SliderProgress > rateE) {
                    set(this._SliderB);
                }
            }.bind(this);

            set(pNum);
            return {
                set: set,
                value: value,
                limit: limit
            };
        };
        pMC.OnSlider = OnSlider.bind(pMC);
        var OffSlider = function () {
            this.btn.touch.off("mousedown", this._SliderListener);
            delete this._SliderListener;
            this.offRemoveStage(this._ModuleRemoveStageListener);
            delete this._ModuleRemoveStageListener;
            delete this._SliderNum;
            delete this._SliderMin;
            delete this._SliderMax;
            delete this._SliderNumP;
            delete this._SliderA;
            delete this._SliderB;
            delete this._SliderProgress;
        }
        pMC.OffSlider = OffSlider.bind(pMC);
    }
    createjs.Module.Slider = Slider;
}());

(function () {
    var NumberSlider = function (pMC) {
        this.Slider(pMC);
        var OnNumberSlider = function (pNum, pMin, pMax, pNumP, pFun) {
            function set(index, state) {
                this.NumberSliderShow(index);
                if (pFun) {
                    pFun(index, state);
                }
            }
            return this.OnSlider(pNum, pMin, pMax, pNumP, set.bind(this));
        }
        pMC.OnNumberSlider = OnNumberSlider.bind(pMC);

        var NumberSliderShow = function (pValue) {
            this.btn.display.num.text = pValue;
        }
        pMC.NumberSliderShow = NumberSliderShow.bind(pMC);

        var OffNumberSlider = function () {
            this.OffSlider();
        }
        pMC.OffNumberSlider = OffNumberSlider.bind(pMC);
    };
    createjs.Module.NumberSlider = NumberSlider;
}());
//更新日期20160110