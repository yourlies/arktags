(function(e){function t(t){for(var n,c,r=t[0],l=t[1],d=t[2],h=0,m=[];h<r.length;h++)c=r[h],i[c]&&m.push(i[c][0]),i[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);o&&o(t);while(m.length)m.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},i={app:0},s=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var o=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},1395:function(e,t,a){},"17b8":function(e){e.exports=[{name:"新手",id:0,kindId:0},{name:"资深干员",id:1,kindId:0},{name:"高级资深干员",id:2,kindId:0},{name:"远程位",id:3,kindId:1},{name:"近战位",id:4,kindId:1},{name:"男性干员",id:5,kindId:2},{name:"女性干员",id:6,kindId:2},{name:"先锋干员",id:7,kindId:3},{name:"狙击干员",id:8,kindId:3},{name:"医疗干员",id:9,kindId:3},{name:"术师干员",id:10,kindId:3},{name:"近卫干员",id:11,kindId:3},{name:"重装干员",id:12,kindId:3},{name:"辅助干员",id:13,kindId:3},{name:"特种干员",id:14,kindId:3},{name:"治疗",id:15,kindId:4},{name:"支援",id:16,kindId:4},{name:"输出",id:17,kindId:4},{name:"群攻",id:18,kindId:4},{name:"减速",id:19,kindId:4},{name:"生存",id:20,kindId:4},{name:"防护",id:21,kindId:4},{name:"削弱",id:22,kindId:4},{name:"位移",id:23,kindId:4},{name:"控场",id:24,kindId:4},{name:"爆发",id:25,kindId:4},{name:"召唤",id:26,kindId:4},{name:"快速复活",id:27,kindId:4},{name:"费用回复",id:28,kindId:4}]},"2d59":function(e,t,a){"use strict";var n=a("869e"),i=a.n(n);i.a},"3c42":function(e,t,a){"use strict";var n=a("96e6"),i=a.n(n);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Tag")],1)},s=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("LeftBar",{on:{selected:e.selected}}),a("RightBar",{attrs:{groups:e.displayGroups}})],1)},r=[],l=(a("7f7f"),a("55dd"),a("75fc")),d={arrangement:function(e,t){if(t>=e.length)return[e];if(0==t){for(var a=[],n=0;n<e.length;n++)for(var i=0;i<e[n].length;i++)a.push([[e[n][i]]]);return a}var s=Object(l["a"])(e),c=s.splice(0,t),r=s,d=Object(l["a"])(c),o=Object(l["a"])(r),h=[],m=function e(a,n){for(var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,m=Object(l["a"])(a),p=Object(l["a"])(n)||[m.shift()],u=0;u<m.length;u++){var f=[].concat(Object(l["a"])(p),[m[u]]);h.push(f)}if(a.length>1)p.pop(),p.push(m.shift()),e(m,p,i,s);else if(r.length-i>=0&&t>1){var v=Object(l["a"])(c),g=Object(l["a"])(r);v.splice(v.length-s,i-1);var y=g.splice(0,i-1);i-1-s>0&&y.splice(0,i-1-s),d=v.concat(y),o=g,e(o,d,i+1,s)}else t-s>0&&e(o,d,2,s+1)};return m(r,c),h},combination:function(e){var t=[],a=function e(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=Object(l["a"])(a),s=i.shift(),c=Object(l["a"])(n);if(s)for(var r=0;r<s.length;r++)i.length>=0&&e(i,[].concat(Object(l["a"])(c),[s[r]]));else t.push(n)};return a(e),t},compare:function(e,t){return function(a,n){var i=a[e],s=n[e];return t?s-i:i-s}}},o=d,h=a("17b8"),m=a("710e"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{display:"inline-block"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.screenMode,expression:"screenMode == 0"}],staticClass:"contain"},[a("TagSearch",{attrs:{selectedGroups:e.selectedGroups,screenMode:e.screenMode,clearCount:e.clearCount,eventCount:e.eventCount},on:{filterGroups:e.filterGroups}},[a("span",{staticClass:"pointer bcrRed",on:{click:e.clear}},[e._v("清空")])]),a("TagSelect",{attrs:{screenMode:e.screenMode,clearCount:e.clearCount},on:{selectGroups:e.selectGroups}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.screenMode,expression:"screenMode == 1"}]},[a("TagSelect",{attrs:{screenMode:e.screenMode,clearCount:e.clearCount},on:{selectGroups:e.selectGroups}})],1)])},u=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",{directives:[{name:"show",rawName:"v-show",value:0==e.screenMode,expression:"screenMode == 0"}],staticClass:"section"},[a("li",{staticClass:"box"},e._l(e.kinds,function(t,n){return a("div",{key:n,staticClass:"df"},[a("div",{staticClass:"inner"},e._l(t,function(t,n){return a("span",{key:n,class:["unified","pointer",t.isSelect?"selected":""],on:{click:function(a){return e.selectTag(t)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])}),0)])}),0)]),a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.screenMode,expression:"screenMode == 1"}],staticClass:"float-span",on:{click:e.switchSelect}},[e._v("标签")]),a("ul",{directives:[{name:"show",rawName:"v-show",value:1==e.screenMode&&1==e.switchMode,expression:"screenMode == 1 && switchMode == 1"}],staticClass:"section"},[a("li",{staticClass:"box"},e._l(e.kinds,function(t,n){return a("div",{key:n,staticClass:"df"},[a("div",{staticClass:"inner"},e._l(t,function(t,n){return a("span",{key:n,class:["unified","pointer",t.isSelect?"selected":""],on:{click:function(a){return e.selectTag(t)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])}),0)])}),0)])])},v=[],g=a("768b"),y=(a("ac6a"),a("ffc1"),a("8615"),function(e,t){this.hooks=t,this.sets=e,this.kinds={},this.kindOrders=[],this.rawOrders=[],this.orders=[],this.arrangementNumberArr=[],this._spliceRawSets()});y.prototype._spliceRawSets=function(){for(var e=0;e<this.sets.length;e++){"function"==typeof this.hooks.splice&&this.hooks.splice(this.sets[e]);var t=this.sets[e],a=t.id,n=t.kindId;this.kinds["k".concat(n)]=this.kinds["k".concat(n)]||[],this.kinds["k".concat(n)].push(a)}},y.prototype.setArrangementNumberArr=function(e){this.arrangementNumberArr=e},y.prototype.divides=function(){for(var e=Object.values(this.kinds),t=0;t<this.arrangementNumberArr.length;t++){var a=this.arrangementNumberArr[t],n=this.divide(e,a);e.length>a-1&&(this.kindOrders=this.kindOrders.concat(n))}for(var i=0;i<this.kindOrders.length;i++){var s=o.combination(this.kindOrders[i]);this.rawOrders=this.rawOrders.concat(s)}},y.prototype.divide=function(e,t){if(e.length>t-1)return o.arrangement(e,t-1)},y.prototype.render=function(){"function"==typeof this.hooks.beforeMount&&(this.beforeMount=this.hooks.beforeMount,this.beforeMount());for(var e=0;e<this.rawOrders.length;e++){var t=this.rawOrders[e];if("function"==typeof this.hooks.mount){this.mount=this.hooks.mount;var a=this.mount(t);this.orders.push({ids:t,sets:a})}}};var x=y,k=a("59ce"),b={data:function(){return{rareId:2,switchMode:0,staffs:m,kinds:[[{name:"新手",isSelect:!1,id:0},{name:"资深干员",isSelect:!1,id:1},{name:"高级资深干员",isSelect:!1,id:2}],[{name:"男性",isSelect:!1,id:5},{name:"女性",isSelect:!1,id:6},{name:"远程位",isSelect:!1,id:3},{name:"近战位",isSelect:!1,id:4}],[{name:"先锋",isSelect:!1,id:7},{name:"狙击",isSelect:!1,id:8},{name:"医疗",isSelect:!1,id:9},{name:"术师",isSelect:!1,id:10},{name:"近卫",isSelect:!1,id:11},{name:"重装",isSelect:!1,id:12},{name:"辅助",isSelect:!1,id:13},{name:"特种",isSelect:!1,id:14}],[{name:"治疗",isSelect:!1,id:15},{name:"支援",isSelect:!1,id:16},{name:"输出",isSelect:!1,id:17},{name:"群攻",isSelect:!1,id:18},{name:"减速",isSelect:!1,id:19},{name:"生存",isSelect:!1,id:20},{name:"防护",isSelect:!1,id:21},{name:"削弱",isSelect:!1,id:22},{name:"位移",isSelect:!1,id:23},{name:"控场",isSelect:!1,id:24},{name:"爆发",isSelect:!1,id:25},{name:"召唤",isSelect:!1,id:26},{name:"快速复活",isSelect:!1,id:27},{name:"费用回复",isSelect:!1,id:28}]],selectedGroups:[],selectedTags:[]}},props:["clearCount","screenMode"],methods:{clear:function(){this.unSelectedTags(),this.clearUnSelectedTags()},unSelectedTags:function(){for(var e=0;e<this.selectedTags.length;e++)this.selectedTags[e].isSelect=!1},clearUnSelectedTags:function(){for(var e=0;e<this.selectedTags.length;e++){var t=this.selectedTags[e];t.isSelect||(this.selectedTags.splice(e,1),e--)}},filterDividedGroups:function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a],i=-1!==n.ids.indexOf(this.rareId);t[a]={tagIds:n.ids,staffs:[],levels:[],ids:[]};for(var s=0;s<n.sets.length;s++){var c=n.sets[s],r=this.staffs[c];switch(!0){case!i&&6==r.level:case r.hidden:break;default:t[a].staffs.push(c),t[a].levels.push(r.level),t[a].ids.push(c);break}}}for(var l=0;l<t.length;l++)0==t[l].staffs.length&&(t.splice(l,1),l--);return t},divideGroups:function(){var e=function(e){e.kindId=h[e.id].kindId},t=function(){var e=this.kinds.k4;if(e&&e.length>0){var t=this.divide(e,2),a=this.divide(e,3);if(t){this.rawOrders=this.rawOrders.concat(t);for(var n=[],i=0,s=Object.entries(this.kinds);i<s.length;i++){var c=Object(g["a"])(s[i],2),r=c[0],d=c[1];"k4"!=r&&(n=n.concat(d))}if(n.length>0)for(var h=o.combination([n,t]),m=0;m<h.length;m++){var p=h[m];this.rawOrders.push([p[0]].concat(Object(l["a"])(p[1])))}}a&&(this.rawOrders=this.rawOrders.concat(a))}},a=function(e){var t=k[e[0]],a=1;while(a<e.length){for(var n=[],i=0;i<t.length;i++)-1!==k[e[a]].indexOf(t[i])&&n.push(t[i]);t=n,a++}return t},n=new x(this.selectedTags,{splice:e,beforeMount:t,mount:a});n.setArrangementNumberArr([1,2,3]),n.divides(),n.render();var i=n.orders;this.selectedGroups=this.filterDividedGroups(i)},selectTag:function(e){e.isSelect=!e.isSelect,e.isSelect&&this.selectedTags.push(e),this.selectedTags.length>5&&(e.isSelect=!1),this.clearUnSelectedTags(),this.divideGroups(),this.$emit("selectGroups",this.selectedGroups)},switchSelect:function(){this.switchMode=1==this.switchMode?0:1}},watch:{clearCount:function(){this.clear()}}},S=b,w=(a("f854"),a("2877")),O=Object(w["a"])(S,f,v,!1,null,"787b945c",null),C=O.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{directives:[{name:"show",rawName:"v-show",value:0==e.screenMode,expression:"screenMode == 0"}],staticClass:"section"},[a("li",{staticClass:"box"},[e._t("default"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputStaff,expression:"inputStaff"}],attrs:{placeholder:"筛选干员",maxlength:"4"},domProps:{value:e.inputStaff},on:{blur:e.search,input:function(t){t.target.composing||(e.inputStaff=t.target.value)}}}),e._v("\n      联系作者：958142428\n  ")],2),a("li",{staticClass:"box"},[a("span",{staticClass:"pointer bcrRed"},[e._v("店长推荐")]),a("span",{class:["pointer",0==e.currentIndex?"selected":""],on:{click:function(t){return e.addLimitation(0,1,[1])}}},[e._v("赌小车")]),a("span",{class:["pointer",1==e.currentIndex?"selected":""],on:{click:function(t){return e.addLimitation(1,2,[3])}}},[e._v("保底")])]),a("li",{staticClass:"box"},[a("span",{staticClass:"pointer bcrRed"},[e._v("公招限定")]),a("span",{class:["pointer",2==e.currentIndex?"selected":""],on:{click:function(t){return e.addLimitation(2,0,"因陀罗")}}},[e._v("因陀罗")]),a("span",{class:["pointer",3==e.currentIndex?"selected":""],on:{click:function(t){return e.addLimitation(3,0,"火神")}}},[e._v("火神")])])])},I=[],M={data:function(){return{currentIndex:-1,limitation:{id:-1,containLevels:[],notContainLevels:[]},limitType:-1,inputStaff:"",filteredGroups:"",staffs:m}},props:["selectedGroups","eventCount","clearCount","screenMode"],methods:{clear:function(){this.clearLimitation()},search:function(){""!=this.inputStaff?this.addLimitation(-2,0,this.inputStaff):this.clearLimitation()},clearLimitation:function(){this.currentIndex=-1,this.inputStaff="",this.limitType=-1},addLimitation:function(e,t,a){switch(-2!=e&&(this.inputStaff=""),this.currentIndex==e&&-2!=e?this.clearLimitation():(this.currentIndex=e,this.limitType=t),t){case 2:this.limitation.notContainLevels=a;break;case 1:this.limitation.containLevels=a;break;case 0:for(var n=0;n<this.staffs.length;n++)this.staffs[n].name==a&&(this.limitation.id=n)}this.filterSelectedGroups()},filterSelectedGroups:function(){if(-1===this.limitType)return this.$emit("filterGroups",this.selectedGroups),!1;for(var e=Object(l["a"])(this.selectedGroups),t=[],a=this.limitation,n=a.containLevels,i=a.notContainLevels,s=a.id,c=0;c<e.length;c++){var r=e[c];if(1==this.limitType)for(var d=0;d<n.length;d++)if(-1!==r.levels.indexOf(n[d])){t.push(r);break}if(2==this.limitType)for(var o=0;o<i.length;o++){if(-1!==r.levels.indexOf(i[o]))break;o==i.length-1&&t.push(e[c])}0==this.limitType&&-1!==r.ids.indexOf(s)&&t.push(e[c])}this.filteredGroups=t,this.$emit("filterGroups",this.filteredGroups)}},watch:{eventCount:function(){this.filterSelectedGroups()},clearCount:function(){this.clear()}}},_=M,T=(a("3c42"),Object(w["a"])(_,G,I,!1,null,"e84898f0",null)),j=T.exports,L={data:function(){return{selectedGroups:[],eventCount:0,clearCount:0,screenMode:0}},components:{TagSelect:C,TagSearch:j},methods:{clear:function(){this.clearCount++,this.selectedGroups=[],this.$emit("selected",[])},selectGroups:function(e){this.selectedGroups=e,this.eventCount++},filterGroups:function(e){this.$emit("selected",e)}},mounted:function(){var e=this;switch(!0){case window.innerWidth<1e3:this.screenMode=1;break;case window.innerWidth>=1e3:this.screenMode=0;break;default:break}window.onresize=function(){switch(!0){case window.innerWidth<1e3:e.screenMode=1;break;case window.innerWidth>=1e3:e.screenMode=0;break;default:break}}}},N=L,P=(a("97c9"),Object(w["a"])(N,p,u,!1,null,"8ba7c678",null)),A=P.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"rightBar"},[a("li",e._l(e.groups,function(t,n){return a("div",{staticClass:"box"},[a("div",{staticClass:"cell"},[e._v("\n        #Tags\n        "),e._l(t.tagNames,function(t,n){return a("span",{key:n},[e._v("\n          "+e._s(t)+"\n        ")])})],2),a("div",{staticClass:"inner"},e._l(t.staffs,function(t,n){return a("span",{class:"level-"+t.level},[e._v("\n          "+e._s(1==t.level?"*":"")+" "+e._s(t.name)+"\n        ")])}),0)])}),0)])},E=[],R={props:{groups:Array}},B=R,F=(a("fa30"),Object(w["a"])(B,$,E,!1,null,null,null)),D=F.exports,W={data:function(){return{displayGroups:[],selectedGroups:[],tags:h,staffs:m}},components:{LeftBar:A,RightBar:D},methods:{sortSelectedGroups:function(){for(var e=[],t=[],a=[],n=[],i=[],s=0;s<this.displayGroups.length;s++){for(var c=this.displayGroups[s],r=0;r<c.staffs.length;r++){var l=c.staffs[r];c.count=c.count||0,c["l".concat(l.level)]=c["l".concat(l.level)]||0,c.count++,c["l".concat(l.level)]++}switch(!0){case c.l6>0:e.push(c);break;case!c.l4&&!c.l3&&!c.l2:t.push(c);break;case!c.l3&&!c.l2>0:a.push(c);break;case c.l5>0:n.push(c);break;default:i.push(c);break}}e.sort(o.compare("l6")),t.sort(o.compare("l5")),a.sort(o.compare("l4")),n.sort(o.compare("l3")),i.sort(o.compare("count"));for(var d=0;d<a.length;d++)a[d].staffs.sort(o.compare("level",!0));for(var h=0;h<n.length;h++)n[h].staffs.sort(o.compare("level",!0));for(var m=0;m<i.length;m++)i[m].staffs.sort(o.compare("level",!0));this.displayGroups=[].concat(e,t,a,n,i)},filterSelectedGroups:function(){for(var e=[],t=0;t<this.selectedGroups.length;t++){var a=this.selectedGroups[t];a.tagIds.indexOf(this.rareId);e[t]={tagNames:[],staffs:[]};for(var n=0;n<a.tagIds.length;n++){var i=a.tagIds[n];e[t].tagNames.push(this.tags[i].name)}for(var s=0;s<a.staffs.length;s++){var c=a.staffs[s],r=this.staffs[c];e[t].staffs.push({id:c,name:r.name,level:r.level})}}this.displayGroups=e},selected:function(e){this.selectedGroups=e,this.filterSelectedGroups(),this.sortSelectedGroups()}},mounted:function(){}},H=W,J=(a("2d59"),Object(w["a"])(H,c,r,!1,null,"668ea449",null)),U=J.exports,V={name:"app",components:{Tag:U}},z=V,Y=(a("034f"),Object(w["a"])(z,i,s,!1,null,null,null)),K=Y.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(K)}}).$mount("#app")},"59ce":function(e){e.exports=[[3,4,5,6,7],[48,49,50,51,52,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,73,74,75,76,77],[78,79,80,82,83,84,85,86,87,88],[1,4,5,6,11,12,13,14,15,16,17,24,25,26,27,28,34,35,36,37,38,50,51,52,53,55,60,61,62,63,64,65,66,67,68,79,80,82,83,84,85],[2,3,7,8,9,10,18,19,20,21,22,23,29,30,32,39,40,42,43,44,45,46,47,48,49,56,57,58,59,69,70,71,72,73,74,75,76,77,78,86,87,88],[2,5,6,7,12,14,16,21,47,86],[0,1,3,4,8,9,10,11,13,15,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,87,88],[3,8,9,10,21,22,23,48,49,78],[6,15,16,33,34,35,36,60,61,62,63,64,84],[1,11,12,24,25,26,50,51,52,79,80,81],[4,5,13,14,27,28,53,54,55,82,83],[0,2,18,39,40,41,42,43,44,69,70,71,72,73,86],[7,19,20,45,46,47,74,75,76,77,87,88],[17,37,38,65,66,67,68,85],[29,30,31,32,56,57,58,59],[1,11,12,24,25,26,46,50,51,52,68,74,79,80,88],[2,39,49,50,52,68,72,79,80,85,86,88],[10,14,15,16,18,22,23,27,35,36,39,42,43,44,53,57,58,60,61,62,64,66,69,71,73,75,76,78,83,84,85,86,87],[13,28,34,40,55,63,70,72,82],[17,34,38,43,59,66,85],[18,36,40,44,57,69,70,71,76],[19,20,21,29,45,46,47,74,75,76,77,87,88],[27,35,63,65,73,82,83],[30,32,58,59,77],[48,55,56,67],[62],[37,67],[29,56],[8,9,10,21,22,23,48,49,78]]},"64a9":function(e,t,a){},"710e":function(e){e.exports=[{name:"暴行",camp:"雷姆必拓",type:"近卫",level:5,sex:"女",characteristic:"",tags:["三测暂不实装"],hidden:!0,"name-en":"Savage"},{name:"Lancet-2",camp:"罗德岛",type:"医疗",level:1,sex:"女",characteristic:"恢复友方单位生命，且不受部署数量限制，但再部署时间极长",tags:[3,15],hidden:!1,"name-en":"Lancet-2"},{name:"Castle-3",camp:"罗德岛",type:"近卫",level:1,sex:"男",characteristic:"能够阻挡一个敌人，且不受部署数量限制，但再部署时间极长",tags:[4,16],hidden:!1,"name-en":"Castle-3"},{name:"夜刀",camp:"罗德岛",type:"先锋",level:2,sex:"女",characteristic:"能够阻挡两个敌人",tags:[4,0],hidden:!1,"name-en":"Yato"},{name:"杜林",camp:"罗德岛",type:"术师",level:2,sex:"女",characteristic:"攻击造成法术伤害",tags:[3,0],hidden:!1,"name-en":"Durin"},{name:"12F",camp:"罗德岛",type:"术师",level:2,sex:"男",characteristic:"攻击造成群体法术伤害",tags:[3,0],hidden:!1,"name-en":"12F"},{name:"巡林者",camp:"罗德岛",type:"狙击",level:2,sex:"男",characteristic:"优先攻击空中单位",tags:[3,0],hidden:!1,"name-en":"Rangers"},{name:"黑角",camp:"罗德岛",type:"重装",level:2,sex:"男",characteristic:"能够阻挡三个敌人",tags:[4,0],hidden:!1,"name-en":"Noir Corne"},{name:"芬",camp:"罗德岛",type:"先锋",level:3,sex:"女",characteristic:"能够阻挡两个敌人",tags:[4,28],hidden:!1,"name-en":"Fang"},{name:"香草",camp:"黑钢国际",type:"先锋",level:3,sex:"女",characteristic:"能够阻挡两个敌人",tags:[4,28],hidden:!1,"name-en":"Vanilla"},{name:"翎羽",camp:"拉特兰",type:"先锋",level:3,sex:"女",characteristic:"击杀敌人后获得1点部署费用，撤退时返还初始部署费用",tags:[4,17,28],hidden:!1,"name-en":"Plume"},{name:"芙蓉",camp:"罗德岛",type:"医疗",level:3,sex:"女",characteristic:"恢复友方单位生命",tags:[3,15],hidden:!1,"name-en":"Hibiscus"},{name:"安赛尔",camp:"罗德岛",type:"医疗",level:3,sex:"男",characteristic:"恢复友方单位生命",tags:[3,15],hidden:!1,"name-en":"Ansel"},{name:"炎熔",camp:"罗德岛",type:"术师",level:3,sex:"女",characteristic:"攻击造成群体法术伤害",tags:[3,18],hidden:!1,"name-en":"Lava"},{name:"史都华德",camp:"罗德岛",type:"术师",level:3,sex:"男",characteristic:"攻击造成法术伤害",tags:[3,17],hidden:!1,"name-en":"Steward"},{name:"克洛丝",camp:"罗德岛",type:"狙击",level:3,sex:"女",characteristic:"优先攻击空中单位",tags:[3,17],hidden:!1,"name-en":"Kroos"},{name:"安德切尔",camp:"罗德岛",type:"狙击",level:3,sex:"男",characteristic:"优先攻击空中单位",tags:[3,17],hidden:!1,"name-en":"Adnachiel"},{name:"梓兰",camp:"罗德岛",type:"辅助",level:3,sex:"女",characteristic:"攻击造成法术伤害，并对敌人造成短暂的停顿",tags:[3,19],hidden:!1,"name-en":"Orchid"},{name:"玫兰莎",camp:"罗德岛",type:"近卫",level:3,sex:"女",characteristic:"能够阻挡一个敌人",tags:[4,17,20],hidden:!1,"name-en":"Melantha"},{name:"米格鲁",camp:"罗德岛",type:"重装",level:3,sex:"女",characteristic:"能够阻挡三个敌人",tags:[4,21],hidden:!1,"name-en":"Beagle"},{name:"卡缇",camp:"罗德岛",type:"重装",level:3,sex:"女",characteristic:"能够阻挡三个敌人",tags:[4,21],hidden:!0,"name-en":"Cardigan"},{name:"讯使",camp:"谢拉格",type:"先锋",level:4,sex:"男",characteristic:"能够阻挡两个敌人",tags:[4,28,21],hidden:!0,"name-en":"Courier"},{name:"清道夫",camp:"罗德岛",type:"先锋",level:4,sex:"女",characteristic:"能够阻挡两个敌人",tags:[4,28,17],hidden:!1,"name-en":"Scavenger"},{name:"红豆",camp:"罗德岛",type:"先锋",level:4,sex:"女",characteristic:"击杀敌人后获得1点部署费用，撤退时返还初始部署费用",tags:[4,17,28],hidden:!1,"name-en":"Vigna"},{name:"末药",camp:"罗德岛",type:"医疗",level:4,sex:"女",characteristic:"恢复友方单位生命",tags:[3,15],hidden:!1,"name-en":"Myrrh"},{name:"嘉维尔",camp:"罗德岛",type:"医疗",level:4,sex:"女",characteristic:"恢复友方单位生命",tags:[3,15],hidden:!0,"name-en":"Gavial"},{name:"调香师",camp:"罗德岛",type:"医疗",level:4,sex:"女",characteristic:"同时恢复三个友方单位的生命",tags:[3,15],hidden:!1,"name-en":"Perfumer"},{name:"夜烟",camp:"罗德岛",type:"术师",level:4,sex:"女",characteristic:"攻击造成法术伤害",tags:[22,3,17],hidden:!1,"name-en":"Haze"},{name:"远山",camp:"罗德岛",type:"术师",level:4,sex:"女",characteristic:"攻击造成群体法术伤害",tags:[3,18],hidden:!1,"name-en":"Gitano"},{name:"砾",camp:"卡西米尔",type:"特种",level:4,sex:"女",characteristic:"再部署时间大幅度减少",tags:[4,27,21],hidden:!1,"name-en":"Gravel"},{name:"暗索",camp:"雷姆必拓",type:"特种",level:4,sex:"女",characteristic:"技能可以使敌人产生位移、可以放置于远程位",tags:[4,23],hidden:!1,"name-en":"Rope"},{name:"断罪者",camp:"罗德岛",type:"特种",level:4,sex:"女",characteristic:"同时攻击阻挡的所有敌人、技能可以使敌人产生位移",tags:["三测暂不实装"],hidden:!0},{name:"阿消",camp:"龙门",type:"特种",level:4,sex:"女",characteristic:"同时攻击阻挡的所有敌人、可以放置于远程位",tags:[4,23],hidden:!1,"name-en":"Shaw"},{name:"梅",camp:"罗德岛",type:"狙击",level:4,sex:"女",characteristic:"优先攻击空中单位",tags:["三测暂不实装"],hidden:!0},{name:"白雪",camp:"龙门",type:"狙击",level:4,sex:"女",characteristic:"攻击造成群体物理伤害",tags:[3,18,19],hidden:!1,"name-en":"ShiraYuki"},{name:"流星",camp:"卡西米尔",type:"狙击",level:4,sex:"女",characteristic:"优先攻击空中单位",tags:[3,17,22],hidden:!1,"name-en":"Meteor"},{name:"杰西卡",camp:"黑钢国际",type:"狙击",level:4,sex:"女",characteristic:"优先攻击空中单位",tags:[3,17,20],hidden:!1,"name-en":"Jessica"},{name:"深海色",camp:"罗德岛",type:"辅助",level:4,sex:"女",characteristic:"攻击造成魔法伤害、可以使用召唤物协助作战",tags:[3,26],hidden:!0,"name-en":"Deepcolor"},{name:"地灵",camp:"卡普里尼",type:"辅助",level:4,sex:"女",characteristic:"攻击造成魔法伤害，并对敌人造成短暂的停顿",tags:[3,19],hidden:!1,"name-en":"Earthspirit"},{name:"杜宾",camp:"罗德岛",type:"近卫",level:4,sex:"女",characteristic:"可以攻击到较远敌人",tags:[4,16,17],hidden:!1,"name-en":"Dobermann"},{name:"艾丝黛尔",camp:"罗德岛",type:"近卫",level:4,sex:"女",characteristic:"同时攻击阻挡的所有敌人",tags:[4,18,20],hidden:!1,"name-en":"Estelle"},{name:"猎蜂",camp:"乌萨斯",type:"近卫",level:4,sex:"女",characteristic:"能够阻挡一个敌人",tags:["三测暂不实装"],hidden:!0},{name:"慕斯",camp:"维多利亚",type:"近卫",level:4,sex:"女",characteristic:"攻击造成法术伤害",tags:[4,17],hidden:!1,"name-en":"Mousse"},{name:"霜叶",camp:"罗德岛",type:"近卫",level:4,sex:"女",characteristic:"可以进行远程攻击，但此时攻击力降低至80%",tags:[4,19,17],hidden:!1,"name-en":"Frostleaf"},{name:"缠丸",camp:"罗德岛",type:"近卫",level:4,sex:"女",characteristic:"能够阻挡一个敌人",tags:[17,4,20],hidden:!1,"name-en":"Matoimaru"},{name:"蛇屠箱",camp:"罗德岛",type:"重装",level:4,sex:"女",characteristic:"能够阻挡三个敌人",tags:[4,21],hidden:!1,"name-en":"Cuora"},{name:"古米",camp:"乌萨斯",type:"重装",level:4,sex:"女",characteristic:"技能可以治疗友方单位",tags:[4,21,15],hidden:!1,"name-en":"ГУМ"},{name:"角峰",camp:"谢拉格",type:"重装",level:4,sex:"男",characteristic:"能够阻挡三个敌人",tags:[4,21],hidden:!1,"name-en":"Matterhorn"},{name:"德克萨斯",camp:"企鹅物流",type:"先锋",level:5,sex:"女",characteristic:"能够阻挡两个敌人",tags:[24,4,28,1],hidden:!1,"name-en":"Texas"},{name:"凛冬",camp:"乌萨斯",type:"先锋",level:5,sex:"女",characteristic:"能够阻挡两个敌人",tags:[16,4,28,1],hidden:!1,"name-en":"зима"},{name:"白面鸮",camp:"莱茵生命实验室",type:"医疗",level:5,sex:"女",characteristic:"同时恢复三个友方单位的生命",tags:[3,15,16,1],hidden:!1,"name-en":"Ptilopsis"},{name:"赫默",camp:"莱茵生命实验室",type:"医疗",level:5,sex:"女",characteristic:"恢复友方单位生命",tags:[3,15,1],hidden:!1,"name-en":"Silence"},{name:"华法琳",camp:"罗德岛",type:"医疗",level:5,sex:"女",characteristic:"恢复友方单位生命",tags:[3,15,16,1],hidden:!1,"name-en":"Warfarin"},{name:"阿米娅",camp:"罗德岛",type:"术师",level:5,sex:"女",characteristic:"攻击造成法术伤害",tags:[3,17],hidden:!0,"name-en":"Amiya"},{name:"夜魔",camp:"维多利亚",type:"术师",level:5,sex:"女",characteristic:"攻击造成法术伤害",tags:["三测暂不实装"],hidden:!0},{name:"天火",camp:"罗德岛",type:"术师",level:5,sex:"女",characteristic:"攻击造成群体法术伤害",tags:[24,3,18,1],hidden:!0,"name-en":"Skyfire"},{name:"红",camp:"罗德岛",type:"特种",level:5,sex:"女",characteristic:"再部署时间大幅减少",tags:[4,24,27,1],hidden:!1,"name-en":"Projekt Red"},{name:"狮蝎",camp:"罗德岛",type:"特种",level:5,sex:"女",characteristic:"对攻击范围内所有敌人造成伤害、拥有50%的物理和法术闪避且不容易成为敌人的攻击目标",tags:[20,4,17,1],hidden:!1,"name-en":"Manticore"},{name:"崖心",camp:"谢拉格",type:"特种",level:5,sex:"女",characteristic:"技能可以使敌人产生位移、可以放置于远程位",tags:[17,4,23,1],hidden:!1,"name-en":"Cliffheart"},{name:"食铁兽",camp:"罗德岛",type:"特种",level:5,sex:"女",characteristic:"同时攻击阻挡的所有敌人、可以放置于远程位",tags:[19,4,23,1],hidden:!1,"name-en":"FEater"},{name:"普罗旺斯",camp:"罗德岛",type:"狙击",level:5,sex:"女",characteristic:"高精度的近距离射击",tags:[3,17,1],hidden:!1,"name-en":"Provence"},{name:"蓝毒",camp:"罗德岛",type:"狙击",level:5,sex:"女",characteristic:"优先攻击空中单位",tags:[3,17,1],hidden:!1,"name-en":"Blue Poison"},{name:"守林人",camp:"罗德岛",type:"狙击",level:5,sex:"女",characteristic:"优先攻击攻击范围内防御力最低的敌方单位",tags:[3,17,25,1],hidden:!1,"name-en":"Firewatch"},{name:"陨星",camp:"罗德岛",type:"狙击",level:5,sex:"女",characteristic:"攻击造成群体物理伤害",tags:[3,18,22,1],hidden:!1,"name-en":"Meteorite"},{name:"白金",camp:"卡西米尔",type:"狙击",level:5,sex:"女",characteristic:"优先攻击空中单位",tags:[3,17,1],hidden:!1,"name-en":"Platinum"},{name:"初雪",camp:"谢拉格",type:"辅助",level:5,sex:"女",characteristic:"攻击造成魔法伤害",tags:[3,22,1],hidden:!1,"name-en":"Pramanix"},{name:"真理",camp:"乌萨斯",type:"辅助",level:5,sex:"女",characteristic:"攻击造成法术伤害，并对敌人造成短暂的停顿",tags:[3,19,17,1],hidden:!1,"name-en":"Истина"},{name:"梅尔",camp:"莱茵生命实验室",type:"辅助",level:5,sex:"女",characteristic:"攻击造成魔法伤害、可以使用召唤物协助作战",tags:[3,26,24,1],hidden:!1,"name-en":"Mayer"},{name:"空",camp:"企鹅物流",type:"辅助",level:5,sex:"女",characteristic:"不进行攻击，持续恢复攻击范围内所有友军的生命（每秒恢复相当于空攻击力10%的生命）",tags:[16,3,15,1],hidden:!0,"name-en":"Sora"},{name:"芙兰卡",camp:"黑钢国际",type:"近卫",level:5,sex:"女",characteristic:"能够阻挡一个敌人",tags:[4,17,20,1],hidden:!0,"name-en":"Franka"},{name:"幽灵鲨",camp:"罗德岛",type:"近卫",level:5,sex:"女",characteristic:"同时攻击阻挡的所有敌人",tags:[4,18,20,1],hidden:!1,"name-en":"Specter"},{name:"因陀罗",camp:"维多利亚",type:"近卫",level:5,sex:"女",characteristic:"能够阻挡一个敌人",tags:[4,17,20,1],hidden:!1,"name-en":"Indra"},{name:"陈",camp:"龙门",type:"近卫",level:5,sex:"女",characteristic:"三测暂不实装",tags:[4,18,16],hidden:!0},{name:"拉普兰德",camp:"罗德岛",type:"近卫",level:5,sex:"女",characteristic:"可以进行远程攻击，但此时攻击力降低至80%",tags:[4,17,22,1],hidden:!0,"name-en":"Lappland"},{name:"临光",camp:"罗德岛",type:"重装",level:5,sex:"女",characteristic:"技能可以治疗友方单位",tags:[4,21,15,1],hidden:!1,"name-en":"Nearl"},{name:"雷蛇",camp:"黑钢国际",type:"重装",level:5,sex:"女",characteristic:"能够阻挡三个敌人",tags:[4,21,17,1],hidden:!1,"name-en":"Liskarm"},{name:"火神",camp:"罗德岛",type:"重装",level:5,sex:"女",characteristic:"无法被友方角色治疗",tags:[4,17,21,20,1],hidden:!1,"name-en":"Vulcan"},{name:"可颂",camp:"企鹅物流",type:"重装",level:5,sex:"女",characteristic:"能够阻挡三个敌人",tags:[4,23,21,1],hidden:!1,"name-en":"Croissant"},{name:"推进之王",camp:"维多利亚",type:"先锋",level:6,sex:"女",characteristic:"能够阻挡两个敌人",tags:[4,28,17,2],hidden:!1,"name-en":"Siege"},{name:"闪灵",camp:"罗德岛",type:"医疗",level:6,sex:"女",characteristic:"恢复友方单位生命",tags:[3,16,15,2],hidden:!1,"name-en":"Shining"},{name:"夜莺",camp:"罗德岛",type:"医疗",level:6,sex:"女",characteristic:"同时恢复三个友方单位的生命",tags:[3,15,16,2],hidden:!1,"name-en":"Nightingale"},{name:"凯尔希",camp:"罗德岛",type:"医疗",level:6,sex:"女",characteristic:"恢复友方单位生命、可以使用召唤物协助作战",tags:["三测暂不实装"],hidden:!0},{name:"伊芙利特",camp:"莱茵生命实验室",type:"术师",level:6,sex:"女",characteristic:"攻击造成超远距离的群体法术伤害",tags:[3,18,22,2],hidden:!1,"name-en":"Ifrit"},{name:"艾雅法拉",camp:"卡普里尼",type:"术师",level:6,sex:"女",characteristic:"攻击造成法术伤害",tags:[3,17,22,2],hidden:!0,"name-en":"Eyjafjalla"},{name:"能天使",camp:"企鹅物流",type:"狙击",level:6,sex:"女",characteristic:"优先攻击空中单位",tags:[3,17,2],hidden:!1,"name-en":"Exusiai"},{name:"安洁莉娜",camp:"罗德岛",type:"辅助",level:6,sex:"女",characteristic:"攻击造成法术伤害，并对敌人造成短暂的停顿",tags:[3,19,17,16,2],hidden:!0,"name-en":"Angelina"},{name:"银灰",camp:"谢拉格",type:"近卫",level:6,sex:"男",characteristic:"可以进行远程攻击，但此时攻击力降低至80%",tags:[4,17,16,2],hidden:!1,"name-en":"SilverAsh"},{name:"星熊",camp:"龙门",type:"重装",level:6,sex:"女",characteristic:"能够阻挡三个敌人",tags:[4,17,21,2],hidden:!1,"name-en":"Hoshiguma"},{name:"塞雷娅",camp:"莱茵生命实验室",type:"重装",level:6,sex:"女",characteristic:"技能可以治疗友方单位",tags:[4,16,21,15,2],hidden:!1,"name-en":"Saria"}]},"869e":function(e,t,a){},"96e6":function(e,t,a){},"97c9":function(e,t,a){"use strict";var n=a("a93f"),i=a.n(n);i.a},a93f:function(e,t,a){},f854:function(e,t,a){"use strict";var n=a("fce7"),i=a.n(n);i.a},fa30:function(e,t,a){"use strict";var n=a("1395"),i=a.n(n);i.a},fce7:function(e,t,a){}});
//# sourceMappingURL=app.fd5d09a2.js.map