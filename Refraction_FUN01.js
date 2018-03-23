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
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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


(lib.元件3複製 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().de(-7.7,-7.7,15.5,15.5);
	this.shape.setTransform(0,0,0.968,0.968);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3複製, new cjs.Rectangle(-7.5,-7.5,15,15), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().de(-7.7,-7.7,15.5,15.5);
	this.shape.setTransform(0,0,0.968,0.968);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(-7.5,-7.5,15,15), null);


// stage content:
(lib.Refraction_FUN01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		var medium = {
			air: 1.000277,
			water: 1.3330
		}
		
		var ll = [this.l0, this.l1];
		var ww = [
			[this.p0, this.p1],
			[this.p2, this.p3],
			[this.p4, this.p5],
			[this.p6, this.p7]
		]
		var wall = [];
		for (var i = 0; i < ww.length; i++) {
			var obj = {
				p0: ww[i][0].getPoint(),
				p1: ww[i][1].getPoint(),
				v: null,
				n0: medium.air,
				n1: medium.water
			}
			wall.push(obj);
		}
		
		var light = [];
		var n = 30;
		
		/*var p = this.l0.getPoint();
		var v = p.getVector(this.l1.getPoint());
		var vl = v.length();
		var v0 = new createjs.vector(-v.y / vl, v.x / vl).scale(100);
		
		for (var i = 0; i < n; i++) {
			var obj = {
				p: p.interpolationV(v0, (i - (n - 1) / 2) / n),
				v: v,
				n: medium.air
			};
			light.push(obj);
		}*/
		
		var p = ll[0].getPoint();
		var v = p.getVector(ll[1].getPoint()).scale(1);
		for (var i = 0; i < n; i++) {
			var obj = {
				p: p,
				v: v.rotate((i - (n - 1) / 2) * 0.5 * Math.PI / 180),
				n: medium.air,
				index: i,
			};
			light.push(obj);
		}
		var s = new createjs.Shape();
		this.addChild(s);
		
		function drawWall() {
			s.graphics.setStrokeStyle(1);
			s.graphics.beginStroke("#0000ff");
			for (var i = 0; i < wall.length; i++) {
				s.graphics.moveTo(wall[i].p0.x, wall[i].p0.y);
				s.graphics.lineTo(wall[i].p1.x, wall[i].p1.y);
			}
			s.graphics.endStroke();
		}
		function drawLight(pLightP, pLightV, pColor) {
			s.graphics.setStrokeStyle(1);
			s.graphics.beginStroke(pColor || "#ff0000");
			s.graphics.moveTo(pLightP.x, pLightP.y);
			s.graphics.lineTo(pLightP.x + pLightV.x, pLightP.y + pLightV.y);
			s.graphics.endStroke();
		}
		
		/*this.on("tick", function (e) {
			
		});*/
		draw();
		function draw() {
			s.graphics.clear();
			drawWall();
			for (var i = 0; i < wall.length; i++) {
				if (wall[i].v == null) {
					wall[i].v = wall[i].p0.getVector(wall[i].p1);
				}
			}
		
			for (var i = 0; i < light.length; i++) {
				var l = {
					p: light[i].p,
					v: light[i].v,
					n: light[i].n,
					w: -1
				};
				var start_n = light[i].n;
				do {
					l = calc(l.p, l.v, l.w, l.n);
				} while (l.w != -1);
		
				drawLight(light[i].p, light[i].v, "rgba(0,255,255,0.25)");
			}
		}
		function lightBlocking(pp, vv, ww) {
			var tttt = Infinity;
			var index = -1;
			for (var i = 0; i < wall.length; i++) {
				if (i != ww) {
					var tt = createjs.intersectionPV(pp, vv, wall[i].p0, wall[i].v);
					if (tt != null && tt.t0 >= 0 && tt.t0 <= 1 && tt.t1 >= 0 && tt.t1 <= 1) {
						if (tt.t0 < tttt) {
							index = i;
							tttt = tt.t0;
						}
					}
				}
			}
			return {
				i: index,
				t: tttt
			};
		}
		function calc(pp, vv, ww, nn) {
			var obj01 = lightBlocking(pp, vv, ww);
			if (obj01.t == Infinity) {
				drawLight(pp, vv, nn == medium.air ? "#ff0000" : "#00ff00");
				return {
					p: pp,
					v: vv,
					n: nn,
					w: obj01.i
				};
			} else {
				//console.log(nn)
				var np = pp.interpolationV(vv, obj01.t);
				var r0 = (1 - obj01.t) * vv.length();
				var n = (wall[obj01.i].n0 == nn) ? (nn / wall[obj01.i].n1) : (nn / wall[obj01.i].n0);
				var v1 = vv.refraction(n, wall[obj01.i].v);
				if (v1 == null) {
					//console.log("全反射");
					v1 = vv.reflection(wall[obj01.i].v).scale(r0);
				} else {
					//console.log("折射");
					v1 = v1.scale(n * r0);
					n = (wall[obj01.i].n0 == nn) ? wall[obj01.i].n1 : wall[obj01.i].n0; //替換目前介質
				}
				drawLight(pp, vv.scale(obj01.t), nn == medium.air ? "#ff0000" : "#00ff00");
				//drawLight(np, v1,"#00ff00");
				return {
					p: np,
					v: v1,
					n: n,
					w: obj01.i
				};
			}
		}
		
		
		
		for (var i = 0; i < ll.length; i++) {
			ll[i].on("mousedown", mousedown1, this);
		}
		for (var i = 0; i < ww.length; i++) {
			ww[i][0].on("mousedown", mousedown1, this);
			ww[i][1].on("mousedown", mousedown1, this);
		}
		
		function mousedown1(e) {
			createjs.Function.DragFunction(e.currentTarget, Fun.bind(this));
			function Fun(state) {
				var p = ll[0].getPoint();
				var v = p.getVector(ll[1].getPoint()).scale(1);
				for (var i = 0; i < light.length; i++) {
					var index = light[i].index;
					light[index].p = p;
					light[index].v = v.rotate((index - (n - 1) / 2) * 0.5 * Math.PI / 180);
				}
				for (var i = 0; i < wall.length; i++) {
					wall[i].p0 = ww[i][0].getPoint();
					wall[i].p1 = ww[i][1].getPoint();
					wall[i].v = null;
				}
		
				draw();
				//console.log(state);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// 圖層 1
	this.instance = new lib.Cai_load_user();
	this.instance.parent = this;
	this.instance.setTransform(80.7,-250);

	this.p6 = new lib.元件3();
	this.p6.parent = this;
	this.p6.setTransform(309.5,43.1,0.998,0.998,0,0,0,0,0.1);

	this.p7 = new lib.元件3();
	this.p7.parent = this;
	this.p7.setTransform(549.5,725.5,0.998,0.998);

	this.p4 = new lib.元件3();
	this.p4.parent = this;
	this.p4.setTransform(273.4,43,0.998,0.998);

	this.p5 = new lib.元件3();
	this.p5.parent = this;
	this.p5.setTransform(517.7,725.5,0.998,0.998,0,0,0,0.3,0);

	this.l1 = new lib.元件3複製();
	this.l1.parent = this;
	this.l1.setTransform(652.4,407.6);

	this.l0 = new lib.元件3複製();
	this.l0.parent = this;
	this.l0.setTransform(98.2,74.1);

	this.p3 = new lib.元件3();
	this.p3.parent = this;
	this.p3.setTransform(214.5,43);

	this.p2 = new lib.元件3();
	this.p2.parent = this;
	this.p2.setTransform(218.5,735.5);

	this.p1 = new lib.元件3();
	this.p1.parent = this;
	this.p1.setTransform(191.2,33.1);

	this.p0 = new lib.元件3();
	this.p0.parent = this;
	this.p0.setTransform(195.2,735.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.p0},{t:this.p1},{t:this.p2},{t:this.p3},{t:this.l0},{t:this.l1},{t:this.p5},{t:this.p4},{t:this.p7},{t:this.p6}]},1).wait(1));

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