/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f2a06374","./BoundingSphere-d018a565","./Cartesian4-5af5bb24","./ComponentDatatype-5862616f","./GeometryAttribute-773da12d","./PrimitiveType-97893bc7","./Transforms-f77c92da","./GeometryAttributes-aacecde6","./Plane-aa6c3ce5","./VertexFormat-fe4db402"],function(e,M,m,i,D,V,E,P,z,F,h,O,f,d){function l(e){this.planes=M.defaultValue(e,[])}var p=[new D.Cartesian3,new D.Cartesian3,new D.Cartesian3];D.Cartesian3.clone(D.Cartesian3.UNIT_X,p[0]),D.Cartesian3.clone(D.Cartesian3.UNIT_Y,p[1]),D.Cartesian3.clone(D.Cartesian3.UNIT_Z,p[2]);var c=new D.Cartesian3,C=new D.Cartesian3,u=new f.Plane(new D.Cartesian3(1,0,0),0);function a(e){e=M.defaultValue(e,M.defaultValue.EMPTY_OBJECT),this.left=e.left,this._left=void 0,this.right=e.right,this._right=void 0,this.top=e.top,this._top=void 0,this.bottom=e.bottom,this._bottom=void 0,this.near=M.defaultValue(e.near,1),this._near=this.near,this.far=M.defaultValue(e.far,5e8),this._far=this.far,this._cullingVolume=new l,this._orthographicMatrix=new V.Matrix4}function s(e){if(!(M.defined(e.right)&&M.defined(e.left)&&M.defined(e.top)&&M.defined(e.bottom)&&M.defined(e.near)&&M.defined(e.far)))throw new m.DeveloperError("right, left, top, bottom, near, or far parameters are not set.");if(e.top!==e._top||e.bottom!==e._bottom||e.left!==e._left||e.right!==e._right||e.near!==e._near||e.far!==e._far){if(e.left>e.right)throw new m.DeveloperError("right must be greater than left.");if(e.bottom>e.top)throw new m.DeveloperError("top must be greater than bottom.");if(e.near<=0||e.near>e.far)throw new m.DeveloperError("near must be greater than zero and less than far.");e._left=e.left,e._right=e.right,e._top=e.top,e._bottom=e.bottom,e._near=e.near,e._far=e.far,e._orthographicMatrix=V.Matrix4.computeOrthographicOffCenter(e.left,e.right,e.bottom,e.top,e.near,e.far,e._orthographicMatrix)}}l.fromBoundingSphere=function(e,t){if(!M.defined(e))throw new m.DeveloperError("boundingSphere is required.");M.defined(t)||(t=new l);var r=p.length,i=t.planes;i.length=2*r;for(var a=e.center,n=e.radius,o=0,s=0;s<r;++s){var f=p[s],u=i[o],h=i[o+1];M.defined(u)||(u=i[o]=new E.Cartesian4),M.defined(h)||(h=i[o+1]=new E.Cartesian4),D.Cartesian3.multiplyByScalar(f,-n,c),D.Cartesian3.add(a,c,c),u.x=f.x,u.y=f.y,u.z=f.z,u.w=-D.Cartesian3.dot(f,c),D.Cartesian3.multiplyByScalar(f,n,c),D.Cartesian3.add(a,c,c),h.x=-f.x,h.y=-f.y,h.z=-f.z,h.w=-D.Cartesian3.dot(D.Cartesian3.negate(f,C),c),o+=2}return t},l.prototype.computeVisibility=function(e){if(!M.defined(e))throw new m.DeveloperError("boundingVolume is required.");for(var t=this.planes,r=!1,i=0,a=t.length;i<a;++i){var n=e.intersectPlane(f.Plane.fromCartesian4(t[i],u));if(n===V.Intersect.OUTSIDE)return V.Intersect.OUTSIDE;n===V.Intersect.INTERSECTING&&(r=!0)}return r?V.Intersect.INTERSECTING:V.Intersect.INSIDE},l.prototype.computeVisibilityWithPlaneMask=function(e,t){if(!M.defined(e))throw new m.DeveloperError("boundingVolume is required.");if(!M.defined(t))throw new m.DeveloperError("parentPlaneMask is required.");if(t===l.MASK_OUTSIDE||t===l.MASK_INSIDE)return t;for(var r=l.MASK_INSIDE,i=this.planes,a=0,n=i.length;a<n;++a){var o=a<31?1<<a:0;if(!(a<31&&0==(t&o))){var s=e.intersectPlane(f.Plane.fromCartesian4(i[a],u));if(s===V.Intersect.OUTSIDE)return l.MASK_OUTSIDE;s===V.Intersect.INTERSECTING&&(r|=o)}}return r},l.MASK_OUTSIDE=4294967295,l.MASK_INSIDE=0,l.MASK_INDETERMINATE=2147483647,Object.defineProperties(a.prototype,{projectionMatrix:{get:function(){return s(this),this._orthographicMatrix}}});var w=new D.Cartesian3,v=new D.Cartesian3,_=new D.Cartesian3,y=new D.Cartesian3;function g(e){e=M.defaultValue(e,M.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new a,this.width=e.width,this._width=void 0,this.aspectRatio=e.aspectRatio,this._aspectRatio=void 0,this.near=M.defaultValue(e.near,1),this._near=this.near,this.far=M.defaultValue(e.far,5e8),this._far=this.far}function n(e){if(!(M.defined(e.width)&&M.defined(e.aspectRatio)&&M.defined(e.near)&&M.defined(e.far)))throw new m.DeveloperError("width, aspectRatio, near, or far parameters are not set.");var t=e._offCenterFrustum;if(e.width!==e._width||e.aspectRatio!==e._aspectRatio||e.near!==e._near||e.far!==e._far){if(e.aspectRatio<0)throw new m.DeveloperError("aspectRatio must be positive.");if(e.near<0||e.near>e.far)throw new m.DeveloperError("near must be greater than zero and less than far.");e._aspectRatio=e.aspectRatio,e._width=e.width,e._near=e.near,e._far=e.far;var r=1/e.aspectRatio;t.right=.5*e.width,t.left=-t.right,t.top=r*t.right,t.bottom=-t.top,t.near=e.near,t.far=e.far}}function o(e){e=M.defaultValue(e,M.defaultValue.EMPTY_OBJECT),this.left=e.left,this._left=void 0,this.right=e.right,this._right=void 0,this.top=e.top,this._top=void 0,this.bottom=e.bottom,this._bottom=void 0,this.near=M.defaultValue(e.near,1),this._near=this.near,this.far=M.defaultValue(e.far,5e8),this._far=this.far,this._cullingVolume=new l,this._perspectiveMatrix=new V.Matrix4,this._infinitePerspective=new V.Matrix4}function x(e){if(!(M.defined(e.right)&&M.defined(e.left)&&M.defined(e.top)&&M.defined(e.bottom)&&M.defined(e.near)&&M.defined(e.far)))throw new m.DeveloperError("right, left, top, bottom, near, or far parameters are not set.");var t=e.top,r=e.bottom,i=e.right,a=e.left,n=e.near,o=e.far;if(t!==e._top||r!==e._bottom||a!==e._left||i!==e._right||n!==e._near||o!==e._far){if(e.near<=0||e.near>e.far)throw new m.DeveloperError("near must be greater than zero and less than far.");e._left=a,e._right=i,e._top=t,e._bottom=r,e._near=n,e._far=o,e._perspectiveMatrix=V.Matrix4.computePerspectiveOffCenter(a,i,r,t,n,o,e._perspectiveMatrix),e._infinitePerspective=V.Matrix4.computeInfinitePerspectiveOffCenter(a,i,r,t,n,e._infinitePerspective)}}a.prototype.computeCullingVolume=function(e,t,r){if(!M.defined(e))throw new m.DeveloperError("position is required.");if(!M.defined(t))throw new m.DeveloperError("direction is required.");if(!M.defined(r))throw new m.DeveloperError("up is required.");var i=this._cullingVolume.planes,a=this.top,n=this.bottom,o=this.right,s=this.left,f=this.near,u=this.far,h=D.Cartesian3.cross(t,r,w);D.Cartesian3.normalize(h,h);var d=v;D.Cartesian3.multiplyByScalar(t,f,d),D.Cartesian3.add(e,d,d);var l=_;D.Cartesian3.multiplyByScalar(h,s,l),D.Cartesian3.add(d,l,l);var p=i[0];return M.defined(p)||(p=i[0]=new E.Cartesian4),p.x=h.x,p.y=h.y,p.z=h.z,p.w=-D.Cartesian3.dot(h,l),D.Cartesian3.multiplyByScalar(h,o,l),D.Cartesian3.add(d,l,l),p=i[1],M.defined(p)||(p=i[1]=new E.Cartesian4),p.x=-h.x,p.y=-h.y,p.z=-h.z,p.w=-D.Cartesian3.dot(D.Cartesian3.negate(h,y),l),D.Cartesian3.multiplyByScalar(r,n,l),D.Cartesian3.add(d,l,l),p=i[2],M.defined(p)||(p=i[2]=new E.Cartesian4),p.x=r.x,p.y=r.y,p.z=r.z,p.w=-D.Cartesian3.dot(r,l),D.Cartesian3.multiplyByScalar(r,a,l),D.Cartesian3.add(d,l,l),p=i[3],M.defined(p)||(p=i[3]=new E.Cartesian4),p.x=-r.x,p.y=-r.y,p.z=-r.z,p.w=-D.Cartesian3.dot(D.Cartesian3.negate(r,y),l),p=i[4],M.defined(p)||(p=i[4]=new E.Cartesian4),p.x=t.x,p.y=t.y,p.z=t.z,p.w=-D.Cartesian3.dot(t,d),D.Cartesian3.multiplyByScalar(t,u,l),D.Cartesian3.add(e,l,l),p=i[5],M.defined(p)||(p=i[5]=new E.Cartesian4),p.x=-t.x,p.y=-t.y,p.z=-t.z,p.w=-D.Cartesian3.dot(D.Cartesian3.negate(t,y),l),this._cullingVolume},a.prototype.getPixelDimensions=function(e,t,r,i,a){if(s(this),!M.defined(e)||!M.defined(t))throw new m.DeveloperError("Both drawingBufferWidth and drawingBufferHeight are required.");if(e<=0)throw new m.DeveloperError("drawingBufferWidth must be greater than zero.");if(t<=0)throw new m.DeveloperError("drawingBufferHeight must be greater than zero.");if(!M.defined(r))throw new m.DeveloperError("distance is required.");if(!M.defined(i))throw new m.DeveloperError("pixelRatio is required.");if(i<=0)throw new m.DeveloperError("pixelRatio must be greater than zero.");if(!M.defined(a))throw new m.DeveloperError("A result object is required.");var n=i*(this.right-this.left)/e,o=i*(this.top-this.bottom)/t;return a.x=n,a.y=o,a},a.prototype.clone=function(e){return M.defined(e)||(e=new a),e.left=this.left,e.right=this.right,e.top=this.top,e.bottom=this.bottom,e.near=this.near,e.far=this.far,e._left=void 0,e._right=void 0,e._top=void 0,e._bottom=void 0,e._near=void 0,e._far=void 0,e},a.prototype.equals=function(e){return M.defined(e)&&e instanceof a&&this.right===e.right&&this.left===e.left&&this.top===e.top&&this.bottom===e.bottom&&this.near===e.near&&this.far===e.far},a.prototype.equalsEpsilon=function(e,t,r){return e===this||M.defined(e)&&e instanceof a&&i.CesiumMath.equalsEpsilon(this.right,e.right,t,r)&&i.CesiumMath.equalsEpsilon(this.left,e.left,t,r)&&i.CesiumMath.equalsEpsilon(this.top,e.top,t,r)&&i.CesiumMath.equalsEpsilon(this.bottom,e.bottom,t,r)&&i.CesiumMath.equalsEpsilon(this.near,e.near,t,r)&&i.CesiumMath.equalsEpsilon(this.far,e.far,t,r)},g.packedLength=4,g.pack=function(e,t,r){return m.Check.typeOf.object("value",e),m.Check.defined("array",t),r=M.defaultValue(r,0),t[r++]=e.width,t[r++]=e.aspectRatio,t[r++]=e.near,t[r]=e.far,t},g.unpack=function(e,t,r){return m.Check.defined("array",e),t=M.defaultValue(t,0),M.defined(r)||(r=new g),r.width=e[t++],r.aspectRatio=e[t++],r.near=e[t++],r.far=e[t],r},Object.defineProperties(g.prototype,{projectionMatrix:{get:function(){return n(this),this._offCenterFrustum.projectionMatrix}}}),g.prototype.computeCullingVolume=function(e,t,r){return n(this),this._offCenterFrustum.computeCullingVolume(e,t,r)},g.prototype.getPixelDimensions=function(e,t,r,i,a){return n(this),this._offCenterFrustum.getPixelDimensions(e,t,r,i,a)},g.prototype.clone=function(e){return M.defined(e)||(e=new g),e.aspectRatio=this.aspectRatio,e.width=this.width,e.near=this.near,e.far=this.far,e._aspectRatio=void 0,e._width=void 0,e._near=void 0,e._far=void 0,this._offCenterFrustum.clone(e._offCenterFrustum),e},g.prototype.equals=function(e){return!!(M.defined(e)&&e instanceof g)&&(n(this),n(e),this.width===e.width&&this.aspectRatio===e.aspectRatio&&this._offCenterFrustum.equals(e._offCenterFrustum))},g.prototype.equalsEpsilon=function(e,t,r){return!!(M.defined(e)&&e instanceof g)&&(n(this),n(e),i.CesiumMath.equalsEpsilon(this.width,e.width,t,r)&&i.CesiumMath.equalsEpsilon(this.aspectRatio,e.aspectRatio,t,r)&&this._offCenterFrustum.equalsEpsilon(e._offCenterFrustum,t,r))},Object.defineProperties(o.prototype,{projectionMatrix:{get:function(){return x(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return x(this),this._infinitePerspective}}});var b=new D.Cartesian3,R=new D.Cartesian3,k=new D.Cartesian3,q=new D.Cartesian3;function S(e){e=M.defaultValue(e,M.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new o,this.fov=e.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=e.aspectRatio,this._aspectRatio=void 0,this.near=M.defaultValue(e.near,1),this._near=this.near,this.far=M.defaultValue(e.far,5e8),this._far=this.far,this.xOffset=M.defaultValue(e.xOffset,0),this._xOffset=this.xOffset,this.yOffset=M.defaultValue(e.yOffset,0),this._yOffset=this.yOffset,this.reflect=!1}function T(e){if(!(M.defined(e.fov)&&M.defined(e.aspectRatio)&&M.defined(e.near)&&M.defined(e.far)))throw new m.DeveloperError("fov, aspectRatio, near, or far parameters are not set.");var t=e._offCenterFrustum;if(e.fov!==e._fov||e.aspectRatio!==e._aspectRatio||e.near!==e._near||e.far!==e._far||e.xOffset!==e._xOffset||e.yOffset!==e._yOffset){if(e.fov<0||e.fov>=Math.PI)throw new m.DeveloperError("fov must be in the range [0, PI).");if(e.aspectRatio<0)throw new m.DeveloperError("aspectRatio must be positive.");if(e.near<0||e.near>e.far)throw new m.DeveloperError("near must be greater than zero and less than far.");e._aspectRatio=e.aspectRatio,e._fov=e.fov,e._fovy=e.aspectRatio<=1?e.fov:2*Math.atan(Math.tan(.5*e.fov)/e.aspectRatio),e._near=e.near,e._far=e.far,e._sseDenominator=2*Math.tan(.5*e._fovy),e._xOffset=e.xOffset,e._yOffset=e.yOffset,t.top=e.near*Math.tan(.5*e._fovy),t.bottom=-t.top,t.right=e.aspectRatio*t.top,t.left=-t.right,t.near=e.near,t.far=e.far,t.right+=e.xOffset,t.left+=e.xOffset,t.top+=e.yOffset,t.bottom+=e.yOffset}}o.prototype.resetProjectionMatrix=function(){if(!(M.defined(this.right)&&M.defined(this.left)&&M.defined(this.top)&&M.defined(this.bottom)&&M.defined(this.near)&&M.defined(this.far)))throw new m.DeveloperError("right, left, top, bottom, near, or far parameters are not set.");var e=this.top,t=this.bottom,r=this.right,i=this.left,a=this.near,n=this.far;if(this.near<=0||this.near>this.far)throw new m.DeveloperError("near must be greater than zero and less than far.");this._left=i,this._right=r,this._top=e,this._bottom=t,this._near=a,this._far=n,this._perspectiveMatrix=V.Matrix4.computePerspectiveOffCenter(i,r,t,e,a,n,this._perspectiveMatrix),this._infinitePerspective=V.Matrix4.computeInfinitePerspectiveOffCenter(i,r,t,e,a,this._infinitePerspective)},o.prototype.computeCullingVolume=function(e,t,r){if(!M.defined(e))throw new m.DeveloperError("position is required.");if(!M.defined(t))throw new m.DeveloperError("direction is required.");if(!M.defined(r))throw new m.DeveloperError("up is required.");var i=this._cullingVolume.planes,a=this.top,n=this.bottom,o=this.right,s=this.left,f=this.near,u=this.far,h=D.Cartesian3.cross(t,r,b),d=R;D.Cartesian3.multiplyByScalar(t,f,d),D.Cartesian3.add(e,d,d);var l=k;D.Cartesian3.multiplyByScalar(t,u,l),D.Cartesian3.add(e,l,l);var p=q;D.Cartesian3.multiplyByScalar(h,s,p),D.Cartesian3.add(d,p,p),D.Cartesian3.subtract(p,e,p),D.Cartesian3.normalize(p,p),D.Cartesian3.cross(p,r,p),D.Cartesian3.normalize(p,p);var c=i[0];return M.defined(c)||(c=i[0]=new E.Cartesian4),c.x=p.x,c.y=p.y,c.z=p.z,c.w=-D.Cartesian3.dot(p,e),D.Cartesian3.multiplyByScalar(h,o,p),D.Cartesian3.add(d,p,p),D.Cartesian3.subtract(p,e,p),D.Cartesian3.cross(r,p,p),D.Cartesian3.normalize(p,p),c=i[1],M.defined(c)||(c=i[1]=new E.Cartesian4),c.x=p.x,c.y=p.y,c.z=p.z,c.w=-D.Cartesian3.dot(p,e),D.Cartesian3.multiplyByScalar(r,n,p),D.Cartesian3.add(d,p,p),D.Cartesian3.subtract(p,e,p),D.Cartesian3.cross(h,p,p),D.Cartesian3.normalize(p,p),c=i[2],M.defined(c)||(c=i[2]=new E.Cartesian4),c.x=p.x,c.y=p.y,c.z=p.z,c.w=-D.Cartesian3.dot(p,e),D.Cartesian3.multiplyByScalar(r,a,p),D.Cartesian3.add(d,p,p),D.Cartesian3.subtract(p,e,p),D.Cartesian3.cross(p,h,p),D.Cartesian3.normalize(p,p),c=i[3],M.defined(c)||(c=i[3]=new E.Cartesian4),c.x=p.x,c.y=p.y,c.z=p.z,c.w=-D.Cartesian3.dot(p,e),c=i[4],M.defined(c)||(c=i[4]=new E.Cartesian4),c.x=t.x,c.y=t.y,c.z=t.z,c.w=-D.Cartesian3.dot(t,d),D.Cartesian3.negate(t,p),c=i[5],M.defined(c)||(c=i[5]=new E.Cartesian4),c.x=p.x,c.y=p.y,c.z=p.z,c.w=-D.Cartesian3.dot(p,l),this._cullingVolume},o.prototype.getPixelDimensions=function(e,t,r,i,a){if(x(this),!M.defined(e)||!M.defined(t))throw new m.DeveloperError("Both drawingBufferWidth and drawingBufferHeight are required.");if(e<=0)throw new m.DeveloperError("drawingBufferWidth must be greater than zero.");if(t<=0)throw new m.DeveloperError("drawingBufferHeight must be greater than zero.");if(!M.defined(r))throw new m.DeveloperError("distance is required.");if(!M.defined(i))throw new m.DeveloperError("pixelRatio is required");if(i<=0)throw new m.DeveloperError("pixelRatio must be greater than zero.");if(!M.defined(a))throw new m.DeveloperError("A result object is required.");var n=1/this.near,o=this.top*n,s=2*i*r*o/t,f=2*i*r*(o=this.right*n)/e;return a.x=f,a.y=s,a},o.prototype.clone=function(e){return M.defined(e)||(e=new o),e.right=this.right,e.left=this.left,e.top=this.top,e.bottom=this.bottom,e.near=this.near,e.far=this.far,e._left=void 0,e._right=void 0,e._top=void 0,e._bottom=void 0,e._near=void 0,e._far=void 0,e},o.prototype.equals=function(e){return M.defined(e)&&e instanceof o&&this.right===e.right&&this.left===e.left&&this.top===e.top&&this.bottom===e.bottom&&this.near===e.near&&this.far===e.far},o.prototype.equalsEpsilon=function(e,t,r){return e===this||M.defined(e)&&e instanceof o&&i.CesiumMath.equalsEpsilon(this.right,e.right,t,r)&&i.CesiumMath.equalsEpsilon(this.left,e.left,t,r)&&i.CesiumMath.equalsEpsilon(this.top,e.top,t,r)&&i.CesiumMath.equalsEpsilon(this.bottom,e.bottom,t,r)&&i.CesiumMath.equalsEpsilon(this.near,e.near,t,r)&&i.CesiumMath.equalsEpsilon(this.far,e.far,t,r)},S.packedLength=6,S.pack=function(e,t,r){return m.Check.typeOf.object("value",e),m.Check.defined("array",t),r=M.defaultValue(r,0),t[r++]=e.fov,t[r++]=e.aspectRatio,t[r++]=e.near,t[r++]=e.far,t[r++]=e.xOffset,t[r]=e.yOffset,t},S.unpack=function(e,t,r){return m.Check.defined("array",e),t=M.defaultValue(t,0),M.defined(r)||(r=new S),r.fov=e[t++],r.aspectRatio=e[t++],r.near=e[t++],r.far=e[t++],r.xOffset=e[t++],r.yOffset=e[t],r},Object.defineProperties(S.prototype,{projectionMatrix:{get:function(){return T(this),this.reflect&&function(e){if(!M.defined(e.clipPlane)||!M.defined(e.currentViewMatrix))return;var t=e.currentViewMatrix,r=e._offCenterFrustum.projectionMatrix;V.Matrix4.multiplyByPlane(t,e.clipPlane,A),B.x=(i.CesiumMath.sign(A.normal.x)+r[8])/r[0],B.y=(i.CesiumMath.sign(A.normal.y)+r[9])/r[5],B.z=-1,B.w=(1+r[10])/r[14],I.x=A.normal.x,I.y=A.normal.y,I.z=A.normal.z,I.w=A.distance,E.Cartesian4.multiplyByScalar(I,2/E.Cartesian4.dot(I,B),j),r[2]=j.x,r[6]=j.y,r[10]=j.z+1,r[14]=j.w}(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return T(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return T(this),this._fovy}},sseDenominator:{get:function(){return T(this),this._sseDenominator}}}),S.prototype.resetProjectionMatrix=function(){return this._offCenterFrustum.resetProjectionMatrix()},S.prototype.computeCullingVolume=function(e,t,r){return T(this),this._offCenterFrustum.computeCullingVolume(e,t,r)},S.prototype.getPixelDimensions=function(e,t,r,i,a){return T(this),this._offCenterFrustum.getPixelDimensions(e,t,r,i,a)},S.prototype.clone=function(e){return M.defined(e)||(e=new S),e.aspectRatio=this.aspectRatio,e.fov=this.fov,e.near=this.near,e.far=this.far,e.reflect=this.reflect,e.clipPlane=this.clipPlane,e.currentViewMatrix=this.currentViewMatrix,e._aspectRatio=void 0,e._fov=void 0,e._near=void 0,e._far=void 0,this._offCenterFrustum.clone(e._offCenterFrustum),e},S.prototype.equals=function(e){return!!(M.defined(e)&&e instanceof S)&&(T(this),T(e),this.fov===e.fov&&this.aspectRatio===e.aspectRatio&&this._offCenterFrustum.equals(e._offCenterFrustum))},S.prototype.equalsEpsilon=function(e,t,r){return!!(M.defined(e)&&e instanceof S)&&(T(this),T(e),i.CesiumMath.equalsEpsilon(this.fov,e.fov,t,r)&&i.CesiumMath.equalsEpsilon(this.aspectRatio,e.aspectRatio,t,r)&&this._offCenterFrustum.equalsEpsilon(e._offCenterFrustum,t,r))};var A=new f.Plane(D.Cartesian3.UNIT_Z,1),B=new E.Cartesian4,I=new E.Cartesian4,j=new E.Cartesian4;function N(e){m.Check.typeOf.object("options",e),m.Check.typeOf.object("options.frustum",e.frustum),m.Check.typeOf.object("options.origin",e.origin),m.Check.typeOf.object("options.orientation",e.orientation);var t,r,i=e.frustum,a=e.orientation,n=e.origin,o=M.defaultValue(e.vertexFormat,d.VertexFormat.DEFAULT),s=M.defaultValue(e._drawNearPlane,!0);i instanceof S?(t=0,r=S.packedLength):i instanceof g&&(t=1,r=g.packedLength),this._frustumType=t,this._frustum=i.clone(),this._origin=D.Cartesian3.clone(n),this._orientation=h.Quaternion.clone(a),this._drawNearPlane=s,this._vertexFormat=o,this._workerName="createFrustumGeometry",this.packedLength=2+r+D.Cartesian3.packedLength+h.Quaternion.packedLength+d.VertexFormat.packedLength}N.pack=function(e,t,r){m.Check.typeOf.object("value",e),m.Check.defined("array",t),r=M.defaultValue(r,0);var i=e._frustumType,a=e._frustum;return 0===(t[r++]=i)?(S.pack(a,t,r),r+=S.packedLength):(g.pack(a,t,r),r+=g.packedLength),D.Cartesian3.pack(e._origin,t,r),r+=D.Cartesian3.packedLength,h.Quaternion.pack(e._orientation,t,r),r+=h.Quaternion.packedLength,d.VertexFormat.pack(e._vertexFormat,t,r),t[r+=d.VertexFormat.packedLength]=e._drawNearPlane?1:0,t};var L=new S,G=new g,U=new h.Quaternion,Q=new D.Cartesian3,K=new d.VertexFormat;function W(e,t,r,i,a,n,o,s){for(var f=e/3*2,u=0;u<4;++u)M.defined(t)&&(t[e]=n.x,t[e+1]=n.y,t[e+2]=n.z),M.defined(r)&&(r[e]=o.x,r[e+1]=o.y,r[e+2]=o.z),M.defined(i)&&(i[e]=s.x,i[e+1]=s.y,i[e+2]=s.z),e+=3;a[f]=0,a[f+1]=0,a[f+2]=1,a[f+3]=0,a[f+4]=1,a[f+5]=1,a[f+6]=0,a[f+7]=1}N.unpack=function(e,t,r){m.Check.defined("array",e),t=M.defaultValue(t,0);var i,a=e[t++];0===a?(i=S.unpack(e,t,L),t+=S.packedLength):(i=g.unpack(e,t,G),t+=g.packedLength);var n=D.Cartesian3.unpack(e,t,Q);t+=D.Cartesian3.packedLength;var o=h.Quaternion.unpack(e,t,U);t+=h.Quaternion.packedLength;var s=d.VertexFormat.unpack(e,t,K),f=1===e[t+=d.VertexFormat.packedLength];if(!M.defined(r))return new N({frustum:i,origin:n,orientation:o,vertexFormat:s,_drawNearPlane:f});var u=a===r._frustumType?r._frustum:void 0;return r._frustum=i.clone(u),r._frustumType=a,r._origin=D.Cartesian3.clone(n,r._origin),r._orientation=h.Quaternion.clone(o,r._orientation),r._vertexFormat=d.VertexFormat.clone(s,r._vertexFormat),r._drawNearPlane=f,r};var Y=new V.Matrix3,H=new V.Matrix4,J=new V.Matrix4,Z=new D.Cartesian3,X=new D.Cartesian3,$=new D.Cartesian3,ee=new D.Cartesian3,te=new D.Cartesian3,re=new D.Cartesian3,ie=new Array(3),ae=new Array(4);ae[0]=new E.Cartesian4(-1,-1,1,1),ae[1]=new E.Cartesian4(1,-1,1,1),ae[2]=new E.Cartesian4(1,1,1,1),ae[3]=new E.Cartesian4(-1,1,1,1);for(var ne=new Array(4),t=0;t<4;++t)ne[t]=new E.Cartesian4;N._computeNearFarPlanes=function(e,t,r,i,a,n,o,s){var f=V.Matrix3.fromQuaternion(t,Y),u=M.defaultValue(n,Z),h=M.defaultValue(o,X),d=M.defaultValue(s,$);u=V.Matrix3.getColumn(f,0,u),h=V.Matrix3.getColumn(f,1,h),d=V.Matrix3.getColumn(f,2,d),D.Cartesian3.normalize(u,u),D.Cartesian3.normalize(h,h),D.Cartesian3.normalize(d,d),D.Cartesian3.negate(u,u);var l,p,c=V.Matrix4.computeView(e,d,h,u,H);if(0===r){var m=i.projectionMatrix,C=V.Matrix4.multiply(m,c,J);p=V.Matrix4.inverse(C,J)}else l=V.Matrix4.inverseTransformation(c,J);M.defined(p)?(ie[0]=i.near,ie[1]=i.far):(ie[0]=0,ie[1]=i.near,ie[2]=i.far);for(var w=0;w<2;++w)for(var v=0;v<4;++v){var _=E.Cartesian4.clone(ae[v],ne[v]);if(M.defined(p)){var y=1/(_=V.Matrix4.multiplyByVector(p,_,_)).w;D.Cartesian3.multiplyByScalar(_,y,_),D.Cartesian3.subtract(_,e,_),D.Cartesian3.normalize(_,_);var g=D.Cartesian3.dot(d,_);D.Cartesian3.multiplyByScalar(_,ie[w]/g,_),D.Cartesian3.add(_,e,_)}else{M.defined(i._offCenterFrustum)&&(i=i._offCenterFrustum);var x=ie[w],b=ie[w+1];_.x=.5*(_.x*(i.right-i.left)+i.left+i.right),_.y=.5*(_.y*(i.top-i.bottom)+i.bottom+i.top),_.z=.5*(_.z*(x-b)-x-b),_.w=1,V.Matrix4.multiplyByVector(l,_,_)}a[12*w+3*v]=_.x,a[12*w+3*v+1]=_.y,a[12*w+3*v+2]=_.z}},N.createGeometry=function(e){var t=e._frustumType,r=e._frustum,i=e._origin,a=e._orientation,n=e._drawNearPlane,o=e._vertexFormat,s=n?6:5,f=new Float64Array(72);N._computeNearFarPlanes(i,a,t,r,f);var u=24;f[u]=f[12],f[u+1]=f[13],f[u+2]=f[14],f[u+3]=f[0],f[u+4]=f[1],f[u+5]=f[2],f[u+6]=f[9],f[u+7]=f[10],f[u+8]=f[11],f[u+9]=f[21],f[u+10]=f[22],f[u+11]=f[23],f[u+=12]=f[15],f[u+1]=f[16],f[u+2]=f[17],f[u+3]=f[3],f[u+4]=f[4],f[u+5]=f[5],f[u+6]=f[0],f[u+7]=f[1],f[u+8]=f[2],f[u+9]=f[12],f[u+10]=f[13],f[u+11]=f[14],f[u+=12]=f[3],f[u+1]=f[4],f[u+2]=f[5],f[u+3]=f[15],f[u+4]=f[16],f[u+5]=f[17],f[u+6]=f[18],f[u+7]=f[19],f[u+8]=f[20],f[u+9]=f[6],f[u+10]=f[7],f[u+11]=f[8],f[u+=12]=f[6],f[u+1]=f[7],f[u+2]=f[8],f[u+3]=f[18],f[u+4]=f[19],f[u+5]=f[20],f[u+6]=f[21],f[u+7]=f[22],f[u+8]=f[23],f[u+9]=f[9],f[u+10]=f[10],f[u+11]=f[11],n||(f=f.subarray(12));var h=new O.GeometryAttributes({position:new z.GeometryAttribute({componentDatatype:P.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f})});if(M.defined(o.normal)||M.defined(o.tangent)||M.defined(o.bitangent)||M.defined(o.st)){var d=M.defined(o.normal)?new Float32Array(12*s):void 0,l=M.defined(o.tangent)?new Float32Array(12*s):void 0,p=M.defined(o.bitangent)?new Float32Array(12*s):void 0,c=M.defined(o.st)?new Float32Array(8*s):void 0,m=Z,C=X,w=$,v=D.Cartesian3.negate(m,ee),_=D.Cartesian3.negate(C,te),y=D.Cartesian3.negate(w,re);u=0,n&&(W(u,d,l,p,c,y,m,C),u+=12),W(u,d,l,p,c,w,v,C),W(u+=12,d,l,p,c,v,y,C),W(u+=12,d,l,p,c,_,y,v),W(u+=12,d,l,p,c,m,w,C),W(u+=12,d,l,p,c,C,w,v),M.defined(d)&&(h.normal=new z.GeometryAttribute({componentDatatype:P.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:d})),M.defined(l)&&(h.tangent=new z.GeometryAttribute({componentDatatype:P.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:l})),M.defined(p)&&(h.bitangent=new z.GeometryAttribute({componentDatatype:P.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:p})),M.defined(c)&&(h.st=new z.GeometryAttribute({componentDatatype:P.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:c}))}for(var g=new Uint16Array(6*s),x=0;x<s;++x){var b=6*x,E=4*x;g[b]=E,g[b+1]=E+1,g[b+2]=E+2,g[b+3]=E,g[b+4]=E+2,g[b+5]=E+3}return new z.Geometry({attributes:h,indices:g,primitiveType:F.PrimitiveType.TRIANGLES,boundingSphere:V.BoundingSphere.fromVertices(f)})},e.FrustumGeometry=N,e.OrthographicFrustum=g,e.PerspectiveFrustum=S});