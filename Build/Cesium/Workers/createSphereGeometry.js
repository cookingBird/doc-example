define(["./when-92c6cf3c","./Cartographic-67e73ef9","./Check-52a7d806","./EllipsoidGeometry-6de6bf54","./VertexFormat-f496a3f1","./Math-92c3b5f7","./arrayFill-0358accf","./buildModuleUrl-d4759655","./Rectangle-bab7abf0","./Intersect-b97e930a","./PrimitiveType-e79c54d1","./Cartesian4-ad128b5d","./RuntimeError-c6a62a80","./WebGLConstants-71f10989","./Event-3390cd7d","./Cartesian2-6033fa5d","./ComponentDatatype-81047f82","./GeometryAttribute-9bdde6dc","./FeatureDetection-067cb23c","./GeometryAttributes-7f66ea53","./GeometryOffsetAttribute-b4d599f5","./IndexDatatype-4c0e98b8"],(function(e,t,r,i,a,n,o,c,s,d,u,b,l,f,m,p,y,v,k,G,P,_){"use strict";function h(r){var a=e.u(r.radius,1),n={radii:new t.t(a,a,a),stackPartitions:r.stackPartitions,slicePartitions:r.slicePartitions,vertexFormat:r.vertexFormat};this._ellipsoidGeometry=new i.b(n),this._workerName="createSphereGeometry"}h.packedLength=i.b.packedLength,h.pack=function(e,t,a){return r.o.typeOf.object("value",e),i.b.pack(e._ellipsoidGeometry,t,a)};var w=new i.b,x={radius:void 0,radii:new t.t,vertexFormat:new a.n,stackPartitions:void 0,slicePartitions:void 0};return h.unpack=function(r,n,o){var c=i.b.unpack(r,n,w);return x.vertexFormat=a.n.clone(c._vertexFormat,x.vertexFormat),x.stackPartitions=c._stackPartitions,x.slicePartitions=c._slicePartitions,e.e(o)?(t.t.clone(c._radii,x.radii),o._ellipsoidGeometry=new i.b(x),o):(x.radius=c._radii.x,new h(x))},h.createGeometry=function(e){return i.b.createGeometry(e._ellipsoidGeometry)},function(t,r){return e.e(r)&&(t=h.unpack(t,r)),h.createGeometry(t)}}));
