(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee3e643c"],{"2a0f":function(t,e,n){},"84bb":function(t,e,n){"use strict";n("2a0f")},"89e0":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",[n("template",{slot:"header"},[n("el-select",{attrs:{placeholder:"请选择服务",size:"small",filterable:"",clearable:""},on:{change:t.changeService},model:{value:t.serviceName,callback:function(e){t.serviceName=e},expression:"serviceName"}},t._l(t.serviceOptions,(function(t){return n("el-option",{key:t,attrs:{label:t,value:t}})})),1),n("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择您的实例",size:"small",filterable:"",clearable:""},on:{change:t.changeInstance},model:{value:t.instanceValue,callback:function(e){t.instanceValue=e},expression:"instanceValue"}},t._l(t.instanceOptions,(function(t,e){return n("el-option",{key:e,attrs:{label:t.instanceId.split("#")[0],value:t.instanceId}})})),1)],1),n("el-card",{staticClass:"box-card"},[n("strong",[t._v("时间：")]),n("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.crt_time))])]),n("el-card",{staticClass:"box-card"},[n("strong",[t._v("N6接口接收GTP包数")]),n("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n6_inc_pkt))])]),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("strong",[t._v("分DNN的N6接口接收GTP包数")])]),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n6IncPktDnnList}},[n("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),n("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),n("el-table-column",{attrs:{prop:"n6_inc_pkt",label:"次数"}})],1)],1)]),n("el-card",{staticClass:"box-card"},[n("strong",[t._v("N6接口发送GTP包数")]),n("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n6_og_pkt))])]),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("strong",[t._v("分DNN的N6接口发送GTP包数")])]),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n6OgPktDnnList}},[n("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),n("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),n("el-table-column",{attrs:{prop:"n6_og_pkt",label:"次数"}})],1)],1)]),n("el-card",{staticClass:"box-card"},[n("strong",[t._v("N6接口接收GTP包字节数")]),n("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n6_inc_oct))])]),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("strong",[t._v("分DNN的N6接口接收GTP包字节数")])]),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n6IncOctDnnList}},[n("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),n("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),n("el-table-column",{attrs:{prop:"n6_inc_oct",label:"次数"}})],1)],1)]),n("el-card",{staticClass:"box-card"},[n("strong",[t._v("N6接口发送GTP包字节数")]),n("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n6_og_oct))])]),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("strong",[t._v("分DNN的N6接口发送GTP包字节数")])]),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n6OgOctDnnList}},[n("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),n("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),n("el-table-column",{attrs:{prop:"n6_og_oct",label:"次数"}})],1)],1)]),n("el-card",{staticClass:"box-card"},[n("strong",[t._v("N6接口接收错误GTP包数")]),n("span",{staticStyle:{float:"right",padding:"3px 0"}},[t._v(t._s(t.serverData.upf_n6_disc_pkt))])]),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("strong",[t._v("分DNN的N6接口发送GTP包字节数")])]),n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.serverData.n6DiscPktDnnList}},[n("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),n("el-table-column",{attrs:{prop:"dnn_name",label:"dnn_name",width:"180"}}),n("el-table-column",{attrs:{prop:"n6_disc_pkt",label:"次数"}})],1)],1)])],2)},r=[],o=(n("f559"),n("fcd0")),s={name:"performN6",data:function(){return{serviceName:"",serviceOptions:[],instanceOptions:[],instanceValue:"",isFirst:!0,loading:!1,serverData:{}}},mounted:function(){this.getService()},methods:{getService:function(){var t=this;Object(o["u"])({pageNo:1,pageSize:50}).then((function(e){console.log(e),t.serviceOptions=e.doms.filter((function(t){return!t.startsWith("ace")})),t.serviceOptions.length>0&&(t.serviceName=t.serviceOptions[0],t.getServiceInstance(t.serviceName))})).catch((function(e){console.log(e),t.$alert(e,"网络请求发生错误",{confirmButtonText:"确定",callback:function(t){}})}))},changeService:function(t){t&&this.getServiceInstance(t)},changeInstance:function(t){this.serverData={},this.getData()},getServiceInstance:function(t){var e=this;Object(o["k"])({serviceName:t}).then((function(t){e.instanceOptions=t.hosts,e.instanceOptions.length>0&&(e.instanceValue=e.instanceOptions[0].instanceId,e.changeInstance(e.instanceValue))})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(t){}})}))},getData:function(){var t=this;this.loading=!0,Object(o["p"])({request_type:"n6 perform",instance_id:this.instanceValue,sequence_no:3355}).then((function(e){t.loading=!1,console.log(e),null!=e&e!=[]&&(t.serverData=e)})).catch((function(e){t.loading=!1,console.log(e),t.$alert(e,"网络请求发生错误",{confirmButtonText:"确定",callback:function(t){}})}))}}},i=s,c=(n("84bb"),n("2877")),u=Object(c["a"])(i,a,r,!1,null,"07077335",null);e["default"]=u.exports},fcd0:function(t,e,n){"use strict";n.d(e,"k",(function(){return b})),n.d(e,"u",(function(){return _})),n.d(e,"f",(function(){return O})),n.d(e,"a",(function(){return j})),n.d(e,"G",(function(){return w})),n.d(e,"i",(function(){return k})),n.d(e,"E",(function(){return x})),n.d(e,"x",(function(){return D})),n.d(e,"w",(function(){return y})),n.d(e,"C",(function(){return N})),n.d(e,"y",(function(){return C})),n.d(e,"B",(function(){return S})),n.d(e,"A",(function(){return P})),n.d(e,"z",(function(){return T})),n.d(e,"g",(function(){return I})),n.d(e,"D",(function(){return G})),n.d(e,"b",(function(){return E})),n.d(e,"h",(function(){return L})),n.d(e,"e",(function(){return V})),n.d(e,"m",(function(){return q})),n.d(e,"c",(function(){return z})),n.d(e,"j",(function(){return B})),n.d(e,"d",(function(){return M})),n.d(e,"l",(function(){return $})),n.d(e,"n",(function(){return F})),n.d(e,"F",(function(){return U})),n.d(e,"r",(function(){return A})),n.d(e,"t",(function(){return J})),n.d(e,"o",(function(){return R})),n.d(e,"p",(function(){return W})),n.d(e,"q",(function(){return H})),n.d(e,"v",(function(){return K})),n.d(e,"s",(function(){return Q}));var a=n("9bd2"),r=n("4360"),o=n("bc3a"),s=n.n(o),i=n("a18c"),c=n("5c96"),u=n("c276"),l=n("d8af"),d=n("e302");function p(t){r["a"].dispatch("d2admin/log/add",{type:"error",err:t,info:"数据请求异常"}),Object(c["Message"])({message:t.message,type:"error",duration:5e3})}var f=s.a.create({baseURL:"http://holer.cc:50633",timeout:2e4});f.interceptors.request.use((function(t){if(!d["a"].access(t,r["a"]))throw{type:"403",config:t};return l["a"].show(t),t}),(function(t){console.log(t),Promise.reject(t)})),f.interceptors.response.use((function(t){l["a"].hide(t.config);var e=t.data;return e}),(function(t){return console.log("rrr",t),l["a"].hide(t.config),t.response&&401===t.response.status?(u["a"].cookies.remove(),-1===t.config.url.indexOf("logout")&&Object(c["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){u["a"].cookies.remove("token"),u["a"].cookies.remove("uuid"),i["a"].push({name:"login"})}),1e3)):t.response&&500===t.response.status?p(new Error("服务器错误!: ".concat(t.config.url,", code = ").concat(t.response.status))):t.message&&t.message.indexOf("timeout")>-1?p(new Error("网络超时!: ".concat(t.config.url))):"403"===t.type?p(new Error("没有请求权限!: ".concat(t.config.url))):p(new Error("网络错误!: ".concat(t.config.url))),Promise.reject(t)}));var m=f;function g(t){r["a"].dispatch("d2admin/log/add",{type:"error",err:t,info:"数据请求异常"}),Object(c["Message"])({message:t.message,type:"error",duration:5e3})}var h=s.a.create({baseURL:"http://holer.cc:50631",timeout:2e4});h.interceptors.request.use((function(t){if(!d["a"].access(t,r["a"]))throw{type:"403",config:t};if(l["a"].show(t),!/^https:\/\/|http:\/\//.test(t.url)){var e=u["a"].cookies.get("token");e&&"undefined"!==e&&(t.headers["Authorization"]="Bearer "+e)}return t}),(function(t){console.log(t),Promise.reject(t)})),h.interceptors.response.use((function(t){l["a"].hide(t.config);var e=t.data;return e.statusCode&&200!==e.statusCode?(Object(c["Message"])({message:e.message,type:"error",duration:3e3}),Promise.reject(e.message)):(console.log("===>res",e),e)}),(function(t){return console.log(t),l["a"].hide(t.config),t.response&&401===t.response.status?(u["a"].cookies.remove(),-1===t.config.url.indexOf("logout")&&Object(c["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){u["a"].cookies.remove("token"),u["a"].cookies.remove("uuid"),i["a"].push({name:"login"})}),1e3)):t.response&&500===t.response.status?g(new Error("服务器错误!: ".concat(t.config.url,", code = ").concat(t.response.status))):t.message&&t.message.indexOf("timeout")>-1?g(new Error("网络超时!: ".concat(t.config.url))):"403"===t.type?g(new Error("没有请求权限!: ".concat(t.config.url))):g(new Error("网络错误!: ".concat(t.config.url))),Promise.reject(t)}));var v=h;function b(t){return m({url:"/nacos/v1/ns/instance/list",method:"get",params:t})}function _(t){return m({url:"/nacos/v1/ns/service/list",method:"get",params:t})}function O(t){return m({url:"/nacos/v1/ns/instance",method:"delete",params:t})}function j(t){return m({url:"/nacos/v1/ns/instance",method:"post",data:t})}function w(t){return m({url:"/nacos/v1/ns/instance",method:"put",data:t})}function k(t){return v({url:"/api/upf/nfom/v1.0/config/get",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function x(t){return v({url:"/api/upf/nfom/v1.0/config/set",method:"post",data:t})}function D(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/load/hardwareload",method:"post",data:t})}function y(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/load/sessionsload",method:"post",data:t})}function N(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/baseinfo",method:"post",data:t})}function C(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/dpinfo",method:"post",data:t})}function S(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/n9info",method:"post",data:t})}function P(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/n6info",method:"post",data:t})}function T(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/n3info",method:"post",data:t})}function I(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/alarm/get",method:"post",data:t})}function G(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/alarm/set",method:"post",data:t})}function E(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/del",method:"post",data:t})}function L(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/get",method:"post",data:t})}function V(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/del",method:"post",data:t})}function q(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/get",method:"post",data:t})}function z(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/del",method:"post",data:t})}function B(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/get",method:"post",data:t})}function M(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/del",method:"post",data:t})}function $(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/get",method:"post",data:t})}function F(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/config/get",method:"post",data:t})}function U(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/config/set",method:"post",data:t})}function A(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/pfcp/get",method:"post",data:t})}function J(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/qos/get",method:"post",data:t})}function R(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/n3/get",method:"post",data:t})}function W(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/n6/get",method:"post",data:t})}function H(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/n9/get",method:"post",data:t})}function K(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/uldlthp/get",method:"post",data:t})}function Q(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/phyload/get",method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-ee3e643c.efc08b67.js.map