(window.webpackJsonp=window.webpackJsonp||[]).push([[10,8],{367:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(14),n(11),n(16),n(24),n(15),n(25);var r=n(4);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c=[{title:"線の太さ (size)",key:"size",step:0,min:1,max:50},{title:"オプション1 (thinning)",key:"thinning",step:0,min:-1,max:1},{title:"オプション2 (smoothing)",key:"smoothing",step:0,min:0,max:1},{title:"オプション3 (streamline)",key:"streamline",step:0,min:0,max:1}],l=function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},{freehandCanvasWidth:500,freehandCanvasHeight:500,outputImageWidth:128,outputImageHeight:128,outputImageExtension:"png",outputImageDefaultName:"image_freehand",swatches:[["#000000FF"],["#FFFFFFFF"],["#3AB0C7"],["#38BA91"],["#EC71A1"],["#EAA822"],["#1111FF"],["#00BB00"],["#FF0000"],["#00000000"]],strokeOptions:c})}},368:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(51),n(17);var r=n(22),o=function(){return{svgElement:Object(r.g)()}},c=Symbol("svgRef"),l=function(){var t=Object(r.d)(c);if(!t)throw new Error("".concat(c," is not provided"));return t}},370:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(367),c=Object(r.b)({props:{value:{type:String,default:"#000000FF"}},setup:function(t,e){var n=e.emit,c=Object(o.a)().swatches;return{color:Object(r.a)({get:function(){return t.value},set:function(t){return n("input",t)}}),vuetifyProps:{canvasHeight:100,width:280,dotSize:10,hideInputs:!0,mode:"hexa",showSwatches:!0,swatches:c}}}}),l=n(49),f=n(66),d=n.n(f),v=n(428),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-color-picker",t._b({staticClass:"mx-0 my-4",model:{value:t.color,callback:function(e){t.color=e},expression:"color"}},"v-color-picker",t.vuetifyProps,!1))}),[],!1,null,null,null);e.default=component.exports;d()(component,{VColorPicker:v.a})},371:function(t,e,n){"use strict";n.r(e);var r=n(22),o=Object(r.b)({props:{value:{type:String,default:"stroke"}},setup:function(t,e){var n=e.emit;return{toggle:Object(r.a)({get:function(){return"stroke"===t.value?0:1},set:function(t){return n("input",0===t?"stroke":"background")}})}}}),c=n(49),l=n(66),f=n.n(l),d=n(353),v=n(400),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{attrs:{dense:""},model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}},[n("v-btn",[t._v("線")]),t._v(" "),n("v-btn",[t._v("背景")])],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:d.a,VBtnToggle:v.a})},373:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("3b91e1da",content,!0,{sourceMap:!1})},379:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("69a10170",content,!0,{sourceMap:!1})},380:function(t,e,n){var content=n(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("0d1f2698",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n(373)},386:function(t,e,n){var r=n(32)(!1);r.push([t.i,"svg[data-v-16aed6a5]{width:100%;height:100%;touch-action:none}.svg-container[data-v-16aed6a5]{position:relative}",""]),t.exports=r},389:function(t,e,n){"use strict";n(379)},390:function(t,e,n){var r=n(32)(!1);r.push([t.i,".controls-container[data-v-3860cf75]{position:relative}.controls-container .setting-reset-button[data-v-3860cf75]{position:absolute;bottom:24px;right:24px}",""]),t.exports=r},391:function(t,e,n){"use strict";n(380)},392:function(t,e,n){var r=n(32)(!1);r.push([t.i,".controls-container[data-v-794face3]{position:relative}",""]),t.exports=r},393:function(t,e,n){"use strict";n.r(e);n(14),n(11),n(16),n(24),n(15),n(25);var r=n(4),o=n(22),c=n(109),l=n(86),f=(n(69),n(55),n(27),n(384)),d=n(368),v=n(367);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(o.b)({setup:function(){var t=Object(v.a)(),e=t.freehandCanvasWidth,n=t.freehandCanvasHeight,r=Object(c.useStore)().settings,h={width:"".concat(e,"px"),height:"".concat(n,"px")},C=Object(o.a)((function(){return r.value.strokeColor})),O=Object(o.a)((function(){return{backgroundColor:r.value.backgroundColor}}));return m(m(m(m({},function(){var t=Object(c.useStore)(),e=t.setCurrentMark,n=t.updateCurrentMark,r=t.endMark;return{handlePointerDown:function(t){t.preventDefault(),e({type:t.pointerType,points:[[t.offsetX,t.offsetY,t.pressure]]})},handlePointerMove:function(t){t.preventDefault(),1===t.buttons&&n({type:t.pointerType,points:[[t.offsetX,t.offsetY,t.pressure]]})},handlePointerUp:function(t){t.preventDefault(),r()}}}()),function(){var t=Object(c.useStore)(),data=t.data,e=t.settings;return{strokes:Object(o.a)((function(){return data.value.marks.length<1&&data.value.currentMark.points.length<1?[]:[].concat(Object(l.a)(data.value.marks),[data.value.currentMark]).map((function(mark){return function(t){var e=[];if(t.length<3)return"";var n=t[t.length-3],r=t[t.length-2];e.push("M",n[0],n[1],"Q");for(var i=0;i<t.length;i++)e.push(n[0],n[1],(n[0]+r[0])/2,(n[1]+r[1])/2),n=r,r=t[i];return e.push("Z"),e.join(" ")}(Object(f.a)(mark.points,{size:e.value.size,thinning:e.value.thinning,smoothing:e.value.smoothing,streamline:e.value.streamline,simulatePressure:"pen"!==mark.type}))}))}))}}()),Object(d.c)()),{},{svgContainerStyle:h,svgStyle:O,strokeColor:C})}}),O=(n(385),n(49)),y=n(66),k=n.n(y),j=n(425),component=Object(O.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto svg-container",style:t.svgContainerStyle,attrs:{outlined:""}},[n("svg",{ref:"svgElement",style:t.svgStyle,on:{pointerdown:t.handlePointerDown,pointerup:t.handlePointerUp,pointermove:t.handlePointerMove}},[n("g",{attrs:{"stroke-width":"0",stroke:t.strokeColor,fill:t.strokeColor}},t._l(t.strokes,(function(t,e){return n("path",{key:e,attrs:{d:t}})})),0)])])}),[],!1,null,"16aed6a5",null);e.default=component.exports;k()(component,{VCard:j.a})},394:function(t,e,n){"use strict";n.r(e);var r=n(21),o=(n(88),n(22)),c=n(109),l=n(367),f=(n(17),n(27),function(t){return new Promise((function(e,n){var image=new Image;image.addEventListener("load",(function(){return e(image)})),image.addEventListener("error",(function(t){return n(t)})),image.src=t}))}),d=n(368),v=Object(o.b)({setup:function(){var t=Object(l.a)(),e=t.freehandCanvasWidth,n=t.freehandCanvasHeight,o=Object(c.useStore)(),v=o.dataHasChanged,h=o.resetData,m=Object(d.c)().svgElement,C=function(){var t=Object(l.a)(),e=t.freehandCanvasWidth,n=t.freehandCanvasHeight,o=t.outputImageWidth,c=t.outputImageHeight,d=t.outputImageExtension,v=t.outputImageDefaultName;return{downloadPngFromSvg:function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(svg){var r,canvas,l,h,image,m,C,O,y,a,k;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(new XMLSerializer).serializeToString(svg),(canvas=document.createElement("canvas")).width=e,canvas.height=n,l=canvas.getContext("2d"),h="data:image/svg+xml;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(r))),t.next=8,f(h);case 8:return image=t.sent,null==l||l.drawImage(image,0,0,e,n,0,0,100,100),m=canvas.toDataURL("image/png"),t.next=13,f(m);case 13:C=t.sent,(O=document.createElement("canvas")).width=o,O.height=c,null==(y=O.getContext("2d"))||y.drawImage(C,0,0,o,c,0,0,o,c),a=document.createElement("a"),k=O.toDataURL("image/".concat(d)),a.href=k,a.setAttribute("download","".concat(v,".").concat(d)),a.dispatchEvent(new MouseEvent("click"));case 24:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}().downloadPngFromSvg;return{controlsContainerStyle:{width:"".concat(e,"px"),height:"".concat(n/4,"px")},dataHasChanged:v,handlePngDownload:function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(m.value);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),handleClear:function(){return h()}}}}),h=(n(391),n(49)),m=n(66),C=n.n(m),O=n(353),y=n(425),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto controls-container pa-4",style:t.controlsContainerStyle,attrs:{elevation:"2",outlined:""}},[n("div",{staticClass:"d-flex justify-center my-auto",staticStyle:{height:"100%"}},[n("v-btn",{staticClass:"my-auto",attrs:{outlined:"",disabled:!t.dataHasChanged},on:{click:function(e){return e.preventDefault(),t.handleClear(e)}}},[t._v("クリア")]),t._v(" "),n("v-btn",{staticClass:"ml-4 my-auto",attrs:{disabled:!t.dataHasChanged,outlined:""},on:{click:function(e){return e.preventDefault(),t.handlePngDownload(e)}}},[t._v("保存")])],1)])}),[],!1,null,"794face3",null);e.default=component.exports;C()(component,{VBtn:O.a,VCard:y.a})},395:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(367),c=Object(r.b)({setup:function(){return{width:Object(o.a)().freehandCanvasWidth}}}),l=n(49),f=n(66),d=n.n(f),v=n(403),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-subheader",{staticClass:"mx-auto font-weight-bold",style:{width:t.width+"px"}},[t._t("default"),t._v(" "),n("span",{staticClass:"text-caption ml-1"},[t._t("caption")],2)],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VSubheader:v.a})},396:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(370),c=n(371),l=n(109),f=n(367),d=Object(r.b)({components:{AppColorPicker:o.default,AppActiveColorPickerToggle:c.default},setup:function(){var t=Object(f.a)(),e=t.freehandCanvasWidth,n=t.freehandCanvasHeight,o=t.strokeOptions,c=Object(l.useStore)(),d=c.settings,v=c.settingsHasChanged,h=c.resetSettings,m={width:"".concat(e,"px"),height:"".concat(n,"px")},C=Object(r.a)({get:function(){return"stroke"===d.value.activeColorPicker?d.value.strokeColor:d.value.backgroundColor},set:function(t){return"stroke"===d.value.activeColorPicker?d.value.strokeColor=t:d.value.backgroundColor=t}});return{controlsContainerStyle:m,settings:d,settingsHasChanged:v,handleSettingReset:function(){return h()},color:C,strokeOptions:o}}}),v=(n(389),n(49)),h=n(66),m=n.n(h),C=n(353),O=n(425),y=n(424),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto controls-container pa-4",style:t.controlsContainerStyle,attrs:{elevation:"2",outlined:""}},[t._l(t.strokeOptions,(function(option,e){return n("div",{key:e},[n("label",{staticClass:"text-caption"},[t._v(t._s(option.title))]),t._v(" "),n("v-slider",t._b({staticClass:"mt-n1",attrs:{dense:"","hide-details":""},model:{value:t.settings[option.key],callback:function(e){t.$set(t.settings,option.key,e)},expression:"settings[option.key]"}},"v-slider",option,!1))],1)})),t._v(" "),n("label",{staticClass:"text-caption"},[t._v("線の色/背景色")]),t._v(" "),n("div",{staticClass:"d-flex justify-start"},[n("AppColorPicker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),t._v(" "),n("div",[n("AppActiveColorPickerToggle",{staticClass:"ml-4 mt-4",model:{value:t.settings.activeColorPicker,callback:function(e){t.$set(t.settings,"activeColorPicker",e)},expression:"settings.activeColorPicker"}})],1)],1),t._v(" "),n("v-btn",{staticClass:"mx-auto setting-reset-button",attrs:{outlined:"",disabled:!t.settingsHasChanged},on:{click:t.handleSettingReset}},[t._v("設定をリセット")])],2)}),[],!1,null,"3860cf75",null);e.default=component.exports;m()(component,{AppColorPicker:n(370).default,AppActiveColorPickerToggle:n(371).default}),m()(component,{VBtn:C.a,VCard:O.a,VSlider:y.a})},429:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(395),c=n(393),l=n(396),f=n(394),d=n(368),v=Object(r.b)({components:{AppSubheader:o.default,FreehandCanvas:c.default,AppearanceControls:l.default,DownloadControls:f.default},setup:function(){Object(r.e)(d.a,Object(d.b)())}}),h=n(49),m=n(66),C=n.n(m),O=n(426),y=n(366),k=n(427),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("AppSubheader",{scopedSlots:t._u([{key:"default",fn:function(){return[t._v("🖋 手書き入力")]},proxy:!0},{key:"caption",fn:function(){return[t._v("\n          (クリックしたままカーソルを動かして線を描けます)\n        ")]},proxy:!0}])}),t._v(" "),n("FreehandCanvas")],1),t._v(" "),n("v-col",[n("AppSubheader",{scopedSlots:t._u([{key:"default",fn:function(){return[t._v("⚙️ 絵文字設定")]},proxy:!0},{key:"caption",fn:function(){return[t._v("\n          (お好みの見た目になるように先の太さや色を調整できます)\n        ")]},proxy:!0}])}),t._v(" "),n("AppearanceControls")],1)],1),t._v(" "),n("v-row",[n("v-col",[n("AppSubheader",{scopedSlots:t._u([{key:"default",fn:function(){return[t._v("️ 💾 保存設定")]},proxy:!0}])}),t._v(" "),n("DownloadControls")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;C()(component,{AppSubheader:n(395).default,FreehandCanvas:n(393).default,AppearanceControls:n(396).default,DownloadControls:n(394).default}),C()(component,{VCol:O.a,VContainer:y.a,VRow:k.a})}}]);