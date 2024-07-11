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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f2a06374","./Cartesian2-16a61632","./BoundingSphere-d018a565","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-773da12d","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-f77c92da","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./IndexDatatype-9435b55f","./IntersectionTests-813bb943","./Plane-aa6c3ce5","./EllipsoidTangentPlane-e82c480a","./EllipsoidRhumbLine-87f26cac","./earcut-2.2.1-b404d9e6","./PolygonPipeline-6175e66b","./EllipsoidGeodesic-9ef071e0","./PolylinePipeline-f937854b","./WallGeometryLibrary-3e7cd488"],function(k,m,D,x,p,G,e,i,t,L,T,V,r,n,a,S,I,o,s,l,d,u,f,h,g,q){var M=new x.Cartesian3,R=new x.Cartesian3;function c(e){var i=(e=k.defaultValue(e,k.defaultValue.EMPTY_OBJECT)).positions,t=e.maximumHeights,r=e.minimumHeights;if(!k.defined(i))throw new m.DeveloperError("options.positions is required.");if(k.defined(t)&&t.length!==i.length)throw new m.DeveloperError("options.positions and options.maximumHeights must have the same length.");if(k.defined(r)&&r.length!==i.length)throw new m.DeveloperError("options.positions and options.minimumHeights must have the same length.");var n=k.defaultValue(e.granularity,D.CesiumMath.RADIANS_PER_DEGREE),a=k.defaultValue(e.ellipsoid,p.Ellipsoid.WGS84);this._positions=i,this._minimumHeights=r,this._maximumHeights=t,this._granularity=n,this._ellipsoid=p.Ellipsoid.clone(a),this._workerName="createWallOutlineGeometry";var o=1+i.length*x.Cartesian3.packedLength+2;k.defined(r)&&(o+=r.length),k.defined(t)&&(o+=t.length),this.packedLength=o+p.Ellipsoid.packedLength+1}c.pack=function(e,i,t){if(!k.defined(e))throw new m.DeveloperError("value is required");if(!k.defined(i))throw new m.DeveloperError("array is required");var r;t=k.defaultValue(t,0);var n=e._positions,a=n.length;for(i[t++]=a,r=0;r<a;++r,t+=x.Cartesian3.packedLength)x.Cartesian3.pack(n[r],i,t);var o=e._minimumHeights;if(a=k.defined(o)?o.length:0,i[t++]=a,k.defined(o))for(r=0;r<a;++r)i[t++]=o[r];var s=e._maximumHeights;if(a=k.defined(s)?s.length:0,i[t++]=a,k.defined(s))for(r=0;r<a;++r)i[t++]=s[r];return p.Ellipsoid.pack(e._ellipsoid,i,t),i[t+=p.Ellipsoid.packedLength]=e._granularity,i};var y=p.Ellipsoid.clone(p.Ellipsoid.UNIT_SPHERE),v={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:y,granularity:void 0};return c.unpack=function(e,i,t){if(!k.defined(e))throw new m.DeveloperError("array is required");var r;i=k.defaultValue(i,0);var n,a,o=e[i++],s=new Array(o);for(r=0;r<o;++r,i+=x.Cartesian3.packedLength)s[r]=x.Cartesian3.unpack(e,i);if(0<(o=e[i++]))for(n=new Array(o),r=0;r<o;++r)n[r]=e[i++];if(0<(o=e[i++]))for(a=new Array(o),r=0;r<o;++r)a[r]=e[i++];var l=p.Ellipsoid.unpack(e,i,y),d=e[i+=p.Ellipsoid.packedLength];return k.defined(t)?(t._positions=s,t._minimumHeights=n,t._maximumHeights=a,t._ellipsoid=p.Ellipsoid.clone(l,t._ellipsoid),t._granularity=d,t):(v.positions=s,v.minimumHeights=n,v.maximumHeights=a,v.granularity=d,new c(v))},c.fromConstantHeights=function(e){var i,t,r=(e=k.defaultValue(e,k.defaultValue.EMPTY_OBJECT)).positions;if(!k.defined(r))throw new m.DeveloperError("options.positions is required.");var n=e.minimumHeight,a=e.maximumHeight,o=k.defined(n),s=k.defined(a);if(o||s){var l=r.length;i=o?new Array(l):void 0,t=s?new Array(l):void 0;for(var d=0;d<l;++d)o&&(i[d]=n),s&&(t[d]=a)}return new c({positions:r,maximumHeights:t,minimumHeights:i,ellipsoid:e.ellipsoid})},c.createGeometry=function(e){var i=e._positions,t=e._minimumHeights,r=e._maximumHeights,n=e._granularity,a=e._ellipsoid,o=q.WallGeometryLibrary.computePositions(a,i,r,t,n,!1);if(k.defined(o)){var s,l=o.pos.bottomPositions,d=o.pos.topPositions,m=d.length,p=2*m,u=new Float64Array(p),f=0;for(m/=3,s=0;s<m;++s){var h=3*s,g=x.Cartesian3.fromArray(d,h,M),c=x.Cartesian3.fromArray(l,h,R);u[f++]=c.x,u[f++]=c.y,u[f++]=c.z,u[f++]=g.x,u[f++]=g.y,u[f++]=g.z}var y=new S.GeometryAttributes({position:new T.GeometryAttribute({componentDatatype:L.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})}),v=p/3;p=2*v-4+v;var E=I.IndexDatatype.createTypedArray(v,p),w=0;for(s=0;s<v-2;s+=2){var _=s,b=s+2,C=x.Cartesian3.fromArray(u,3*_,M),H=x.Cartesian3.fromArray(u,3*b,R);if(!x.Cartesian3.equalsEpsilon(C,H,D.CesiumMath.EPSILON10)){var A=s+1,P=s+3;E[w++]=A,E[w++]=_,E[w++]=A,E[w++]=P,E[w++]=_,E[w++]=b}}return E[w++]=v-2,E[w++]=v-1,new T.Geometry({attributes:y,indices:E,primitiveType:V.PrimitiveType.LINES,boundingSphere:new G.BoundingSphere.fromVertices(u)})}},function(e,i){return k.defined(i)&&(e=c.unpack(e,i)),e._ellipsoid=p.Ellipsoid.clone(e._ellipsoid),c.createGeometry(e)}});