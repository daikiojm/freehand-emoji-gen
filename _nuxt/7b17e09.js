(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{109:function(t,e,n){"use strict";n.r(e),n.d(e,"store",(function(){return O})),n.d(e,"StoreKey",(function(){return h})),n.d(e,"useStore",(function(){return j}));n(14),n(16),n(24),n(15),n(25);var r=n(86),o=n(4),c=(n(27),n(11),n(50),n(17),n(22));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={size:24,thinning:.75,smoothing:.5,streamline:.5,strokeColor:"#000",backgroundColor:"#fff"},v={currentMark:{type:"",points:[]},marks:[]},O=function(){var t=Object(c.f)({ui:{darkMode:!1},settings:f({},d),data:f({},v)}),e=Object(c.a)((function(){return JSON.stringify(t.settings)!==JSON.stringify(d)})),n=Object(c.a)((function(){return JSON.stringify(t.data)!==JSON.stringify(v)}));return f(f({},Object(c.i)(t)),{},{resetData:function(){t.data=f({},v)},resetSettings:function(){t.settings=f({},d)},setCurrentMark:function(mark){t.data.currentMark={type:mark.type,points:mark.points}},updateCurrentMark:function(mark){t.data.currentMark.points=[].concat(Object(r.a)(t.data.currentMark.points),Object(r.a)(mark.points))},endMark:function(){t.data.marks=[].concat(Object(r.a)(t.data.marks),[f({},t.data.currentMark)])},settingsHasChanged:e,dataHasChanged:n})},h=Symbol("State"),j=function(){var t=Object(c.d)(h);if(!t)throw new Error("".concat(h," is not provided"));return t}},170:function(t,e,n){"use strict";n.r(e);var r=n(22),o=Object(r.j)("$vuetify",!0),c=Object(r.b)({setup:function(){var t=function(){var t=o(),e=Object(r.a)((function(){return t.value.theme.dark}));return{vuetify:t,isDarkMode:e,toggleDarkMode:function(){t.value.theme.dark?t.value.theme.dark=!1:t.value.theme.dark=!0}}}(),e=t.vuetify,n=t.toggleDarkMode;return{btnIcon:Object(r.a)((function(){return e.value.theme.dark?"mdi-white-balance-sunny":"mdi-moon-waning-crescent"})),toggle:function(){return n()}}}}),l=(n(312),n(52)),f=n(69),d=n.n(f),v=n(353),O=n(352),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:""},on:{click:t.toggle}},[n("v-icon",[t._v(t._s(t.btnIcon))])],1)}),[],!1,null,"1166ea96",null);e.default=component.exports;d()(component,{VBtn:v.a,VIcon:O.a})},211:function(t,e,n){var content=n(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("1e6ba6d3",content,!0,{sourceMap:!1})},226:function(t,e,n){"use strict";var r=n(22),o=n(227),c=n(228),l=n(109),f=Object(r.b)({components:{TheNavigation:o.default,TheFooter:c.default},setup:function(){Object(r.e)(l.StoreKey,Object(l.store)())}}),d=n(52),v=n(69),O=n.n(v),h=n(363),j=n(366),m=n(364),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("TheNavigation"),t._v(" "),n("v-main",[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("Nuxt")],1)],1),t._v(" "),n("TheFooter")],1)}),[],!1,null,null,null);e.a=component.exports;O()(component,{VApp:h.a,VContainer:j.a,VMain:m.a})},227:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(170),c=Object(r.b)({components:{ToggleDarkModeIconButton:o.default}}),l=n(52),f=n(69),d=n.n(f),v=n(365),O=n(353),h=n(352),j=n(361),m=n(223),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{dense:"",flat:"",app:""}},[n("v-toolbar-title",{staticClass:"subtitle-2"},[n("span",{staticClass:"font-weight-bold"},[t._v("Freehand Emoji Gen")]),t._v(" |\n    "),n("span",{staticClass:"caption"},[t._v("フリーハンド絵文字ジェネレーター"),n("span",{staticClass:"subtitle-2"},[t._v("📝")])])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",rel:"noopener",target:"_blank","aria-label":"github",href:"https://github.com/daikiojm/freehand-emoji-gen"}},[n("v-icon",[t._v("mdi-github")])],1),t._v(" "),n("ToggleDarkModeIconButton")],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{ToggleDarkModeIconButton:n(170).default}),d()(component,{VAppBar:v.a,VBtn:O.a,VIcon:h.a,VSpacer:j.a,VToolbarTitle:m.a})},228:function(t,e,n){"use strict";n.r(e);var r=n(22),o=Object(r.b)({}),c=n(52),l=n(69),f=n.n(l),d=n(362),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"d-flex flex-column"},[n("p",{staticClass:"caption blue-grey--text text-center text-justify mt-2 mb-0"},[t._v("\n    Freehand Emoji Gen | フリーハンド絵文字ジェネレーター📝\n  ")]),t._v(" "),n("p",{staticClass:"caption blue-grey--text text-center text-truncate"},[t._v("\n    © 2021 "),n("a",{attrs:{href:"https://github.com/daikiojm",target:"_blank"}},[t._v("daikiojm")])])])}),[],!1,null,null,null);e.default=component.exports;f()(component,{VFooter:d.a})},249:function(t,e,n){n(250),t.exports=n(251)},312:function(t,e,n){"use strict";n(211)},313:function(t,e,n){var r=n(32)(!1);r.push([t.i,".app-subheader[data-v-1166ea96]{max-width:400px}",""]),t.exports=r}},[[249,8,3,9]]]);