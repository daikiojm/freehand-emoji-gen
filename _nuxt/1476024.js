(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5,6],{414:function(t,e,r){"use strict";r.r(e);var o=r(21),n=r(196),l=Object(o.b)({props:{value:{type:String,default:"#000000FF"}},setup:function(t,e){var r=e.emit,l=Object(n.a)().swatches;return{color:Object(o.a)({get:function(){return t.value},set:function(t){return r("input",t)}}),vuetifyProps:{canvasHeight:100,width:280,dotSize:10,hideInputs:!0,mode:"hexa",showSwatches:!0,swatches:l}}}}),c=r(48),d=r(59),v=r.n(d),h=r(483),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-color-picker",t._b({staticClass:"mx-0 my-4",model:{value:t.color,callback:function(e){t.color=e},expression:"color"}},"v-color-picker",t.vuetifyProps,!1))}),[],!1,null,null,null);e.default=component.exports;v()(component,{VColorPicker:h.a})},415:function(t,e,r){"use strict";r.r(e);var o=r(21),n=Object(o.b)({props:{value:{type:String,default:"stroke"}},setup:function(t,e){var r=e.emit;return{toggle:Object(o.a)({get:function(){return"stroke"===t.value?0:1},set:function(t){return r("input",0===t?"stroke":"background")}})}}}),l=r(48),c=r(59),d=r.n(c),v=r(394),h=r(445),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn-toggle",{attrs:{dense:""},model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}},[r("v-btn",[t._v(t._s(t.$t("line")))]),t._v(" "),r("v-btn",[t._v(t._s(t.$t("background")))])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VBtnToggle:h.a})},419:function(t,e,r){var content=r(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("3e455b3a",content,!0,{sourceMap:!1})},420:function(t,e,r){var o=r(26)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},421:function(t,e,r){var content=r(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("3a84ba11",content,!0,{sourceMap:!1})},422:function(t,e,r){var o=r(26)(!1);o.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=o},423:function(t,e,r){var content=r(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("72863c2d",content,!0,{sourceMap:!1})},433:function(t,e,r){"use strict";r(423)},434:function(t,e,r){var o=r(26)(!1);o.push([t.i,".controls-container[data-v-7b9574ba]{position:relative}.controls-container .setting-reset-button[data-v-7b9574ba]{position:absolute;bottom:24px;right:24px}",""]),t.exports=o},440:function(t,e,r){"use strict";r.r(e);var o=r(21),n=r(108),l=r(5),c=r(414),d=r(415),v=r(99),h=r(196),f=Object(o.b)({components:{AppColorPicker:c.default,AppActiveColorPickerToggle:d.default},setup:function(){var t=Object(h.a)(),e=t.freehandCanvasWidth,r=t.freehandCanvasHeight,c=t.strokeOptions,d=Object(v.useStore)(),f=d.settings,m=d.settingsHasChanged,x=d.resetSettings,_=Object(n.a)(f),k=_.activeColorPicker,O=_.strokeColor,y=_.backgroundColor;return{controlsContainerStyle:{minWidth:"".concat(e,"px"),minHeight:"".concat(r,"px"),width:"".concat(e,"px"),height:"".concat(r,"px")},settings:f,settingsHasChanged:m,handleSettingReset:function(){return x()},pickBindOption:function(option){return Object(l.s)(option,"step","min","max")},color:Object(o.a)({get:function(){return"stroke"===Object(l.g)(k)?Object(l.g)(O):Object(l.g)(y)},set:function(t){return"stroke"===Object(l.g)(k)?Object(l.t)(O,t):Object(l.t)(y,t)}}),strokeOptions:c}}}),m=(r(433),r(48)),x=r(59),_=r.n(x),k=r(394),O=r(443),y=r(460),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto controls-container pa-4",style:t.controlsContainerStyle,attrs:{elevation:"2",outlined:""}},[t._l(t.strokeOptions,(function(option,e){return r("div",{key:e},[r("label",{staticClass:"text-caption"},[t._v(t._s(t.$t(option.title)))]),t._v(" "),r("v-slider",t._b({staticClass:"mt-n1",attrs:{dense:"","hide-details":""},model:{value:t.settings[option.key],callback:function(e){t.$set(t.settings,option.key,e)},expression:"settings[option.key]"}},"v-slider",t.pickBindOption(option),!1))],1)})),t._v(" "),r("label",{staticClass:"text-caption"},[t._v(t._s(t.$t("lineAndBackgroundColor")))]),t._v(" "),r("div",{staticClass:"d-flex justify-start"},[r("AppColorPicker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),t._v(" "),r("div",[r("AppActiveColorPickerToggle",{staticClass:"ml-4 mt-4",model:{value:t.settings.activeColorPicker,callback:function(e){t.$set(t.settings,"activeColorPicker",e)},expression:"settings.activeColorPicker"}})],1)],1),t._v(" "),r("v-btn",{staticClass:"mx-auto setting-reset-button",attrs:{outlined:"",disabled:!t.settingsHasChanged},on:{click:t.handleSettingReset}},[t._v(t._s(t.$t("resetSetting")))])],2)}),[],!1,null,"7b9574ba",null);e.default=component.exports;_()(component,{AppColorPicker:r(414).default,AppActiveColorPickerToggle:r(415).default}),_()(component,{VBtn:k.a,VCard:O.a,VSlider:y.a})},443:function(t,e,r){"use strict";r(13),r(10),r(15),r(18),r(16),r(19);var o=r(4),n=(r(35),r(197),r(419),r(212)),l=r(416),c=r(97),d=r(14);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=h({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},445:function(t,e,r){"use strict";r(13),r(10),r(15),r(18),r(16),r(19);var o=r(4),n=(r(421),r(146)),l=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}}),c=r(52),d=r(14);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l,c.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return h(h({},l.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,h({},l.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})}}]);