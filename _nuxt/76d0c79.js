(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{426:function(e,t,r){var content=r(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("76cba024",content,!0,{sourceMap:!1})},427:function(e,t,r){var n=r(26)(!1);n.push([e.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:36px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),e.exports=n},439:function(e,t,r){"use strict";r.r(t);var n=r(21),o=r(196),c=Object(n.b)({props:{fullWidth:{type:Boolean,default:!1}},setup:function(){return{width:Object(o.a)().freehandCanvasWidth}}}),l=r(48),h=r(59),d=r.n(h),f=r(451),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-subheader",{staticClass:"mx-auto font-weight-bold",style:{width:e.fullWidth?"100%":e.width+"px"}},[e._t("default"),e._v(" "),r("span",{staticClass:"text-caption ml-1"},[e._t("caption")],2)],2)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VSubheader:f.a})},451:function(e,t,r){"use strict";r(13),r(10),r(15),r(18),r(16),r(19);var n=r(4),o=(r(426),r(40)),c=r(14);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(c.a)(o.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(e){return e("div",{staticClass:"v-subheader",class:h({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);