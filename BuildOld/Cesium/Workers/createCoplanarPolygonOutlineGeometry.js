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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f2a06374","./Cartesian2-16a61632","./BoundingSphere-d018a565","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-773da12d","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-f77c92da","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./AttributeCompression-c177f997","./GeometryPipeline-cbdfe22f","./EncodedCartesian3-a07a0929","./IndexDatatype-9435b55f","./IntersectionTests-813bb943","./Plane-aa6c3ce5","./GeometryInstance-e632d44a","./arrayRemoveDuplicates-2869246d","./EllipsoidTangentPlane-e82c480a","./OrientedBoundingBox-a30be34f","./CoplanarPolygonGeometryLibrary-c8e81bdb","./ArcType-66bc286a","./EllipsoidRhumbLine-87f26cac","./earcut-2.2.1-b404d9e6","./PolygonPipeline-6175e66b","./PolygonGeometryLibrary-64dcca10"],function(o,i,e,l,t,p,r,n,a,d,s,u,y,c,m,b,f,g,h,P,v,G,C,k,L,T,E,H,w,A,D,I){function _(e){for(var r=e.length,t=new Float64Array(3*r),n=P.IndexDatatype.createTypedArray(r,2*r),a=0,o=0,i=0;i<r;i++){var y=e[i];t[a++]=y.x,t[a++]=y.y,t[a++]=y.z,n[o++]=i,n[o++]=(i+1)%r}var c=new b.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:d.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:t})});return new s.Geometry({attributes:c,indices:n,primitiveType:u.PrimitiveType.LINES})}function O(e){var r=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).polygonHierarchy;i.Check.defined("options.polygonHierarchy",r),this._polygonHierarchy=r,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=I.PolygonGeometryLibrary.computeHierarchyPackedLength(r)+1}O.fromPositions=function(e){return e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT),i.Check.defined("options.positions",e.positions),new O({polygonHierarchy:{positions:e.positions}})},O.pack=function(e,r,t){return i.Check.typeOf.object("value",e),i.Check.defined("array",r),t=o.defaultValue(t,0),r[t=I.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,r,t)]=e.packedLength,r};var B={polygonHierarchy:{}};return O.unpack=function(e,r,t){i.Check.defined("array",e),r=o.defaultValue(r,0);var n=I.PolygonGeometryLibrary.unpackPolygonHierarchy(e,r);r=n.startingIndex,delete n.startingIndex;var a=e[r];return o.defined(t)||(t=new O(B)),t._polygonHierarchy=n,t.packedLength=a,t},O.createGeometry=function(e){var r=e._polygonHierarchy,t=r.positions;if(!((t=k.arrayRemoveDuplicates(t,l.Cartesian3.equalsEpsilon,!0)).length<3)&&E.CoplanarPolygonGeometryLibrary.validOutline(t)){var n=I.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(r,!1);if(0!==n.length){for(var a=[],o=0;o<n.length;o++){var i=new C.GeometryInstance({geometry:_(n[o])});a.push(i)}var y=g.GeometryPipeline.combineInstances(a)[0],c=p.BoundingSphere.fromPoints(r.positions);return new s.Geometry({attributes:y.attributes,indices:y.indices,primitiveType:y.primitiveType,boundingSphere:c})}}},function(e,r){return o.defined(r)&&(e=O.unpack(e,r)),e._ellipsoid=t.Ellipsoid.clone(e._ellipsoid),O.createGeometry(e)}});