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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f2a06374","./Cartesian2-16a61632","./BoundingSphere-d018a565","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-773da12d","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-f77c92da","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./IndexDatatype-9435b55f","./arrayFill-9766fb2e","./GeometryOffsetAttribute-999fc023","./EllipsoidOutlineGeometry-994956d0"],function(a,r,e,n,i,t,o,s,d,l,c,u,p,m,y,f,b,G,k,v){function h(e){var i=a.defaultValue(e.radius,1),t={radii:new n.Cartesian3(i,i,i),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,subdivisions:e.subdivisions};this._ellipsoidGeometry=new v.EllipsoidOutlineGeometry(t),this._workerName="createSphereOutlineGeometry"}h.packedLength=v.EllipsoidOutlineGeometry.packedLength,h.pack=function(e,i,t){return r.Check.typeOf.object("value",e),v.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};var O=new v.EllipsoidOutlineGeometry,P={radius:void 0,radii:new n.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return h.unpack=function(e,i,t){var r=v.EllipsoidOutlineGeometry.unpack(e,i,O);return P.stackPartitions=r._stackPartitions,P.slicePartitions=r._slicePartitions,P.subdivisions=r._subdivisions,a.defined(t)?(n.Cartesian3.clone(r._radii,P.radii),t._ellipsoidGeometry=new v.EllipsoidOutlineGeometry(P),t):(P.radius=r._radii.x,new h(P))},h.createGeometry=function(e){return v.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(e,i){return a.defined(i)&&(e=h.unpack(e,i)),h.createGeometry(e)}});