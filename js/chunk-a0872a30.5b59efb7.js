(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0872a30"],{1704:function(e,t,n){"use strict";n("2f10")},"2f10":function(e,t,n){},"585d":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("template",{slot:"header"},[n("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择您的实例",size:"small",filterable:"",clearable:""},on:{change:e.changeInstanc},model:{value:e.instanceValue,callback:function(t){e.instanceValue=t},expression:"instanceValue"}},e._l(e.instanceOptions,(function(e,t){return n("el-option",{key:t,attrs:{label:e.instanceId.split("#")[0],value:e.instanceId}})})),1)],1),n("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"border-card","element-loading-text":"正在向服务器请求数据","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[""==this.instanceValue?n("el-alert",{attrs:{title:"请先选择实例",type:"warning"}}):e._e(),n("el-tab-pane",{attrs:{label:"负载"}},[n("div",{staticStyle:{width:"33%",height:"300px",display:"inline-block"},attrs:{id:"myCpuChart"}}),n("div",{staticStyle:{width:"33%",height:"300px",display:"inline-block"},attrs:{id:"myMemChart"}}),n("div",{staticStyle:{width:"33%",height:"300px",display:"inline-block"},attrs:{id:"myHdChart"}})]),n("el-tab-pane",{attrs:{label:"业务量"}},[n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableList,size:"small",stripe:"","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),n("el-table-column",{attrs:{align:"center",prop:"session_num",label:"会话数量"}}),n("el-table-column",{attrs:{align:"center",prop:"flow_num",label:"当前激活的业务流数"}})],1)],1),n("el-tab-pane",{attrs:{label:"UPF 网元基本信息"}},[n("el-form",{attrs:{model:e.baseinfoForm}},[n("el-form-item",{attrs:{label:"标识符:",prop:"Id"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.Id))])],1),n("el-form-item",{attrs:{label:"用户友好名:",prop:"UserLabel"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.UserLabel))])],1),n("el-form-item",{attrs:{label:"管理状态:",prop:"AdministrativeState"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.AdministrativeState))])],1),n("el-form-item",{attrs:{label:"硬件平台:",prop:"HardwarePlatform"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.HardwarePlatform))])],1),n("el-form-item",{attrs:{label:"位置名称:",prop:"LocationName"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.LocationName))])],1),n("el-form-item",{attrs:{label:"管理节点:",prop:"ManagedBy"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.ManagedBy))])],1),n("el-form-item",{attrs:{label:"网管接口 IP 地址:",prop:"ManagementIpAddress"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.ManagementIpAddress))])],1),n("el-form-item",{attrs:{label:"运行状态:",prop:"OperationalState"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.OperationalState))])],1),n("el-form-item",{attrs:{label:"补丁信息:",prop:"PatchInfo"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.PatchInfo))])],1),n("el-form-item",{attrs:{label:"软件版本:",prop:"SwVersion"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.SwVersion))])],1),n("el-form-item",{attrs:{label:"厂商名称:",prop:"VendorName"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.VendorName))])],1)],1)],1),n("el-tab-pane",{attrs:{label:"UPF 用户面功能信息"}},[n("el-form",{attrs:{model:e.dpinfoForm}},[n("el-form-item",{attrs:{label:"标识符:",prop:"Id"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.Id))])],1),n("el-form-item",{attrs:{label:"用户友好名:",prop:"UserLabel"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.UserLabel))])],1),n("el-form-item",{attrs:{label:"运行状态:",prop:"OperationalState"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.OperationalState))])],1),n("el-form-item",{attrs:{label:"管理状态:",prop:"AdministrativeState"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.AdministrativeState))])],1),n("el-form-item",{attrs:{label:"硬件平台:",prop:"Fqdn"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.Fqdn))])],1),n("el-form-item",{attrs:{label:"最大 QoS 流数:",prop:"MaxQosFlows"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.MaxQosFlows))])],1),n("el-form-item",{attrs:{label:"最大数据吞吐率 Gbps:",prop:"MaxThroughput"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.MaxThroughput))])],1),n("el-form-item",{attrs:{label:"N3 接口的峰值吞吐率 Gbps:",prop:"MaxThroughputN3"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.MaxThroughputN3))])],1),n("el-form-item",{attrs:{label:"N6 接口的峰值吞吐率 Gbps:",prop:"MaxThroughputN6"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.MaxThroughputN6))])],1),n("el-form-item",{attrs:{label:"N9 接口的峰值吞吐率 Gbps:",prop:"MaxThroughputN9"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.MaxThroughputN9))])],1),n("el-form-item",{attrs:{label:"虚拟化和物理网元的显式标识:",prop:"PV_Flag"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.PV_Flag))])],1),n("el-form-item",{attrs:{label:"虚拟化实例标识:",prop:"VnfInstanceId"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.VnfInstanceId))])],1)],1)],1),n("el-tab-pane",{attrs:{label:"分局向的 N9(UPF-UPF)接口信息"}},[n("el-form",{attrs:{model:e.n9infoForm}},[n("el-form-item",{attrs:{label:"标识符:",prop:"Id"}},[n("el-row",[e._v(" "+e._s(e.n9infoForm.Id))])],1),n("el-form-item",{attrs:{label:"用户友好名:",prop:"UserLabel"}},[n("el-row",[e._v(" "+e._s(e.n9infoForm.UserLabel))])],1),n("el-form-item",{attrs:{label:"远端 IP 子网列表:",prop:"FarIpSubnetworkList"}},e._l(e.n9infoForm.FarIpSubnetworkList,(function(t){return n("el-row",{key:t},[n("label",[e._v(" Mask: "+e._s(t.Mask)+" ; ")]),n("label",[e._v(" Subnetwork: "+e._s(t.Subnetwork))])])})),1),n("el-form-item",{attrs:{label:"本端 IP 地址列表:",prop:"LocIpAddrList"}},e._l(e.n9infoForm.LocIpAddrList,(function(t,o){return n("label",{key:o},[e._v("\n            "+e._s(t)+" ;\n          ")])})),0)],1)],1),n("el-tab-pane",{attrs:{label:"分局向的 N3(UPF-RAN)接口信息"}},[n("el-form",{attrs:{model:e.n9infoForm}},[n("el-form-item",{attrs:{label:"标识符:",prop:"Id"}},[n("el-row",[e._v(" "+e._s(e.n3infoForm.Id))])],1),n("el-form-item",{attrs:{label:"用户友好名:",prop:"UserLabel"}},[n("el-row",[e._v(" "+e._s(e.n3infoForm.UserLabel))])],1),n("el-form-item",{attrs:{label:"远端 IP 子网列表:",prop:"FarIpSubnetworkList"}},e._l(e.n3infoForm.FarIpSubnetworkList,(function(t){return n("el-row",{key:t},[n("label",[e._v(" Mask: "+e._s(t.Mask)+" ; ")]),n("label",[e._v(" Subnetwork: "+e._s(t.Subnetwork))])])})),1),n("el-form-item",{attrs:{label:"本端 IP 地址列表:",prop:"LocIpAddrList"}},e._l(e.n3infoForm.LocIpAddrList,(function(t,o){return n("label",{key:o},[e._v("\n            "+e._s(t)+" ;\n          ")])})),0)],1)],1),n("el-tab-pane",{attrs:{label:"分局向的 N6（UPF-DN）接口信息"}},[n("el-form",{attrs:{model:e.n6infoForm}},[n("el-form-item",{attrs:{label:"标识符:",prop:"Id"}},[n("el-row",[e._v(" "+e._s(e.n6infoForm.Id))])],1),n("el-form-item",{attrs:{label:"用户友好名:",prop:"UserLabel"}},[n("el-row",[e._v(" "+e._s(e.n6infoForm.UserLabel))])],1),n("el-form-item",{attrs:{label:"远端 IP 子网列表:",prop:"FarIpSubnetworkList"}},e._l(e.n6infoForm.FarIpSubnetworkList,(function(t){return n("el-row",{key:t},[n("label",[e._v(" Mask: "+e._s(t.Mask)+" ; ")]),n("label",[e._v(" Subnetwork: "+e._s(t.Subnetwork))])])})),1),n("el-form-item",{attrs:{label:"本端 IP 地址列表:",prop:"LocIpAddrList"}},e._l(e.n6infoForm.LocIpAddrList,(function(t,o){return n("label",{key:o},[e._v("\n            "+e._s(t)+" ;\n          ")])})),0)],1)],1)],1)],2)},r=[],a=n("fcd0"),i=n("a8c5"),s={components:{layout:i["a"]},name:"upfCount",data:function(){return{instanceOptions:[],instanceValue:"",tableList:[],loading:!1,baseinfoForm:{},dpinfoForm:{},n9infoForm:{},n6infoForm:{},n3infoForm:{}}},created:function(){this.getServiceInstance()},mounted:function(){},methods:{getServiceInstance:function(){var e=this;Object(a["k"])({serviceName:"upf"}).then((function(t){e.instanceOptions=t.hosts,e.instanceOptions.length>0&&(e.instanceValue=e.instanceOptions[0].instanceId,e.changeInstanc(e.instanceValue))})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},changeInstanc:function(e){e&&(this.loading=!0,this.getUpfWareLoad(),this.getUpfSessionsload(),this.getUpfBaseInfo(),this.getDpInfo(),this.getN9Info(),this.getN6Info(),this.getN3Info())},getUpfWareLoad:function(){var e=this;Object(a["x"])({request_type:"hardware load",instance_id:this.instanceValue,sequence_no:1e3}).then((function(t){e.loading=!1,console.log("response:",t),e.drawLine(1,"CPU负载值",[{value:t.cpu_load,name:"当前"},{value:100-t.cpu_load,name:"剩余"}]),e.drawLine(2,"内存负载值",[{value:t.mem_load,name:"当前"},{value:100-t.mem_load,name:"剩余"}]),e.drawLine(3,"硬盘负载值",[{value:t.hd_load,name:"当前"},{value:100-t.hd_load,name:"剩余"}])})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))},drawLine:function(e,t,n){var o=null;o=1===e?this.$echarts.init(document.getElementById("myCpuChart")):2===e?this.$echarts.init(document.getElementById("myMemChart")):this.$echarts.init(document.getElementById("myHdChart")),o.setOption({title:{text:t,left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",bottom:"left"},series:[{name:"访问来源",type:"pie",radius:"50%",data:n,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})},getUpfSessionsload:function(){var e=this,t={request_type:"cpe configuration get",instance_id:this.instanceValue,sequence_no:1e3};Object(a["w"])(t).then((function(t){e.loading=!1,e.tableList=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))},getUpfBaseInfo:function(){var e=this,t={request_type:"base info",instance_id:this.instanceValue,sequence_no:3003};Object(a["C"])(t).then((function(t){e.loading=!1,e.baseinfoForm=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))},getDpInfo:function(){var e=this,t={request_type:"dp info",instance_id:this.instanceValue,sequence_no:3004};Object(a["y"])(t).then((function(t){e.loading=!1,e.dpinfoForm=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))},getN9Info:function(){var e=this,t={request_type:"n9 info",instance_id:this.instanceValue,sequence_no:3005};Object(a["B"])(t).then((function(t){e.loading=!1,e.n9infoForm=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))},getN6Info:function(){var e=this,t={request_type:"n6 info",instance_id:this.instanceValue,sequence_no:3006};Object(a["A"])(t).then((function(t){e.loading=!1,e.n6infoForm=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))},getN3Info:function(){var e=this,t={request_type:"n3 info",instance_id:this.instanceValue,sequence_no:3007};Object(a["z"])(t).then((function(t){e.loading=!1,e.n3infoForm=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))}}},l=s,c=(n("1704"),n("2877")),u=Object(c["a"])(l,o,r,!1,null,"cd1181a4",null);t["default"]=u.exports},fcd0:function(e,t,n){"use strict";n.d(t,"k",(function(){return v})),n.d(t,"u",(function(){return _})),n.d(t,"f",(function(){return w})),n.d(t,"a",(function(){return F})),n.d(t,"G",(function(){return I})),n.d(t,"i",(function(){return k})),n.d(t,"E",(function(){return O})),n.d(t,"x",(function(){return y})),n.d(t,"w",(function(){return j})),n.d(t,"C",(function(){return L})),n.d(t,"y",(function(){return x})),n.d(t,"B",(function(){return S})),n.d(t,"A",(function(){return M})),n.d(t,"z",(function(){return N})),n.d(t,"g",(function(){return U})),n.d(t,"D",(function(){return P})),n.d(t,"b",(function(){return V})),n.d(t,"h",(function(){return q})),n.d(t,"e",(function(){return T})),n.d(t,"m",(function(){return B})),n.d(t,"c",(function(){return A})),n.d(t,"j",(function(){return C})),n.d(t,"d",(function(){return E})),n.d(t,"l",(function(){return $})),n.d(t,"n",(function(){return z})),n.d(t,"F",(function(){return G})),n.d(t,"r",(function(){return D})),n.d(t,"t",(function(){return H})),n.d(t,"o",(function(){return Q})),n.d(t,"p",(function(){return R})),n.d(t,"q",(function(){return J})),n.d(t,"v",(function(){return W})),n.d(t,"s",(function(){return X}));var o=n("9bd2"),r=n("4360"),a=n("bc3a"),i=n.n(a),s=n("a18c"),l=n("5c96"),c=n("c276"),u=n("d8af"),f=n("e302");function p(e){r["a"].dispatch("d2admin/log/add",{type:"error",err:e,info:"数据请求异常"}),Object(l["Message"])({message:e.message,type:"error",duration:5e3})}var d=i.a.create({baseURL:"http://holer.cc:50633",timeout:2e4});d.interceptors.request.use((function(e){if(!f["a"].access(e,r["a"]))throw{type:"403",config:e};return u["a"].show(e),e}),(function(e){console.log(e),Promise.reject(e)})),d.interceptors.response.use((function(e){u["a"].hide(e.config);var t=e.data;return t}),(function(e){return console.log("rrr",e),u["a"].hide(e.config),e.response&&401===e.response.status?(c["a"].cookies.remove(),-1===e.config.url.indexOf("logout")&&Object(l["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){c["a"].cookies.remove("token"),c["a"].cookies.remove("uuid"),s["a"].push({name:"login"})}),1e3)):e.response&&500===e.response.status?p(new Error("服务器错误!: ".concat(e.config.url,", code = ").concat(e.response.status))):e.message&&e.message.indexOf("timeout")>-1?p(new Error("网络超时!: ".concat(e.config.url))):"403"===e.type?p(new Error("没有请求权限!: ".concat(e.config.url))):p(new Error("网络错误!: ".concat(e.config.url))),Promise.reject(e)}));var m=d;function b(e){r["a"].dispatch("d2admin/log/add",{type:"error",err:e,info:"数据请求异常"}),Object(l["Message"])({message:e.message,type:"error",duration:5e3})}var h=i.a.create({baseURL:"http://holer.cc:50631",timeout:2e4});h.interceptors.request.use((function(e){if(!f["a"].access(e,r["a"]))throw{type:"403",config:e};if(u["a"].show(e),!/^https:\/\/|http:\/\//.test(e.url)){var t=c["a"].cookies.get("token");t&&"undefined"!==t&&(e.headers["Authorization"]="Bearer "+t)}return e}),(function(e){console.log(e),Promise.reject(e)})),h.interceptors.response.use((function(e){u["a"].hide(e.config);var t=e.data;return t.statusCode&&200!==t.statusCode?(Object(l["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t.message)):(console.log("===>res",t),t)}),(function(e){return console.log(e),u["a"].hide(e.config),e.response&&401===e.response.status?(c["a"].cookies.remove(),-1===e.config.url.indexOf("logout")&&Object(l["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){c["a"].cookies.remove("token"),c["a"].cookies.remove("uuid"),s["a"].push({name:"login"})}),1e3)):e.response&&500===e.response.status?b(new Error("服务器错误!: ".concat(e.config.url,", code = ").concat(e.response.status))):e.message&&e.message.indexOf("timeout")>-1?b(new Error("网络超时!: ".concat(e.config.url))):"403"===e.type?b(new Error("没有请求权限!: ".concat(e.config.url))):b(new Error("网络错误!: ".concat(e.config.url))),Promise.reject(e)}));var g=h;function v(e){return m({url:"/nacos/v1/ns/instance/list",method:"get",params:e})}function _(e){return m({url:"/nacos/v1/ns/service/list",method:"get",params:e})}function w(e){return m({url:"/nacos/v1/ns/instance",method:"delete",params:e})}function F(e){return m({url:"/nacos/v1/ns/instance",method:"post",data:e})}function I(e){return m({url:"/nacos/v1/ns/instance",method:"put",data:e})}function k(e){return g({url:"/api/upf/nfom/v1.0/config/get",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function O(e){return g({url:"/api/upf/nfom/v1.0/config/set",method:"post",data:e})}function y(e){return Object(o["a"])({url:"/api/upf/nfom/v1.0/load/hardwareload",method:"post",data:e})}function j(e){return Object(o["a"])({url:"/api/upf/nfom/v1.0/load/sessionsload",method:"post",data:e})}function L(e){return Object(o["a"])({url:"/api/upf/nfom/v1.0/info/baseinfo",method:"post",data:e})}function x(e){return Object(o["a"])({url:"/api/upf/nfom/v1.0/info/dpinfo",method:"post",data:e})}function S(e){return Object(o["a"])({url:"/api/upf/nfom/v1.0/info/n9info",method:"post",data:e})}function M(e){return Object(o["a"])({url:"/api/upf/nfom/v1.0/info/n6info",method:"post",data:e})}function N(e){return Object(o["a"])({url:"/api/upf/nfom/v1.0/info/n3info",method:"post",data:e})}function U(e){return Object(o["a"])({url:"/api/upf/nfom/v1.0/alarm/get",method:"post",data:e})}function P(e){return Object(o["a"])({url:"/api/upf/nfom/v1.0/alarm/set",method:"post",data:e})}function V(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/del",method:"post",data:e})}function q(e,t){return Object(o["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/get?offset="+t,method:"post",data:e})}function T(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/del",method:"post",data:e})}function B(e,t){return Object(o["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/get?offset="+t,method:"post",data:e})}function A(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/del",method:"post",data:e})}function C(e,t){return Object(o["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/get?offset="+t,method:"post",data:e})}function E(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/del",method:"post",data:e})}function $(e,t){return Object(o["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/get?offset="+t,method:"post",data:e})}function z(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/perform/config/get",method:"post",data:e})}function G(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/perform/config/set",method:"post",data:e})}function D(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/perform/pfcp/get",method:"post",data:e})}function H(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/perform/qos/get",method:"post",data:e})}function Q(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/perform/n3/get",method:"post",data:e})}function R(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/perform/n6/get",method:"post",data:e})}function J(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/perform/n9/get",method:"post",data:e})}function W(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/perform/uldlthp/get",method:"post",data:e})}function X(e){return Object(o["a"])({url:"/api/upf/starsine/v1.0/perform/phyload/get",method:"post",data:e})}}}]);
//# sourceMappingURL=chunk-a0872a30.5b59efb7.js.map