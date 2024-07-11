define(["exports","./arrayRemoveDuplicates-f7eaafa2","./Cartographic-67e73ef9","./when-92c6cf3c","./Math-92c3b5f7","./PolylinePipeline-3d55cf8f","./GeometryAttribute-9bdde6dc","./PrimitiveType-e79c54d1"],(function(e,t,r,i,n,o,a,s){"use strict";var h={};function l(e,t){return n.e.equalsEpsilon(e.latitude,t.latitude,n.e.EPSILON10)&&n.e.equalsEpsilon(e.longitude,t.longitude,n.e.EPSILON10)}var g=new r.t$1,c=new r.t$1;var u=new Array(2),m=new Array(2),p={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};function y(e,t){for(var i=new Array(e.length),n=0;n<e.length;n+=3){var o=new r.t(e[n],e[n+1],e[n+2]);s.y.multiplyByPoint(t,o,o),i[n]=o.x,i[n+1]=o.y,i[n+2]=o.z}return i}h.computePositions=function(e,h,v,f,A,w,d){var P=function(e,n,o,a){var s=(n=t.D(n,r.t.equalsEpsilon)).length;if(!(s<2)){var h=i.e(a),u=i.e(o),m=!0,p=new Array(s),y=new Array(s),v=new Array(s),f=n[0];p[0]=f;var A=e.cartesianToCartographic(f,g);u&&(A.height=o[0]),m=m&&0==A.height,y[0]=A.height,v[0]=h?a[0]:0;for(var w=1,d=1;d<s;++d){var P=n[d],F=e.cartesianToCartographic(P,c);u&&(F.height=o[d]),m=m&&0==F.height,l(A,F)?A.height<F.height&&(y[w-1]=F.height):(p[w]=P,y[w]=F.height,v[w]=h?a[d]:0,r.t$1.clone(F,A),++w)}if(!(m||w<2))return p.length=w,y.length=w,v.length=w,{positions:p,topHeights:y,bottomHeights:v}}}(e,h,v,f);if(i.e(P)){var F=a.m.eastNorthUpToFixedFrame(P.positions[0],e,new s.y),b=s.y.inverse(F,new s.y);h=P.positions,v=P.topHeights,f=P.bottomHeights;var C,E,x,D,H=h.length,T=H-2,q=n.e.chordLength(A,e.maximumRadius),L=p;if(L.minDistance=q,L.ellipsoid=e,w){var N,O=0;for(N=0;N<H-1;N++)O+=o.m.numberOfPoints(h[N],h[N+1],q)+1;C=new Float64Array(3*O),E=new Float64Array(3*O),i.e(d)&&(x=new Float64Array(3*O),D=new Float64Array(3*O));var $=u,I=m;L.positions=$,L.height=I;var R=0;for(N=0;N<H-1;N++){$[0]=h[N],$[1]=h[N+1],I[0]=v[N],I[1]=v[N+1];var S=o.m.generateArc(L);C.set(S,R),i.e(d)&&x.set(y(S,b),R),I[0]=f[N],I[1]=f[N+1],E.set(o.m.generateArc(L),R),i.e(d)&&D.set(y(o.m.generateArc(L),b),R),R+=S.length}}else L.positions=h,L.height=v,C=new Float64Array(o.m.generateArc(L)),i.e(d)&&(x=new Float64Array(y(o.m.generateArc(L)))),L.height=f,E=new Float64Array(o.m.generateArc(L)),i.e(d)&&(D=new Float64Array(y(o.m.generateArc(L))));var z={pos:{bottomPositions:E,topPositions:C,numCorners:T}};return i.e(d)&&(z.localPos={bottomPositions:D,topPositions:x,numCorners:T}),z}},e.D=h}));
