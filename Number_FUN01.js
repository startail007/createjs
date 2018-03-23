(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.數值加減器_觸碰區 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().de(-16.5,-16.5,33,33);
	this.shape.setTransform(0,0,0.909,0.909);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.數值加減器_按鈕底 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AiVBLQAAg+AsgrQAsgsA9AAQA+AAAsAsQAsArAAA+g");
	this.shape.setTransform(0,-7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#588F27").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6FB331").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#346701").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.Cai_load_user = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function DynamicLoad(pSrc, pComplete) {
			if (CheckLoadFile(pSrc)) {
				if (pComplete) {
					pComplete();
				}
			} else {
				window.CaiLoadFile = window.CaiLoadFile || [];
				window.CaiLoadFile.push(pSrc);
				var script = CreateJS(pSrc);
				script.onload = script.onreadystatechange = function () {
					if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
						if (pComplete) {
							pComplete();
						}
					}
					script.onload = script.onreadystatechange = null;
				}
			}
		}
		
		function CheckLoadFile(pSrc) {
			var mCaiLoadFile = window.CaiLoadFile;
			if (mCaiLoadFile) {
				for (var i = 0; i < mCaiLoadFile.length; i++) {
					if (mCaiLoadFile[i] == pSrc) {
						return true;
					}
				}
			}
			return false;
		}
		
		function CreateJS(pSrc) {
			var script = document.createElement("script");
			script.setAttribute("type", "text/javascript");
			script.setAttribute("src", pSrc);
			document.getElementsByTagName("head")[0].appendChild(script);
			return script;
		}
		
		createjs.DynamicLoad = DynamicLoad;
		this.parent.stop();
		var script01 = ["script/aBon.js","script/Cai.js","script/Cai_Expansion.js","script/Cai_Module.js","script/Cai_Function.js"];
		ScriptLoad.call(this,script01,0)
		function ScriptLoad(pScript,index) {
			if(index < pScript.length){
				createjs.DynamicLoad(script01[index],ScriptLoad.bind(this,pScript,index+1));
			}else{
				init.call(this)
			}
		}
		
		function init() {
			this.parent.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgnBAIAAh8IAeAAIAAASQAIgNAFgEQAHgEAIAAQALAAAKAHIgKAcQgIgFgHAAQgHAAgFAEQgEAEgDAKQgCAKAAAeIAAAng");
	this.shape.setTransform(111.9,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgtAsQgMgRAAgaQAAgeAQgRQAQgSAZAAQAbAAAQASQAQATgBAlIhRAAQAAAOAIAIQAHAIALAAQAHAAAGgEQAFgEADgJIAgAFQgGASgOAKQgNAJgVAAQgfAAgQgVgAgQgfQgHAIAAANIAwAAQAAgOgHgHQgHgIgKAAQgKAAgHAIg");
	this.shape_1.setTransform(99.5,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgmA3QgPgLgEgRIAhgFQACAJAGAFQAHAFALAAQAMAAAHgEQAEgEAAgFQAAgEgCgCQgDgDgIgCQgngJgLgHQgPgJAAgSQAAgQANgLQANgLAbAAQAYAAANAIQAMAJAFAQIgfAGQgCgIgGgDQgFgEgKAAQgNAAgFADQgEADAAAEQAAADADADQAFADAZAGQAaAGALAJQAKAIAAAPQAAARgOANQgOAMgcAAQgZAAgPgKg");
	this.shape_2.setTransform(85.9,32.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgkA6QgKgFgFgKQgFgKAAgSIAAhOIAhAAIAAA5QAAAaACAGQACAGAFADQAEADAIAAQAIAAAGgEQAHgFACgHQADgGAAgaIAAg1IAgAAIAAB8IgeAAIAAgTQgHAKgKAGQgLAGgMAAQgNAAgJgGg");
	this.shape_3.setTransform(72.2,32.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AhDALIAAgVICHAAIAAAVg");
	this.shape_4.setTransform(58.2,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgPBWIAAh7IAfAAIAAB7gAgPg2IAAgfIAfAAIAAAfg");
	this.shape_5.setTransform(48.3,29.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgvA3QgLgLAAgQQAAgKAGgIQAEgJAKgDQAJgFARgDQAWgEAJgEIAAgDQAAgKgFgEQgFgEgMAAQgJAAgEAEQgFADgDAJIgegGQAFgSAMgIQAMgJAZAAQAVAAAKAFQAMAFAEAJQAEAHAAAWIAAAlQAAARABAIQACAHAEAJIggAAIgDgJIgBgEQgJAIgJAEQgJAEgLAAQgTAAgMgKgAAAAIQgOACgEADQgHAFABAHQAAAHAEAFQAGAFAIAAQAHAAAJgGQAGgEABgHQACgEAAgMIAAgHIgTAGg");
	this.shape_6.setTransform(38.3,32.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag0BBQgWgXAAgpQAAgqAWgXQAWgYAkAAQAfAAAUATQALALAGAUIgiAJQgDgOgKgIQgJgHgOAAQgSAAgMANQgMAOAAAfQAAAfAMAOQALAOASAAQAOAAAKgJQAKgJAEgSIAiAKQgIAcgSAOQgSAOgcAAQghAAgWgYg");
	this.shape_7.setTransform(22.8,29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AqJEsIAApXIUTAAIAAJXg");
	this.shape_8.setTransform(65,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cai_load_user, new cjs.Rectangle(0,0,130,60), null);


(lib.數值加減器_加按鈕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// 圖層 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRA9IAAgrIgrAAIAAgjIArAAIAAgrIAjAAIAAArIArAAIAAAjIgrAAIAAArg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	// 圖層 1
	this.instance = new lib.數值加減器_按鈕底("synched",0,false);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.數值加減器_減按鈕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AhpBqQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsAsQgsAsg+AAQg9AAgsgsg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// 圖層 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0ARIAAghIBpAAIAAAhg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

	// 圖層 1
	this.instance = new lib.數值加減器_按鈕底("synched",0,false);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.數值加減器_主元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// display
	this.display = new cjs.Text("", "bold 36px 'Arial'", "#006600");
	this.display.name = "display";
	this.display.textAlign = "center";
	this.display.lineHeight = 42;
	this.display.lineWidth = 56;
	this.display.parent = this;
	this.display.setTransform(0,-20.1);

	this.timeline.addTween(cjs.Tween.get(this.display).wait(1));

	// touch
	this.down_touch = new lib.數值加減器_觸碰區();
	this.down_touch.parent = this;
	this.down_touch.setTransform(0,50);
	new cjs.ButtonHelper(this.down_touch, 0, 1, 2, false, new lib.數值加減器_觸碰區(), 3);

	this.up_touch = new lib.數值加減器_觸碰區();
	this.up_touch.parent = this;
	this.up_touch.setTransform(0,-50);
	new cjs.ButtonHelper(this.up_touch, 0, 1, 2, false, new lib.數值加減器_觸碰區(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.up_touch},{t:this.down_touch}]}).wait(1));

	// up
	this.up_mc = new lib.數值加減器_加按鈕();
	this.up_mc.parent = this;
	this.up_mc.setTransform(0,-50);

	this.timeline.addTween(cjs.Tween.get(this.up_mc).wait(1));

	// down
	this.down_mc = new lib.數值加減器_減按鈕();
	this.down_mc.parent = this;
	this.down_mc.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.down_mc).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#588F27").ss(2,1,1).p("AD/j+IAAH9In9AAIAAn9g");
	this.shape.setTransform(0,0,1.176,0.98);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj+D/IAAn9IH9AAIAAH9g");
	this.shape_1.setTransform(0,0,1.176,0.98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.數值加減器_主元件, new cjs.Rectangle(-31,-65,62,130), null);


// stage content:
(lib.Number_FUN01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		//setTimeout(function () {
			createjs.Module.NumberModify(this.n2);
			this.n2.OnNumberModify(0, 0, 10, 1, function (pValue) {
				this.n2.NumberModifyShow(pValue);
			}.bind(this));
		
			createjs.Module.NumberModify(this.n1);
			this.n1.OnNumberModify(5, 0, 10, 1, function (pValue) {
				this.n1.NumberModifyShow(pValue);
			}.bind(this));
		//}, 0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 圖層 1
	this.instance = new lib.Cai_load_user();
	this.instance.parent = this;
	this.instance.setTransform(80.7,-250);

	this.n1 = new lib.數值加減器_主元件();
	this.n1.parent = this;
	this.n1.setTransform(163,200.5);

	this.n2 = new lib.數值加減器_主元件();
	this.n2.parent = this;
	this.n2.setTransform(275,200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.n2},{t:this.n1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(355.7,-50,130,60);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;