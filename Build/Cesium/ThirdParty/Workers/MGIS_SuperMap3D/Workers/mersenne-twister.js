/**
@license

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var _0x4c789e=_0x3f70;(function(_0x4c86f2,_0x3014cb){var _0x1a2b1f=_0x3f70,_0xa20463=_0x4c86f2();while(!![]){try{var _0x52390b=parseInt(_0x1a2b1f(0x1ca))/0x1*(parseInt(_0x1a2b1f(0x1cf))/0x2)+-parseInt(_0x1a2b1f(0x1cc))/0x3+parseInt(_0x1a2b1f(0x1ce))/0x4+parseInt(_0x1a2b1f(0x1cb))/0x5+-parseInt(_0x1a2b1f(0x1c4))/0x6*(-parseInt(_0x1a2b1f(0x1c6))/0x7)+-parseInt(_0x1a2b1f(0x1c9))/0x8*(parseInt(_0x1a2b1f(0x1c5))/0x9)+-parseInt(_0x1a2b1f(0x1d3))/0xa;if(_0x52390b===_0x3014cb)break;else _0xa20463['push'](_0xa20463['shift']());}catch(_0x599f45){_0xa20463['push'](_0xa20463['shift']());}}}(_0x14f1,0xb6366));function _0x14f1(){var _0x4c24b7=['mti','5726420rGmJCp','MATRIX_A','673338tOViFz','18cAlUGE','56aMqiUS','init_genrand','UPPER_MASK','904544dWtmdK','2151HtxhUp','1730215YAhJKA','3627312LkODFh','prototype','5757656JMODxb','66Fmfzqt','LOWER_MASK','genrand_int32'];_0x14f1=function(){return _0x4c24b7;};return _0x14f1();}function _0x3f70(_0x4f7996,_0x5e18ef){var _0x14f19f=_0x14f1();return _0x3f70=function(_0x3f700d,_0x591f3c){_0x3f700d=_0x3f700d-0x1c3;var _0x3b1dc6=_0x14f19f[_0x3f700d];return _0x3b1dc6;},_0x3f70(_0x4f7996,_0x5e18ef);}var MersenneTwister=function(_0x5e7797){var _0x10c1a6=_0x3f70;_0x5e7797==undefined&&(_0x5e7797=new Date()['getTime']()),this['N']=0x270,this['M']=0x18d,this[_0x10c1a6(0x1c3)]=0x9908b0df,this['UPPER_MASK']=0x80000000,this['LOWER_MASK']=0x7fffffff,this['mt']=new Array(this['N']),this[_0x10c1a6(0x1d2)]=this['N']+0x1,this[_0x10c1a6(0x1c7)](_0x5e7797);};MersenneTwister[_0x4c789e(0x1cd)]['init_genrand']=function(_0x4ab195){var _0x46f9d4=_0x4c789e;this['mt'][0x0]=_0x4ab195>>>0x0;for(this[_0x46f9d4(0x1d2)]=0x1;this['mti']<this['N'];this[_0x46f9d4(0x1d2)]++){var _0x4ab195=this['mt'][this[_0x46f9d4(0x1d2)]-0x1]^this['mt'][this[_0x46f9d4(0x1d2)]-0x1]>>>0x1e;this['mt'][this[_0x46f9d4(0x1d2)]]=(((_0x4ab195&0xffff0000)>>>0x10)*0x6c078965<<0x10)+(_0x4ab195&0xffff)*0x6c078965+this[_0x46f9d4(0x1d2)],this['mt'][this[_0x46f9d4(0x1d2)]]>>>=0x0;}},MersenneTwister[_0x4c789e(0x1cd)]['genrand_int32']=function(){var _0x28c9d6=_0x4c789e,_0x538d4d,_0x158571=new Array(0x0,this['MATRIX_A']);if(this[_0x28c9d6(0x1d2)]>=this['N']){var _0x28bbba;if(this[_0x28c9d6(0x1d2)]==this['N']+0x1)this[_0x28c9d6(0x1c7)](0x1571);for(_0x28bbba=0x0;_0x28bbba<this['N']-this['M'];_0x28bbba++){_0x538d4d=this['mt'][_0x28bbba]&this[_0x28c9d6(0x1c8)]|this['mt'][_0x28bbba+0x1]&this[_0x28c9d6(0x1d0)],this['mt'][_0x28bbba]=this['mt'][_0x28bbba+this['M']]^_0x538d4d>>>0x1^_0x158571[_0x538d4d&0x1];}for(;_0x28bbba<this['N']-0x1;_0x28bbba++){_0x538d4d=this['mt'][_0x28bbba]&this[_0x28c9d6(0x1c8)]|this['mt'][_0x28bbba+0x1]&this[_0x28c9d6(0x1d0)],this['mt'][_0x28bbba]=this['mt'][_0x28bbba+(this['M']-this['N'])]^_0x538d4d>>>0x1^_0x158571[_0x538d4d&0x1];}_0x538d4d=this['mt'][this['N']-0x1]&this[_0x28c9d6(0x1c8)]|this['mt'][0x0]&this[_0x28c9d6(0x1d0)],this['mt'][this['N']-0x1]=this['mt'][this['M']-0x1]^_0x538d4d>>>0x1^_0x158571[_0x538d4d&0x1],this[_0x28c9d6(0x1d2)]=0x0;}return _0x538d4d=this['mt'][this[_0x28c9d6(0x1d2)]++],_0x538d4d^=_0x538d4d>>>0xb,_0x538d4d^=_0x538d4d<<0x7&0x9d2c5680,_0x538d4d^=_0x538d4d<<0xf&0xefc60000,_0x538d4d^=_0x538d4d>>>0x12,_0x538d4d>>>0x0;},MersenneTwister['prototype']['random']=function(){var _0x26de3d=_0x4c789e;return this[_0x26de3d(0x1d1)]()*(0x1/0x100000000);};