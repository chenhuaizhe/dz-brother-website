(function(t){function e(e){for(var a,i,s=e[0],r=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),l()}function l(){for(var t,e=0;e<n.length;e++){for(var l=n[e],a=!0,s=1;s<l.length;s++){var r=l[s];0!==o[r]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=l[0]))}return t}var a={},o={app:0},n=[];function i(e){if(a[e])return a[e].exports;var l=a[e]={i:e,l:!1,exports:{}};return t[e].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=t,i.c=a,i.d=function(t,e,l){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(l,a,function(e){return t[e]}.bind(null,a));return l},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=r;n.push([0,"chunk-vendors"]),l()})({0:function(t,e,l){t.exports=l("56d7")},"034f":function(t,e,l){"use strict";l("85ec")},"082a":function(t,e,l){},"10a6":function(t,e){t.exports="data:image/png;base64,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"},"1f6b":function(t,e,l){t.exports=l.p+"img/geyun_logo.e35b52ab.png"},"3dc1":function(t,e,l){},"56d7":function(t,e,l){"use strict";l.r(e);l("e260"),l("e6cf"),l("cca6"),l("a79d");var a,o,n=l("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-container",[a("el-header",[a("el-row",[a("el-col",{attrs:{span:4}},[a("img",{attrs:{src:l("1f6b"),height:"60px"},on:{click:function(e){return t.showHomePage()}}})]),a("el-col",{attrs:{span:4,offset:16}},[a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.loginBtnClicked()}}},[0==t.hasLogin?a("span",{staticStyle:{color:"gray"}},[t._v("登录")]):t._e()])],1)],1)],1),a("el-main",[a("router-view")],1),a("el-footer",{staticClass:"footer",staticStyle:{height:"200px"}},[a("div",{staticStyle:{height:"10 px"}}),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:3,offset:4}},[a("el-row",{staticClass:"footer-row-title"},[t._v("关于我们")]),a("div",{staticClass:"footer-list"},[t._v("关于我们")]),a("div",{staticClass:"footer-list"},[t._v("联系我们")])],1),a("el-col",{attrs:{span:3}},[a("el-row",{staticClass:"footer-row-title"},[t._v("特色服务")]),a("div",{staticClass:"footer-list"},[t._v("订货服务")]),a("div",{staticClass:"footer-list"},[t._v("批量采购")]),a("div",{staticClass:"footer-list"},[t._v("质量保证")])],1),a("el-col",{attrs:{span:3}},[a("el-row",{staticClass:"footer-row-title"},[t._v("购物指南")]),a("div",{staticClass:"footer-list"},[t._v("购物流程")]),a("div",{staticClass:"footer-list"},[t._v("快递运输")])],1),a("el-col",{attrs:{span:3}},[a("el-row",{staticClass:"footer-row-title"},[t._v("售后服务")]),a("div",{staticClass:"footer-list"},[t._v("服务投诉")])],1),a("el-col",{attrs:{span:4,offset:-4}},[a("el-row",{staticClass:"footer-row-title"},[t._v("二维码")]),a("div",{staticClass:"footer-qrcode"},[a("img",{attrs:{src:l("10a6"),height:"50px"}})])],1)],1)],1)],1),a("el-dialog",{attrs:{title:"登录",visible:t.loginVisible,width:"480px"},on:{"update:visible":function(e){t.loginVisible=e}}},[a("el-form",{attrs:{size:"small","label-width":"80px"}},[a("el-form-item",{attrs:{label:"邮箱："}},[a("el-input",{attrs:{placeholder:"请输入你的邮箱"},model:{value:t.loginEmail,callback:function(e){t.loginEmail=e},expression:"loginEmail"}})],1),a("el-form-item",{attrs:{label:"密码："}},[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("template",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.loginVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.loginWithEmail()}}},[t._v("立即登录")])],1)],2)],1)},s=[],r="http://47.113.203.10:8080",c={SERVER_PRE_URL:r},u=c,p=l("2877"),f=Object(p["a"])(u,a,o,!1,null,null,null),h=f.exports,d={name:"app",components:{},data:function(){return{activeIndex:"1",input:"",loginVisible:!1,loginEmail:"",password:"",hasLogin:!1}},methods:{showHomePage:function(){console.log("显示主页"),"/"!=this.$route.path&&this.$router.push("/")},searchBtnClicked:function(t){console.log(t),console.log("router path:",this.$route.path),"/search_result"!=this.$route.path&&this.$router.push("/search_result")},loginBtnClicked:function(){console.log("loginBtnClicked"),this.loginVisible=!0},loginWithEmail:function(){var t=this;console.log("loginWithEmail");var e=h.SERVER_PRE_URL+"/user/login/?email="+this.loginEmail+"&password="+this.password;console.log("loginWithEmail:",e),this.$http.get(e).then((function(e){console.log(e.data);var l=e.data;0==l.errorCode?(t.hasLogin=!0,t.loginVisible=!1,t.$message.success("登录成功")):t.$message.error(l.text)})).catch((function(e){t.$message.error("登录失败,code = 2"),console.log(e)}))}}},g=d,b=(l("034f"),Object(p["a"])(g,i,s,!1,null,null,null)),m=b.exports,A=l("5c96"),v=l.n(A),C=(l("0fae"),l("8c4f")),w=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"home"},[l("br"),l("el-row",{staticClass:"big-title"},[t._v(" 即刻找到你想要的电子元器件")]),l("el-row",[l("el-col",{attrs:{span:12,offset:6}},[l("el-input",{staticClass:"input-search-bar",attrs:{placeholder:"请输入型号"},model:{value:t.inputVaule,callback:function(e){t.inputVaule=e},expression:"inputVaule"}},[l("template",{slot:"append"},[l("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.searchBtnClicked}})],1)],2)],1)],1)],1)},E=[],_={name:"Home",data:function(){return{inputVaule:""}},methods:{searchBtnClicked:function(t){console.log(t),this.$router.push({name:"SearchResult",query:{id:this.inputVaule}})}}},x=_,B=(l("9341"),Object(p["a"])(x,w,E,!1,null,"0595e3b5",null)),D=B.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"about"},[l("h1",[t._v("This is an about page")])])}],Q={},k=Object(p["a"])(Q,y,I,!1,null,null,null),j=k.exports,G=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"search_result"},[l("el-dialog",{attrs:{title:"咨询",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[l("el-input",{attrs:{placeholder:"姓名"},model:{value:t.contact_name,callback:function(e){t.contact_name=e},expression:"contact_name"}}),l("el-input",{attrs:{placeholder:"联系方式"},model:{value:t.contact_number,callback:function(e){t.contact_number=e},expression:"contact_number"}}),l("el-input",{attrs:{placeholder:"咨询内容"},model:{value:t.contact_note,callback:function(e){t.contact_note=e},expression:"contact_note"}}),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)],1),l("el-dialog",{attrs:{visible:t.imgVisible},on:{"update:visible":function(e){t.imgVisible=e}}},[l("el-image",{attrs:{src:t.imgUrl}})],1),l("el-row",[l("el-col",{attrs:{span:4,offset:0}},[l("el-input",{staticClass:"input-search-bar",attrs:{placeholder:"请输入型号"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},[l("template",{slot:"append"},[l("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.searchBtnClicked}})],1)],2)],1)],1),l("el-row",[l("el-col",{attrs:{span:12,offset:0}},[l("label",{staticStyle:{float:"left"}},[t._v("搜索结果：")])]),l("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12,offset:0}},[l("el-badge",{staticClass:"item",attrs:{value:t.allNum}},[l("i",{staticClass:"el-icon-shopping-cart-full icon_class",on:{click:t.openCart}})])],1)],1),l("el-table",{staticStyle:{width:"100%",height:"calc(100vh-260px)"},attrs:{data:t.tableData,stripe:"",border:"","header-cell-style":{background:"#5f7686",color:"#fff"}}},[l("el-table-column",{attrs:{prop:"model",label:"型号",align:"center"}}),l("el-table-column",{attrs:{prop:"factory",label:"厂家",align:"center"}}),l("el-table-column",{attrs:{prop:"package_specification",label:"封装规格",align:"center"}}),l("el-table-column",{attrs:{prop:"year_batch",label:"年份批次",align:"center"}}),l("el-table-column",{attrs:{prop:"in_stock",label:"库存",align:"center"}}),l("el-table-column",{attrs:{prop:"price",label:"价格",align:"center",width:"210"}},[l("ul",{staticClass:"price-list"},[l("li",[l("span",{staticClass:"label"},[t._v("1-20个：")]),l("span",[t._v("100")])]),l("li",[l("span",{staticClass:"label"},[t._v("20-100个：")]),l("span",[t._v("100*90%")])]),l("li",[l("span",{staticClass:"label"},[t._v("100以上：")]),l("span",[t._v("100*80%")])])])]),l("el-table-column",{attrs:{prop:"delivery_time",label:"货期",align:"center"}}),l("el-table-column",{attrs:{prop:"picture",label:"图片",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.picture&&""!=e.row.picture?l("el-link",{attrs:{type:"primary"},on:{click:function(l){return t.openImgDialog(e.row.pictures)}}},[t._v(" 图"),l("i",{staticClass:"el-icon-view el-icon--right"})]):t._e()]}}])}),l("el-table-column",{attrs:{context:t._self,fixed:"right",label:"操作",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-popover",{ref:"popover-"+e.$index,attrs:{placement:"top",width:"160"},model:{value:e.row.visible,callback:function(l){t.$set(e.row,"visible",l)},expression:"scope.row.visible"}},[t._v(" 数量"),l("el-input-number",{attrs:{min:1,size:"mini",label:"描述文字"},model:{value:e.row.num,callback:function(l){t.$set(e.row,"num",l)},expression:"scope.row.num"}}),l("div",{staticStyle:{"text-align":"right",margin:"0"}},[l("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(l){return t.pClose(e.$index)}}},[t._v("取消")]),l("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(l){return t.addToCart(e.$index)}}},[t._v("确定")])],1),l("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[t._v("+ 货单")])],1),l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.askForInfomation(e.row)}}},[t._v("咨询")])]}}])})],1),l("el-drawer",{attrs:{title:"我的购物车",visible:t.drawer,direction:"rtl"},on:{"update:visible":function(e){t.drawer=e}}},[t._l(t.cartNumList,(function(e,a){return l("div",{key:a,staticClass:"cart_item"},[l("el-row",{staticStyle:{"text-align":"left"}},[t._v(t._s(e.model))]),l("el-row",[l("el-col",{attrs:{span:12,offset:0}},[l("el-input-number",{attrs:{min:1,size:"mini",label:"描述文字"},on:{change:function(e){return t.handleChange(a,e)}},model:{value:e.num,callback:function(l){t.$set(e,"num",l)},expression:"item.num"}})],1),l("el-col",{staticStyle:{"text-align":"right"},attrs:{span:12,offset:0}},[l("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(e){return t.deletClick(a)}}})],1)],1)],1)})),l("el-divider")],2)],1)},M=[],O=(l("159b"),l("a434"),{data:function(){return{contact_name:"",contact_number:"",contact_note:"",input:"",tableData:[],dialogVisible:!1,testDic:{model:"DP83848IVV/NOPB",factory:"TI",package_specification:"LQFP48",year_batch:"2021+",in_stock:1800,price:[{x:"1 - 20",y:"$4"},{x:"21 - 200",y:"$40"},{x:"200 以上",y:"$4"}],delivery_time:"3-5天",picture:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",pictures:["https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg","https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"]},imgVisible:!1,imgUrl:"",cartNumList:[],drawer:!1,allNum:0}},mounted:function(){this.input=this.$route.query.id,this.searchBtnClicked()},methods:{searchBtnClicked:function(){this.searchProductByModel(this.input)},addProduct:function(t){console.log("product:",t)},addToCart:function(t){this.cartNumList.push(this.tableData[t]),this.tableData[t].visible=!1,this.allNum=this.allNum+this.tableData[t].num,this.pClose(t)},askForInfomation:function(t){console.log(t),this.dialogVisible=!0},openImgDialog:function(t){this.imgVisible=!0,this.imgUrl=t},searchProductByModel:function(t){var e=this;console.log("searchProductByModel");var l=h.SERVER_PRE_URL+"/product/search/?model="+t;console.log("searchModelApi:",l),this.$http.get(l).then((function(t){console.log(t.data);var l=t.data;0==l.errorCode?(e.$message.success("搜索成功"),e.tableData=l.content):e.$message.error(l.text),e.tableData.forEach((function(t){t.num=1,t.visible=!1}))})).catch((function(t){e.$message.error("失败,code = 2"),console.log(t)}))},handleClose:function(){this.dialogVisible=!1},openCart:function(){this.drawer=!0,console.log("222")},handleChange:function(t,e){this.cartNumList[t].num=e},deletClick:function(t){this.cartNumList.splice(t,1)},pClose:function(t){this.$refs["popover-"+t].doClose()}}}),z=O,P=(l("5725"),Object(p["a"])(z,G,M,!1,null,"1456bfef",null)),Y=P.exports;n["default"].use(C["a"]);var V=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:j},{path:"/search_result",name:"SearchResult",component:Y}],S=new C["a"]({mode:"history",base:"/",routes:V}),N=S,H=l("bc3a"),F=l.n(H);n["default"].config.productionTip=!1,n["default"].use(v.a),F.a.defaults.withCredentials=!0,n["default"].prototype.$http=F.a,F.a.defaults.timeout=9e4,F.a.defaults.retry=2,F.a.defaults.retryDelay=2e3,new n["default"]({router:N,render:function(t){return t(m)}}).$mount("#app")},5725:function(t,e,l){"use strict";l("082a")},"85ec":function(t,e,l){},9341:function(t,e,l){"use strict";l("3dc1")}});
//# sourceMappingURL=app.3ad9259a.js.map