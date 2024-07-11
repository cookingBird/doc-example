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
define(["exports","./Check-70bec281","./Cartographic-f2a06374","./Cartesian2-16a61632","./BoundingSphere-d018a565","./OrientedBoundingBox-a30be34f"],function(e,m,x,s,h,p){var n={},C=new x.Cartesian3,B=new x.Cartesian3,P=new x.Cartesian3,M=new x.Cartesian3,k=new p.OrientedBoundingBox;function o(e,n,t,a,i){var r=x.Cartesian3.subtract(e,n,C),o=x.Cartesian3.dot(t,r),u=x.Cartesian3.dot(a,r);return s.Cartesian2.fromElements(o,u,i)}n.validOutline=function(e){m.Check.defined("positions",e);var n=p.OrientedBoundingBox.fromPoints(e,k).halfAxes,t=h.Matrix3.getColumn(n,0,B),a=h.Matrix3.getColumn(n,1,P),i=h.Matrix3.getColumn(n,2,M),r=x.Cartesian3.magnitude(t),o=x.Cartesian3.magnitude(a),u=x.Cartesian3.magnitude(i);return!(0===r&&(0===o||0===u)||0===o&&0===u)},n.computeProjectTo2DArguments=function(e,n,t,a){m.Check.defined("positions",e),m.Check.defined("centerResult",n),m.Check.defined("planeAxis1Result",t),m.Check.defined("planeAxis2Result",a);var i,r,o=p.OrientedBoundingBox.fromPoints(e,k),u=o.halfAxes,s=h.Matrix3.getColumn(u,0,B),C=h.Matrix3.getColumn(u,1,P),d=h.Matrix3.getColumn(u,2,M),c=x.Cartesian3.magnitude(s),l=x.Cartesian3.magnitude(C),f=x.Cartesian3.magnitude(d),g=Math.min(c,l,f);return(0!==c||0!==l&&0!==f)&&(0!==l||0!==f)&&(g!==l&&g!==f||(i=s),g===c?i=C:g===f&&(r=C),g!==c&&g!==l||(r=d),x.Cartesian3.normalize(i,t),x.Cartesian3.normalize(r,a),x.Cartesian3.clone(o.center,n),!0)},n.createProjectPointsTo2DFunction=function(a,i,r){return function(e){for(var n=new Array(e.length),t=0;t<e.length;t++)n[t]=o(e[t],a,i,r);return n}},n.createProjectPointTo2DFunction=function(t,a,i){return function(e,n){return o(e,t,a,i,n)}},e.CoplanarPolygonGeometryLibrary=n});