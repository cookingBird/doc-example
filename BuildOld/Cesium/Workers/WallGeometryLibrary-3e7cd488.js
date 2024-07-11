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
define(["exports","./when-8d13db60","./Math-61ede240","./Cartographic-f2a06374","./BoundingSphere-d018a565","./Transforms-f77c92da","./EllipsoidTangentPlane-e82c480a","./PolygonPipeline-6175e66b","./PolylinePipeline-f937854b"],function(e,x,E,O,T,L,H,S,W){var i={};var I=new O.Cartographic,N=new O.Cartographic;var q=new Array(2),B=new Array(2),D={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};function j(e,i){for(var n=new Array(e.length),r=0;r<e.length;r+=3){var t=new O.Cartesian3(e[r],e[r+1],e[r+2]);T.Matrix4.multiplyByPoint(i,t,t),n[r]=t.x,n[r+1]=t.y,n[r+2]=t.z}return n}i.computePositions=function(e,i,n,r,t,o,a){var l=function(e,i,n,r){var t=i.length;if(!(t<2)){var o=x.defined(r),a=x.defined(n),l=!0,s=new Array(t),h=new Array(t),g=new Array(t),d=i[0];s[0]=d;var p=e.cartesianToCartographic(d,I);a&&(p.height=n[0]),l=l&&0==p.height,h[0]=p.height,g[0]=o?r[0]:0;for(var P,y,f=1,c=1;c<t;++c){var u=i[c],v=e.cartesianToCartographic(u,N);a&&(v.height=n[c]),l=l&&0==v.height,P=p,y=v,E.CesiumMath.equalsEpsilon(P.latitude,y.latitude,E.CesiumMath.EPSILON14)&&E.CesiumMath.equalsEpsilon(P.longitude,y.longitude,E.CesiumMath.EPSILON14)?p.height<v.height&&(h[f-1]=v.height):(s[f]=u,h[f]=v.height,g[f]=o?r[c]:0,O.Cartographic.clone(v,p),++f)}if(!(l||f<2))return s.length=f,h.length=f,g.length=f,{positions:s,topHeights:h,bottomHeights:g}}}(e,i,n,r);if(x.defined(l)){var s=L.Transforms.eastNorthUpToFixedFrame(l.positions[0],e,new T.Matrix4),h=T.Matrix4.inverse(s,new T.Matrix4);if(i=l.positions,n=l.topHeights,r=l.bottomHeights,3<=i.length){var g=H.EllipsoidTangentPlane.fromPoints(i,e).projectPointsOntoPlane(i);S.PolygonPipeline.computeWindingOrder2D(g)===S.WindingOrder.CLOCKWISE&&(i.reverse(),n.reverse(),r.reverse())}var d,p,P,y,f=i.length,c=f-2,u=E.CesiumMath.chordLength(t,e.maximumRadius),v=D;if(v.minDistance=u,v.ellipsoid=e,o){var m,A=0;for(m=0;m<f-1;m++)A+=W.PolylinePipeline.numberOfPoints(i[m],i[m+1],u)+1;d=new Float64Array(3*A),p=new Float64Array(3*A),x.defined(a)&&(P=new Float64Array(3*A),y=new Float64Array(3*A));var w=q,C=B;v.positions=w,v.height=C;var F=0;for(m=0;m<f-1;m++){w[0]=i[m],w[1]=i[m+1],C[0]=n[m],C[1]=n[m+1];var M=W.PolylinePipeline.generateArc(v);d.set(M,F),x.defined(a)&&P.set(j(M,h),F),C[0]=r[m],C[1]=r[m+1],p.set(W.PolylinePipeline.generateArc(v),F),x.defined(a)&&y.set(j(W.PolylinePipeline.generateArc(v),h),F),F+=M.length}}else v.positions=i,v.height=n,d=new Float64Array(W.PolylinePipeline.generateArc(v)),x.defined(a)&&(P=new Float64Array(j(W.PolylinePipeline.generateArc(v)))),v.height=r,p=new Float64Array(W.PolylinePipeline.generateArc(v)),x.defined(a)&&(y=new Float64Array(j(W.PolylinePipeline.generateArc(v))));var b={pos:{bottomPositions:p,topPositions:d,numCorners:c}};return x.defined(a)&&(b.localPos={bottomPositions:y,topPositions:P,numCorners:c}),b}},e.WallGeometryLibrary=i});