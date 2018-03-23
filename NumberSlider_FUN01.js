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


(lib.拖曳線段 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.659)").ss(1,0,1,3,true).p("AOngnIAABPATegnIAABPAJvgnIAABPAE4gnIAABPAk2gnIAABPAAAgnIAABPApugnIAABPAulgnIAABPAzdgnIAABP");
	this.shape.setTransform(158.9,35.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.659)").ss(1,0,1,3,true).p("ATegnIAABPAOngnIAABPAJvgnIAABPAE4gnIAABPAAAgnIAABPAk2gnIAABPApugnIAABPAulgnIAABPAzdgnIAABP");
	this.shape_1.setTransform(158.9,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},2).wait(1));

	// 圖層 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.498)").ss(2,0,1).p("AYggnMgw/AAAIAABPMAw/AAAg");
	this.shape_2.setTransform(158,35.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(2).to({_off:false},0).wait(1));

	// 圖層 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.176)").s().p("A4fAWIAAgsMAw/AAAIAAAsg");
	this.shape_3.setTransform(158,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,204,0,0.678)").s().p("AncAoIAAhPIO5AAIAABPg");
	this.shape_4.setTransform(48.9,35.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,153,0,0.678)").s().p("AnRAoIAAhPIOjAAIAABPg");
	this.shape_5.setTransform(143.3,35.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,102,51,0.678)").s().p("AnQAoIAAhPIOhAAIAABPg");
	this.shape_6.setTransform(236.4,35.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,0,0,0.678)").s().p("AieAoIAAhPIE9AAIAABPg");
	this.shape_7.setTransform(298.8,35.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AncAoIAAhPIO5AAIAABPg");
	this.shape_8.setTransform(48.9,35.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6633").s().p("ApvAoIAAhPITfAAIAABPg");
	this.shape_9.setTransform(252.3,35.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AnRAoIAAhPIOjAAIAABPg");
	this.shape_10.setTransform(143.3,35.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CCFF").s().p("AncAoIAAhPIO5AAIAABPg");
	this.shape_11.setTransform(48.9,35.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0099FF").s().p("AnRAoIAAhPIOjAAIAABPg");
	this.shape_12.setTransform(143.3,35.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AnQAoIAAhPIOhAAIAABPg");
	this.shape_13.setTransform(236.4,35.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0033FF").s().p("AieAoIAAhPIE9AAIAABPg");
	this.shape_14.setTransform(298.8,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,30.5,315.5,10);


(lib.拉軸1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40362E").s().p("A/ZBkIAAjHMA+zAAAIAADHg");
	this.shape.setTransform(201,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.拉軸1, new cjs.Rectangle(0,0,402,20), null);


(lib.拉軸btn複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.02)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.039)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.059)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.078)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.102)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.122)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.141)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.161)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.18)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.2)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.176)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.157)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.133)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.11)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.09)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.067)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.043)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.024)").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// 圖層 2
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6FB331").s().p("AicBbIAAi1IE5AAIAAC1g");
	this.shape_19.setTransform(0,-14.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#588F27").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-23.6,31.3,47.3);


(lib.拉軸 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40362E").s().p("A2TAeIAAg7MAsnAAAIAAA7g");
	this.shape.setTransform(142.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.拉軸, new cjs.Rectangle(0,-3,285.6,6), null);


(lib.拉桿顯示背景 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#588F27").ss(2,1,1).p("ACTi7QA8A8AABWQAABVg8A9QguAtg7AMIgqBWIgphWQgvgKgngfQgKgHgJgJQg8g9AAhVQAAhWA8g8QAJgJAKgIQA3gsBIAAQBWAAA9A9g");
	this.shape.setTransform(0,-24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGhJICNAAIhHCTg");
	this.shape_1.setTransform(0,-7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah/CjQgJgHgKgKQg8g8AAhWQAAhVA8g9IATgQQA3gsBIAAQBVAAA+A8QA8A9AABVQAABWg8A8Qg+A9hVAAQhIAAg3gsg");
	this.shape_2.setTransform(0,-29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.拉桿顯示背景, new cjs.Rectangle(-21.7,-50.7,43.4,51.7), null);


(lib.拉桿透明按鈕 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AicBNIAAk4IE5AAIAAE4IibCfg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.力量 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.157)").s().p("AjdBwIAAgCQAAg/AegxQAOgYAUgVQBChABbAAQBcAABBBAQBBBBAABcIAAACg");
	this.shape.setTransform(0,-11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1571AE").s().p("AiMCNQg7g7AAhSQAAhSA7g6QA6g7BSAAQBSAAA7A7QA7A6AABSQAABSg7A7Qg7A7hSAAQhSAAg6g7gAiAiBQg1A2AABLQAABJA1A1QA1A1BKAAQBLAAA0g1QA1g1AAhJQAAhLg1g2Qg0g0hLAAQhKAAg1A0g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2F9EE5").s().p("AidCdQhAhBAAhcQAAhbBAhCQBChABbAAQBcAABBBAQBBBCAABbQAABchBBBQhBBBhcAAQhbAAhChBgAiNiNQg6A7AABSQAABSA6A7QA7A6BSAAQBSAAA7g6QA6g7AAhSQAAhSg6g7Qg7g6hSAAQhSAAg7A6gAiAB+Qg1g1AAhJQAAhLA1g2QA1g0BKAAQBKAAA1A0QA1A2AABLQAABJg1A1Qg1A1hKAAQhKAAg1g1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// 圖層 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.102)").ss(3,1,1).p("ACdidQBBBCAABbQAABchBBBQhBBBhcAAQhbAAhChBQhAhBAAhcQAAhbBAhCQBChABbAAQBcAABBBAg");
	this.shape_3.setTransform(1.1,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1571AE").s().p("AiNCNQg6g7AAhSQAAhSA6g7QA8g5BRAAQBTAAA6A5QA7A7gBBSQABBSg7A7Qg6A6hTAAQhRAAg8g6gAiAiBQg1A2AABLQAABJA1A1QA1A1BKAAQBLAAA0g1QA2g1gBhJQABhLg2g2Qg0gzhLAAQhKAAg1Azg");
	this.shape_4.setTransform(1.1,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F9EE5").s().p("AidCdQhAhBAAhcQAAhbBAhCQBChABbAAQBcAABBBAQBBBCAABbQAABchBBBQhBBBhcAAQhbAAhChBgAiNiNQg6A7AABSQAABSA6A7QA7A6BSAAQBSAAA7g6QA6g7AAhSQAAhSg6g7Qg7g6hSAAQhSAAg7A6gAiAB+Qg1g1AAhJQAAhLA1g2QA1g0BKAAQBKAAA1A0QA1A2AABLQAABJg1A1Qg1A1hKAAQhKAAg1g1g");
	this.shape_5.setTransform(1.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-22.2,47.5,48.1);


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


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().de(-22.5,-22.5,45,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mc_line_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.拖曳線段("single",3);
	this.instance.parent = this;
	this.instance.setTransform(-0.4,0.2,1.284,2.501,0,0,0,314.7,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_line_up, new cjs.Rectangle(-404.9,-11.9,406.4,23.9), null);


(lib.mc_line_down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.拖曳線段("single",0);
	this.instance.parent = this;
	this.instance.setTransform(402.5,0.2,1.284,2.501,0,0,0,314.7,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_line_down, new cjs.Rectangle(-1.9,-11.9,406.4,23.9), null);


(lib.h_數字 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.num = new cjs.Text("99", "25px 'Arial'", "#006600");
	this.num.name = "num";
	this.num.textAlign = "center";
	this.num.lineHeight = 30;
	this.num.lineWidth = 29;
	this.num.parent = this;
	this.num.setTransform(0,-42.2);

	this.timeline.addTween(cjs.Tween.get(this.num).wait(1));

	// 圖層 2
	this.instance = new lib.拉桿顯示背景();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.h_數字, new cjs.Rectangle(-21.7,-50.7,43.4,51.7), null);


(lib.元件2複製1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch = new lib.元件31();
	this.touch.parent = this;
	this.touch.setTransform(0,0.1);
	new cjs.ButtonHelper(this.touch, 0, 1, 2, false, new lib.元件31(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch).wait(1));

	// 圖層 1
	this.mc_drag = new lib.力量();
	this.mc_drag.parent = this;
	this.mc_drag.setTransform(0,0,1.03,1.03);

	this.timeline.addTween(cjs.Tween.get(this.mc_drag).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2複製1, new cjs.Rectangle(-23.3,-22.8,48.9,49.5), null);


(lib.元件2複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.touch = new lib.拉桿透明按鈕();
	this.touch.parent = this;
	this.touch.setTransform(0,0.1);
	new cjs.ButtonHelper(this.touch, 0, 1, 2, false, new lib.拉桿透明按鈕(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch).wait(1));

	// 圖層 1
	this.mc = new lib.拉軸btn複製();
	this.mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2複製, new cjs.Rectangle(-15.6,-23.6,31.3,47.3), null);


(lib.拉桿按鈕元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.display = new lib.h_數字();
	this.display.parent = this;
	this.display.setTransform(0,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.display).wait(1));

	// 圖層 2
	this.touch = new lib.拉桿透明按鈕();
	this.touch.parent = this;
	this.touch.setTransform(0,0.1);
	new cjs.ButtonHelper(this.touch, 0, 1, 2, false, new lib.拉桿透明按鈕(), 3);

	this.timeline.addTween(cjs.Tween.get(this.touch).wait(1));

	// 圖層 1
	this.mc = new lib.拉軸btn複製();
	this.mc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.拉桿按鈕元件, new cjs.Rectangle(-21.7,-78.2,43.4,102), null);


(lib.遮罩 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.mc_line_up = new lib.mc_line_up();
	this.mc_line_up.parent = this;
	this.mc_line_up.setTransform(201.2,10,1,1,0,0,0,-201.3,0);

	this.timeline.addTween(cjs.Tween.get(this.mc_line_up).wait(1));

	// 圖層 3
	this.mc_line_down = new lib.mc_line_down();
	this.mc_line_down.parent = this;
	this.mc_line_down.setTransform(201.2,10,1,1,0,0,0,201.2,0);

	this.timeline.addTween(cjs.Tween.get(this.mc_line_down).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-2.5,405.5,25);


(lib.元件4複製1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 3
	this.btn = new lib.元件2複製1();
	this.btn.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// 圖層 2
	this.mc = new lib.遮罩();
	this.mc.parent = this;
	this.mc.setTransform(0,-10);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	// 圖層 1
	this.bar = new lib.拉軸1();
	this.bar.parent = this;
	this.bar.setTransform(0.1,-10);

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4複製1, new cjs.Rectangle(-23.3,-22.8,427.1,49.5), null);


(lib.元件4複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.btn = new lib.元件2複製();
	this.btn.parent = this;

	this.bar = new lib.拉軸();
	this.bar.parent = this;
	this.bar.setTransform(0.1,0,1.686,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.btn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4複製, new cjs.Rectangle(-15.6,-23.6,497.4,47.3), null);


(lib.拉桿元件 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.btn = new lib.拉桿按鈕元件();
	this.btn.parent = this;

	this.bar = new lib.拉軸();
	this.bar.parent = this;
	this.bar.setTransform(0.1,0,1.686,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bar},{t:this.btn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.拉桿元件, new cjs.Rectangle(-21.7,-78.2,503.4,101.9), null);


// stage content:
(lib.NumberSlider_FUN01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/*數值顯示滑塊使用1*/
		createjs.Module.NumberSlider(this.n1);
		var NumberSlider01 = this.n1.OnNumberSlider(7, 2, 7, 0);
		/*數值顯示滑塊使用2 整數歸位*/
		createjs.Module.NumberSlider(this.n2);
		var NumberSlider02 = this.n2.OnNumberSlider(0, -1, 1, 0, function (index, state) {
			if (state == "mouseup") {
				NumberSlider02.set(index, 200);
			}
		});
		
		/*數值滑塊使用3*/
		createjs.Module.Slider(this.n3);
		var NumberSlider03 = this.n3.OnSlider(0, 0, 1, 0);
		
		/*數值滑塊使用4 遮色片*/
		var ww = this.n4.bar.nominalBounds.width;
		var hh = this.n4.bar.nominalBounds.height
		var shape = new createjs.Shape();
		shape.graphics.beginFill("#ff0000").drawRect(0, 0, ww, hh);
		this.n4.bar.visible = false;
		this.n4.mc.mc_line_up.mask = shape;
		
		createjs.Module.Slider(this.n4);
		var NumberSlider01 = this.n4.OnSlider(0, 0, 1, 3, function (index) {
			shape.x = -(1 - index) * ww;
		
		});
		
		/*數值滑塊使用5 限制範圍*/
		createjs.Module.Slider(this.n5);
		var NumberSlider05 = this.n5.OnSlider(0, 0, 1, 2);
		NumberSlider05.limit(0.2, 0.5);
		
		/*數值滑塊使用6 定點歸位*/
		createjs.Module.Slider(this.n6);
		var NumberSlider06 = this.n6.OnSlider(0, 0, 100, 2, function (index, state) {
			if (state == "mouseup") {
				var n = [0, 20, 60, 100];
				NumberSlider06.set(n[createjs.numberNear(index, n)], 200);
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 圖層 1
	this.instance = new lib.Cai_load_user();
	this.instance.parent = this;
	this.instance.setTransform(80.7,-250);

	this.n6 = new lib.元件4複製();
	this.n6.parent = this;
	this.n6.setTransform(44.5,659.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#40362E").ss(3,1,1,3,true).p("A2fjHIAAGPEglfgDHIAAGPAHgjHIAAGPEAlggDHIAAGP");
	this.shape.setTransform(284.5,659.4);

	this.n5 = new lib.元件4複製();
	this.n5.parent = this;
	this.n5.setTransform(44.5,559);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#40362E").ss(3,1,1,3,true).p("ALVjHIAAGPArUjHIAAGP");
	this.shape_1.setTransform(212.9,559);

	this.n4 = new lib.元件4複製1();
	this.n4.parent = this;
	this.n4.setTransform(51.7,464.3);

	this.n3 = new lib.元件4複製();
	this.n3.parent = this;
	this.n3.setTransform(44.5,374.8);

	this.n2 = new lib.拉桿元件();
	this.n2.parent = this;
	this.n2.setTransform(44.5,264.8);

	this.n1 = new lib.拉桿元件();
	this.n1.parent = this;
	this.n1.setTransform(44.5,127.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.n1},{t:this.n2},{t:this.n3},{t:this.n4},{t:this.shape_1},{t:this.n5},{t:this.shape},{t:this.n6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(592.7,134,130,60);
// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;