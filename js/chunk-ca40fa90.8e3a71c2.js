(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca40fa90"],{"58bf":function(t,e,a){},b098:function(t,e,a){"use strict";a("58bf")},c059:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",[a("template",{slot:"header"},[a("el-select",{attrs:{placeholder:"请选择服务",size:"small",filterable:"",clearable:""},on:{change:t.changeService},model:{value:t.serviceName,callback:function(e){t.serviceName=e},expression:"serviceName"}},t._l(t.serviceOptions,(function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1),a("el-select",{staticStyle:{width:"450px"},attrs:{placeholder:"请选择您的实例",size:"small",filterable:"",clearable:""},on:{change:t.changeInstance},model:{value:t.instanceValue,callback:function(e){t.instanceValue=e},expression:"instanceValue"}},t._l(t.instanceOptions,(function(t,e){return a("el-option",{key:e,attrs:{label:t.instanceId,value:t.instanceId}})})),1)],1),a("el-card",{staticClass:"box-card"},[a("strong",[t._v("时间：")]),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.crt_time))])]),a("el-tabs",{attrs:{type:"border-card"},model:{value:t.activeTabName,callback:function(e){t.activeTabName=e},expression:"activeTabName"}},[a("el-tab-pane",{attrs:{label:"N9A",name:"firstTab"}},[a("el-card",{staticClass:"box-card"},[a("strong",[t._v("N9A接口接收GTP包数")]),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n9a_inc_pkt))])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("分DNN的N9A接口接收GTP包数")])]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n9aIncPktDnnList}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),a("el-table-column",{attrs:{prop:"n9a_inc_pkt",label:"次数"}})],1)],1)]),a("el-card",{staticClass:"box-card"},[a("strong",[t._v("N9A接口发送GTP包数")]),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_9a_og_pkt))])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("分DNN的N9A接口发送GTP包数")])]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n9aOgPktDnnList}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),a("el-table-column",{attrs:{prop:"n9a_og_pkt",label:"次数"}})],1)],1)]),a("el-card",{staticClass:"box-card"},[a("strong",[t._v("N9A接口接收GTP包字节数")]),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n9a_inc_oct))])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("分DNN的N9A接口接收GTP包字节数")])]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n9aIncOctDnnList}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),a("el-table-column",{attrs:{prop:"n9a_inc_oct",label:"次数"}})],1)],1)]),a("el-card",{staticClass:"box-card"},[a("strong",[t._v("N9A接口发送GTP包字节数")]),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n9a_og_oct))])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("分DNN的N9A接口发送GTP包字节数")])]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n9aOgOctDnnList}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),a("el-table-column",{attrs:{prop:"n9a_og_oct",label:"次数"}})],1)],1)]),a("el-card",{staticClass:"box-card"},[a("strong",[t._v("N9A接口接收错误GTP包数")]),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n9a_disc_pkt))])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("分DNN的N9A接口发送GTP包字节数")])]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n9aDiscPktDnnList}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),a("el-table-column",{attrs:{prop:"n9a_disc_pkt",label:"次数"}})],1)],1)])],1),a("el-tab-pane",{attrs:{label:"N9C"}},[a("el-card",{staticClass:"box-card"},[a("strong",[t._v("N9C接口接收GTP包数")]),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n9c_inc_pkt))])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("分DNN的N9C接口接收GTP包数")])]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n9cIncPktDnnList}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),a("el-table-column",{attrs:{prop:"n9c_inc_pkt",label:"次数"}})],1)],1)]),a("el-card",{staticClass:"box-card"},[a("strong",[t._v("N9C接口发送GTP包数")]),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_9a_og_pkt))])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("分DNN的N9C接口发送GTP包数")])]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n9cOgPktDnnList}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),a("el-table-column",{attrs:{prop:"n9c_og_pkt",label:"次数"}})],1)],1)]),a("el-card",{staticClass:"box-card"},[a("strong",[t._v("N9C接口接收GTP包字节数")]),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n9c_inc_oct))])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("分DNN的N9C接口接收GTP包字节数")])]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n9cIncOctDnnList}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),a("el-table-column",{attrs:{prop:"n9c_inc_oct",label:"次数"}})],1)],1)]),a("el-card",{staticClass:"box-card"},[a("strong",[t._v("N9C接口发送GTP包字节数")]),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n9c_og_oct))])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("分DNN的N9C接口发送GTP包字节数")])]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n9cOgOctDnnList}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),a("el-table-column",{attrs:{prop:"n9c_og_oct",label:"次数"}})],1)],1)]),a("el-card",{staticClass:"box-card"},[a("strong",[t._v("N9C接口接收错误GTP包数")]),a("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n9c_disc_pkt))])]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("分DNN的N9C接口发送GTP包字节数")])]),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n9cDiscPktDnnList}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),a("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),a("el-table-column",{attrs:{prop:"n9c_disc_pkt",label:"次数"}})],1)],1)])],1)],1)],2)},r=[],s=(a("f559"),a("fcd0")),o={name:"performN9",data:function(){return{serviceName:"",serviceOptions:[],instanceOptions:[],instanceValue:"",isFirst:!0,loading:!1,serverData:{},activeTabName:"firstTab"}},mounted:function(){this.getService()},methods:{getService:function(){var t=this;Object(s["u"])({pageNo:1,pageSize:50}).then((function(e){console.log(e),t.serviceOptions=e.doms.filter((function(t){return!t.startsWith("ace")})),t.serviceOptions.length>0&&(t.serviceName=t.serviceOptions[0],t.getServiceInstance(t.serviceName))})).catch((function(e){console.log(e),t.$alert(e,"网络请求发生错误",{confirmButtonText:"确定",callback:function(t){}})}))},changeService:function(t){t&&this.getServiceInstance(t)},changeInstance:function(t){this.serverData={},this.getData()},getServiceInstance:function(t){var e=this;Object(s["k"])({serviceName:t}).then((function(t){e.instanceOptions=t.hosts,e.instanceOptions.length>0&&(e.instanceValue=e.instanceOptions[0].instanceId,e.changeInstance(e.instanceValue))})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(t){}})}))},getData:function(){var t=this;this.loading=!0,Object(s["q"])({request_type:"n9 perform",instance_id:this.instanceValue,sequence_no:3356}).then((function(e){t.loading=!1,console.log(e),null!=e&e!=[]&&(t.serverData=e)})).catch((function(e){t.loading=!1,console.log(e),t.$alert(e,"网络请求发生错误",{confirmButtonText:"确定",callback:function(t){}})}))}}},c=o,i=(a("b098"),a("2877")),l=Object(i["a"])(c,n,r,!1,null,"9c1b8878",null);e["default"]=l.exports},fcd0:function(t,e,a){"use strict";a.d(e,"k",(function(){return g})),a.d(e,"u",(function(){return _})),a.d(e,"f",(function(){return D})),a.d(e,"a",(function(){return O})),a.d(e,"G",(function(){return x})),a.d(e,"i",(function(){return N})),a.d(e,"E",(function(){return w})),a.d(e,"x",(function(){return C})),a.d(e,"w",(function(){return k})),a.d(e,"C",(function(){return j})),a.d(e,"y",(function(){return y})),a.d(e,"B",(function(){return T})),a.d(e,"A",(function(){return P})),a.d(e,"z",(function(){return S})),a.d(e,"g",(function(){return I})),a.d(e,"D",(function(){return G})),a.d(e,"b",(function(){return A})),a.d(e,"h",(function(){return L})),a.d(e,"e",(function(){return E})),a.d(e,"m",(function(){return q})),a.d(e,"c",(function(){return V})),a.d(e,"j",(function(){return z})),a.d(e,"d",(function(){return B})),a.d(e,"l",(function(){return M})),a.d(e,"n",(function(){return $})),a.d(e,"F",(function(){return F})),a.d(e,"r",(function(){return U})),a.d(e,"t",(function(){return J})),a.d(e,"o",(function(){return R})),a.d(e,"p",(function(){return W})),a.d(e,"q",(function(){return H})),a.d(e,"v",(function(){return K})),a.d(e,"s",(function(){return Q}));var n=a("9bd2"),r=a("4360"),s=a("bc3a"),o=a.n(s),c=a("a18c"),i=a("5c96"),l=a("c276"),u=a("d8af"),d=a("e302");function p(t){r["a"].dispatch("d2admin/log/add",{type:"error",err:t,info:"数据请求异常"}),Object(i["Message"])({message:t.message,type:"error",duration:5e3})}var f=o.a.create({baseURL:"http://holer.cc:50633",timeout:2e4});f.interceptors.request.use((function(t){if(!d["a"].access(t,r["a"]))throw{type:"403",config:t};return u["a"].show(t),t}),(function(t){console.log(t),Promise.reject(t)})),f.interceptors.response.use((function(t){u["a"].hide(t.config);var e=t.data;return e}),(function(t){return console.log("rrr",t),u["a"].hide(t.config),t.response&&401===t.response.status?(l["a"].cookies.remove(),-1===t.config.url.indexOf("logout")&&Object(i["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){l["a"].cookies.remove("token"),l["a"].cookies.remove("uuid"),c["a"].push({name:"login"})}),1e3)):t.response&&500===t.response.status?p(new Error("服务器错误!: ".concat(t.config.url,", code = ").concat(t.response.status))):t.message&&t.message.indexOf("timeout")>-1?p(new Error("网络超时!: ".concat(t.config.url))):"403"===t.type?p(new Error("没有请求权限!: ".concat(t.config.url))):p(new Error("网络错误!: ".concat(t.config.url))),Promise.reject(t)}));var m=f;function b(t){r["a"].dispatch("d2admin/log/add",{type:"error",err:t,info:"数据请求异常"}),Object(i["Message"])({message:t.message,type:"error",duration:5e3})}var v=o.a.create({baseURL:"http://holer.cc:50631",timeout:2e4});v.interceptors.request.use((function(t){if(!d["a"].access(t,r["a"]))throw{type:"403",config:t};if(u["a"].show(t),!/^https:\/\/|http:\/\//.test(t.url)){var e=l["a"].cookies.get("token");e&&"undefined"!==e&&(t.headers["Authorization"]="Bearer "+e)}return t}),(function(t){console.log(t),Promise.reject(t)})),v.interceptors.response.use((function(t){u["a"].hide(t.config);var e=t.data;return e.statusCode&&200!==e.statusCode?(Object(i["Message"])({message:e.message,type:"error",duration:3e3}),Promise.reject(e.message)):(console.log("===>res",e),e)}),(function(t){return console.log(t),u["a"].hide(t.config),t.response&&401===t.response.status?(l["a"].cookies.remove(),-1===t.config.url.indexOf("logout")&&Object(i["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){l["a"].cookies.remove("token"),l["a"].cookies.remove("uuid"),c["a"].push({name:"login"})}),1e3)):t.response&&500===t.response.status?b(new Error("服务器错误!: ".concat(t.config.url,", code = ").concat(t.response.status))):t.message&&t.message.indexOf("timeout")>-1?b(new Error("网络超时!: ".concat(t.config.url))):"403"===t.type?b(new Error("没有请求权限!: ".concat(t.config.url))):b(new Error("网络错误!: ".concat(t.config.url))),Promise.reject(t)}));var h=v;function g(t){return m({url:"/nacos/v1/ns/instance/list",method:"get",params:t})}function _(t){return m({url:"/nacos/v1/ns/service/list",method:"get",params:t})}function D(t){return m({url:"/nacos/v1/ns/instance",method:"delete",params:t})}function O(t){return m({url:"/nacos/v1/ns/instance",method:"post",data:t})}function x(t){return m({url:"/nacos/v1/ns/instance",method:"put",data:t})}function N(t){return h({url:"/api/upf/nfom/v1.0/config/get",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function w(t){return h({url:"/api/upf/nfom/v1.0/config/set",method:"post",data:t})}function C(t){return Object(n["a"])({url:"/api/upf/nfom/v1.0/load/hardwareload",method:"post",data:t})}function k(t){return Object(n["a"])({url:"/api/upf/nfom/v1.0/load/sessionsload",method:"post",data:t})}function j(t){return Object(n["a"])({url:"/api/upf/nfom/v1.0/info/baseinfo",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/api/upf/nfom/v1.0/info/dpinfo",method:"post",data:t})}function T(t){return Object(n["a"])({url:"/api/upf/nfom/v1.0/info/n9info",method:"post",data:t})}function P(t){return Object(n["a"])({url:"/api/upf/nfom/v1.0/info/n6info",method:"post",data:t})}function S(t){return Object(n["a"])({url:"/api/upf/nfom/v1.0/info/n3info",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/api/upf/nfom/v1.0/alarm/get",method:"post",data:t})}function G(t){return Object(n["a"])({url:"/api/upf/nfom/v1.0/alarm/set",method:"post",data:t})}function A(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/del",method:"post",data:t})}function L(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/get",method:"post",data:t})}function E(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/del",method:"post",data:t})}function q(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/get",method:"post",data:t})}function V(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/del",method:"post",data:t})}function z(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/get",method:"post",data:t})}function B(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/del",method:"post",data:t})}function M(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/get",method:"post",data:t})}function $(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/perform/config/get",method:"post",data:t})}function F(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/perform/config/set",method:"post",data:t})}function U(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/perform/pfcp/get",method:"post",data:t})}function J(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/perform/qos/get",method:"post",data:t})}function R(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/perform/n3/get",method:"post",data:t})}function W(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/perform/n6/get",method:"post",data:t})}function H(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/perform/n9/get",method:"post",data:t})}function K(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/perform/uldlthp/get",method:"post",data:t})}function Q(t){return Object(n["a"])({url:"/api/upf/starsine/v1.0/perform/phyload/get",method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-ca40fa90.8e3a71c2.js.map