(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af6a76fa"],{1016:function(e,t,n){"use strict";n("450b")},"450b":function(e,t,n){},"585d":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("template",{slot:"header"},[n("instence-select",{attrs:{isupf:!0},on:{changeInstence:e.changeInstance}})],1),n("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{type:"border-card","element-loading-text":"正在向服务器请求数据","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[""==this.instanceValue?n("el-alert",{attrs:{title:"请先选择实例",type:"warning"}}):e._e(),n("el-tab-pane",{attrs:{label:"负载"}},[n("div",{staticStyle:{width:"33%",height:"300px",display:"inline-block"},attrs:{id:"myCpuChart"}}),n("div",{staticStyle:{width:"33%",height:"300px",display:"inline-block"},attrs:{id:"myMemChart"}}),n("div",{staticStyle:{width:"33%",height:"300px",display:"inline-block"},attrs:{id:"myHdChart"}})]),n("el-tab-pane",{attrs:{label:"业务量"}},[n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableList,size:"small",stripe:"","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),n("el-table-column",{attrs:{align:"center",prop:"session_num",label:"会话数量"}}),n("el-table-column",{attrs:{align:"center",prop:"flow_num",label:"当前激活的业务流数"}})],1)],1),n("el-tab-pane",{attrs:{label:"UPF 网元基本信息"}},[n("el-form",{attrs:{model:e.baseinfoForm}},[n("el-form-item",{attrs:{label:"标识符:",prop:"Id"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.Id))])],1),n("el-form-item",{attrs:{label:"用户友好名:",prop:"UserLabel"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.UserLabel))])],1),n("el-form-item",{attrs:{label:"管理状态:",prop:"AdministrativeState"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.AdministrativeState))])],1),n("el-form-item",{attrs:{label:"硬件平台:",prop:"HardwarePlatform"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.HardwarePlatform))])],1),n("el-form-item",{attrs:{label:"位置名称:",prop:"LocationName"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.LocationName))])],1),n("el-form-item",{attrs:{label:"管理节点:",prop:"ManagedBy"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.ManagedBy))])],1),n("el-form-item",{attrs:{label:"网管接口 IP 地址:",prop:"ManagementIpAddress"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.ManagementIpAddress))])],1),n("el-form-item",{attrs:{label:"运行状态:",prop:"OperationalState"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.OperationalState))])],1),n("el-form-item",{attrs:{label:"补丁信息:",prop:"PatchInfo"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.PatchInfo))])],1),n("el-form-item",{attrs:{label:"软件版本:",prop:"SwVersion"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.SwVersion))])],1),n("el-form-item",{attrs:{label:"厂商名称:",prop:"VendorName"}},[n("el-row",[e._v(" "+e._s(e.baseinfoForm.VendorName))])],1)],1)],1),n("el-tab-pane",{attrs:{label:"UPF 用户面功能信息"}},[n("el-form",{attrs:{model:e.dpinfoForm}},[n("el-form-item",{attrs:{label:"标识符:",prop:"Id"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.Id))])],1),n("el-form-item",{attrs:{label:"用户友好名:",prop:"UserLabel"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.UserLabel))])],1),n("el-form-item",{attrs:{label:"运行状态:",prop:"OperationalState"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.OperationalState))])],1),n("el-form-item",{attrs:{label:"管理状态:",prop:"AdministrativeState"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.AdministrativeState))])],1),n("el-form-item",{attrs:{label:"硬件平台:",prop:"Fqdn"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.Fqdn))])],1),n("el-form-item",{attrs:{label:"最大 QoS 流数:",prop:"MaxQosFlows"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.MaxQosFlows))])],1),n("el-form-item",{attrs:{label:"最大数据吞吐率 Gbps:",prop:"MaxThroughput"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.MaxThroughput))])],1),n("el-form-item",{attrs:{label:"N3 接口的峰值吞吐率 Gbps:",prop:"MaxThroughputN3"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.MaxThroughputN3))])],1),n("el-form-item",{attrs:{label:"N6 接口的峰值吞吐率 Gbps:",prop:"MaxThroughputN6"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.MaxThroughputN6))])],1),n("el-form-item",{attrs:{label:"N9 接口的峰值吞吐率 Gbps:",prop:"MaxThroughputN9"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.MaxThroughputN9))])],1),n("el-form-item",{attrs:{label:"虚拟化和物理网元的显式标识:",prop:"PV_Flag"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.PV_Flag))])],1),n("el-form-item",{attrs:{label:"虚拟化实例标识:",prop:"VnfInstanceId"}},[n("el-row",[e._v(" "+e._s(e.dpinfoForm.VnfInstanceId))])],1)],1)],1),n("el-tab-pane",{attrs:{label:"分局向的 N9(UPF-UPF)接口信息"}},[n("el-form",{attrs:{model:e.n9infoForm}},[n("el-form-item",{attrs:{label:"标识符:",prop:"Id"}},[n("el-row",[e._v(" "+e._s(e.n9infoForm.Id))])],1),n("el-form-item",{attrs:{label:"用户友好名:",prop:"UserLabel"}},[n("el-row",[e._v(" "+e._s(e.n9infoForm.UserLabel))])],1),n("el-form-item",{attrs:{label:"远端 IP 子网列表:",prop:"FarIpSubnetworkList"}},e._l(e.n9infoForm.FarIpSubnetworkList,(function(t){return n("el-row",{key:t},[n("label",[e._v(" Mask: "+e._s(t.Mask)+" ; ")]),n("label",[e._v(" Subnetwork: "+e._s(t.Subnetwork))])])})),1),n("el-form-item",{attrs:{label:"本端 IP 地址列表:",prop:"LocIpAddrList"}},e._l(e.n9infoForm.LocIpAddrList,(function(t,a){return n("label",{key:a},[e._v("\n            "+e._s(t)+" ;\n          ")])})),0)],1)],1),n("el-tab-pane",{attrs:{label:"分局向的 N3(UPF-RAN)接口信息"}},[n("el-form",{attrs:{model:e.n9infoForm}},[n("el-form-item",{attrs:{label:"标识符:",prop:"Id"}},[n("el-row",[e._v(" "+e._s(e.n3infoForm.Id))])],1),n("el-form-item",{attrs:{label:"用户友好名:",prop:"UserLabel"}},[n("el-row",[e._v(" "+e._s(e.n3infoForm.UserLabel))])],1),n("el-form-item",{attrs:{label:"远端 IP 子网列表:",prop:"FarIpSubnetworkList"}},e._l(e.n3infoForm.FarIpSubnetworkList,(function(t){return n("el-row",{key:t},[n("label",[e._v(" Mask: "+e._s(t.Mask)+" ; ")]),n("label",[e._v(" Subnetwork: "+e._s(t.Subnetwork))])])})),1),n("el-form-item",{attrs:{label:"本端 IP 地址列表:",prop:"LocIpAddrList"}},e._l(e.n3infoForm.LocIpAddrList,(function(t,a){return n("label",{key:a},[e._v("\n            "+e._s(t)+" ;\n          ")])})),0)],1)],1),n("el-tab-pane",{attrs:{label:"分局向的 N6（UPF-DN）接口信息"}},[n("el-form",{attrs:{model:e.n6infoForm}},[n("el-form-item",{attrs:{label:"标识符:",prop:"Id"}},[n("el-row",[e._v(" "+e._s(e.n6infoForm.Id))])],1),n("el-form-item",{attrs:{label:"用户友好名:",prop:"UserLabel"}},[n("el-row",[e._v(" "+e._s(e.n6infoForm.UserLabel))])],1),n("el-form-item",{attrs:{label:"远端 IP 子网列表:",prop:"FarIpSubnetworkList"}},e._l(e.n6infoForm.FarIpSubnetworkList,(function(t){return n("el-row",{key:t},[n("label",[e._v(" Mask: "+e._s(t.Mask)+" ; ")]),n("label",[e._v(" Subnetwork: "+e._s(t.Subnetwork))])])})),1),n("el-form-item",{attrs:{label:"本端 IP 地址列表:",prop:"LocIpAddrList"}},e._l(e.n6infoForm.LocIpAddrList,(function(t,a){return n("label",{key:a},[e._v("\n            "+e._s(t)+" ;\n          ")])})),0)],1)],1)],1)],2)},o=[],i=n("fcd0"),r=n("a8c5"),s=n("e511"),l={components:{layout:r["a"],instenceSelect:s["a"]},name:"upfCount",data:function(){return{instanceValue:"",tableList:[],loading:!1,baseinfoForm:{},dpinfoForm:{},n9infoForm:{},n6infoForm:{},n3infoForm:{}}},created:function(){},mounted:function(){},methods:{changeInstance:function(e){e&&(this.instanceValue=e,this.loading=!0,this.getUpfWareLoad(),this.getUpfSessionsload(),this.getUpfBaseInfo(),this.getDpInfo(),this.getN9Info(),this.getN6Info(),this.getN3Info())},getUpfWareLoad:function(){var e=this;Object(i["x"])({request_type:"hardware load",instance_id:this.instanceValue,sequence_no:1e3}).then((function(t){e.loading=!1,console.log("response:",t),e.drawLine(1,"CPU负载值",[{value:t.cpu_load,name:"当前"},{value:100-t.cpu_load,name:"剩余"}]),e.drawLine(2,"内存负载值",[{value:t.mem_load,name:"当前"},{value:100-t.mem_load,name:"剩余"}]),e.drawLine(3,"硬盘负载值",[{value:t.hd_load,name:"当前"},{value:100-t.hd_load,name:"剩余"}])})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))},drawLine:function(e,t,n){var a=null;a=1===e?this.$echarts.init(document.getElementById("myCpuChart")):2===e?this.$echarts.init(document.getElementById("myMemChart")):this.$echarts.init(document.getElementById("myHdChart")),a.setOption({title:{text:t,left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",bottom:"left"},series:[{name:"访问来源",type:"pie",radius:"50%",data:n,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})},getUpfSessionsload:function(){var e=this,t={request_type:"cpe configuration get",instance_id:this.instanceValue,sequence_no:1e3};Object(i["w"])(t).then((function(t){e.loading=!1,e.tableList=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))},getUpfBaseInfo:function(){var e=this,t={request_type:"base info",instance_id:this.instanceValue,sequence_no:3003};Object(i["C"])(t).then((function(t){e.loading=!1,e.baseinfoForm=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))},getDpInfo:function(){var e=this,t={request_type:"dp info",instance_id:this.instanceValue,sequence_no:3004};Object(i["y"])(t).then((function(t){e.loading=!1,e.dpinfoForm=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))},getN9Info:function(){var e=this,t={request_type:"n9 info",instance_id:this.instanceValue,sequence_no:3005};Object(i["B"])(t).then((function(t){e.loading=!1,e.n9infoForm=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))},getN6Info:function(){var e=this,t={request_type:"n6 info",instance_id:this.instanceValue,sequence_no:3006};Object(i["A"])(t).then((function(t){e.loading=!1,e.n6infoForm=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))},getN3Info:function(){var e=this,t={request_type:"n3 info",instance_id:this.instanceValue,sequence_no:3007};Object(i["z"])(t).then((function(t){e.loading=!1,e.n3infoForm=t})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}}),e.loading=!1}))}}},c=l,m=(n("1016"),n("2877")),p=Object(m["a"])(c,a,o,!1,null,"d83cf636",null);t["default"]=p.exports},e511:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isupf?e._e():n("el-select",{attrs:{placeholder:"请选择服务",size:"small",filterable:"",clearable:""},on:{change:e.changeService},model:{value:e.serviceName,callback:function(t){e.serviceName=t},expression:"serviceName"}},e._l(e.serviceOptions,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1),n("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择您的实例",size:"small",filterable:"",clearable:""},on:{change:e.changeInstance},model:{value:e.instanceValue,callback:function(t){e.instanceValue=t},expression:"instanceValue"}},e._l(e.instanceOptions,(function(e,t){return n("el-option",{key:t,attrs:{label:e.instanceId.split("#")[0],value:e.instanceId}})})),1)],1)},o=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),r=n("2f62");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={name:"instenceSelect",props:{isupf:{type:Boolean,default:!0}},data:function(){return{serviceName:"",serviceOptions:[],instanceOptions:[],instanceValue:""}},computed:l({},Object(r["e"])("d2admin",{serviceList:function(e){return e.instence.serviceList},instenceList:function(e){return e.instence.instenceList}})),watch:{serviceList:function(){this.serviceOptions=this.$store.state.d2admin.instence.serviceList,this.serviceName=this.serviceOptions[0]},instenceList:function(){this.instanceOptions=this.$store.state.d2admin.instence.instenceList,this.instanceValue=this.instanceOptions[0].instanceId,this.$emit("changeInstence",this.instanceValue)}},mounted:function(){this.isupf?(this.serviceName="upf",this.$store.commit("d2admin/instence/setServiceName","upf"),this.$store.dispatch("d2admin/instence/commitInstenceList")):this.$store.state.d2admin.instence.serviceList.length<1?this.$store.dispatch("d2admin/instence/commitServiceList"):(this.serviceOptions=this.$store.state.d2admin.instence.serviceList,this.$store.state.d2admin.instence.serviceName&&(this.serviceName=this.$store.state.d2admin.instence.serviceName),this.$store.state.d2admin.instence.instenceList&&(this.instanceOptions=this.$store.state.d2admin.instence.instenceList),this.$store.state.d2admin.instence.instenceName&&(this.instanceValue=this.$store.state.d2admin.instence.instenceName.instanceId,this.$emit("changeInstence",this.instanceValue)))},methods:{changeService:function(e){e&&this.$store.dispatch("d2admin/instence/commitInstenceList",e)},changeInstance:function(e){this.$emit("changeInstence",e),this.$store.commit("d2admin/instence/setServiceName",e)}}},m=c,p=n("2877"),f=Object(p["a"])(m,a,o,!1,null,null,null);t["a"]=f.exports}}]);
//# sourceMappingURL=chunk-af6a76fa.d729986e.js.map