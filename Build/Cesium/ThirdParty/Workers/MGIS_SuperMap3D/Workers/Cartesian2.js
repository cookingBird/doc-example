var _0x1ed2f4=_0x55d5;(function(_0x524ec9,_0x3b4675){var _0x141ad5=_0x55d5,_0x2bcd15=_0x524ec9();while(!![]){try{var _0x5d121b=parseInt(_0x141ad5(0x12e))/0x1+-parseInt(_0x141ad5(0x116))/0x2+-parseInt(_0x141ad5(0xfe))/0x3*(parseInt(_0x141ad5(0x11c))/0x4)+parseInt(_0x141ad5(0x10a))/0x5+-parseInt(_0x141ad5(0x11e))/0x6+-parseInt(_0x141ad5(0x10c))/0x7*(-parseInt(_0x141ad5(0x115))/0x8)+parseInt(_0x141ad5(0x10b))/0x9;if(_0x5d121b===_0x3b4675)break;else _0x2bcd15['push'](_0x2bcd15['shift']());}catch(_0x106362){_0x2bcd15['push'](_0x2bcd15['shift']());}}}(_0x3240,0x273c8),importScripts(_0x1ed2f4(0x127),_0x1ed2f4(0xf5),_0x1ed2f4(0xf3),'./DeveloperError.js',_0x1ed2f4(0x129)));function Cartesian2(_0x26346c,_0x34c37c){this['x']=defaultValue(_0x26346c,0x0),this['y']=defaultValue(_0x34c37c,0x0);}Cartesian2[_0x1ed2f4(0xf4)]=function(_0x2f1b75,_0x37362d,_0x149b28){if(!defined(_0x149b28))return new Cartesian2(_0x2f1b75,_0x37362d);return _0x149b28['x']=_0x2f1b75,_0x149b28['y']=_0x37362d,_0x149b28;},Cartesian2[_0x1ed2f4(0x10e)]=function(_0x1faa40,_0xeae256){if(!defined(_0x1faa40))return undefined;if(!defined(_0xeae256))return new Cartesian2(_0x1faa40['x'],_0x1faa40['y']);return _0xeae256['x']=_0x1faa40['x'],_0xeae256['y']=_0x1faa40['y'],_0xeae256;},Cartesian2['fromCartesian3']=Cartesian2['clone'],Cartesian2[_0x1ed2f4(0x12a)]=Cartesian2[_0x1ed2f4(0x10e)],Cartesian2['packedLength']=0x2,Cartesian2[_0x1ed2f4(0x105)]=function(_0x576835,_0x4d94af,_0x249029){var _0x5cc806=_0x1ed2f4;return Check[_0x5cc806(0x118)][_0x5cc806(0x125)]('value',_0x576835),Check['defined'](_0x5cc806(0x134),_0x4d94af),_0x249029=defaultValue(_0x249029,0x0),_0x4d94af[_0x249029++]=_0x576835['x'],_0x4d94af[_0x249029]=_0x576835['y'],_0x4d94af;},Cartesian2[_0x1ed2f4(0x11b)]=function(_0x5da65b,_0x3851cd,_0x5016e6){var _0x4d9375=_0x1ed2f4;return Check[_0x4d9375(0x12f)]('array',_0x5da65b),_0x3851cd=defaultValue(_0x3851cd,0x0),!defined(_0x5016e6)&&(_0x5016e6=new Cartesian2()),_0x5016e6['x']=_0x5da65b[_0x3851cd++],_0x5016e6['y']=_0x5da65b[_0x3851cd],_0x5016e6;},Cartesian2[_0x1ed2f4(0x109)]=function(_0xb5ba2,_0x40f4f5){var _0x51545c=_0x1ed2f4;Check[_0x51545c(0x12f)]('array',_0xb5ba2);var _0x28d830=_0xb5ba2['length'],_0x116643=_0x28d830*0x2;if(!defined(_0x40f4f5))_0x40f4f5=new Array(_0x116643);else{if(!Array[_0x51545c(0x135)](_0x40f4f5)&&_0x40f4f5['length']!==_0x116643)throw new DeveloperError(_0x51545c(0x133));else _0x40f4f5[_0x51545c(0x10f)]!==_0x116643&&(_0x40f4f5[_0x51545c(0x10f)]=_0x116643);}for(var _0x257390=0x0;_0x257390<_0x28d830;++_0x257390){Cartesian2['pack'](_0xb5ba2[_0x257390],_0x40f4f5,_0x257390*0x2);}return _0x40f4f5;},Cartesian2[_0x1ed2f4(0xfd)]=function(_0x997855,_0x4bf7f0){var _0x2552af=_0x1ed2f4;Check[_0x2552af(0x12f)](_0x2552af(0x134),_0x997855),Check[_0x2552af(0x118)][_0x2552af(0x136)][_0x2552af(0x110)](_0x2552af(0x130),_0x997855[_0x2552af(0x10f)],0x2);if(_0x997855['length']%0x2!==0x0)throw new DeveloperError(_0x2552af(0x132));var _0x1ddcbd=_0x997855[_0x2552af(0x10f)];!defined(_0x4bf7f0)?_0x4bf7f0=new Array(_0x1ddcbd/0x2):_0x4bf7f0[_0x2552af(0x10f)]=_0x1ddcbd/0x2;for(var _0x52f41a=0x0;_0x52f41a<_0x1ddcbd;_0x52f41a+=0x2){var _0x34cc71=_0x52f41a/0x2;_0x4bf7f0[_0x34cc71]=Cartesian2['unpack'](_0x997855,_0x52f41a,_0x4bf7f0[_0x34cc71]);}return _0x4bf7f0;},Cartesian2['fromArray']=Cartesian2['unpack'],Cartesian2[_0x1ed2f4(0x108)]=function(_0x5cc09a){var _0x2d2699=_0x1ed2f4;return Check[_0x2d2699(0x118)]['object'](_0x2d2699(0x119),_0x5cc09a),Math[_0x2d2699(0x10d)](_0x5cc09a['x'],_0x5cc09a['y']);},Cartesian2[_0x1ed2f4(0x106)]=function(_0x3be3cb){var _0x5b0d65=_0x1ed2f4;return Check[_0x5b0d65(0x118)][_0x5b0d65(0x125)]('cartesian',_0x3be3cb),Math[_0x5b0d65(0x111)](_0x3be3cb['x'],_0x3be3cb['y']);},Cartesian2[_0x1ed2f4(0x122)]=function(_0x527176,_0x6c6739,_0x5c1a8b){var _0x29a1aa=_0x1ed2f4;return Check['typeOf']['object'](_0x29a1aa(0x131),_0x527176),Check[_0x29a1aa(0x118)][_0x29a1aa(0x125)]('second',_0x6c6739),Check[_0x29a1aa(0x118)][_0x29a1aa(0x125)](_0x29a1aa(0x11a),_0x5c1a8b),_0x5c1a8b['x']=Math[_0x29a1aa(0x111)](_0x527176['x'],_0x6c6739['x']),_0x5c1a8b['y']=Math['min'](_0x527176['y'],_0x6c6739['y']),_0x5c1a8b;},Cartesian2[_0x1ed2f4(0xf7)]=function(_0x222bdb,_0x1f33bc,_0x2e82dc){var _0x55c857=_0x1ed2f4;return Check[_0x55c857(0x118)][_0x55c857(0x125)](_0x55c857(0x131),_0x222bdb),Check['typeOf'][_0x55c857(0x125)]('second',_0x1f33bc),Check[_0x55c857(0x118)][_0x55c857(0x125)](_0x55c857(0x11a),_0x2e82dc),_0x2e82dc['x']=Math[_0x55c857(0x10d)](_0x222bdb['x'],_0x1f33bc['x']),_0x2e82dc['y']=Math[_0x55c857(0x10d)](_0x222bdb['y'],_0x1f33bc['y']),_0x2e82dc;},Cartesian2[_0x1ed2f4(0xf1)]=function(_0x13c613){var _0x37b750=_0x1ed2f4;return Check[_0x37b750(0x118)][_0x37b750(0x125)]('cartesian',_0x13c613),_0x13c613['x']*_0x13c613['x']+_0x13c613['y']*_0x13c613['y'];},Cartesian2[_0x1ed2f4(0xff)]=function(_0x33d54e){var _0x5de3dd=_0x1ed2f4;return Math[_0x5de3dd(0x11f)](Cartesian2[_0x5de3dd(0xf1)](_0x33d54e));};var distanceScratch=new Cartesian2();Cartesian2[_0x1ed2f4(0x128)]=function(_0x38feb3,_0x2beff0){var _0x31cdbe=_0x1ed2f4;return Check[_0x31cdbe(0x118)][_0x31cdbe(0x125)]('left',_0x38feb3),Check['typeOf']['object'](_0x31cdbe(0xfc),_0x2beff0),Cartesian2[_0x31cdbe(0x137)](_0x38feb3,_0x2beff0,distanceScratch),Cartesian2['magnitude'](distanceScratch);},Cartesian2['distanceSquared']=function(_0x19fe87,_0x57a583){var _0x1d746f=_0x1ed2f4;return Check[_0x1d746f(0x118)][_0x1d746f(0x125)](_0x1d746f(0x117),_0x19fe87),Check[_0x1d746f(0x118)][_0x1d746f(0x125)]('right',_0x57a583),Cartesian2[_0x1d746f(0x137)](_0x19fe87,_0x57a583,distanceScratch),Cartesian2[_0x1d746f(0xf1)](distanceScratch);},Cartesian2[_0x1ed2f4(0x120)]=function(_0x10f7bb,_0x4297d4){var _0x3f0c15=_0x1ed2f4;Check[_0x3f0c15(0x118)]['object'](_0x3f0c15(0x119),_0x10f7bb),Check[_0x3f0c15(0x118)][_0x3f0c15(0x125)](_0x3f0c15(0x11a),_0x4297d4);var _0x1ba6b1=Cartesian2[_0x3f0c15(0xff)](_0x10f7bb);_0x4297d4['x']=_0x10f7bb['x']/_0x1ba6b1,_0x4297d4['y']=_0x10f7bb['y']/_0x1ba6b1;if(isNaN(_0x4297d4['x'])||isNaN(_0x4297d4['y']))throw new DeveloperError(_0x3f0c15(0x104));return _0x4297d4;},Cartesian2[_0x1ed2f4(0xf8)]=function(_0x3febba,_0x456421){var _0x296659=_0x1ed2f4;return Check[_0x296659(0x118)][_0x296659(0x125)](_0x296659(0x117),_0x3febba),Check[_0x296659(0x118)][_0x296659(0x125)](_0x296659(0xfc),_0x456421),_0x3febba['x']*_0x456421['x']+_0x3febba['y']*_0x456421['y'];},Cartesian2[_0x1ed2f4(0x12c)]=function(_0x3e4bf6,_0x21b247,_0x38d368){var _0x2cf037=_0x1ed2f4;return Check[_0x2cf037(0x118)][_0x2cf037(0x125)](_0x2cf037(0x117),_0x3e4bf6),Check[_0x2cf037(0x118)]['object'](_0x2cf037(0xfc),_0x21b247),Check[_0x2cf037(0x118)][_0x2cf037(0x125)]('result',_0x38d368),_0x38d368['x']=_0x3e4bf6['x']*_0x21b247['x'],_0x38d368['y']=_0x3e4bf6['y']*_0x21b247['y'],_0x38d368;},Cartesian2[_0x1ed2f4(0x12d)]=function(_0x429fca,_0x332deb,_0x319328){var _0x584624=_0x1ed2f4;return Check[_0x584624(0x118)][_0x584624(0x125)](_0x584624(0x117),_0x429fca),Check[_0x584624(0x118)][_0x584624(0x125)](_0x584624(0xfc),_0x332deb),Check['typeOf'][_0x584624(0x125)]('result',_0x319328),_0x319328['x']=_0x429fca['x']/_0x332deb['x'],_0x319328['y']=_0x429fca['y']/_0x332deb['y'],_0x319328;},Cartesian2['add']=function(_0x130874,_0x1ed2d3,_0xc67963){var _0x2349f1=_0x1ed2f4;return Check[_0x2349f1(0x118)][_0x2349f1(0x125)](_0x2349f1(0x117),_0x130874),Check[_0x2349f1(0x118)][_0x2349f1(0x125)](_0x2349f1(0xfc),_0x1ed2d3),Check[_0x2349f1(0x118)][_0x2349f1(0x125)](_0x2349f1(0x11a),_0xc67963),_0xc67963['x']=_0x130874['x']+_0x1ed2d3['x'],_0xc67963['y']=_0x130874['y']+_0x1ed2d3['y'],_0xc67963;},Cartesian2[_0x1ed2f4(0x137)]=function(_0x2c36f2,_0x2cbe86,_0x48aa56){var _0xdb3785=_0x1ed2f4;return Check[_0xdb3785(0x118)][_0xdb3785(0x125)](_0xdb3785(0x117),_0x2c36f2),Check[_0xdb3785(0x118)][_0xdb3785(0x125)]('right',_0x2cbe86),Check[_0xdb3785(0x118)][_0xdb3785(0x125)](_0xdb3785(0x11a),_0x48aa56),_0x48aa56['x']=_0x2c36f2['x']-_0x2cbe86['x'],_0x48aa56['y']=_0x2c36f2['y']-_0x2cbe86['y'],_0x48aa56;},Cartesian2[_0x1ed2f4(0x121)]=function(_0x3452da,_0x28cac3,_0x29097d){var _0x278964=_0x1ed2f4;return Check[_0x278964(0x118)][_0x278964(0x125)](_0x278964(0x119),_0x3452da),Check[_0x278964(0x118)][_0x278964(0x136)]('scalar',_0x28cac3),Check[_0x278964(0x118)]['object']('result',_0x29097d),_0x29097d['x']=_0x3452da['x']*_0x28cac3,_0x29097d['y']=_0x3452da['y']*_0x28cac3,_0x29097d;},Cartesian2[_0x1ed2f4(0x102)]=function(_0x4c9815,_0x24714d,_0x27bb6){var _0x305866=_0x1ed2f4;return Check['typeOf'][_0x305866(0x125)](_0x305866(0x119),_0x4c9815),Check['typeOf']['number'](_0x305866(0x103),_0x24714d),Check[_0x305866(0x118)]['object'](_0x305866(0x11a),_0x27bb6),_0x27bb6['x']=_0x4c9815['x']/_0x24714d,_0x27bb6['y']=_0x4c9815['y']/_0x24714d,_0x27bb6;},Cartesian2[_0x1ed2f4(0x11d)]=function(_0xfe63a9,_0x19f4d6){var _0x481721=_0x1ed2f4;return Check['typeOf'][_0x481721(0x125)]('cartesian',_0xfe63a9),Check['typeOf']['object'](_0x481721(0x11a),_0x19f4d6),_0x19f4d6['x']=-_0xfe63a9['x'],_0x19f4d6['y']=-_0xfe63a9['y'],_0x19f4d6;},Cartesian2[_0x1ed2f4(0x101)]=function(_0x410e2e,_0x35b5bf){var _0x48421a=_0x1ed2f4;return Check[_0x48421a(0x118)]['object'](_0x48421a(0x119),_0x410e2e),Check[_0x48421a(0x118)][_0x48421a(0x125)]('result',_0x35b5bf),_0x35b5bf['x']=Math['abs'](_0x410e2e['x']),_0x35b5bf['y']=Math[_0x48421a(0x101)](_0x410e2e['y']),_0x35b5bf;};var lerpScratch=new Cartesian2();Cartesian2[_0x1ed2f4(0xf2)]=function(_0x574f1b,_0x3d0f4c,_0x96e863,_0x56874e){var _0x53b822=_0x1ed2f4;return Check[_0x53b822(0x118)][_0x53b822(0x125)]('start',_0x574f1b),Check[_0x53b822(0x118)][_0x53b822(0x125)](_0x53b822(0x112),_0x3d0f4c),Check[_0x53b822(0x118)]['number']('t',_0x96e863),Check[_0x53b822(0x118)][_0x53b822(0x125)](_0x53b822(0x11a),_0x56874e),Cartesian2[_0x53b822(0x121)](_0x3d0f4c,_0x96e863,lerpScratch),_0x56874e=Cartesian2[_0x53b822(0x121)](_0x574f1b,0x1-_0x96e863,_0x56874e),Cartesian2[_0x53b822(0x113)](lerpScratch,_0x56874e,_0x56874e);};var angleBetweenScratch=new Cartesian2(),angleBetweenScratch2=new Cartesian2();Cartesian2[_0x1ed2f4(0x124)]=function(_0x132c93,_0x14fb98){var _0x4dc4a6=_0x1ed2f4;return Check[_0x4dc4a6(0x118)][_0x4dc4a6(0x125)](_0x4dc4a6(0x117),_0x132c93),Check[_0x4dc4a6(0x118)][_0x4dc4a6(0x125)](_0x4dc4a6(0xfc),_0x14fb98),Cartesian2[_0x4dc4a6(0x120)](_0x132c93,angleBetweenScratch),Cartesian2[_0x4dc4a6(0x120)](_0x14fb98,angleBetweenScratch2),CesiumMath[_0x4dc4a6(0x123)](Cartesian2[_0x4dc4a6(0xf8)](angleBetweenScratch,angleBetweenScratch2));};function _0x55d5(_0x5efa52,_0xeff519){var _0x3240cd=_0x3240();return _0x55d5=function(_0x55d5c3,_0x10bb06){_0x55d5c3=_0x55d5c3-0xf1;var _0x47af88=_0x3240cd[_0x55d5c3];return _0x47af88;},_0x55d5(_0x5efa52,_0xeff519);}var mostOrthogonalAxisScratch=new Cartesian2();Cartesian2[_0x1ed2f4(0x107)]=function(_0x56ef45,_0x54248f){var _0x51d5f7=_0x1ed2f4;Check[_0x51d5f7(0x118)][_0x51d5f7(0x125)](_0x51d5f7(0x119),_0x56ef45),Check[_0x51d5f7(0x118)][_0x51d5f7(0x125)](_0x51d5f7(0x11a),_0x54248f);var _0x219c2b=Cartesian2[_0x51d5f7(0x120)](_0x56ef45,mostOrthogonalAxisScratch);return Cartesian2[_0x51d5f7(0x101)](_0x219c2b,_0x219c2b),_0x219c2b['x']<=_0x219c2b['y']?_0x54248f=Cartesian2[_0x51d5f7(0x10e)](Cartesian2[_0x51d5f7(0x126)],_0x54248f):_0x54248f=Cartesian2['clone'](Cartesian2[_0x51d5f7(0xf9)],_0x54248f),_0x54248f;},Cartesian2[_0x1ed2f4(0xfa)]=function(_0x48eb86,_0x4b6bc2){return _0x48eb86===_0x4b6bc2||defined(_0x48eb86)&&defined(_0x4b6bc2)&&_0x48eb86['x']===_0x4b6bc2['x']&&_0x48eb86['y']===_0x4b6bc2['y'];},Cartesian2[_0x1ed2f4(0x12b)]=function(_0x48f78c,_0x5cfb49,_0x431b0e){return _0x48f78c['x']===_0x5cfb49[_0x431b0e]&&_0x48f78c['y']===_0x5cfb49[_0x431b0e+0x1];},Cartesian2[_0x1ed2f4(0x100)]=function(_0x522357,_0x4bad0a,_0x2deac9,_0x5cf37d){return _0x522357===_0x4bad0a||defined(_0x522357)&&defined(_0x4bad0a)&&CesiumMath['equalsEpsilon'](_0x522357['x'],_0x4bad0a['x'],_0x2deac9,_0x5cf37d)&&CesiumMath['equalsEpsilon'](_0x522357['y'],_0x4bad0a['y'],_0x2deac9,_0x5cf37d);},Cartesian2['ZERO']=Object[_0x1ed2f4(0x114)](new Cartesian2(0x0,0x0)),Cartesian2[_0x1ed2f4(0x126)]=Object[_0x1ed2f4(0x114)](new Cartesian2(0x1,0x0)),Cartesian2['UNIT_Y']=Object[_0x1ed2f4(0x114)](new Cartesian2(0x0,0x1)),Cartesian2['prototype'][_0x1ed2f4(0x10e)]=function(_0x10876c){return Cartesian2['clone'](this,_0x10876c);},Cartesian2['prototype'][_0x1ed2f4(0xfa)]=function(_0x195926){var _0x386801=_0x1ed2f4;return Cartesian2[_0x386801(0xfa)](this,_0x195926);},Cartesian2['prototype'][_0x1ed2f4(0x100)]=function(_0x17d081,_0x5e37e9,_0x8e13aa){var _0x2a6001=_0x1ed2f4;return Cartesian2[_0x2a6001(0x100)](this,_0x17d081,_0x5e37e9,_0x8e13aa);},Cartesian2[_0x1ed2f4(0xfb)][_0x1ed2f4(0xf6)]=function(){return'('+this['x']+',\x20'+this['y']+')';},Cartesian2[_0x1ed2f4(0xfb)]['toArray']=function(_0x244914,_0x31717b){Cartesian2['pack'](this,_0x244914,_0x31717b);};function _0x3240(){var _0x2024d3=['multiplyComponents','divideComponents','150280kIhjED','defined','array.length','first','array\x20length\x20must\x20be\x20a\x20multiple\x20of\x202.','If\x20result\x20is\x20a\x20typed\x20array,\x20it\x20must\x20have\x20exactly\x20array.length\x20*\x202\x20elements','array','isArray','number','subtract','magnitudeSquared','lerp','./defined.js','fromElements','./defaultValue.js','toString','maximumByComponent','dot','UNIT_Y','equals','prototype','right','unpackArray','3oJnaNR','magnitude','equalsEpsilon','abs','divideByScalar','scalar','normalized\x20result\x20is\x20not\x20a\x20number','pack','minimumComponent','mostOrthogonalAxis','maximumComponent','packArray','845070XBcPdh','766755VaxEfX','2234421DHLCko','max','clone','length','greaterThanOrEquals','min','end','add','freeze','8kUlYBH','450642WQBZAl','left','typeOf','cartesian','result','unpack','843476wEBOUO','negate','760740xpvCcb','sqrt','normalize','multiplyByScalar','minimumByComponent','acosClamped','angleBetween','object','UNIT_X','./Check.js','distance','./Math.js','fromCartesian4','equalsArray'];_0x3240=function(){return _0x2024d3;};return _0x3240();}