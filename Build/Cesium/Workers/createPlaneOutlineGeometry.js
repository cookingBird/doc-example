define(["./when-92c6cf3c","./buildModuleUrl-d4759655","./Cartographic-67e73ef9","./Check-52a7d806","./ComponentDatatype-81047f82","./GeometryAttribute-9bdde6dc","./GeometryAttributes-7f66ea53","./PrimitiveType-e79c54d1","./Rectangle-bab7abf0","./Math-92c3b5f7","./Intersect-b97e930a","./Event-3390cd7d","./RuntimeError-c6a62a80","./WebGLConstants-71f10989","./Cartesian2-6033fa5d","./FeatureDetection-067cb23c","./Cartesian4-ad128b5d"],(function(e,t,n,a,r,i,o,c,u,d,f,y,p,b,s,m,w){"use strict";function l(){this._workerName="createPlaneOutlineGeometry"}l.packedLength=0,l.pack=function(e,t){return a.o.defined("value",e),a.o.defined("array",t),t},l.unpack=function(t,n,r){return a.o.defined("array",t),e.e(r)?r:new l};var h=new n.t(-.5,-.5,0),v=new n.t(.5,.5,0);return l.createGeometry=function(){var e=new o.a,a=new Uint16Array(8),u=new Float64Array(12);return u[0]=h.x,u[1]=h.y,u[2]=h.z,u[3]=v.x,u[4]=h.y,u[5]=h.z,u[6]=v.x,u[7]=v.y,u[8]=h.z,u[9]=h.x,u[10]=v.y,u[11]=h.z,e.position=new i.o({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u}),a[0]=0,a[1]=1,a[2]=1,a[3]=2,a[4]=2,a[5]=3,a[6]=3,a[7]=0,new i.I({attributes:e,indices:a,primitiveType:c._0x23ab5a.LINES,boundingSphere:new t.i(n.t.ZERO,Math.sqrt(2))})},function(t,n){return e.e(n)&&(t=l.unpack(t,n)),l.createGeometry(t)}}));
