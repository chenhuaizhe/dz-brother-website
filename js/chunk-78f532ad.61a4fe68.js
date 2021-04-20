(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78f532ad"],{2898:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("template",{slot:"header"},[n("el-select",{attrs:{placeholder:"请选择服务",size:"small",filterable:"",clearable:""},on:{change:e.changeService},model:{value:e.serviceName,callback:function(t){e.serviceName=t},expression:"serviceName"}},e._l(e.serviceOptions,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1),n("el-select",{staticStyle:{width:"450px"},attrs:{placeholder:"请选择您的实例",size:"small",filterable:"",clearable:""},on:{change:e.changeInstance},model:{value:e.instanceValue,callback:function(t){e.instanceValue=t},expression:"instanceValue"}},e._l(e.instanceOptions,(function(e,t){return n("el-option",{key:t,attrs:{label:e.instanceId,value:e.instanceId}})})),1)],1),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("过载告警")]),n("div",{staticStyle:{float:"right",padding:"3px 0"}},[n("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:e.setClick}},[e._v("告警配置")])],1),n("div",{staticStyle:{float:"right",padding:"3px 6px"}},[n("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:e.deleteClick}},[e._v("告警清除")])],1)]),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"80%",height:"400px"},attrs:{id:"myAlarmChart","element-loading-text":"正在向服务器请求数据","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}})]),n("br"),n("el-dialog",{attrs:{title:"告警配置",visible:e.dialogVisible,width:"600px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"110px"}},[n("el-form-item",{attrs:{label:"告警开关"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.form.alarm_switch,callback:function(t){e.$set(e.form,"alarm_switch",t)},expression:"form.alarm_switch"}})],1),n("el-form-item",{attrs:{label:"CPU告警值"}},[n("el-input",{model:{value:e.form.alarm_hd_threshold,callback:function(t){e.$set(e.form,"alarm_hd_threshold",t)},expression:"form.alarm_hd_threshold"}})],1),n("el-form-item",{attrs:{label:"内存告警值"}},[n("el-input",{model:{value:e.form.alarm_cpu_threshold,callback:function(t){e.$set(e.form,"alarm_cpu_threshold",t)},expression:"form.alarm_cpu_threshold"}})],1),n("el-form-item",{attrs:{label:"硬盘告警值"}},[n("el-input",{model:{value:e.form.alarm_mem_threshold,callback:function(t){e.$set(e.form,"alarm_mem_threshold",t)},expression:"form.alarm_mem_threshold"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.submitConfig}},[e._v("确 定")])],1)],1)],2)},o=[],r=(n("f559"),n("fcd0")),i={name:"alarm",data:function(){return{myChart:null,serviceName:"",serviceOptions:[],instanceOptions:[],instanceValue:"",timer:null,isFirst:!0,timerInterval:1e4,dialogVisible:!1,form:{alarm_switch:!1,alarm_mem_threshold:null,alarm_cpu_threshold:null,alarm_hd_threshold:null},overload:{cpu_load:0,mem_load:0,hd_load:0},linkbroken:{},chartOption:[],loading:!1}},mounted:function(){this.getService(),this.drawLine()},methods:{getService:function(){var e=this;Object(r["u"])({pageNo:1,pageSize:50}).then((function(t){console.log(t),e.serviceOptions=t.doms.filter((function(e){return!e.startsWith("ace")})),e.serviceOptions.length>0&&(e.serviceName=e.serviceOptions[0],e.getServiceInstance(e.serviceName))})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},changeService:function(e){e&&this.getServiceInstance(e)},changeInstance:function(e){var t=this.myChart.getOption();t.series=[],t.xAxis=[],this.myChart.setOption(t),this.getOverload(),this.timer?(clearInterval(this.timer),this.timer=null,this.setTimer()):this.setTimer()},getServiceInstance:function(e){var t=this;Object(r["k"])({serviceName:e}).then((function(e){t.instanceOptions=e.hosts,!0===t.isFirst&&t.instanceOptions.length>0&&(t.instanceValue=t.instanceOptions[0].instanceId,t.changeInstance(t.instanceValue)),t.isFirst=!1})).catch((function(e){console.log(e),t.$alert(e,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},setTimer:function(){var e=this;null==this.timer&&(this.timer=setInterval((function(){console.log("开始定时...每过一-执行一次"),e.getOverload()}),this.timerInterval))},setClick:function(){this.getAlarmConfig(),this.dialogVisible=!0},getOverload:function(){var e=this;this.loading=!0,Object(r["h"])({request_type:"alarm get",instance_id:this.instanceValue,sequence_no:3001,data:this.form}).then((function(t){e.loading=!1,e.overload.cpu_load=t.cpu_load,e.overload.mem_load=t.mem_load,e.overload.hd_load=t.hd_load;var n=e.myChart.getOption();console.log(n),n.series[0].data.push(t.cpu_load),n.series[1].data.push(t.mem_load),n.series[2].data.push(t.hd_load);var a=new Date;console.log("9999"),console.log(n.xAxis),n.xAxis[0].data.push(a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()),e.myChart.setOption(n)})).catch((function(t){e.loading=!1,console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},getAlarmConfig:function(){var e=this;Object(r["g"])({request_type:"alarm get",instance_id:this.instanceValue,sequence_no:3001}).then((function(t){e.form=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},drawLine:function(){this.myChart=this.$echarts.init(document.getElementById("myAlarmChart")),this.myChart.setOption({title:{text:"负载值图表",subtext:"单位：%"},tooltip:{trigger:"axis"},legend:{data:["CPU","内存","硬盘"]},xAxis:{type:"category",data:["Begin"]},yAxis:[{type:"value"}],series:[{name:"CPU",type:"line",data:[10]},{name:"内存",type:"line",data:[8]},{name:"硬盘",type:"line",data:[6]}]})},handleClose:function(){this.dialogVisible=!1},submitConfig:function(){var e=this;this.dialogVisible=!1,Object(r["D"])({request_type:"alarm set",instance_id:this.instanceValue,sequence_no:3001,data:this.form}).then((function(e){})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},deleteClick:function(){var e=this;this.$confirm("是否清除数据？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确认",cancelButtonText:"取消"}).then((function(){e.loading=!0,Object(r["b"])({request_type:"alarm del",instance_id:e.instanceValue,sequence_no:33432}).then((function(t){e.loading=!1,e.$message({type:"su",message:"操作成功"})})).catch((function(t){e.loading=!1,console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))})).catch((function(t){e.$message({type:"info",message:"已取消"})}))}},destroyed:function(){clearInterval(this.timer),this.timer=null}},s=i,c=n("2877"),l=Object(c["a"])(s,a,o,!1,null,null,null);t["default"]=l.exports},fcd0:function(e,t,n){"use strict";n.d(t,"k",(function(){return b})),n.d(t,"u",(function(){return O})),n.d(t,"f",(function(){return _})),n.d(t,"a",(function(){return y})),n.d(t,"G",(function(){return j})),n.d(t,"i",(function(){return k})),n.d(t,"E",(function(){return x})),n.d(t,"x",(function(){return w})),n.d(t,"w",(function(){return C})),n.d(t,"C",(function(){return V})),n.d(t,"y",(function(){return I})),n.d(t,"B",(function(){return T})),n.d(t,"A",(function(){return $})),n.d(t,"z",(function(){return S})),n.d(t,"g",(function(){return q})),n.d(t,"D",(function(){return A})),n.d(t,"b",(function(){return B})),n.d(t,"h",(function(){return E})),n.d(t,"e",(function(){return N})),n.d(t,"m",(function(){return P})),n.d(t,"c",(function(){return z})),n.d(t,"j",(function(){return M})),n.d(t,"d",(function(){return U})),n.d(t,"l",(function(){return F})),n.d(t,"n",(function(){return L})),n.d(t,"F",(function(){return D})),n.d(t,"r",(function(){return J})),n.d(t,"t",(function(){return R})),n.d(t,"o",(function(){return G})),n.d(t,"p",(function(){return H})),n.d(t,"q",(function(){return W})),n.d(t,"v",(function(){return K})),n.d(t,"s",(function(){return Q}));var a=n("9bd2"),o=n("4360"),r=n("bc3a"),i=n.n(r),s=n("a18c"),c=n("5c96"),l=n("c276"),u=n("d8af"),d=n("e302");function f(e){o["a"].dispatch("d2admin/log/add",{type:"error",err:e,info:"数据请求异常"}),Object(c["Message"])({message:e.message,type:"error",duration:5e3})}var m=i.a.create({baseURL:"http://holer.cc:50633",timeout:2e4});m.interceptors.request.use((function(e){if(!d["a"].access(e,o["a"]))throw{type:"403",config:e};return u["a"].show(e),e}),(function(e){console.log(e),Promise.reject(e)})),m.interceptors.response.use((function(e){u["a"].hide(e.config);var t=e.data;return t}),(function(e){return console.log("rrr",e),u["a"].hide(e.config),e.response&&401===e.response.status?(l["a"].cookies.remove(),-1===e.config.url.indexOf("logout")&&Object(c["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){l["a"].cookies.remove("token"),l["a"].cookies.remove("uuid"),s["a"].push({name:"login"})}),1e3)):e.response&&500===e.response.status?f(new Error("服务器错误!: ".concat(e.config.url,", code = ").concat(e.response.status))):e.message&&e.message.indexOf("timeout")>-1?f(new Error("网络超时!: ".concat(e.config.url))):"403"===e.type?f(new Error("没有请求权限!: ".concat(e.config.url))):f(new Error("网络错误!: ".concat(e.config.url))),Promise.reject(e)}));var p=m;function h(e){o["a"].dispatch("d2admin/log/add",{type:"error",err:e,info:"数据请求异常"}),Object(c["Message"])({message:e.message,type:"error",duration:5e3})}var g=i.a.create({baseURL:"http://holer.cc:50631",timeout:2e4});g.interceptors.request.use((function(e){if(!d["a"].access(e,o["a"]))throw{type:"403",config:e};if(u["a"].show(e),!/^https:\/\/|http:\/\//.test(e.url)){var t=l["a"].cookies.get("token");t&&"undefined"!==t&&(e.headers["Authorization"]="Bearer "+t)}return e}),(function(e){console.log(e),Promise.reject(e)})),g.interceptors.response.use((function(e){u["a"].hide(e.config);var t=e.data;return t.statusCode&&200!==t.statusCode?(Object(c["Message"])({message:t.message,type:"error",duration:3e3}),Promise.reject(t.message)):(console.log("===>res",t),t)}),(function(e){return console.log(e),u["a"].hide(e.config),e.response&&401===e.response.status?(l["a"].cookies.remove(),-1===e.config.url.indexOf("logout")&&Object(c["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){l["a"].cookies.remove("token"),l["a"].cookies.remove("uuid"),s["a"].push({name:"login"})}),1e3)):e.response&&500===e.response.status?h(new Error("服务器错误!: ".concat(e.config.url,", code = ").concat(e.response.status))):e.message&&e.message.indexOf("timeout")>-1?h(new Error("网络超时!: ".concat(e.config.url))):"403"===e.type?h(new Error("没有请求权限!: ".concat(e.config.url))):h(new Error("网络错误!: ".concat(e.config.url))),Promise.reject(e)}));var v=g;function b(e){return p({url:"/nacos/v1/ns/instance/list",method:"get",params:e})}function O(e){return p({url:"/nacos/v1/ns/service/list",method:"get",params:e})}function _(e){return p({url:"/nacos/v1/ns/instance",method:"delete",params:e})}function y(e){return p({url:"/nacos/v1/ns/instance",method:"post",data:e})}function j(e){return p({url:"/nacos/v1/ns/instance",method:"put",data:e})}function k(e){return v({url:"/api/upf/nfom/v1.0/config/get",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function x(e){return v({url:"/api/upf/nfom/v1.0/config/set",method:"post",data:e})}function w(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/load/hardwareload",method:"post",data:e})}function C(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/load/sessionsload",method:"post",data:e})}function V(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/baseinfo",method:"post",data:e})}function I(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/dpinfo",method:"post",data:e})}function T(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/n9info",method:"post",data:e})}function $(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/n6info",method:"post",data:e})}function S(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/n3info",method:"post",data:e})}function q(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/alarm/get",method:"post",data:e})}function A(e){return Object(a["a"])({url:"/api/upf/nfom/v1.0/alarm/set",method:"post",data:e})}function B(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/del",method:"post",data:e})}function E(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/get",method:"post",data:e})}function N(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/del",method:"post",data:e})}function P(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/get",method:"post",data:e})}function z(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/del",method:"post",data:e})}function M(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/get",method:"post",data:e})}function U(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/del",method:"post",data:e})}function F(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/get",method:"post",data:e})}function L(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/config/get",method:"post",data:e})}function D(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/config/set",method:"post",data:e})}function J(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/pfcp/get",method:"post",data:e})}function R(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/qos/get",method:"post",data:e})}function G(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/n3/get",method:"post",data:e})}function H(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/n6/get",method:"post",data:e})}function W(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/n9/get",method:"post",data:e})}function K(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/uldlthp/get",method:"post",data:e})}function Q(e){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/phyload/get",method:"post",data:e})}}}]);
//# sourceMappingURL=chunk-78f532ad.61a4fe68.js.map