(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-072cce5d"],{"68a4":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("template",{slot:"header"},[n("el-select",{attrs:{placeholder:"请选择服务",size:"small",filterable:"",clearable:""},on:{change:e.changeService},model:{value:e.serviceName,callback:function(t){e.serviceName=t},expression:"serviceName"}},e._l(e.serviceOptions,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1),n("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择您的实例",size:"small",filterable:"",clearable:""},on:{change:e.changeInstance},model:{value:e.instanceValue,callback:function(t){e.instanceValue=t},expression:"instanceValue"}},e._l(e.instanceOptions,(function(e,t){return n("el-option",{key:t,attrs:{label:e.instanceId.split("#")[0],value:e.instanceId}})})),1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,size:"small",stripe:"","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"index",index:e.indexMethod,width:"50",label:"序号"}}),n("el-table-column",{attrs:{align:"center",prop:"crt_time",label:"时间"}}),n("el-table-column",{attrs:{align:"center",label:"错误类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.license_alarm_type?n("p",[e._v("UPF 无 License")]):2===t.row.license_alarm_type?n("p",[e._v("UPF License 过期")]):3===t.row.license_alarm_type?n("p",[e._v("\n          当前会话数超过 License 限制\n        ")]):4===t.row.license_alarm_type?n("p",[e._v("\n          当前N4偶联数超过 License 限制\n        ")]):n("p",[e._v("当前UPF吞吐量超过 License 限制")])]}}])}),n("el-table-column",{attrs:{align:"center",prop:"license_alarm_detail",label:"告警内容"}})],1),n("br"),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.totalRows,"current-page":e.currentPage},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"current-change":e.handleCurrentChange}})],2)},a=[],o=(n("f559"),n("fcd0")),i={name:"licenseproblem",data:function(){return{totalRows:0,currentPage:1,serviceName:"",serviceOptions:[],instanceOptions:[],instanceValue:"",timer:null,isFirst:!0,timerInterval:1e4,loading:!1,tableData:[],licenseErrorTypeList:[{name:"UPF 无License",value:1},{name:"UPF License 过期",value:2},{name:"当前会话数超过 License 限制",value:3},{name:"当前 N4 偶联数超过 License 限制",value:4},{name:"当前 UPF 吞吐量超过 License 限制",value:5}]}},mounted:function(){this.getService()},methods:{getService:function(){var e=this;Object(o["u"])({pageNo:1,pageSize:50}).then((function(t){console.log(t),e.serviceOptions=t.doms.filter((function(e){return!e.startsWith("ace")})),e.serviceOptions.length>0&&(e.serviceName=e.serviceOptions[0],e.getServiceInstance(e.serviceName))})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},changeService:function(e){e&&this.getServiceInstance(e)},changeInstance:function(e){this.tableData=[],this.getBreakLink()},getServiceInstance:function(e){var t=this;Object(o["k"])({serviceName:e}).then((function(e){t.instanceOptions=e.hosts,!0===t.isFirst&&t.instanceOptions.length>0&&(t.instanceValue=t.instanceOptions[0].instanceId,t.changeInstance(t.instanceValue)),t.isFirst=!1})).catch((function(e){console.log(e),t.$alert(e,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},setTimer:function(){var e=this;null==this.timer&&(this.timer=setInterval((function(){console.log("开始定时...每过一-执行一次"),e.getBreakLink()}),this.timerInterval))},handleCurrentChange:function(){this.getBreakLink()},indexMethod:function(e){return 10*(this.currentPage-1)+e},getBreakLink:function(){var e=this;this.loading=!0,Object(o["l"])({request_type:"license alarm",instance_id:this.instanceValue,sequence_no:33461},this.currentPage).then((function(t){e.loading=!1,console.log(t),null!=t&&(e.tableData=t.rows,e.totalRows=t.total)})).catch((function(t){e.loading=!1,console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},deleteClick:function(e){var t=this;this.$confirm("是否清除数据？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确认",cancelButtonText:"取消"}).then((function(){t.loading=!0,Object(o["d"])({request_type:"license alarm",instance_id:t.instanceValue,sequence_no:33462,data:{broken_type:e.config_miss_type}}).then((function(e){t.loading=!1,t.$message({type:"success",message:"操作成功"})})).catch((function(e){t.loading=!1,console.log(e),t.$alert(e,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))})).catch((function(e){t.$message({type:"info",message:"已取消"})}))}},destroyed:function(){clearInterval(this.timer),this.timer=null}},c=i,s=n("2877"),u=Object(s["a"])(c,r,a,!1,null,null,null);t["default"]=u.exports},fcd0:function(e,t,n){"use strict";n.d(t,"k",(function(){return b})),n.d(t,"u",(function(){return O})),n.d(t,"f",(function(){return j})),n.d(t,"a",(function(){return k})),n.d(t,"G",(function(){return w})),n.d(t,"i",(function(){return y})),n.d(t,"E",(function(){return _})),n.d(t,"x",(function(){return x})),n.d(t,"w",(function(){return P})),n.d(t,"C",(function(){return L})),n.d(t,"y",(function(){return I})),n.d(t,"B",(function(){return B})),n.d(t,"A",(function(){return T})),n.d(t,"z",(function(){return C})),n.d(t,"g",(function(){return E})),n.d(t,"D",(function(){return F})),n.d(t,"b",(function(){return N})),n.d(t,"h",(function(){return S})),n.d(t,"e",(function(){return U})),n.d(t,"m",(function(){return q})),n.d(t,"c",(function(){return V})),n.d(t,"j",(function(){return $})),n.d(t,"d",(function(){return M})),n.d(t,"l",(function(){return z})),n.d(t,"n",(function(){return D})),n.d(t,"F",(function(){return R})),n.d(t,"r",(function(){return A})),n.d(t,"t",(function(){return J})),n.d(t,"o",(function(){return G})),n.d(t,"p",(function(){return W})),n.d(t,"q",(function(){return H})),n.d(t,"v",(function(){return K})),n.d(t,"s",(function(){return Q}));var r=n("9bd2"),a=n("4360"),o=n("bc3a"),i=n.n(o),c=n("a18c"),s=n("5c96"),u=n("c276"),l=n("d8af"),f=n("e302");function d(e){a["a"].dispatch("d2admin/log/add",{type:"error",err:e,info:"数据请求异常"}),Object(s["Message"])({message:e.message,type:"error",duration:5e3})}var p=i.a.create({baseURL:"http://holer.cc:50633",timeout:2e4});p.interceptors.request.use((function(e){if(!f["a"].access(e,a["a"]))throw{type:"403",config:e};return l["a"].show(e),e}),(function(e){console.log(e),Promise.reject(e)})),p.interceptors.response.use((function(e){l["a"].hide(e.config);var t=e.data;return t}),(function(e){return console.log("rrr",e),l["a"].hide(e.config),e.response&&401===e.response.status?(u["a"].cookies.remove(),-1===e.config.url.indexOf("logout")&&Object(s["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){u["a"].cookies.remove("token"),u["a"].cookies.remove("uuid"),c["a"].push({name:"login"})}),1e3)):e.response&&500===e.response.status?d(new Error("服务器错误!: ".concat(e.config.url,", code = ").concat(e.response.status))):e.message&&e.message.indexOf("timeout")>-1?d(new Error("网络超时!: ".concat(e.config.url))):"403"===e.type?d(new Error("没有请求权限!: ".concat(e.config.url))):d(new Error("网络错误!: ".concat(e.config.url))),Promise.reject(e)}));var m=p;function g(e){a["a"].dispatch("d2admin/log/add",{type:"error",err:e,info:"数据请求异常"}),Object(s["Message"])({message:e.message,type:"error",duration:5e3})}var h=i.a.create({baseURL:"http://holer.cc:50631",timeout:2e4});h.interceptors.request.use((function(e){if(!f["a"].access(e,a["a"]))throw{type:"403",config:e};if(l["a"].show(e),!/^https:\/\/|http:\/\//.test(e.url)){var t=u["a"].cookies.get("token");t&&"undefined"!==t&&(e.headers["Authorization"]="Bearer "+t)}return e}),(function(e){console.log(e),Promise.reject(e)})),h.interceptors.response.use((function(e){l["a"].hide(e.config);var t=e.data;return t.statusCode&&200!==t.statusCode?(Object(s["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t.message)):(console.log("===>res",t),t)}),(function(e){return console.log(e),l["a"].hide(e.config),e.response&&401===e.response.status?(u["a"].cookies.remove(),-1===e.config.url.indexOf("logout")&&Object(s["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){u["a"].cookies.remove("token"),u["a"].cookies.remove("uuid"),c["a"].push({name:"login"})}),1e3)):e.response&&500===e.response.status?g(new Error("服务器错误!: ".concat(e.config.url,", code = ").concat(e.response.status))):e.message&&e.message.indexOf("timeout")>-1?g(new Error("网络超时!: ".concat(e.config.url))):"403"===e.type?g(new Error("没有请求权限!: ".concat(e.config.url))):g(new Error("网络错误!: ".concat(e.config.url))),Promise.reject(e)}));var v=h;function b(e){return m({url:"/nacos/v1/ns/instance/list",method:"get",params:e})}function O(e){return m({url:"/nacos/v1/ns/service/list",method:"get",params:e})}function j(e){return m({url:"/nacos/v1/ns/instance",method:"delete",params:e})}function k(e){return m({url:"/nacos/v1/ns/instance",method:"post",data:e})}function w(e){return m({url:"/nacos/v1/ns/instance",method:"put",data:e})}function y(e){return v({url:"/api/upf/nfom/v1.0/config/get",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function _(e){return v({url:"/api/upf/nfom/v1.0/config/set",method:"post",data:e})}function x(e){return Object(r["a"])({url:"/api/upf/nfom/v1.0/load/hardwareload",method:"post",data:e})}function P(e){return Object(r["a"])({url:"/api/upf/nfom/v1.0/load/sessionsload",method:"post",data:e})}function L(e){return Object(r["a"])({url:"/api/upf/nfom/v1.0/info/baseinfo",method:"post",data:e})}function I(e){return Object(r["a"])({url:"/api/upf/nfom/v1.0/info/dpinfo",method:"post",data:e})}function B(e){return Object(r["a"])({url:"/api/upf/nfom/v1.0/info/n9info",method:"post",data:e})}function T(e){return Object(r["a"])({url:"/api/upf/nfom/v1.0/info/n6info",method:"post",data:e})}function C(e){return Object(r["a"])({url:"/api/upf/nfom/v1.0/info/n3info",method:"post",data:e})}function E(e){return Object(r["a"])({url:"/api/upf/nfom/v1.0/alarm/get",method:"post",data:e})}function F(e){return Object(r["a"])({url:"/api/upf/nfom/v1.0/alarm/set",method:"post",data:e})}function N(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/del",method:"post",data:e})}function S(e,t){return Object(r["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/get?offset="+t,method:"post",data:e})}function U(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/del",method:"post",data:e})}function q(e,t){return Object(r["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/get?offset="+t,method:"post",data:e})}function V(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/del",method:"post",data:e})}function $(e,t){return Object(r["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/get?offset="+t,method:"post",data:e})}function M(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/del",method:"post",data:e})}function z(e,t){return Object(r["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/get?offset="+t,method:"post",data:e})}function D(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/perform/config/get",method:"post",data:e})}function R(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/perform/config/set",method:"post",data:e})}function A(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/perform/pfcp/get",method:"post",data:e})}function J(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/perform/qos/get",method:"post",data:e})}function G(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/perform/n3/get",method:"post",data:e})}function W(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/perform/n6/get",method:"post",data:e})}function H(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/perform/n9/get",method:"post",data:e})}function K(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/perform/uldlthp/get",method:"post",data:e})}function Q(e){return Object(r["a"])({url:"/api/upf/starsine/v1.0/perform/phyload/get",method:"post",data:e})}}}]);
//# sourceMappingURL=chunk-072cce5d.d5ac5358.js.map