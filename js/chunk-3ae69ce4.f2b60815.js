(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ae69ce4"],{"2fe2":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("template",{slot:"header"},[n("el-select",{attrs:{placeholder:"请选择服务",size:"small",filterable:"",clearable:""},on:{change:e.changeService},model:{value:e.serviceName,callback:function(t){e.serviceName=t},expression:"serviceName"}},e._l(e.serviceOptions,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1),n("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择您的实例",size:"small",filterable:"",clearable:""},on:{change:e.changeInstance},model:{value:e.instanceValue,callback:function(t){e.instanceValue=t},expression:"instanceValue"}},e._l(e.instanceOptions,(function(e,t){return n("el-option",{key:t,attrs:{label:e.instanceId.split("#")[0],value:e.instanceId}})})),1),n("div",{staticClass:"topTime",staticStyle:{float:"right"}},[n("strong",[e._v("时间：")]),n("span",{staticStyle:{padding:"3px 0"}},[e._v(e._s(e.serverData.crt_time))])])],1),n("el-card",{staticClass:"box-card"},[n("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",size:"mini"}},[n("el-form-item",{attrs:{label:"PFCP会话建立请求次数："}},[n("span",[e._v(e._s(e.serverData.upf_pfcp_session_estab_req))])]),n("el-form-item",{attrs:{label:"PFCP会话建立成功次数"}},[n("span",[e._v(e._s(e.serverData.upf_pfcp_session_estab_succ))])]),n("el-form-item",[n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",{attrs:{title:"PFCP会话建立失败次数",name:"1"}},[n("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left","label-width":"500px",size:"mini"}},e._l(e.serverData.pfcpSessionEstabFailCause,(function(t,a,s){return n("el-form-item",{key:s,attrs:{label:a}},[n("span",[e._v(e._s(t))])])})),1)],1)],1)],1),n("el-form-item",{attrs:{label:"PFCP会话修改请求次数"}},[n("span",[e._v(e._s(e.serverData.upf_pfcp_session_modify_req))])]),n("el-form-item",{attrs:{label:"PFCP会话修改成功次数"}},[n("span",[e._v(e._s(e.serverData.upf_pfcp_session_modify_succ))])]),n("el-form-item",[n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",{attrs:{title:"PFCP会话修改失败次数",name:"1"}},[n("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left","label-width":"500px",size:"mini"}},e._l(e.serverData.pfcpSessionModifyFailCause,(function(t,a,s){return n("el-form-item",{key:s,attrs:{label:a}},[n("span",[e._v(e._s(t))])])})),1)],1)],1)],1)],1)],1),n("el-row",[n("el-select",{attrs:{placeholder:"请选择ns-name",size:"small",filterable:"",clearable:""},model:{value:e.nsName,callback:function(t){e.nsName=t},expression:"nsName"}},e._l(e.nsNameOptions,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.changeNsName}},[e._v("筛选")])],1),n("br"),n("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.tabPaneList,(function(t,a){return n("el-tab-pane",{key:a,attrs:{label:t.tabLabel,name:t.tabLabel}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.serverData[t.dataKey]}},[n("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),n("el-table-column",{attrs:{prop:"ns_name",label:"ns_name",width:"180"}}),n("el-table-column",4!=a&5!=a?{attrs:{prop:t.columKey,label:"次数"}}:4==a?{attrs:{type:"expand",prop:t.columKey,label:"次数",width:"500"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form",{attrs:{"label-position":"left",inline:"","label-width":"400px",size:"mini"}},e._l(t.row.pfcp_session_estab_fail_cause,(function(t,a,s){return n("el-form-item",{key:s,attrs:{label:a}},[n("span",[e._v(e._s(t))])])})),1)]}}],null,!0)}:{attrs:{type:"expand",prop:t.columKey,label:"次数",width:"500"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form",{attrs:{"label-position":"left",inline:"","label-width":"400px",size:"mini"}},e._l(t.row.pfcp_session_modify_fail_cause,(function(t,a,s){return n("el-form-item",{key:s,attrs:{label:a}},[n("span",[e._v(e._s(t))])])})),1)]}}],null,!0)})],1)],1)})),1)],2)},s=[],r=(n("ac6a"),n("5df3"),n("4f7f"),n("75fc")),o=(n("f559"),n("fcd0")),i={name:"pfcp",data:function(){return{activeName:"分切片的PFCP会话建立请求次数",serviceName:"",serviceOptions:[],instanceOptions:[],instanceValue:"",nsName:"",nsNameOptions:[],isFirst:!0,loading:!1,serverData:{},oldServerData:{},tabPaneList:[{tabLabel:"分切片的PFCP会话建立请求次数",dataKey:"pfcpSessionEstabReqNsList",columKey:"pfcp_session_estab_req"},{tabLabel:"分切片的PFCP会话建立成功次数",dataKey:"pfcpSessionEstabSuccNsList",columKey:"pfcp_session_estab_succ"},{tabLabel:"分切片的PFCP会话修改请求次数",dataKey:"pfcpSessionModifyReqNsList",columKey:"pfcp_session_modify_req"},{tabLabel:"分切片的PFCP会话修改成功次数",dataKey:"pfcpSessionModifySuccNsList",columKey:"pfcp_session_modify_succ"},{tabLabel:"分切片的PFCP会话建立失败次数",dataKey:"pfcpSessionEstabFailCauseNsList",columKey:"pfcp_session_estab_fail_cause"},{tabLabel:"分切片的PFCP会话修改失败次数",dataKey:"pfcpSessionModifyFailCauseNsList",columKey:"pfcp_session_modify_fail_cause"}]}},mounted:function(){this.getService()},methods:{handleClick:function(e,t){console.log(e,t)},getService:function(){var e=this;Object(o["u"])({pageNo:1,pageSize:50}).then((function(t){console.log(t),e.serviceOptions=t.doms.filter((function(e){return!e.startsWith("ace")})),e.serviceOptions.length>0&&(e.serviceName=e.serviceOptions[0],e.getServiceInstance(e.serviceName))})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},changeService:function(e){e&&this.getServiceInstance(e)},changeInstance:function(e){this.serverData=[],this.getPfcp()},getServiceInstance:function(e){var t=this;Object(o["k"])({serviceName:e}).then((function(e){t.instanceOptions=e.hosts,t.instanceOptions.length>0&&(t.instanceValue=t.instanceOptions[0].instanceId,t.changeInstance(t.instanceValue))})).catch((function(e){console.log(e),t.$alert(e,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},changeNsName:function(){var e=this;this.nsName?(this.serverData.pfcpSessionEstabFailCauseNsList.filter((function(t){return t.ns_name===e.nsName})),this.serverData.pfcpSessionEstabReqNsList.filter((function(t){return t.ns_name===e.nsName})),this.serverData.pfcpSessionEstabSuccNsList.filter((function(t){return t.ns_name===e.nsName})),this.serverData.pfcpSessionModifySuccNsList.filter((function(t){return t.ns_name===e.nsName})),this.serverData.pfcpSessionModifyReqNsList.filter((function(t){return t.ns_name===e.nsName})),this.serverData.pfcpSessionModifySuccNsList.filter((function(t){return t.ns_name===e.nsName}))):this.serverData=this.oldServerData},getPfcp:function(){var e=this;this.loading=!0,Object(o["r"])({request_type:"pfcp perform",instance_id:this.instanceValue,sequence_no:3353}).then((function(t){if(e.loading=!1,null!=t&t!=[]){e.oldServerData=t,e.serverData=t;var n=e.serverData.pfcpSessionEstabFailCauseNsList.map((function(e){return e.ns_name})),a=e.serverData.pfcpSessionEstabReqNsList.map((function(e){return e.ns_name})),s=e.serverData.pfcpSessionEstabSuccNsList.map((function(e){return e.ns_name})),o=e.serverData.pfcpSessionModifySuccNsList.map((function(e){return e.ns_name})),i=e.serverData.pfcpSessionModifyReqNsList.map((function(e){return e.ns_name})),c=e.serverData.pfcpSessionModifySuccNsList.map((function(e){return e.ns_name}));e.nsNameOptions=Object(r["a"])(new Set([].concat(Object(r["a"])(n),Object(r["a"])(a),Object(r["a"])(s),Object(r["a"])(o),Object(r["a"])(i),Object(r["a"])(c))))}})).catch((function(t){e.loading=!1,console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))}}},c=i,u=(n("81b1"),n("2877")),l=Object(u["a"])(c,a,s,!1,null,"037ee382",null);t["default"]=l.exports},"81b1":function(e,t,n){"use strict";n("92af")},"92af":function(e,t,n){},fcd0:function(e,t,n){"use strict";n.d(t,"k",(function(){return g})),n.d(t,"u",(function(){return _})),n.d(t,"f",(function(){return y})),n.d(t,"a",(function(){return O})),n.d(t,"G",(function(){return j})),n.d(t,"i",(function(){return N})),n.d(t,"E",(function(){return S})),n.d(t,"x",(function(){return k})),n.d(t,"w",(function(){return P})),n.d(t,"C",(function(){return w})),n.d(t,"y",(function(){return C})),n.d(t,"B",(function(){return L})),n.d(t,"A",(function(){return D})),n.d(t,"z",(function(){return x})),n.d(t,"g",(function(){return F})),n.d(t,"D",(function(){return E})),n.d(t,"b",(function(){return q})),n.d(t,"h",(function(){return K})),n.d(t,"e",(function(){return M})),n.d(t,"m",(function(){return z})),n.d(t,"c",(function(){return I})),n.d(t,"j",(function(){return R})),n.d(t,"d",(function(){return T})),n.d(t,"l",(function(){return V})),n.d(t,"n",(function(){return B})),n.d(t,"F",(function(){return $})),n.d(t,"r",(function(){return U})),n.d(t,"t",(function(){return A})),n.d(t,"o",(function(){return J})),n.d(t,"p",(function(){return G})),n.d(t,"q",(function(){return W})),n.d(t,"v",(function(){return H})),n.d(t,"s",(function(){return Q}));var a=n("9bd2"),s=n("4360"),r=n("bc3a"),o=n.n(r),i=n("a18c"),c=n("5c96"),u=n("c276"),l=n("d8af"),f=n("e302");function p(e){s["a"].dispatch("d2admin/log/add",{type:"error",err:e,info:"数据请求异常"}),Object(c["Message"])({message:e.message,type:"error",duration:5e3})}var d=o.a.create({baseURL:"http://holer.cc:50633",timeout:2e4});d.interceptors.request.use((function(e){if(!f["a"].access(e,s["a"]))throw{type:"403",config:e};return l["a"].show(e),e}),(function(e){console.log(e),Promise.reject(e)})),d.interceptors.response.use((function(e){l["a"].hide(e.config);var t=e.data;return t}),(function(e){return console.log("rrr",e),l["a"].hide(e.config),e.response&&401===e.response.status?(u["a"].cookies.remove(),-1===e.config.url.indexOf("logout")&&Object(c["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){u["a"].cookies.remove("token"),u["a"].cookies.remove("uuid"),i["a"].push({name:"login"})}),1e3)):e.response&&500===e.response.status?p(new Error("服务器错误!: ".concat(e.config.url,", code = ").concat(e.response.status))):e.message&&e.message.indexOf("timeout")>-1?p(new Error("网络超时!: ".concat(e.config.url))):"403"===e.type?p(new Error("没有请求权限!: ".concat(e.config.url))):p(new Error("网络错误!: ".concat(e.config.url))),Promise.reject(e)}));var m=d;function b(e){s["a"].dispatch("d2admin/log/add",{type:"error",err:e,info:"数据请求异常"}),Object(c["Message"])({message:e.message,type:"error",duration:5e3})}var v=o.a.create({baseURL:"http://holer.cc:50631",timeout:2e4});v.interceptors.request.use((function(e){if(!f["a"].access(e,s["a"]))throw{type:"403",config:e};if(l["a"].show(e),!/^https:\/\/|http:\/\//.test(e.url)){var t=u["a"].cookies.get("token");t&&"undefined"!==t&&(e.headers["Authorization"]="Bearer "+t)}return e}),(function(e){console.log(e),Promise.reject(e)})),v.interceptors.response.use((function(e){l["a"].hide(e.config);var t=e.data;return t.statusCode&&200!==t.statusCode?(Object(c["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t.message)):(console.log("===>res",t),t)}),(function(e){return console.log(e),l["a"].hide(e.config),e.response&&401===e.response.status?(u["a"].cookies.remove(),-1===e.config.url.indexOf("logout")&&Object(c["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){u["a"].cookies.remove("token"),u["a"].cookies.remove("uuid"),i["a"].push({name:"login"})}),1e3)):e.response&&500===e.response.status?b(new Error("服务器错误!: ".concat(e.config.url,", code = ").concat(e.response.status))):e.message&&e.message.indexOf("timeout")>-1?b(new Error("网络超时!: ".concat(e.config.url))):"403"===e.type?b(new Error("没有请求权限!: ".concat(e.config.url))):b(new Error("网络错误!: ".concat(e.config.url))),Promise.reject(e)}));var h=v;function g(e){return m({url:"/nacos/v1/ns/instance/list",method:"get",params:e})}function _(e){return m({url:"/nacos/v1/ns/service/list",method:"get",params:e})}function y(e){return m({url:"/nacos/v1/ns/instance",method:"delete",params:e})}function O(e){return m({url:"/nacos/v1/ns/instance",method:"post",data:e})}function j(e){return m({url:"/nacos/v1/ns/instance",method:"put",data:e})}function N(e){return h({url:"/api/upf/nfom/v1.0/config/get",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function S(e){return h({url:"/api/upf/nfom/v1.0/config/set",method:"post",data:e})}function k(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/load/hardwareload",method:"post",data:e})}function P(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/load/sessionsload",method:"post",data:e})}function w(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/baseinfo",method:"post",data:e})}function C(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/dpinfo",method:"post",data:e})}function L(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/n9info",method:"post",data:e})}function D(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/n6info",method:"post",data:e})}function x(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/n3info",method:"post",data:e})}function F(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/alarm/get",method:"post",data:e})}function E(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/alarm/set",method:"post",data:e})}function q(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/del",method:"post",data:e})}function K(e,t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/get?offset="+t,method:"post",data:e})}function M(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/del",method:"post",data:e})}function z(e,t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/get?offset="+t,method:"post",data:e})}function I(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/del",method:"post",data:e})}function R(e,t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/get?offset="+t,method:"post",data:e})}function T(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/del",method:"post",data:e})}function V(e,t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/get?offset="+t,method:"post",data:e})}function B(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/config/get",method:"post",data:e})}function $(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/config/set",method:"post",data:e})}function U(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/pfcp/get",method:"post",data:e})}function A(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/qos/get",method:"post",data:e})}function J(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/n3/get",method:"post",data:e})}function G(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/n6/get",method:"post",data:e})}function W(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/n9/get",method:"post",data:e})}function H(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/uldlthp/get",method:"post",data:e})}function Q(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/phyload/get",method:"post",data:e})}}}]);
//# sourceMappingURL=chunk-3ae69ce4.f2b60815.js.map