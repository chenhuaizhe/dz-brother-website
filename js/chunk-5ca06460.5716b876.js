(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ca06460"],{"985a":function(t,e,n){},ae08:function(t,e,n){"use strict";n("985a")},d0a9:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",[n("template",{slot:"header"},[n("el-select",{attrs:{placeholder:"请选择您的设备"},on:{change:t.getUpfManage},model:{value:t.instanceValue,callback:function(e){t.instanceValue=e},expression:"instanceValue"}},t._l(t.options,(function(t){return n("el-option",{key:t.instanceId,attrs:{label:t.instanceId,value:t.instanceId}})})),1)],1),n("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:t.tabLoading,expression:"tabLoading"}],attrs:{type:"border-card","element-loading-text":"正在向服务器请求数据","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"tab-click":t.clickTab},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("el-tab-pane",{attrs:{label:"CPE管理",name:"cpe configuration"}},[""==this.instanceValue?n("el-alert",{attrs:{title:"请先选择实例",type:"warning"}}):t._e(),n("el-form",{ref:"form",attrs:{model:t.cpe,"label-width":"220px"}},[t._l(t.cpe,(function(e,a){return[n("el-form-item",{key:a,attrs:{label:a}},["string"===t.cpeType[a].type||"int"===t.cpeType[a].type?n("el-input",{staticClass:"input-data",model:{value:t.cpe[a],callback:function(e){t.$set(t.cpe,a,e)},expression:"cpe[key]"}}):t._e()],1)]})),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmitCpeDpe}},[t._v("添加/修改")])],1)],2)],1),n("el-tab-pane",{attrs:{label:"DPE管理",name:"dpe configuration"}},[""==this.instanceValue?n("el-alert",{attrs:{title:"请先选择实例",type:"warning"}}):t._e(),n("el-form",{ref:"form1",attrs:{model:t.dpe,"label-width":"220px"}},[t._l(t.dpe,(function(e,a){return[n("el-form-item",{key:a,attrs:{label:a}},["string"===t.dpeType[a].type||"int"===t.dpeType[a].type?n("el-input",{staticClass:"input-data",model:{value:t.dpe[a],callback:function(e){t.$set(t.dpe,a,e)},expression:"dpe[key]"}}):t._e(),"bool"===t.dpeType[a].type?n("el-switch",{model:{value:t.dpe[a],callback:function(e){t.$set(t.dpe,a,e)},expression:"dpe[key]"}}):t._e()],1)]})),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmitCpeDpe}},[t._v("添加/修改")])],1)],2)],1),n("el-tab-pane",{attrs:{label:"CPE N4 Listen Address配置",name:"cpe n4 listen address"}},[n("el-form",{ref:"form_dpe_n4",attrs:{model:t.cpeN4,"label-width":"220px"}},[t._l(t.cpeN4,(function(e,a){return[n("el-form-item",{key:a,attrs:{label:a}},["string"===t.cpeN4Type[a].type?n("el-input",{staticClass:"input-data",model:{value:t.cpeN4[a],callback:function(e){t.$set(t.cpeN4,a,e)},expression:"cpeN4[key]"}}):t._e()],1)]})),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmitCpeDpe}},[t._v("添加/修改")])],1)],2)],1),n("el-tab-pane",{attrs:{label:"路由表项配置",name:"route table"}},[n("routeConfig",{attrs:{data:t.routeData,label:"路由表项配置",type:"route table",formData:t.route_table,instanceValue:t.instanceValue}})],1),n("el-tab-pane",{attrs:{label:"网络接口配置",name:"net interface"}},[n("routeConfig",{attrs:{label:"网络接口配置",data:t.netInterfaceData,type:"net interface",formData:t.net_interface,instanceValue:t.instanceValue,routeConfigData:t.routeData}})],1),n("el-tab-pane",{attrs:{label:"数据接口配置",name:"nwi"}},[n("routeConfig",{attrs:{label:"数据接口配置",data:t.nwiData,type:"nwi",formData:t.nwi,instanceValue:t.instanceValue,routeConfigData:t.routeData}})],1),n("el-tab-pane",{attrs:{label:"网络实例配置",name:"network instance"}},[n("routeConfig",{attrs:{data:t.networkInstanceData,type:"network instance",instanceValue:t.instanceValue,formData:t.network_instance}})],1),n("el-tab-pane",{attrs:{label:"默认网络实例配置",name:"default network instance"}},[n("routeConfig",{attrs:{data:t.dNetworkInstanceData,type:"default network instance",formData:t.default_network_instance,instanceValue:t.instanceValue}})],1),n("el-tab-pane",{attrs:{label:"PFCP端点配置",name:"pfcp endpoint"}},[n("routeConfig",{attrs:{data:t.pfcpendpointData,type:"pfcp endpoint",instanceValue:t.instanceValue,formData:t.pfcp_endpoint,routeConfigData:t.routeData}})],1),n("el-tab-pane",{attrs:{label:"GTPU端点配置",name:"gtpu endpoint"}},[n("routeConfig",{attrs:{instanceValue:t.instanceValue,data:t.gtpuEndpointData,type:"gtpu endpoint",formData:t.gtpu_endpoint}})],1),n("el-tab-pane",{attrs:{label:"应用规则配置",name:"applications"}},[n("routeConfig",{attrs:{instanceValue:t.instanceValue,data:t.applicationsData,type:"applications",formData:t.applications}})],1),n("el-tab-pane",{attrs:{label:"IP地址池配置",name:"ip pool"}},[n("routeConfig",{attrs:{instanceValue:t.instanceValue,data:t.ipPoolData,type:"ip pool",formData:t.ipPool_data}})],1),n("el-tab-pane",{attrs:{label:"流超时配置",name:"flow timeout"}},[n("el-form",{ref:"form_flow_timeout",attrs:{model:t.flowTimeout,"label-width":"220px"}},[t._l(t.flowTimeout,(function(e,a){return[n("el-form-item",{key:a,attrs:{label:a}},["int"===t.flowTimeoutType[a].type?n("el-input",{staticClass:"input-data",model:{value:t.flowTimeout[a],callback:function(e){t.$set(t.flowTimeout,a,e)},expression:"flowTimeout[key]"}}):t._e()],1)]})),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmitFlowTimeout}},[t._v("添加/修改")])],1)],2)],1)],1)],2)},r=[],i=(n("c5f6"),n("fcd0")),o={methods:{getServiceInstance:function(t){return new Promise((function(e,n){var a={serviceName:t};Object(i["k"])(a).then((function(t){console.log("获取的实例列表",t),e(t)})).catch((function(t){n(t),console.log("e",t)}))}))}}},s=n("5c96"),c=n("2b0e"),u=new c["default"],p={max_session:{type:"int",txt:"CPE 最大会话数"},max_incoming_req:{type:"int",txt:"CPE 最大并发输入请求数"},max_outcoming_req:{type:"int",txt:"CPE 最大并发输出请求数"},heartbeat_interval:{type:"int",txt:"CPE 心跳 间隔，单位秒"},inactivity_timer:{type:"int",txt:"CPE 节点掉线检查时间"},n1_request:{type:"int",txt:"PFCP 消息重发次"},t1_response_timeout:{type:"int",txt:"PFCP 消息超时时间"}},l={pfcp_local_ipv4_address:{type:"string",txt:"CP N4 口ipv4地址"},pfcp_local_ipv6_address:{type:"string",txt:"CP N4 口ipv6地址"}},f={dpe_number:{type:"int",txt:"DPE 个数"},dpe_max_session:{type:"int",txt:"DPE 最大会话数"},dpe_flow_factor:{type:"int",txt:"DPE 流因子"},dp_accelerate:{type:"bool",txt:"DP 加速是否使能"},dpe_flow_count_per_session:{type:"int",txt:"DPE 每个会话的流最大数"},dpe_flow_idle_time_per_session:{type:"int",txt:"DPE 流失效时间"},n3_interface_ipv4_address:{type:"string",txt:"DP N3 口 ipv4 地址"},n6_interface_ipv4_address:{type:"string",txt:"DP N6 口 ipv4 地址"},n9_interface_ipv4_address:{type:"string",txt:"DP N9 口 ipv4 地址"},n3_interface_ipv6_address:{type:"string",txt:"DP N3 口 ipv6 地址"},n6_interface_ipv6_address:{type:"string",txt:"DP N6 口 ipv6 地址"},n9_interface_ipv6_address:{type:"string",txt:"DP N9 口 ipv6 地址"}},d={ip_v4:{type:"int",txt:"IPV4超时值"},ip_v6:{type:"int",txt:"IPV6超时值"},icmp:{type:"int",txt:"ICMP超时值"},udp:{type:"int",txt:"UDP超时值"},tcp:{type:"int",txt:"TCP超时值"}},m={id:{type:"int",txt:"路由表 ID",value:""}},g={name:{type:"string",txt:"接口名称",value:""},mac:{type:"string",txt:"接口 mac 地址",value:""},table_id_v4:{type:"int",txt:"ipv4 路由表 ID",value:""},table_id_v6:{type:"int",txt:"ipv6 路由表 ID",value:""},ip_prefix:{type:"array",txt:"接口 IP 地址",value:""}},b={name:{type:"string",txt:"网络实例名称",value:""},table_id:{type:"string",txt:"路由表 ID(V4/V6)",value:""}},h={name:{type:"string",txt:"网络实例名称",value:""},n3:{type:"string",txt:"N3 数据接口名称",value:""},n4:{type:"string",txt:"N4 数据接口名称",value:""},n6:{type:"string",txt:"N6 数据接口名称",value:""},n9:{type:"string",txt:"N9 数据接口名称",value:""},n19:{type:"string",txt:"N9 数据接口名称",value:""}},v={name:{type:"string",txt:"默认实名称",value:""},n3:{type:"string",txt:"N3 数据接口名称",value:""},n4:{type:"string",txt:"N4 数据接口名称",value:""},n6:{type:"string",txt:"N6 数据接口名称",value:""},n9:{type:"string",txt:"N9 数据接口名称",value:""},n19:{type:"string",txt:"N19 数据接口名称",value:""}},y={name:{type:"string",txt:"PFCP 端点的名称，主键",value:""},ip:{type:"string",txt:"端点的IP地址",value:""},table_id:{type:"int",txt:"路由表ID",value:""}},_={name:{type:"string",txt:" GTP 端点名称，主键",value:""},ip_v4:{type:"string",txt:"GTP端点IPV4地址",value:""},ip_v6:{type:"string",txt:"GTP端点IPV6地址",value:""},nwi_name:{type:"string",txt:"网络实例名称",value:""},src_intf:{type:"string",txt:"源接口类型",value:""},teid:{type:"string",txt:"TEID分配范围",value:""}},x={name:{type:"string",txt:"应用名称",value:""},rules:{type:"Array",txt:"应用规则",value:"",sub:{id:{type:"int",txt:"规则ID",value:""},rule_type:{type:"string",txt:"规则类型",value:""},rule:{type:"string",txt:"规则内容",value:""}}}},w={name:{type:"string",txt:"地址池名称",value:""},nwii_name:{type:"string",txt:"网络实例名称",value:""},addrs_v4:{type:"string",txt:"IP4地址池段",value:""},ipv4_prefix:{type:"int",txt:"IP4地址池前缀",value:""},addrs_v6:{type:"string",txt:"IP6地址池段",value:""},ipv6_prefix:{type:"int",txt:"IP6地址池前缀",value:""}},D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.addData}},[t._v("添加数据")])],1),t.data.length>0?n("el-table",{attrs:{stripe:"",border:"",data:t.data}},[t._l(t.columnData,(function(t){return n("el-table-column",{key:t,attrs:{prop:t,label:t}})})),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.delData(e.row)}}},[t._v("删除")])]}}],null,!1,948045374)})],2):t._e(),n("el-dialog",{attrs:{title:t.label,visible:t.isShowDiaLog},on:{"update:visible":function(e){t.isShowDiaLog=e}}},[n("el-form",{attrs:{modal:t.formItem}},t._l(t.formItem,(function(e,a){return n("el-form-item",{key:a,attrs:{label:a}},[t.isTableId(a)?[n("el-select",{attrs:{value:t.formItem[a],placeholder:"请选择路由id"},on:{change:function(e){return t.onInput(e,a)}}},t._l(t.routeConfigData,(function(t){return n("el-option",{key:t.id,attrs:{label:t.id,value:t.id}})})),1)]:[n("el-input",{attrs:{value:t.formItem[a]},on:{input:function(e){return t.onInput(e,a)}}})]],2)})),1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.handleCancel}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.handleConfirm}},[t._v("确 定")])],1)],1)],1)},k=[],O=(n("8e6e"),n("bd86"));n("ac6a"),n("456d");function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){Object(O["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I={data:function(){return{columnData:{},isShowDiaLog:!1,formItem:{},initFormItem:{}}},watch:{data:{handler:function(t){Array.isArray(t)&&t.length&&t[0]instanceof Object&&!Object.keys(this.columnData).length&&(this.columnData=Object.keys(t[0]))},immediate:!0},routeConfigData:{handler:function(t){console.log("此时的routeConfigData",t)}},formData:{handler:function(t){var e=this,n=Object.keys(t);t&&n.length&&(n.map((function(t){e.formItem[t]=""})),this.initFormItem=P({},this.formItem))},immediate:!0}},props:{type:{default:"",type:String},formData:{type:Object,default:function(){return{}}},instanceValue:{default:"",type:String},sequenceNo:{type:Number,default:1e3},label:{default:"",type:String},data:{type:Array,default:function(){return[]}},routeConfigData:{type:Array,default:function(){return[]}}},created:function(){},methods:{isObject:function(t){return t instanceof Object},isTableId:function(t){var e=["net interface","nwi","pfcp endpoint"],n=["table_id_v4","table_id_v6","table_id"];return e.indexOf(this.type)>-1&&n.indexOf(t)>-1},delData:function(t){var e=this,n={request_type:this.type+" del",instance_id:this.instanceValue,sequence_no:1e3,data:[t]};Object(i["E"])(n).then((function(t){!0===t.status?(e.$message.success("删除成功"),u.$emit("fetchGetConfig",e.type)):e.$message.error(t.error||"网络错误，请稍后再试")}))},addData:function(){""!=this.instanceValue?this.isShowDiaLog=!0:this.$message.warning("请先选择实例")},handleConfirm:function(){var t=this;for(var e in this.formItem){if(console.log("key",e),""==this.formItem[e])return void this.$message.error("请填写完数据再提交");if("int"==this.formData[e].type){var n=Number(this.formItem[e]);if(isNaN(n))return void this.$message.error("".concat(e,"请填写int类型提交"));this.formItem[e]=n}}var a={request_type:this.type+" add",instance_id:this.instanceValue,sequence_no:this.sequenceNo,data:[this.formItem]};Object(i["E"])(a).then((function(e){!0===e.status?(t.$message.success("添加成功"),t.formItem=P({},t.initFormItem),t.isShowDiaLog=!1,u.$emit("fetchGetConfig",t.type)):t.$message.error(e.error||"网络错误，请稍后再试")}))},handleCancel:function(){this.formItem=P({},this.initFormItem),this.isShowDiaLog=!1},onInput:function(t,e){this.formItem[e]=t,this.formItem=Object.assign({},this.formItem)}}},N=I,C=n("2877"),T=Object(C["a"])(N,D,k,!1,null,null,null),V=T.exports,E={mixins:[o],name:"upf",components:{routeConfig:V},data:function(){return{options:[],instanceValue:"",tab:"cpe configuration",tabLoading:!1,cpeType:p,cpeN4Type:l,dpeType:f,flowTimeoutType:d,cpe:{max_session:"",max_incoming_req:"",max_outcoming_req:"",heartbeat_interval:"",inactivity_timer:"",n1_request:"",t1_response_timeout:""},cpeN4:{pfcp_local_ipv4_address:"",pfcp_local_ipv6_address:""},dpe:{dpe_number:"",dpe_max_session:"",dpe_flow_factor:"",dp_accelerate:!1,dpe_flow_count_per_session:"",dpe_flow_idle_time_per_session:"",n3_interface_ipv4_address:"",n6_interface_ipv4_address:"",n9_interface_ipv4_address:"",n3_interface_ipv6_address:"",n6_interface_ipv6_address:"",n9_interface_ipv6_address:""},flowTimeout:{},routeData:[],netInterfaceData:[],nwiData:[],networkInstanceData:[],dNetworkInstanceData:[],pfcpendpointData:[],gtpuEndpointData:[],applicationsData:[],ipPoolData:[],route_table:m,net_interface:g,nwi:b,network_instance:h,default_network_instance:v,pfcp_endpoint:y,gtpu_endpoint:_,applications:x,ipPool_data:w}},created:function(){this.getUpfServiceInstance();var t=this;u.$on("fetchGetConfig",(function(e){console.log("eventbusgettype",e),t.getUpfManage()}))},methods:{getUpfServiceInstance:function(){var t=this;this.getServiceInstance("upf").then((function(e){t.options=e.hosts,t.options.length>0&&(t.instanceValue=t.options[0].instanceId,t.getUpfManage(),t.getUpfManage("route table"))})).catch((function(e){t.$alert(e,"网络请求发生错误",{confirmButtonText:"确定",callback:function(t){}})}))},getUpfManage:function(t){var e=this;if(""!=this.instanceValue){this.tabLoading=!0,console.log("当前选中的tab,",this.tab),console.log("routerConfi",this.routeData);var n={request_type:(t||this.tab)+" get",instance_id:this.instanceValue,sequence_no:1e3};Object(i["i"])(n).then((function(n){console.log("此时请求列表res",n),e.tabLoading=!1,!0===n.status?(e.dealConfig(n.data),t&&e.dealConfig(n.data,t)):e.$message.error(n.error||"网络错误，请稍后再试"+n)})).catch((function(t){e.tabLoading=!1,console.log("error:",t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(t){}})}))}else this.$message.warning("请先选择实例")},dealConfig:function(t,e){var n=e||this.tab;switch(n){case"cpe configuration":this.cpe=t[0];break;case"dpe configuration":this.dpe=t[0];break;case"route table":this.routeData=t,console.log("===>type",e);break;case"net interface":this.netInterfaceData=t;break;case"nwi":this.nwiData=t;break;case"network instance":this.networkInstanceData=t;break;case"default network instance":this.dNetworkInstanceData=t;break;case"pfcp endpoint":this.pfcpendpointData=t;break;case"gtpu endpoint":this.gtpuEndpointData=t;break;case"applications":this.applicationsData=t;break;case"ip pool":this.ipPoolData=t;break;case"flow timeout":this.flowTimeout=t,console.log(t);break;case"cpe n4 listen address":this.cpeN4=t[0],console.log(t);break}},clickTab:function(t){console.log("tab--",t),console.log("切换的tab",this.tab),this.getUpfManage()},onSubmitCpeDpe:function(){var t=this;console.log("cpe",this.tab);var e="";if("cpe configuration"===this.tab){for(var n in this.cpe){if(""===this.cpe[n])return void Object(s["Message"])({message:"请填入"+this.cpe[n],type:"error"});if("NaN"===Number(this.cpe[n]))return void Object(s["Message"])({message:this.cpe[n]+"请输入数字类型",type:"error"});this.cpe[n]=Number(this.cpe[n])}e=this.cpe}else if("cpe n4 listen address"===this.tab){for(var a in this.cpeN4)if(""===this.cpeN4[a])return void Object(s["Message"])({message:"请填入"+this.cpeN4[a],type:"error"});e=this.cpeN4}else{for(var r in this.dpe){if(("int"===this.dpeType[r].type||"string"===this.dpeType[r].type)&&""===this.dpe[r])return void Object(s["Message"])({message:"请填入"+this.dpe[r],type:"error"});if("int"===this.dpeType[r].type&&"NaN"===Number(this.dpe[r]))return void Object(s["Message"])({message:this.dpe[r]+"请输入数字类型",type:"error"});"int"===this.dpeType[r].type&&"NaN"!==Number(this.dpe[r])&&(this.dpe[r]=Number(this.dpe[r]))}e=this.dpe}var o={request_type:this.tab+" set",instance_id:this.instanceValue,sequence_no:1e3,data:[e]};Object(i["E"])(o).then((function(e){!0===e.status?(t.$message.success("设置成功"),console.log("获取的dpe和cpe",t[t.tab])):t.$message.error(e.error||"网络错误，请稍后再试")}))},onSubmitFlowTimeout:function(){var t=this;for(var e in this.flowTimeout){if(""===this.cpe[e])return void Object(s["Message"])({message:"请填入"+this.cpe[e],type:"error"});if("NaN"===Number(this.cpe[e]))return void Object(s["Message"])({message:this.cpe[e]+"请输入数字类型",type:"error"});this.cpe[e]=Number(this.cpe[e])}var n={request_type:this.tab+" set",instance_id:this.instanceValue,sequence_no:1e3,data:this.flowTimeout};Object(i["E"])(n).then((function(e){!0===e.status?t.$message.success("设置成功"):t.$message.error(e.error||"网络错误，请稍后再试")}))}}},$=E,S=(n("ae08"),Object(C["a"])($,a,r,!1,null,"369bafa4",null));e["default"]=S.exports},fcd0:function(t,e,n){"use strict";n.d(e,"k",(function(){return v})),n.d(e,"u",(function(){return y})),n.d(e,"f",(function(){return _})),n.d(e,"a",(function(){return x})),n.d(e,"G",(function(){return w})),n.d(e,"i",(function(){return D})),n.d(e,"E",(function(){return k})),n.d(e,"x",(function(){return O})),n.d(e,"w",(function(){return j})),n.d(e,"C",(function(){return P})),n.d(e,"y",(function(){return I})),n.d(e,"B",(function(){return N})),n.d(e,"A",(function(){return C})),n.d(e,"z",(function(){return T})),n.d(e,"g",(function(){return V})),n.d(e,"D",(function(){return E})),n.d(e,"b",(function(){return $})),n.d(e,"h",(function(){return S})),n.d(e,"e",(function(){return q})),n.d(e,"m",(function(){return M})),n.d(e,"c",(function(){return L})),n.d(e,"j",(function(){return U})),n.d(e,"d",(function(){return F})),n.d(e,"l",(function(){return A})),n.d(e,"n",(function(){return G})),n.d(e,"F",(function(){return B})),n.d(e,"r",(function(){return z})),n.d(e,"t",(function(){return J})),n.d(e,"o",(function(){return R})),n.d(e,"p",(function(){return H})),n.d(e,"q",(function(){return K})),n.d(e,"v",(function(){return Q})),n.d(e,"s",(function(){return W}));var a=n("9bd2"),r=n("4360"),i=n("bc3a"),o=n.n(i),s=n("a18c"),c=n("5c96"),u=n("c276"),p=n("d8af"),l=n("e302");function f(t){r["a"].dispatch("d2admin/log/add",{type:"error",err:t,info:"数据请求异常"}),Object(c["Message"])({message:t.message,type:"error",duration:5e3})}var d=o.a.create({baseURL:"http://holer.cc:50633",timeout:2e4});d.interceptors.request.use((function(t){if(!l["a"].access(t,r["a"]))throw{type:"403",config:t};return p["a"].show(t),t}),(function(t){console.log(t),Promise.reject(t)})),d.interceptors.response.use((function(t){p["a"].hide(t.config);var e=t.data;return e}),(function(t){return console.log("rrr",t),p["a"].hide(t.config),t.response&&401===t.response.status?(u["a"].cookies.remove(),-1===t.config.url.indexOf("logout")&&Object(c["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){u["a"].cookies.remove("token"),u["a"].cookies.remove("uuid"),s["a"].push({name:"login"})}),1e3)):t.response&&500===t.response.status?f(new Error("服务器错误!: ".concat(t.config.url,", code = ").concat(t.response.status))):t.message&&t.message.indexOf("timeout")>-1?f(new Error("网络超时!: ".concat(t.config.url))):"403"===t.type?f(new Error("没有请求权限!: ".concat(t.config.url))):f(new Error("网络错误!: ".concat(t.config.url))),Promise.reject(t)}));var m=d;function g(t){r["a"].dispatch("d2admin/log/add",{type:"error",err:t,info:"数据请求异常"}),Object(c["Message"])({message:t.message,type:"error",duration:5e3})}var b=o.a.create({baseURL:"http://holer.cc:50631",timeout:2e4});b.interceptors.request.use((function(t){if(!l["a"].access(t,r["a"]))throw{type:"403",config:t};if(p["a"].show(t),!/^https:\/\/|http:\/\//.test(t.url)){var e=u["a"].cookies.get("token");e&&"undefined"!==e&&(t.headers["Authorization"]="Bearer "+e)}return t}),(function(t){console.log(t),Promise.reject(t)})),b.interceptors.response.use((function(t){p["a"].hide(t.config);var e=t.data;return e.statusCode&&200!==e.statusCode?(Object(c["Message"])({message:e.message,type:"error",duration:3e3}),Promise.reject(e.message)):(console.log("===>res",e),e)}),(function(t){return console.log(t),p["a"].hide(t.config),t.response&&401===t.response.status?(u["a"].cookies.remove(),-1===t.config.url.indexOf("logout")&&Object(c["Message"])({message:"登陆信息已过期,请重新登陆!",type:"error",duration:3e3}),setTimeout((function(){u["a"].cookies.remove("token"),u["a"].cookies.remove("uuid"),s["a"].push({name:"login"})}),1e3)):t.response&&500===t.response.status?g(new Error("服务器错误!: ".concat(t.config.url,", code = ").concat(t.response.status))):t.message&&t.message.indexOf("timeout")>-1?g(new Error("网络超时!: ".concat(t.config.url))):"403"===t.type?g(new Error("没有请求权限!: ".concat(t.config.url))):g(new Error("网络错误!: ".concat(t.config.url))),Promise.reject(t)}));var h=b;function v(t){return m({url:"/nacos/v1/ns/instance/list",method:"get",params:t})}function y(t){return m({url:"/nacos/v1/ns/service/list",method:"get",params:t})}function _(t){return m({url:"/nacos/v1/ns/instance",method:"delete",params:t})}function x(t){return m({url:"/nacos/v1/ns/instance",method:"post",data:t})}function w(t){return m({url:"/nacos/v1/ns/instance",method:"put",data:t})}function D(t){return h({url:"/api/upf/nfom/v1.0/config/get",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function k(t){return h({url:"/api/upf/nfom/v1.0/config/set",method:"post",data:t})}function O(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/load/hardwareload",method:"post",data:t})}function j(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/load/sessionsload",method:"post",data:t})}function P(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/baseinfo",method:"post",data:t})}function I(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/dpinfo",method:"post",data:t})}function N(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/n9info",method:"post",data:t})}function C(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/n6info",method:"post",data:t})}function T(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/info/n3info",method:"post",data:t})}function V(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/alarm/get",method:"post",data:t})}function E(t){return Object(a["a"])({url:"/api/upf/nfom/v1.0/alarm/set",method:"post",data:t})}function $(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/del",method:"post",data:t})}function S(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/overload/get",method:"post",data:t})}function q(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/del",method:"post",data:t})}function M(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/linkbroken/get",method:"post",data:t})}function L(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/del",method:"post",data:t})}function U(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/configmiss/get",method:"post",data:t})}function F(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/del",method:"post",data:t})}function A(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/alarm/licenseproblem/get",method:"post",data:t})}function G(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/config/get",method:"post",data:t})}function B(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/config/set",method:"post",data:t})}function z(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/pfcp/get",method:"post",data:t})}function J(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/qos/get",method:"post",data:t})}function R(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/n3/get",method:"post",data:t})}function H(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/n6/get",method:"post",data:t})}function K(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/n9/get",method:"post",data:t})}function Q(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/uldlthp/get",method:"post",data:t})}function W(t){return Object(a["a"])({url:"/api/upf/starsine/v1.0/perform/phyload/get",method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-5ca06460.5716b876.js.map