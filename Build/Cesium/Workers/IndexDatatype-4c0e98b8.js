define(["exports","./when-92c6cf3c","./Check-52a7d806","./Math-92c3b5f7","./WebGLConstants-71f10989"],(function(e,r,t,n,a){"use strict";var i={UNSIGNED_BYTE:a.B.UNSIGNED_BYTE,UNSIGNED_SHORT:a.B.UNSIGNED_SHORT,UNSIGNED_INT:a.B.UNSIGNED_INT,getSizeInBytes:function(e){switch(e){case i.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case i.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case i.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT}throw new t.t("indexDatatype is required and must be a valid IndexDatatype constant.")},fromSizeInBytes:function(e){switch(e){case 2:return i.UNSIGNED_SHORT;case 4:return i.UNSIGNED_INT;case 1:return i.UNSIGNED_BYTE;default:throw new t.t("Size in bytes cannot be mapped to an IndexDatatype")}},validate:function(e){return r.e(e)&&(e===i.UNSIGNED_BYTE||e===i.UNSIGNED_SHORT||e===i.UNSIGNED_INT)},createTypedArray:function(e,a){if(!r.e(e))throw new t.t("numberOfVertices is required.");return e>=n.e.SIXTY_FOUR_KILOBYTES?new Uint32Array(a):new Uint16Array(a)},createTypedArrayFromArrayBuffer:function(e,a,i,N){if(!r.e(e))throw new t.t("numberOfVertices is required.");if(!r.e(a))throw new t.t("sourceArray is required.");if(!r.e(i))throw new t.t("byteOffset is required.");return e>=n.e.SIXTY_FOUR_KILOBYTES?new Uint32Array(a,i,N):new Uint16Array(a,i,N)}},N=Object.freeze(i);e.IndexDatatype=N}));
