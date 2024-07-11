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
define(["./when-8d13db60","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./createTaskProcessorWorker","./PixelFormat-e6d821ed"],function(w,x,e,r,y){var g,h,n=1,t=2,v={};v[0]=y.PixelFormat.RGB_DXT1,v[n]=y.PixelFormat.RGBA_DXT3,v[t]=y.PixelFormat.RGBA_DXT5;var A,P=0;function a(e,r){var n=e.data,t=n.byteLength,a=new Uint8Array(n),f=A._malloc(t);!function(e,r,n,t){var a,f=n/4,i=t%4,o=new Uint32Array(e.buffer,0,(t-i)/4),s=new Uint32Array(r.buffer);for(a=0;a<o.length;a++)s[f+a]=o[a];for(a=t-i;a<t;a++)r[n+a]=e[a]}(a,A.HEAPU8,f,t);var i=A._crn_get_dxt_format(f,t),o=v[i];if(!w.defined(o))throw new x.RuntimeError("Unsupported compressed format.");var s,u=A._crn_get_levels(f,t),d=A._crn_get_width(f,t),l=A._crn_get_height(f,t),c=0;for(s=0;s<u;++s)c+=y.PixelFormat.compressedTextureSizeInBytes(o,d>>s,l>>s);if(P<c&&(w.defined(g)&&A._free(g),g=A._malloc(c),h=new Uint8Array(A.HEAPU8.buffer,g,c),P=c),A._crn_decompress(f,t,g,c,0,u),A._free(f),w.defaultValue(e.bMipMap,!1)){var m=h.slice(0,c);return r.push(m.buffer),new y.CompressedTextureBuffer(o,d,l,m)}var _=y.PixelFormat.compressedTextureSizeInBytes(o,d,l),b=h.subarray(0,_),p=new Uint8Array(_);return p.set(b,0),r.push(p.buffer),new y.CompressedTextureBuffer(o,d,l,p)}function f(e){A=e,self.onmessage=r(a),self.postMessage(!0)}return function(e){var r=e.data.webAssemblyConfig;if(w.defined(r))return require([r.modulePath],function(e){w.defined(r.wasmBinaryFile)&&(w.defined(e)||(e=self.Module)),f(e)})}});