define(["exports","./Check-52a7d806","./when-92c6cf3c","./Math-92c3b5f7"],(function(e,t,n,r){"use strict";function o(e,t,r,o){this.x=n.u(e,0),this.y=n.u(t,0),this.z=n.u(r,0),this.w=n.u(o,0)}o.fromElements=function(e,t,r,a,u){return n.e(u)?(u.x=e,u.y=t,u.z=r,u.w=a,u):new o(e,t,r,a)},o.fromColor=function(e,r){return t.o.typeOf.object("color",e),n.e(r)?(r.x=e.red,r.y=e.green,r.z=e.blue,r.w=e.alpha,r):new o(e.red,e.green,e.blue,e.alpha)},o.clone=function(e,t){if(n.e(e))return n.e(t)?(t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t):new o(e.x,e.y,e.z,e.w)},o.packedLength=4,o.pack=function(e,r,o){return t.o.typeOf.object("value",e),t.o.defined("array",r),o=n.u(o,0),r[o++]=e.x,r[o++]=e.y,r[o++]=e.z,r[o]=e.w,r},o.unpack=function(e,r,a){return t.o.defined("array",e),r=n.u(r,0),n.e(a)||(a=new o),a.x=e[r++],a.y=e[r++],a.z=e[r++],a.w=e[r],a},o.packArray=function(e,r){t.o.defined("array",e);var a=e.length,u=4*a;if(n.e(r)){if(!Array.isArray(r)&&r.length!==u)throw new t.t("If result is a typed array, it must have exactly array.length * 4 elements");r.length!==u&&(r.length=u)}else r=new Array(u);for(var c=0;c<a;++c)o.pack(e[c],r,4*c);return r},o.unpackArray=function(e,r){if(t.o.defined("array",e),t.o.typeOf.number.greaterThanOrEquals("array.length",e.length,4),e.length%4!=0)throw new t.t("array length must be a multiple of 4.");var a=e.length;n.e(r)?r.length=a/4:r=new Array(a/4);for(var u=0;u<a;u+=4){var c=u/4;r[c]=o.unpack(e,u,r[c])}return r},o.fromArray=o.unpack,o.maximumComponent=function(e){return t.o.typeOf.object("cartesian",e),Math.max(e.x,e.y,e.z,e.w)},o.minimumComponent=function(e){return t.o.typeOf.object("cartesian",e),Math.min(e.x,e.y,e.z,e.w)},o.minimumByComponent=function(e,n,r){return t.o.typeOf.object("first",e),t.o.typeOf.object("second",n),t.o.typeOf.object("result",r),r.x=Math.min(e.x,n.x),r.y=Math.min(e.y,n.y),r.z=Math.min(e.z,n.z),r.w=Math.min(e.w,n.w),r},o.maximumByComponent=function(e,n,r){return t.o.typeOf.object("first",e),t.o.typeOf.object("second",n),t.o.typeOf.object("result",r),r.x=Math.max(e.x,n.x),r.y=Math.max(e.y,n.y),r.z=Math.max(e.z,n.z),r.w=Math.max(e.w,n.w),r},o.magnitudeSquared=function(e){return t.o.typeOf.object("cartesian",e),e.x*e.x+e.y*e.y+e.z*e.z+e.w*e.w},o.magnitude=function(e){return Math.sqrt(o.magnitudeSquared(e))};var a=new o;o.distance=function(e,n){return t.o.typeOf.object("left",e),t.o.typeOf.object("right",n),o.subtract(e,n,a),o.magnitude(a)},o.distanceSquared=function(e,n){return t.o.typeOf.object("left",e),t.o.typeOf.object("right",n),o.subtract(e,n,a),o.magnitudeSquared(a)},o.normalize=function(e,n){t.o.typeOf.object("cartesian",e),t.o.typeOf.object("result",n);var r=o.magnitude(e);if(n.x=e.x/r,n.y=e.y/r,n.z=e.z/r,n.w=e.w/r,isNaN(n.x)||isNaN(n.y)||isNaN(n.z)||isNaN(n.w))throw new t.t("normalized result is not a number");return n},o.dot=function(e,n){return t.o.typeOf.object("left",e),t.o.typeOf.object("right",n),e.x*n.x+e.y*n.y+e.z*n.z+e.w*n.w},o.multiplyComponents=function(e,n,r){return t.o.typeOf.object("left",e),t.o.typeOf.object("right",n),t.o.typeOf.object("result",r),r.x=e.x*n.x,r.y=e.y*n.y,r.z=e.z*n.z,r.w=e.w*n.w,r},o.divideComponents=function(e,n,r){return t.o.typeOf.object("left",e),t.o.typeOf.object("right",n),t.o.typeOf.object("result",r),r.x=e.x/n.x,r.y=e.y/n.y,r.z=e.z/n.z,r.w=e.w/n.w,r},o.add=function(e,n,r){return t.o.typeOf.object("left",e),t.o.typeOf.object("right",n),t.o.typeOf.object("result",r),r.x=e.x+n.x,r.y=e.y+n.y,r.z=e.z+n.z,r.w=e.w+n.w,r},o.subtract=function(e,n,r){return t.o.typeOf.object("left",e),t.o.typeOf.object("right",n),t.o.typeOf.object("result",r),r.x=e.x-n.x,r.y=e.y-n.y,r.z=e.z-n.z,r.w=e.w-n.w,r},o.multiplyByScalar=function(e,n,r){return t.o.typeOf.object("cartesian",e),t.o.typeOf.number("scalar",n),t.o.typeOf.object("result",r),r.x=e.x*n,r.y=e.y*n,r.z=e.z*n,r.w=e.w*n,r},o.divideByScalar=function(e,n,r){return t.o.typeOf.object("cartesian",e),t.o.typeOf.number("scalar",n),t.o.typeOf.object("result",r),r.x=e.x/n,r.y=e.y/n,r.z=e.z/n,r.w=e.w/n,r},o.negate=function(e,n){return t.o.typeOf.object("cartesian",e),t.o.typeOf.object("result",n),n.x=-e.x,n.y=-e.y,n.z=-e.z,n.w=-e.w,n},o.abs=function(e,n){return t.o.typeOf.object("cartesian",e),t.o.typeOf.object("result",n),n.x=Math.abs(e.x),n.y=Math.abs(e.y),n.z=Math.abs(e.z),n.w=Math.abs(e.w),n};var u=new o;o.lerp=function(e,n,r,a){return t.o.typeOf.object("start",e),t.o.typeOf.object("end",n),t.o.typeOf.number("t",r),t.o.typeOf.object("result",a),o.multiplyByScalar(n,r,u),a=o.multiplyByScalar(e,1-r,a),o.add(u,a,a)};var c=new o;o.mostOrthogonalAxis=function(e,n){t.o.typeOf.object("cartesian",e),t.o.typeOf.object("result",n);var r=o.normalize(e,c);return o.abs(r,r),n=r.x<=r.y?r.x<=r.z?r.x<=r.w?o.clone(o.UNIT_X,n):o.clone(o.UNIT_W,n):r.z<=r.w?o.clone(o.UNIT_Z,n):o.clone(o.UNIT_W,n):r.y<=r.z?r.y<=r.w?o.clone(o.UNIT_Y,n):o.clone(o.UNIT_W,n):r.z<=r.w?o.clone(o.UNIT_Z,n):o.clone(o.UNIT_W,n)},o.equals=function(e,t){return e===t||n.e(e)&&n.e(t)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w},o.equalsArray=function(e,t,n){return e.x===t[n]&&e.y===t[n+1]&&e.z===t[n+2]&&e.w===t[n+3]},o.equalsEpsilon=function(e,t,o,a){return e===t||n.e(e)&&n.e(t)&&r.e.equalsEpsilon(e.x,t.x,o,a)&&r.e.equalsEpsilon(e.y,t.y,o,a)&&r.e.equalsEpsilon(e.z,t.z,o,a)&&r.e.equalsEpsilon(e.w,t.w,o,a)},o.ZERO=Object.freeze(new o(0,0,0,0)),o.UNIT_X=Object.freeze(new o(1,0,0,0)),o.UNIT_Y=Object.freeze(new o(0,1,0,0)),o.UNIT_Z=Object.freeze(new o(0,0,1,0)),o.UNIT_W=Object.freeze(new o(0,0,0,1)),o.prototype.clone=function(e){return o.clone(this,e)},o.prototype.equals=function(e){return o.equals(this,e)},o.prototype.equalsEpsilon=function(e,t,n){return o.equalsEpsilon(this,e,t,n)},o.prototype.toString=function(){return"("+this.x+", "+this.y+", "+this.z+", "+this.w+")"};var y=new Float32Array(1),i=256;o.packFloat=function(e,a){if(t.o.typeOf.number("value",e),n.e(a)||(a=new o),y[0]=e,0===(e=y[0]))return o.clone(o.ZERO,a);var u,c=e<0?1:0;isFinite(e)?(e=Math.abs(e),u=Math.floor(r.e.logBase(e,10))+1,e/=Math.pow(10,u)):(e=.1,u=38);var f=e*i;return a.x=Math.floor(f),f=(f-a.x)*i,a.y=Math.floor(f),f=(f-a.y)*i,a.z=Math.floor(f),a.w=2*(u+38)+c,a},o.unpackFloat=function(e){t.o.typeOf.object("packedFloat",e);var n=e.w/2,r=Math.floor(n),o=2*(n-r);if(o=-(o=2*o-1),(r-=38)>=38)return o<0?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY;var a=o*e.x*.00390625;return a+=o*e.y*152587890625e-16,(a+=o*e.z*5.960464477539063e-8)*Math.pow(10,r)},e.e=o}));
