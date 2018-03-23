//數值變化單選器
(function () {
    var radio = function () {
        this.old_index = -1;
        this.index = -1;
        this.fun = null;
        this.select = function (i) {
            this.old_index = this.index;
            this.index = i;
            if (this.fun != null) {
                this.fun.call(this, this.old_index, this.index);
            }
        }
    }
    createjs.radio = radio;
}());
//數值裁切
(function () {
    var numberCrop = function (pValue, pMin, pMax) {
        if (pValue < pMin) {
            return pMin;
        }
        if (pValue > pMax) {
            return pMax;
        }
        return pValue
    }
    createjs.numberCrop = numberCrop;
}());
//物件附加
(function () {
    var objectAssign = function (pValueA, pValueB) {
        for (var temp in pValueB) {
            pValueA[temp] = pValueB[temp];
        }
    }
    createjs.objectAssign = objectAssign;
}());
//PI先行運算
(function () {
    createjs.Angle = {
        PI90: Math.PI / 90,
        PI180: Math.PI / 180
    };
}());
//數值接近取得
(function () {
    function numberNear(pValue, pNums) {
        var num = Infinity;
        var index = -1;
        for (var i = 0; i < pNums.length; i++) {
            var temp = Math.abs(pValue - pNums[i]);
            if (temp < num) {
                num = temp;
                index = i;
            }
        }
        return index;
    }
    createjs.numberNear = numberNear;
}());
//向量
(function () {
    var vector = function (x, y) {
        this.x = x;
        this.y = y;
        this.length = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        this.dot = function (v) {
            return this.x * v.x + this.y * v.y
        }
        this.cross = function (v) {
            return this.x * v.y - this.y * v.x;
        }
        this.scale = function (n) {
            return new createjs.vector(this.x * n, this.y * n);
        }
        this.add = function (v) {
            return new createjs.vector(this.x + v.x, this.y + v.y);
        }
        this.sub = function (v) {
            return new createjs.vector(this.x - v.x, this.y - v.y);
        }
        this.swap = function () {
            return new createjs.vector(-this.y, this.x);
        }
        this.projection = function (v) {
            var temp = this.dot(v) / v.length();
            return new createjs.vector(v.x * temp, v.y * temp);
        }
        this.normalize = function () {
            var r = this.length();
            return new createjs.vector(this.x / r, this.y / r);
        }
        this.reflection = function (f) {
            var fn = f.normalize();
            var v0_u = this.projection(fn);
            var v0_v = this.sub(v0_u);
            var v1 = v0_v.scale(-1).add(v0_u).normalize();
            return v1;
        }
        this.refraction = function (n, f) {
            var fn = f.normalize();
            var fnv = fn.swap();
            var n0 = n;
            var temp = this.sub(this.projection(fn)).cross(fn);
            if (temp > 0) {
                fn = fn.scale(-1);
                fnv = fn.swap();
            }
            var v0_u = this.projection(fn);
            var v0_v = this.sub(v0_u);
            /*var v0_temp = new createjs.vector(
            	v0_u.length() * (v0_u.cross(fnv) > 0 ? 1 : -1),
            	v0_v.length() * (v0_v.cross(fn) > 0 ? 1 : -1)
            );
            var s = n * v0_temp.x / v0_temp.length();*/
            var v0_temp = new createjs.vector(v0_u.length(), v0_v.length());
            var s = n0 * (v0_u.cross(fnv) > 0 ? 1 : -1) * v0_temp.x / v0_temp.length();
            if (Math.abs(s) >= 1) {
                return null;
            }
            var v1_temp = new createjs.vector(s, Math.sqrt(1 - s * s));
            var v1 = new createjs.vector(
                v1_temp.x * fn.x + v1_temp.y * fnv.x,
                v1_temp.x * fn.y + v1_temp.y * fnv.y
            );
            return v1;
        }
        this.rotate = function (pAngle) {
            var cos0 = Math.cos(pAngle);
            var sin0 = Math.sin(pAngle);
            return new createjs.vector(this.x * cos0 - this.y * sin0, this.y * cos0 + this.x * sin0);
        }
    }
    createjs.vector = vector;
}());
//相交計算
(function () {
    function intersection(pP0S, pP0E, pP1S, pP1E) {
        var v0 = pP0S.getVector(pP0E);
        var v1 = pP1S.getVector(pP1E);
        return intersectionPV(pP0S, v0, pP1S, v1);
    }

    function intersectionPV(pP0, pV0, pP1, pV1) {
        var temp0 = pV0.cross(pV1);
        if (temp0 == 0) {
            return null;
        }
        var tv = pP0.getVector(pP1);
        return {
            t0: tv.cross(pV1) / temp0,
            t1: tv.cross(pV0) / temp0
        };
    }
    createjs.intersection = intersection;
    createjs.intersectionPV = intersectionPV;
}());
//更新日期20160110