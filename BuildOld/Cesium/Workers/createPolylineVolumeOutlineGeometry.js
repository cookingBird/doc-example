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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f2a06374","./Cartesian2-16a61632","./BoundingSphere-d018a565","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-773da12d","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-f77c92da","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./IndexDatatype-9435b55f","./IntersectionTests-813bb943","./Plane-aa6c3ce5","./arrayRemoveDuplicates-2869246d","./BoundingRectangle-5c75c80b","./EllipsoidTangentPlane-e82c480a","./EllipsoidRhumbLine-87f26cac","./earcut-2.2.1-b404d9e6","./PolygonPipeline-6175e66b","./PolylineVolumeGeometryLibrary-44de161b","./EllipsoidGeodesic-9ef071e0","./PolylinePipeline-f937854b"],function(d,u,t,c,y,h,e,i,r,f,g,v,n,a,o,m,E,l,s,p,b,P,_,C,k,D,w,L){function T(e){var i=(e=d.defaultValue(e,d.defaultValue.EMPTY_OBJECT)).polylinePositions,r=e.shapePositions;if(!d.defined(i))throw new u.DeveloperError("options.polylinePositions is required.");if(!d.defined(r))throw new u.DeveloperError("options.shapePositions is required.");this._positions=i,this._shape=r,this._ellipsoid=y.Ellipsoid.clone(d.defaultValue(e.ellipsoid,y.Ellipsoid.WGS84)),this._cornerType=d.defaultValue(e.cornerType,D.CornerType.ROUNDED),this._granularity=d.defaultValue(e.granularity,t.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";var n=1+i.length*c.Cartesian3.packedLength;n+=1+r.length*y.Cartesian2.packedLength,this.packedLength=n+y.Ellipsoid.packedLength+2}T.pack=function(e,i,r){if(!d.defined(e))throw new u.DeveloperError("value is required");if(!d.defined(i))throw new u.DeveloperError("array is required");var n;r=d.defaultValue(r,0);var t=e._positions,a=t.length;for(i[r++]=a,n=0;n<a;++n,r+=c.Cartesian3.packedLength)c.Cartesian3.pack(t[n],i,r);var o=e._shape;for(a=o.length,i[r++]=a,n=0;n<a;++n,r+=y.Cartesian2.packedLength)y.Cartesian2.pack(o[n],i,r);return y.Ellipsoid.pack(e._ellipsoid,i,r),r+=y.Ellipsoid.packedLength,i[r++]=e._cornerType,i[r]=e._granularity,i};var G=y.Ellipsoid.clone(y.Ellipsoid.UNIT_SPHERE),R={polylinePositions:void 0,shapePositions:void 0,ellipsoid:G,height:void 0,cornerType:void 0,granularity:void 0};T.unpack=function(e,i,r){if(!d.defined(e))throw new u.DeveloperError("array is required");var n;i=d.defaultValue(i,0);var t=e[i++],a=new Array(t);for(n=0;n<t;++n,i+=c.Cartesian3.packedLength)a[n]=c.Cartesian3.unpack(e,i);t=e[i++];var o=new Array(t);for(n=0;n<t;++n,i+=y.Cartesian2.packedLength)o[n]=y.Cartesian2.unpack(e,i);var l=y.Ellipsoid.unpack(e,i,G);i+=y.Ellipsoid.packedLength;var s=e[i++],p=e[i];return d.defined(r)?(r._positions=a,r._shape=o,r._ellipsoid=y.Ellipsoid.clone(l,r._ellipsoid),r._cornerType=s,r._granularity=p,r):(R.polylinePositions=a,R.shapePositions=o,R.cornerType=s,R.granularity=p,new T(R))};var V=new b.BoundingRectangle;return T.createGeometry=function(e){var i=e._positions,r=p.arrayRemoveDuplicates(i,c.Cartesian3.equalsEpsilon),n=e._shape;if(n=D.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(n),!(r.length<2||n.length<3)){k.PolygonPipeline.computeWindingOrder2D(n)===k.WindingOrder.CLOCKWISE&&n.reverse();var t=b.BoundingRectangle.fromPoints(n,V);return function(e,i){var r=new m.GeometryAttributes;r.position=new g.GeometryAttribute({componentDatatype:f.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});var n,t,a=i.length,o=r.position.values.length/3,l=e.length/3/a,s=E.IndexDatatype.createTypedArray(o,2*a*(l+1)),p=0,d=(n=0)*a;for(t=0;t<a-1;t++)s[p++]=t+d,s[p++]=t+d+1;for(s[p++]=a-1+d,s[p++]=d,d=(n=l-1)*a,t=0;t<a-1;t++)s[p++]=t+d,s[p++]=t+d+1;for(s[p++]=a-1+d,s[p++]=d,n=0;n<l-1;n++){var u=a*n,c=u+a;for(t=0;t<a;t++)s[p++]=t+u,s[p++]=t+c}return new g.Geometry({attributes:r,indices:E.IndexDatatype.createTypedArray(o,s),boundingSphere:h.BoundingSphere.fromVertices(e),primitiveType:v.PrimitiveType.LINES})}(D.PolylineVolumeGeometryLibrary.computePositions(r,n,t,e,!1),n)}},function(e,i){return d.defined(i)&&(e=T.unpack(e,i)),e._ellipsoid=y.Ellipsoid.clone(e._ellipsoid),T.createGeometry(e)}});