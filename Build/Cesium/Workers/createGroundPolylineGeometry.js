define(["./buildModuleUrl-d4759655","./Cartesian2-6033fa5d","./Cartographic-67e73ef9","./Check-52a7d806","./when-92c6cf3c","./Rectangle-bab7abf0","./Intersect-b97e930a","./Math-92c3b5f7","./ArcType-31298545","./arrayRemoveDuplicates-f7eaafa2","./ComponentDatatype-81047f82","./EllipsoidGeodesic-04ac0e77","./EllipsoidRhumbLine-8847d1a1","./EncodedCartesian3-b86c8d65","./GeometryAttribute-9bdde6dc","./IntersectionTests-9cfe2e56","./PrimitiveType-e79c54d1","./Plane-b5be516c","./WebMercatorProjection-39906b85","./Event-3390cd7d","./RuntimeError-c6a62a80","./WebGLConstants-71f10989","./FeatureDetection-067cb23c","./Cartesian4-ad128b5d"],(function(t,e,i,n,r,a,o,s,l,u,c,h,p,d,g,f,w,v,m,_,y,T,E,b){"use strict";function O(t){t=r.u(t,{}),this._ellipsoid=r.u(t.ellipsoid,a.t.WGS84),this._rectangle=r.u(t.rectangle,a.h.MAX_VALUE),this._projection=new o.n(this._ellipsoid),this._numberOfLevelZeroTilesX=r.u(t.numberOfLevelZeroTilesX,2),this._numberOfLevelZeroTilesY=r.u(t.numberOfLevelZeroTilesY,1),this._customDPI=t.customDPI,this._scaleDenominators=t.scaleDenominators,this._tileWidth=r.u(t.tileWidth,256),this._tileHeight=r.u(t.tileHeight,256),this._beginLevel=r.u(t.beginLevel,0),this._orgin=r.u(t.orgin,void 0)}Object.defineProperties(O.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},rectangle:{get:function(){return this._rectangle}},projection:{get:function(){return this._projection}},beginLevel:{get:function(){return this._beginLevel}},orgin:{get:function(){return this._orgin}}}),O.prototype.getNumberOfXTilesAtLevel=function(t){if(r.e(this._customDPI)&&r.e(this._scaleDenominators)){var e=this.calculateResolution(t),i=this._tileWidth*e.x;return Math.ceil(this._rectangle.width/i)}return this._numberOfLevelZeroTilesX<<t-this._beginLevel},O.prototype.getNumberOfYTilesAtLevel=function(t){if(r.e(this._customDPI)&&r.e(this._scaleDenominators)){var e=this.calculateResolution(t),i=this._tileHeight*e.y;return Math.ceil(this._rectangle.height/i)}return this._numberOfLevelZeroTilesY<<t-this._beginLevel},O.prototype.rectangleToNativeRectangle=function(t,e){n.o.defined("rectangle",t);var i=s.e.toDegrees(t.west),o=s.e.toDegrees(t.south),l=s.e.toDegrees(t.east),u=s.e.toDegrees(t.north);return r.e(e)?(e.west=i,e.south=o,e.east=l,e.north=u,e):new a.h(i,o,l,u)},O.prototype.tileXYToNativeRectangle=function(t,e,i,n){var r=this.tileXYToRectangle(t,e,i,n);return r.west=s.e.toDegrees(r.west),r.south=s.e.toDegrees(r.south),r.east=s.e.toDegrees(r.east),r.north=s.e.toDegrees(r.north),r},O.prototype.tileXYToRectangle=function(t,e,i,n){var o=this._rectangle,s=r.e(this._orgin)?this._orgin.longitude:o.west,l=r.e(this._orgin)?this._orgin.latitude:o.north;if(r.e(this._customDPI)&&r.e(this._scaleDenominators)){var u=this.calculateResolution(i),c=s+t*this._tileWidth*u.x,h=s+(t+1)*this._tileWidth*u.x,p=l-e*this._tileHeight*u.y,d=l-(e+1)*this._tileHeight*u.y;return r.e(n)?(n.west=c,n.south=d,n.east=h,n.north=p,n):new a.h(c,d,h,p)}var g=this.getNumberOfXTilesAtLevel(i),f=this.getNumberOfYTilesAtLevel(i),w=o.width/g,v=(c=t*w+o.west,h=(t+1)*w+o.west,o.height/f);p=o.north-e*v,d=o.north-(e+1)*v;return r.e(n)||(n=new a.h(c,d,h,p)),n.west=c,n.south=d,n.east=h,n.north=p,n},O.prototype.positionToTileXY=function(t,i,n){var o=this._rectangle;if(a.h.contains(o,t)){var l=this.getNumberOfXTilesAtLevel(i),u=this.getNumberOfYTilesAtLevel(i),c=r.e(this._orgin)?this._orgin.longitude:o.west,h=r.e(this._orgin)?this._orgin.latitude:o.north,p=o.width/l,d=o.height/u;if(r.e(this._customDPI)&&r.e(this._scaleDenominators)){var g=this.calculateResolution(i);p=this._tileWidth*g.x,d=this._tileHeight*g.y}var f=t.longitude;o.east<o.west&&(f+=s.e.TWO_PI),r.e(this._orgin)&&(l+=this._orgin.longitude!=o.west?Math.ceil((t.longitude-this._orgin.longitude)/p):0,u+=this._orgin.latitude!=o.north?Math.ceil((this._orgin.latitude-t.latitude)/d):0);var w=(f-c)/p|0;w>=l&&(w=l-1);var v=(h-t.latitude)/d|0;return v>=u&&(v=u-1),r.e(n)?(n.x=w,n.y=v,n):new e.o(w,v)}},O.prototype.calculateResolution=function(t){var i=.0254*this._scaleDenominators[t-this._beginLevel]/this._customDPI.x,n=.0254*this._scaleDenominators[t-this._beginLevel]/this._customDPI.y,r=a.t.WGS84.maximumRadius;return new e.o(i/r,n/r)};var L=new i.t,I=new i.t,P=new i.t$1,D=new i.t,k=new i.t,x=new t.i,A=new O,N=[new i.t$1,new i.t$1,new i.t$1,new i.t$1],S=new e.o,H={};function C(t){i.t$1.fromRadians(t.east,t.north,0,N[0]),i.t$1.fromRadians(t.west,t.north,0,N[1]),i.t$1.fromRadians(t.east,t.south,0,N[2]),i.t$1.fromRadians(t.west,t.south,0,N[3]);var e,n=0,r=0,a=0,o=0,s=H._terrainHeightsMaxLevel;for(e=0;e<=s;++e){for(var l=!1,u=0;u<4;++u){var c=N[u];if(A.positionToTileXY(c,e,S),0===u)a=S.x,o=S.y;else if(a!==S.x||o!==S.y){l=!0;break}}if(l)break;n=a,r=o}if(0!==e)return{x:n,y:r,level:e>s?s:e-1}}H.initialize=function(){var e=H._initPromise;return r.e(e)||(e=t.t.fetchJson(t.n("Assets/approximateTerrainHeights.json")).then((function(t){H._terrainHeights=t})),H._initPromise=e),e},H.getMinimumMaximumHeights=function(t,e){if(n.o.defined("rectangle",t),!r.e(H._terrainHeights))throw new n.t("You must call ApproximateTerrainHeights.initialize and wait for the promise to resolve before using this function");e=r.u(e,a.t.WGS84);var o=C(t),s=H._defaultMinTerrainHeight,l=H._defaultMaxTerrainHeight;if(r.e(o)){var u=o.level+"-"+o.x+"-"+o.y,c=H._terrainHeights[u];r.e(c)&&(s=c[0],l=c[1]),e.cartographicToCartesian(a.h.northeast(t,P),L),e.cartographicToCartesian(a.h.southwest(t,P),I),i.t.midpoint(I,L,D);var h=e.scaleToGeodeticSurface(D,k);if(r.e(h)){var p=i.t.distance(D,h);s=Math.min(s,-p)}else s=H._defaultMinTerrainHeight}return{minimumTerrainHeight:s=Math.max(H._defaultMinTerrainHeight,s),maximumTerrainHeight:l}},H.getBoundingSphere=function(e,i){if(n.o.defined("rectangle",e),!r.e(H._terrainHeights))throw new n.t("You must call ApproximateTerrainHeights.initialize and wait for the promise to resolve before using this function");i=r.u(i,a.t.WGS84);var o=C(e),s=H._defaultMaxTerrainHeight;if(r.e(o)){var l=o.level+"-"+o.x+"-"+o.y,u=H._terrainHeights[l];r.e(u)&&(s=u[1])}var c=t.i.fromRectangle3D(e,i,0);return t.i.fromRectangle3D(e,i,s,x),t.i.union(c,x,c)},H._terrainHeightsMaxLevel=6,H._defaultMaxTerrainHeight=9e3,H._defaultMinTerrainHeight=-1e5,H._terrainHeights=void 0,H._initPromise=void 0,Object.defineProperties(H,{initialized:{get:function(){return r.e(H._terrainHeights)}}});var M=[o.n,m.t],R=M.length,z=Math.cos(s.e.toRadians(30)),j=Math.cos(s.e.toRadians(150));function $(t){var e=(t=r.u(t,r.u.EMPTY_OBJECT)).positions;if(!r.e(e)||e.length<2)throw new n.t("At least two positions are required.");if(r.e(t.arcType)&&t.arcType!==l.L.GEODESIC&&t.arcType!==l.L.RHUMB)throw new n.t("Valid options for arcType are ArcType.GEODESIC and ArcType.RHUMB.");this.width=r.u(t.width,1),this._positions=e,this.granularity=r.u(t.granularity,9999),this.loop=r.u(t.loop,!1),this.arcType=r.u(t.arcType,l.L.GEODESIC),this._ellipsoid=r.u(t.ellipsoid,a.t.WGS84),this._projectionIndex=0,this._workerName="createGroundPolylineGeometry",this._scene3DOnly=!1}Object.defineProperties($.prototype,{packedLength:{get:function(){return 1+3*this._positions.length+1+1+1+a.t.packedLength+1+1}}}),$.setProjectionAndEllipsoid=function(t,e){for(var i=0,n=0;n<R;n++)if(e instanceof M[n]){i=n;break}t._projectionIndex=i,t._ellipsoid=e.ellipsoid};var Y=new i.t,G=new i.t,W=new i.t;function F(t,e,n,r,a){var o=J(r,t,0,Y),s=J(r,t,n,G),l=J(r,e,0,W),u=Q(s,o,G),c=Q(l,o,W);return i.t.cross(c,u,a),i.t.normalize(a,a)}var B=new i.t$1,q=new i.t,X=new i.t,U=new i.t;function V(t,e,n,r,a,o,s,u,c,d,g){if(0!==a){var f;o===l.L.GEODESIC?f=new h.E(t,e,s):o===l.L.RHUMB&&(f=new p.P(t,e,s));var w=f.surfaceDistance;if(!(w<a))for(var v=F(t,e,r,s,U),m=Math.ceil(w/a),_=w/m,y=_,T=m-1,E=u.length,b=0;b<T;b++){var O=f.interpolateUsingSurfaceDistance(y,B),L=J(s,O,n,q),I=J(s,O,r,X);i.t.pack(v,u,E),i.t.pack(L,c,E),i.t.pack(I,d,E),g.push(O.latitude),g.push(O.longitude),E+=3,y+=_}}}var Z=new i.t$1;function J(t,e,n,r){return i.t$1.clone(e,Z),Z.height=n,i.t$1.toCartesian(Z,t,r)}function Q(t,e,n){return i.t.subtract(t,e,n),i.t.normalize(n,n),n}function K(t,e,n,r){return r=Q(t,e,r),r=i.t.cross(r,n,r),r=i.t.normalize(r,r),r=i.t.cross(n,r,r)}$.pack=function(t,e,o){n.o.typeOf.object("value",t),n.o.defined("array",e);var s=r.u(o,0),l=t._positions,u=l.length;e[s++]=u;for(var c=0;c<u;++c){var h=l[c];i.t.pack(h,e,s),s+=3}return e[s++]=t.granularity,e[s++]=t.loop?1:0,e[s++]=t.arcType,a.t.pack(t._ellipsoid,e,s),s+=a.t.packedLength,e[s++]=t._projectionIndex,e[s++]=t._scene3DOnly?1:0,e},$.unpack=function(t,e,o){n.o.defined("array",t);for(var s=r.u(e,0),l=t[s++],u=new Array(l),c=0;c<l;c++)u[c]=i.t.unpack(t,s),s+=3;var h=t[s++],p=1===t[s++],d=t[s++],g=a.t.unpack(t,s);s+=a.t.packedLength;var f=t[s++],w=1===t[s++];if(!r.e(o)){var v=new $({positions:u,granularity:h,loop:p,arcType:d,ellipsoid:g});return v._projectionIndex=f,v._scene3DOnly=w,v}return o._positions=u,o.granularity=h,o.loop=p,o.arcType=d,o._ellipsoid=g,o._projectionIndex=f,o._scene3DOnly=w,o};var tt=new i.t,et=new i.t,it=new i.t,nt=new i.t;function rt(t,e,n,r,a){var o=Q(n,e,nt),l=K(t,e,o,tt),u=K(r,e,o,et);if(s.e.equalsEpsilon(i.t.dot(l,u),-1,s.e.EPSILON5))return a=i.t.cross(o,l,a),a=i.t.normalize(a,a);a=i.t.add(u,l,a),a=i.t.normalize(a,a);var c=i.t.cross(o,a,it);return i.t.dot(u,c)<0&&(a=i.t.negate(a,a)),a}var at=v.o.fromPointNormal(i.t.ZERO,i.t.UNIT_Y),ot=new i.t,st=new i.t,lt=new i.t,ut=new i.t,ct=new i.t,ht=new i.t,pt=new i.t$1,dt=new i.t$1,gt=new i.t$1;$.createGeometry=function(t){var e,n,a=!t._scene3DOnly,o=t.loop,c=t._ellipsoid,h=t.granularity,d=t.arcType,g=new M[t._projectionIndex](c),w=1e3,v=t._positions,m=v.length;2===m&&(o=!1);var _,y,T,E,b,O,L,I=new p.P(void 0,void 0,c),P=[v[0]];for(n=0;n<m-1;n++)_=v[n],y=v[n+1],b=f.g.lineSegmentPlane(_,y,at,ht),r.e(b)&&!i.t.equalsEpsilon(b,_,s.e.EPSILON7)&&!i.t.equalsEpsilon(b,y,s.e.EPSILON7)&&(t.arcType===l.L.GEODESIC?P.push(i.t.clone(b)):t.arcType===l.L.RHUMB&&(L=c.cartesianToCartographic(b,pt).longitude,T=c.cartesianToCartographic(_,pt),E=c.cartesianToCartographic(y,dt),I.setEndPoints(T,E),O=I.findIntersectionWithLongitude(L,gt),b=c.cartographicToCartesian(O,ht),r.e(b)&&!i.t.equalsEpsilon(b,_,s.e.EPSILON7)&&!i.t.equalsEpsilon(b,y,s.e.EPSILON7)&&P.push(i.t.clone(b)))),P.push(y);o&&(_=v[m-1],y=v[0],b=f.g.lineSegmentPlane(_,y,at,ht),r.e(b)&&!i.t.equalsEpsilon(b,_,s.e.EPSILON7)&&!i.t.equalsEpsilon(b,y,s.e.EPSILON7)&&(t.arcType===l.L.GEODESIC?P.push(i.t.clone(b)):t.arcType===l.L.RHUMB&&(L=c.cartesianToCartographic(b,pt).longitude,T=c.cartesianToCartographic(_,pt),E=c.cartesianToCartographic(y,dt),I.setEndPoints(T,E),O=I.findIntersectionWithLongitude(L,gt),b=c.cartographicToCartesian(O,ht),r.e(b)&&!i.t.equalsEpsilon(b,_,s.e.EPSILON7)&&!i.t.equalsEpsilon(b,y,s.e.EPSILON7)&&P.push(i.t.clone(b)))));var D=P.length,k=new Array(D);for(n=0;n<D;n++){var x=i.t$1.fromCartesian(P[n],c);x.height=0,k[n]=x}if(!((D=(k=u.D(k,i.t$1.equalsEpsilon)).length)<2)){var A=[],N=[],S=[],H=[],C=ot,R=st,z=lt,j=ut,$=ct,Y=k[0],G=k[1];for(C=J(c,k[D-1],0,C),j=J(c,G,0,j),R=J(c,Y,0,R),z=J(c,Y,w,z),$=o?rt(C,R,z,j,$):F(Y,G,w,c,$),i.t.pack($,N,0),i.t.pack(R,S,0),i.t.pack(z,H,0),A.push(Y.latitude),A.push(Y.longitude),V(Y,G,0,w,h,d,c,N,S,H,A),n=1;n<D-1;++n){C=i.t.clone(R,C),R=i.t.clone(j,R);var W=k[n];J(c,W,w,z),J(c,k[n+1],0,j),rt(C,R,z,j,$),e=N.length,i.t.pack($,N,e),i.t.pack(R,S,e),i.t.pack(z,H,e),A.push(W.latitude),A.push(W.longitude),V(k[n],k[n+1],0,w,h,d,c,N,S,H,A)}var B=k[D-1],q=k[D-2];if(R=J(c,B,0,R),z=J(c,B,w,z),o){var X=k[0];$=rt(C=J(c,q,0,C),R,z,j=J(c,X,0,j),$)}else $=F(q,B,w,c,$);if(e=N.length,i.t.pack($,N,e),i.t.pack(R,S,e),i.t.pack(z,H,e),A.push(B.latitude),A.push(B.longitude),o){for(V(B,Y,0,w,h,d,c,N,S,H,A),e=N.length,n=0;n<3;++n)N[e+n]=N[n],S[e+n]=S[n],H[e+n]=H[n];A.push(Y.latitude),A.push(Y.longitude)}return se(o,g,S,H,N,A,a)}};var ft=new i.t,wt=new w.p,vt=new g.n;function mt(t,e,n,r){var a=Q(n,e,ft),o=i.t.dot(a,t);if(o>z||o<j){var l=Q(r,n,nt),u=o<j?s.e.PI_OVER_TWO:-s.e.PI_OVER_TWO,c=g.n.fromAxisAngle(l,u,vt),h=w.p.fromQuaternion(c,wt);return w.p.multiplyByVector(h,t,t),!0}return!1}var _t=new i.t$1,yt=new i.t,Tt=new i.t;function Et(t,e,n,r,a){var o=i.t$1.toCartesian(e,t._ellipsoid,yt),l=i.t.add(o,n,Tt),u=!1,c=t._ellipsoid,h=c.cartesianToCartographic(l,_t);Math.abs(e.longitude-h.longitude)>s.e.PI_OVER_TWO&&(u=!0,l=i.t.subtract(o,n,Tt),h=c.cartesianToCartographic(l,_t)),h.height=0;var p=t.project(h,a);return(a=i.t.subtract(p,r,a)).z=0,a=i.t.normalize(a,a),u&&i.t.negate(a,a),a}var bt=new i.t,Ot=new i.t;function Lt(t,e,n,r,a,o){var s=i.t.subtract(e,t,bt);i.t.normalize(s,s);var l=n-0,u=i.t.multiplyByScalar(s,l,Ot);i.t.add(t,u,a);var c=r-1e3;u=i.t.multiplyByScalar(s,c,Ot),i.t.add(e,u,o)}var It=new i.t;function Pt(t,e){var n=v.o.getPointDistance(at,t),r=v.o.getPointDistance(at,e),a=It;s.e.equalsEpsilon(n,0,s.e.EPSILON2)?(a=Q(e,t,a),i.t.multiplyByScalar(a,s.e.EPSILON2,a),i.t.add(t,a,t)):s.e.equalsEpsilon(r,0,s.e.EPSILON2)&&(a=Q(t,e,a),i.t.multiplyByScalar(a,s.e.EPSILON2,a),i.t.add(e,a,e))}function Dt(t,e){var i=Math.abs(t.longitude),n=Math.abs(e.longitude);if(s.e.equalsEpsilon(i,s.e.PI,s.e.EPSILON11)){var r=s.e.sign(e.longitude);return t.longitude=r*(i-s.e.EPSILON11),1}if(s.e.equalsEpsilon(n,s.e.PI,s.e.EPSILON11)){var a=s.e.sign(t.longitude);return e.longitude=a*(n-s.e.EPSILON11),2}return 0}var kt=new i.t$1,xt=new i.t$1,At=new i.t,Nt=new i.t,St=new i.t,Ht=new i.t,Ct=new i.t,Mt=new i.t,Rt=[kt,xt],zt=new a.h,jt=new i.t,$t=new i.t,Yt=new i.t,Gt=new i.t,Wt=new i.t,Ft=new i.t,Bt=new i.t,qt=new i.t,Xt=new i.t,Ut=new i.t,Vt=new i.t,Zt=new i.t,Jt=new i.t,Qt=new i.t,Kt=new d.i,te=new d.i,ee=new i.t,ie=new i.t,ne=new i.t,re=[new t.i,new t.i],ae=[0,2,1,0,3,2,0,7,3,0,4,7,0,5,4,0,1,5,5,7,4,5,6,7,5,2,6,5,1,2,3,6,2,3,7,6],oe=ae.length;function se(e,n,r,o,l,u,h){var p,f,w,v,m,_,y=n._ellipsoid,T=r.length/3-1,E=8*T,b=4*E,O=36*T,L=E>65535?new Uint32Array(O):new Uint16Array(O),I=new Float64Array(3*E),P=new Float32Array(b),D=new Float32Array(b),k=new Float32Array(b),x=new Float32Array(b),A=new Float32Array(b);h&&(w=new Float32Array(b),v=new Float32Array(b),m=new Float32Array(b),_=new Float32Array(2*E));var N=u.length/2,S=0,C=kt;C.height=0;var M=xt;M.height=0;var R=At,j=Nt;if(h)for(f=0,p=1;p<N;p++)C.latitude=u[f],C.longitude=u[f+1],M.latitude=u[f+2],M.longitude=u[f+3],R=n.project(C,R),j=n.project(M,j),S+=i.t.distance(R,j),f+=2;var $=o.length/3;j=i.t.unpack(o,0,j);var Y,G=0;for(f=3,p=1;p<$;p++)R=i.t.clone(j,R),j=i.t.unpack(o,f,j),G+=i.t.distance(R,j),f+=3;f=3;var W=0,F=0,B=0,q=0,X=!1,U=i.t.unpack(r,0,Ht),V=i.t.unpack(o,0,Nt),Z=i.t.unpack(l,0,Mt);e&&(mt(Z,i.t.unpack(r,r.length-6,St),U,V)&&(Z=i.t.negate(Z,Z)));var J=0,K=0,tt=0;for(p=0;p<T;p++){var et,it,nt,rt,at=i.t.clone(U,St),ot=i.t.clone(V,At),st=i.t.clone(Z,Ct);if(X&&(st=i.t.negate(st,st)),U=i.t.unpack(r,f,Ht),V=i.t.unpack(o,f,Nt),X=mt(Z=i.t.unpack(l,f,Mt),at,U,V),C.latitude=u[W],C.longitude=u[W+1],M.latitude=u[W+2],M.longitude=u[W+3],h){var lt=Dt(C,M);et=n.project(C,Wt);var ut=Q(it=n.project(M,Ft),et,ee);ut.y=Math.abs(ut.y),nt=Bt,rt=qt,0===lt||i.t.dot(ut,i.t.UNIT_Y)>z?(nt=Et(n,C,st,et,Bt),rt=Et(n,M,Z,it,qt)):1===lt?(rt=Et(n,M,Z,it,qt),nt.x=0,nt.y=s.e.sign(C.longitude-Math.abs(M.longitude)),nt.z=0):(nt=Et(n,C,st,et,Bt),rt.x=0,rt.y=s.e.sign(C.longitude-M.longitude),rt.z=0)}var ct=i.t.distance(ot,V),ht=d.i.fromCartesian(at,Kt),pt=i.t.subtract(U,at,Xt),dt=i.t.normalize(pt,Zt),gt=i.t.subtract(ot,at,Ut);gt=i.t.normalize(gt,gt);var ft=i.t.cross(dt,gt,Zt);ft=i.t.normalize(ft,ft);var wt=i.t.cross(gt,st,Jt);wt=i.t.normalize(wt,wt);var vt=i.t.subtract(V,U,Vt);vt=i.t.normalize(vt,vt);var _t=i.t.cross(Z,vt,Qt);_t=i.t.normalize(_t,_t);var yt,Tt,bt,Ot=ct/G,It=J/G,se=0,ue=0,ce=0;if(h){se=i.t.distance(et,it),yt=d.i.fromCartesian(et,te),Tt=i.t.subtract(it,et,ee);var he=(bt=i.t.normalize(Tt,ie)).x;bt.x=bt.y,bt.y=-he,ue=se/S,ce=K/S}for(Y=0;Y<8;Y++){var pe=q+4*Y,de=F+2*Y,ge=pe+3,fe=Y<4?1:-1,we=2===Y||3===Y||6===Y||7===Y?1:-1;i.t.pack(ht.high,P,pe),P[ge]=pt.x,i.t.pack(ht.low,D,pe),D[ge]=pt.y,i.t.pack(wt,k,pe),k[ge]=pt.z,i.t.pack(_t,x,pe),x[ge]=Ot*fe,i.t.pack(ft,A,pe);var ve=It*we;0===ve&&we<0&&(ve=Number.POSITIVE_INFINITY),A[ge]=ve,h&&(w[pe]=yt.high.x,w[pe+1]=yt.high.y,w[pe+2]=yt.low.x,w[pe+3]=yt.low.y,m[pe]=-nt.y,m[pe+1]=nt.x,m[pe+2]=rt.y,m[pe+3]=-rt.x,v[pe]=Tt.x,v[pe+1]=Tt.y,v[pe+2]=bt.x,v[pe+3]=bt.y,_[de]=ue*fe,0===(ve=ce*we)&&we<0&&(ve=Number.POSITIVE_INFINITY),_[de+1]=ve)}var me=Yt,_e=Gt,ye=jt,Te=$t,Ee=a.h.fromCartographicArray(Rt,zt),be=H.getMinimumMaximumHeights(Ee,y),Oe=be.minimumTerrainHeight,Le=be.maximumTerrainHeight;tt+=Oe,tt+=Le,Lt(at,ot,Oe,Le,me,ye),Lt(U,V,Oe,Le,_e,Te);var Ie=i.t.multiplyByScalar(ft,s.e.EPSILON5,ne);i.t.add(me,Ie,me),i.t.add(_e,Ie,_e),i.t.add(ye,Ie,ye),i.t.add(Te,Ie,Te),Pt(me,_e),Pt(ye,Te),i.t.pack(me,I,B),i.t.pack(_e,I,B+3),i.t.pack(Te,I,B+6),i.t.pack(ye,I,B+9),Ie=i.t.multiplyByScalar(ft,-2*s.e.EPSILON5,ne),i.t.add(me,Ie,me),i.t.add(_e,Ie,_e),i.t.add(ye,Ie,ye),i.t.add(Te,Ie,Te),Pt(me,_e),Pt(ye,Te),i.t.pack(me,I,B+12),i.t.pack(_e,I,B+15),i.t.pack(Te,I,B+18),i.t.pack(ye,I,B+21),W+=2,f+=3,F+=16,B+=24,q+=32,J+=ct,K+=se}f=0;var Pe=0;for(p=0;p<T;p++){for(Y=0;Y<oe;Y++)L[f+Y]=ae[Y]+Pe;Pe+=8,f+=oe}var De=re;t.i.fromVertices(r,i.t.ZERO,3,De[0]),t.i.fromVertices(o,i.t.ZERO,3,De[1]);var ke=t.i.fromBoundingSpheres(De);ke.radius+=tt/(2*T);var xe={position:new g.o({componentDatatype:c.ComponentDatatype.DOUBLE,componentsPerAttribute:3,normalize:!1,values:I}),startHiAndForwardOffsetX:le(P),startLoAndForwardOffsetY:le(D),startNormalAndForwardOffsetZ:le(k),endNormalAndTextureCoordinateNormalizationX:le(x),rightNormalAndTextureCoordinateNormalizationY:le(A)};return h&&(xe.startHiLo2D=le(w),xe.offsetAndRight2D=le(v),xe.startEndNormals2D=le(m),xe.texcoordNormalization2D=new g.o({componentDatatype:c.ComponentDatatype.FLOAT,componentsPerAttribute:2,normalize:!1,values:_})),new g.I({attributes:xe,indices:L,boundingSphere:ke})}function le(t){return new g.o({componentDatatype:c.ComponentDatatype.FLOAT,componentsPerAttribute:4,normalize:!1,values:t})}return $._projectNormal=Et,function(t,e){return H.initialize().then((function(){return r.e(e)&&(t=$.unpack(t,e)),$.createGeometry(t)}))}}));
