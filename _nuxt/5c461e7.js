(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{413:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return l}));n(10),n(49),n(23);var r=n(21),c=function(){return{svgElement:Object(r.g)()}},o=Symbol("svgRef"),l=function(){var t=Object(r.d)(o);if(!t)throw new Error("".concat(o," is not provided"));return t}},424:function(t,e,n){var content=n(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("a6d048fc",content,!0,{sourceMap:!1})},435:function(t,e,n){"use strict";n(424)},436:function(t,e,n){var r=n(26)(!1);r.push([t.i,".controls-container[data-v-3946961b]{position:relative}",""]),t.exports=r},438:function(t,e,n){"use strict";n.r(e);var r=n(17),c=(n(76),n(23),n(80),n(21)),o=n(99),l=n(196),d=(n(28),function(t){return new Promise((function(e,n){var image=new Image;image.addEventListener("load",(function(){return e(image)})),image.addEventListener("error",(function(t){return n(t)})),image.src=t}))}),v=n(413),f=n(218),h=n(216),m=n(214),x=Object(c.b)({setup:function(){var t=Object(l.a)(),e=t.freehandCanvasWidth,n=t.freehandCanvasHeight,x=Object(o.useStore)(),w=x.dataHasChanged,C=x.resetData,k=Object(v.c)().svgElement,y=function(){var t=Object(l.a)(),e=t.freehandCanvasWidth,n=t.freehandCanvasHeight,c=t.outputImageWidth,o=t.outputImageHeight,v=t.outputImageExtension,f=t.outputImageDefaultName;return{downloadPngFromSvg:function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(svg){var r,canvas,l,h,image,m,x,w,C,a,k;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=(new XMLSerializer).serializeToString(svg),(canvas=document.createElement("canvas")).width=e,canvas.height=n,l=canvas.getContext("2d"),h="data:image/svg+xml;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(r))),t.next=8,d(h);case 8:return image=t.sent,null==l||l.drawImage(image,0,0,e,n,0,0,100,100),m=canvas.toDataURL("image/png"),t.next=13,d(m);case 13:x=t.sent,(w=document.createElement("canvas")).width=c,w.height=o,null==(C=w.getContext("2d"))||C.drawImage(x,0,0,c,o,0,0,c,o),a=document.createElement("a"),k=w.toDataURL("image/".concat(v)),a.href=k,a.setAttribute("download","".concat(f,".").concat(v)),a.dispatchEvent(new MouseEvent("click"));case 24:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}().downloadPngFromSvg,O=Object(f.a)(),j=Object(h.a)(),S=Object(m.a)();return{controlsContainerStyle:Object(c.a)((function(){return{width:"".concat(e,"px"),minWidth:"".concat(e,"px"),minHeight:"".concat(S.value.breakpoint.xlOnly?n:n/3,"px"),height:"".concat(S.value.breakpoint.xlOnly?n:n/4,"px")}})),dataHasChanged:w,handlePngDownload:function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(k.value);case 3:O.success(j.t("saveSuccessMessage").toString()),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),O.error(j.t("saveErrorMessage").toString());case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),handleClear:function(){C(),O.success(j.t("clearSuccessMessage").toString())}}}}),w=(n(435),n(48)),C=n(59),k=n.n(C),y=n(394),O=n(443),j=n(486),S=n(485),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto controls-container pa-4",style:t.controlsContainerStyle,attrs:{elevation:"2",outlined:""}},[n("v-text-field",{staticClass:"mx-auto my-4",staticStyle:{width:"200px"},attrs:{label:"名前(オプション)",placeholder:"avocado_freehand",outlined:"",dense:"","hide-details":""}}),t._v(" "),n("div",{staticClass:"d-flex justify-center"},[n("div",{staticClass:"d-flex flex-column my-auto mr-4"},[n("label",{staticClass:"text-caption"},[t._v("名前をつける")]),t._v(" "),n("v-checkbox",{staticClass:"mt-0 mb-n4 mx-auto",model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1),t._v(" "),n("v-btn",{staticClass:"my-auto font-weight-bold",attrs:{width:"80",outlined:"",disabled:!t.dataHasChanged},on:{click:function(e){return e.preventDefault(),t.handleClear(e)}}},[t._v(t._s(t.$t("clear")))]),t._v(" "),n("v-btn",{staticClass:"ml-4 my-auto font-weight-bold",attrs:{width:"80",color:"primary",disabled:!t.dataHasChanged,depressed:""},on:{click:function(e){return e.preventDefault(),t.handlePngDownload(e)}}},[t._v(t._s(t.$t("save")))])],1)],1)}),[],!1,null,"3946961b",null);e.default=component.exports;k()(component,{VBtn:y.a,VCard:O.a,VCheckbox:j.a,VTextField:S.a})}}]);