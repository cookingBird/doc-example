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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f2a06374","./Cartesian2-16a61632","./BoundingSphere-d018a565","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-773da12d","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-f77c92da","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./Plane-aa6c3ce5","./VertexFormat-fe4db402","./FrustumGeometry-c8861563"],function(s,p,e,m,t,h,r,n,a,f,g,k,i,d,u,y,o,c,_){var l=0,b=1;function v(e){p.Check.typeOf.object("options",e),p.Check.typeOf.object("options.frustum",e.frustum),p.Check.typeOf.object("options.origin",e.origin),p.Check.typeOf.object("options.orientation",e.orientation);var t,r,n=e.frustum,a=e.orientation,i=e.origin,u=s.defaultValue(e._drawNearPlane,!0);n instanceof _.PerspectiveFrustum?(t=l,r=_.PerspectiveFrustum.packedLength):n instanceof _.OrthographicFrustum&&(t=b,r=_.OrthographicFrustum.packedLength),this._frustumType=t,this._frustum=n.clone(),this._origin=m.Cartesian3.clone(i),this._orientation=d.Quaternion.clone(a),this._drawNearPlane=u,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+r+m.Cartesian3.packedLength+d.Quaternion.packedLength}v.pack=function(e,t,r){p.Check.typeOf.object("value",e),p.Check.defined("array",t),r=s.defaultValue(r,0);var n=e._frustumType,a=e._frustum;return(t[r++]=n)===l?(_.PerspectiveFrustum.pack(a,t,r),r+=_.PerspectiveFrustum.packedLength):(_.OrthographicFrustum.pack(a,t,r),r+=_.OrthographicFrustum.packedLength),m.Cartesian3.pack(e._origin,t,r),r+=m.Cartesian3.packedLength,d.Quaternion.pack(e._orientation,t,r),t[r+=d.Quaternion.packedLength]=e._drawNearPlane?1:0,t};var C=new _.PerspectiveFrustum,F=new _.OrthographicFrustum,w=new d.Quaternion,P=new m.Cartesian3;return v.unpack=function(e,t,r){p.Check.defined("array",e),t=s.defaultValue(t,0);var n,a=e[t++];a===l?(n=_.PerspectiveFrustum.unpack(e,t,C),t+=_.PerspectiveFrustum.packedLength):(n=_.OrthographicFrustum.unpack(e,t,F),t+=_.OrthographicFrustum.packedLength);var i=m.Cartesian3.unpack(e,t,P);t+=m.Cartesian3.packedLength;var u=d.Quaternion.unpack(e,t,w),o=1===e[t+=d.Quaternion.packedLength];if(!s.defined(r))return new v({frustum:n,origin:i,orientation:u,_drawNearPlane:o});var c=a===r._frustumType?r._frustum:void 0;return r._frustum=n.clone(c),r._frustumType=a,r._origin=m.Cartesian3.clone(i,r._origin),r._orientation=d.Quaternion.clone(u,r._orientation),r._drawNearPlane=o,r},v.createGeometry=function(e){var t=e._frustumType,r=e._frustum,n=e._origin,a=e._orientation,i=e._drawNearPlane,u=new Float64Array(24);_.FrustumGeometry._computeNearFarPlanes(n,a,t,r,u);for(var o,c,s=new y.GeometryAttributes({position:new g.GeometryAttribute({componentDatatype:f.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})}),p=i?2:1,m=new Uint16Array(8*(p+1)),d=i?0:1;d<2;++d)c=4*d,m[o=i?8*d:0]=c,m[o+1]=c+1,m[o+2]=c+1,m[o+3]=c+2,m[o+4]=c+2,m[o+5]=c+3,m[o+6]=c+3,m[o+7]=c;for(d=0;d<2;++d)c=4*d,m[o=8*(p+d)]=c,m[o+1]=c+4,m[o+2]=c+1,m[o+3]=c+5,m[o+4]=c+2,m[o+5]=c+6,m[o+6]=c+3,m[o+7]=c+7;return new g.Geometry({attributes:s,indices:m,primitiveType:k.PrimitiveType.LINES,boundingSphere:h.BoundingSphere.fromVertices(u)})},function(e,t){return s.defined(t)&&(e=v.unpack(e,t)),v.createGeometry(e)}});