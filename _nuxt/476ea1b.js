(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{413:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l}));n(10),n(49),n(23);var o=n(21),r=function(){return{svgElement:Object(o.g)()}},c=Symbol("svgRef"),l=function(){var e=Object(o.d)(c);if(!e)throw new Error("".concat(c," is not provided"));return e}},424:function(e,t,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("543910e7",content,!0,{sourceMap:!1})},435:function(e,t,n){"use strict";n(424)},436:function(e,t,n){var o=n(26)(!1);o.push([e.i,".controls-container[data-v-0a2c7c58]{position:relative}",""]),e.exports=o},438:function(e,t,n){"use strict";n.r(t);var o=n(17),r=(n(76),n(23),n(80),n(21)),c=n(99),l=n(196),d=(n(28),function(e){return new Promise((function(t,n){var image=new Image;image.addEventListener("load",(function(){return t(image)})),image.addEventListener("error",(function(e){return n(e)})),image.src=e}))}),m=n(413),v=n(218),f=n(216),h=n(214),w=Object(r.b)({setup:function(){var e=Object(l.a)(),t=e.freehandCanvasWidth,n=e.freehandCanvasHeight,w=Object(c.useStore)(),x=w.dataHasChanged,C=w.resetData,O=w.download,j=Object(m.c)().svgElement,y=function(){var e=Object(l.a)(),t=e.freehandCanvasWidth,n=e.freehandCanvasHeight,r=e.outputImageWidth,m=e.outputImageHeight,v=e.outputImageExtension,f=e.outputImageDefaultName,h=Object(c.useStore)().downloadFileName;return{downloadPngFromSvg:function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(svg){var o,canvas,c,l,image,w,x,C,O,a,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(new XMLSerializer).serializeToString(svg),(canvas=document.createElement("canvas")).width=t,canvas.height=n,c=canvas.getContext("2d"),l="data:image/svg+xml;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(o))),e.next=8,d(l);case 8:return image=e.sent,null==c||c.drawImage(image,0,0,t,n,0,0,100,100),w=canvas.toDataURL("image/png"),e.next=13,d(w);case 13:x=e.sent,(C=document.createElement("canvas")).width=r,C.height=m,null==(O=C.getContext("2d"))||O.drawImage(x,0,0,r,m,0,0,r,m),a=document.createElement("a"),j=C.toDataURL("image/".concat(v)),a.href=j,a.setAttribute("download","".concat(h.value||f,".").concat(v)),a.dispatchEvent(new MouseEvent("click"));case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}().downloadPngFromSvg,S=Object(v.a)(),_=Object(f.a)(),k=Object(h.a)();return{controlsContainerStyle:Object(r.a)((function(){return{width:"".concat(t,"px"),minWidth:"".concat(t,"px"),minHeight:"".concat(k.value.breakpoint.xlOnly?n:n/3,"px"),height:"".concat(k.value.breakpoint.xlOnly?n:n/4,"px")}})),dataHasChanged:x,download:O,handlePngDownload:function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(j.value);case 3:S.success(_.t("saveSuccessMessage").toString()),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),S.error(_.t("saveErrorMessage").toString());case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),handleClear:function(){C(),S.success(_.t("clearSuccessMessage").toString())}}}}),x=(n(435),n(48)),C=n(59),O=n.n(C),j=n(394),y=n(443),S=n(486),_=n(485),component=Object(x.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto controls-container pa-4",style:e.controlsContainerStyle,attrs:{elevation:"2",outlined:""}},[n("v-text-field",{staticClass:"mx-auto my-4",staticStyle:{width:"200px"},attrs:{disabled:!e.download.useCustomFileName,label:e.$t("fileName"),placeholder:"avocado_freehand",outlined:"",dense:"","hide-details":""},model:{value:e.download.fileName,callback:function(t){e.$set(e.download,"fileName",t)},expression:"download.fileName"}}),e._v(" "),n("div",{staticClass:"d-flex justify-center"},[n("div",{staticClass:"d-flex flex-column my-auto mr-4"},[n("label",{staticClass:"text-caption"},[e._v(e._s(e.$t("useFileName")))]),e._v(" "),n("v-checkbox",{staticClass:"mt-0 mb-n4 mx-auto",model:{value:e.download.useCustomFileName,callback:function(t){e.$set(e.download,"useCustomFileName",t)},expression:"download.useCustomFileName"}})],1),e._v(" "),n("v-btn",{staticClass:"my-auto font-weight-bold",attrs:{width:"80",outlined:"",disabled:!e.dataHasChanged},on:{click:function(t){return t.preventDefault(),e.handleClear(t)}}},[e._v(e._s(e.$t("clear")))]),e._v(" "),n("v-btn",{staticClass:"ml-4 my-auto font-weight-bold",attrs:{width:"80",color:"primary",disabled:!e.dataHasChanged,depressed:""},on:{click:function(t){return t.preventDefault(),e.handlePngDownload(t)}}},[e._v(e._s(e.$t("save")))])],1)],1)}),[],!1,null,"0a2c7c58",null);t.default=component.exports;O()(component,{VBtn:j.a,VCard:y.a,VCheckbox:S.a,VTextField:_.a})}}]);