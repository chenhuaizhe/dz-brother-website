(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-072ba724"],{"68a4":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("d2-container",[n("template",{slot:"header"},[n("instence-select",{attrs:{isupf:!1},on:{changeInstence:e.changeInstance}})],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,size:"small",stripe:"","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"index",index:e.indexMethod,width:"50",label:"序号"}}),n("el-table-column",{attrs:{align:"center",prop:"crt_time",label:"时间"}}),n("el-table-column",{attrs:{align:"center",label:"错误类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.license_alarm_type?n("p",[e._v("UPF 无 License")]):2===t.row.license_alarm_type?n("p",[e._v("UPF License 过期")]):3===t.row.license_alarm_type?n("p",[e._v("\n          当前会话数超过 License 限制\n        ")]):4===t.row.license_alarm_type?n("p",[e._v("\n          当前N4偶联数超过 License 限制\n        ")]):n("p",[e._v("当前UPF吞吐量超过 License 限制")])]}}])}),n("el-table-column",{attrs:{align:"center",prop:"license_alarm_detail",label:"告警内容"}})],1),n("br"),n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.totalRows,"current-page":e.currentPage},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"current-change":e.handleCurrentChange}})],2)},s=[],a=n("fcd0"),c=n("e511"),r={components:{instenceSelect:c["a"]},name:"licenseproblem",data:function(){return{totalRows:0,currentPage:1,serviceName:"",serviceOptions:[],instanceOptions:[],instanceValue:"",timer:null,isFirst:!0,timerInterval:1e4,loading:!1,tableData:[],licenseErrorTypeList:[{name:"UPF 无License",value:1},{name:"UPF License 过期",value:2},{name:"当前会话数超过 License 限制",value:3},{name:"当前 N4 偶联数超过 License 限制",value:4},{name:"当前 UPF 吞吐量超过 License 限制",value:5}]}},mounted:function(){},methods:{changeInstance:function(e){this.tableData=[],this.instanceValue=e,this.getBreakLink()},setTimer:function(){var e=this;null==this.timer&&(this.timer=setInterval((function(){console.log("开始定时...每过一-执行一次"),e.getBreakLink()}),this.timerInterval))},handleCurrentChange:function(){this.getBreakLink()},indexMethod:function(e){return 10*(this.currentPage-1)+e},getBreakLink:function(){var e=this;this.loading=!0,Object(a["l"])({request_type:"license alarm",instance_id:this.instanceValue,sequence_no:33461},this.currentPage).then((function(t){e.loading=!1,console.log(t),null!=t&&(e.tableData=t.rows,e.totalRows=t.total)})).catch((function(t){e.loading=!1,console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},deleteClick:function(e){var t=this;this.$confirm("是否清除数据？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确认",cancelButtonText:"取消"}).then((function(){t.loading=!0,Object(a["d"])({request_type:"license alarm",instance_id:t.instanceValue,sequence_no:33462,data:{broken_type:e.config_miss_type}}).then((function(e){t.loading=!1,t.$message({type:"success",message:"操作成功"})})).catch((function(e){t.loading=!1,console.log(e),t.$alert(e,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))})).catch((function(e){t.$message({type:"info",message:"已取消"})}))}},destroyed:function(){clearInterval(this.timer),this.timer=null}},l=r,o=n("2877"),u=Object(o["a"])(l,i,s,!1,null,null,null);t["default"]=u.exports},e511:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isupf?e._e():n("el-select",{attrs:{placeholder:"请选择服务",size:"small",filterable:"",clearable:""},on:{change:e.changeService},model:{value:e.serviceName,callback:function(t){e.serviceName=t},expression:"serviceName"}},e._l(e.serviceOptions,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1),n("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择您的实例",size:"small",filterable:"",clearable:""},on:{change:e.changeInstance},model:{value:e.instanceValue,callback:function(t){e.instanceValue=t},expression:"instanceValue"}},e._l(e.instanceOptions,(function(e,t){return n("el-option",{key:t,attrs:{label:e.instanceId.split("#")[0],value:e.instanceId}})})),1)],1)},s=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),c=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o={name:"instenceSelect",props:{isupf:{type:Boolean,default:!0}},data:function(){return{serviceName:"",serviceOptions:[],instanceOptions:[],instanceValue:""}},computed:l({},Object(c["e"])("d2admin",{serviceList:function(e){return e.instence.serviceList},instenceList:function(e){return e.instence.instenceList}})),watch:{serviceList:function(){this.serviceOptions=this.$store.state.d2admin.instence.serviceList,this.serviceName=this.serviceOptions[0]},instenceList:function(){this.instanceOptions=this.$store.state.d2admin.instence.instenceList,this.instanceValue=this.instanceOptions[0].instanceId,this.$emit("changeInstence",this.instanceValue)}},mounted:function(){this.isupf?(this.serviceName="upf",this.$store.commit("d2admin/instence/setServiceName","upf"),this.$store.dispatch("d2admin/instence/commitInstenceList")):this.$store.state.d2admin.instence.serviceList.length<1?this.$store.dispatch("d2admin/instence/commitServiceList"):(this.serviceOptions=this.$store.state.d2admin.instence.serviceList,this.$store.state.d2admin.instence.serviceName&&(this.serviceName=this.$store.state.d2admin.instence.serviceName),this.$store.state.d2admin.instence.instenceList&&(this.instanceOptions=this.$store.state.d2admin.instence.instenceList),this.$store.state.d2admin.instence.instenceName&&(this.instanceValue=this.$store.state.d2admin.instence.instenceName.instanceId,this.$emit("changeInstence",this.instanceValue)))},methods:{changeService:function(e){e&&this.$store.dispatch("d2admin/instence/commitInstenceList",e)},changeInstance:function(e){this.$emit("changeInstence",e),this.$store.commit("d2admin/instence/setServiceName",e)}}},u=o,d=n("2877"),m=Object(d["a"])(u,i,s,!1,null,null,null);t["a"]=m.exports}}]);
//# sourceMappingURL=chunk-072ba724.6afd85ce.js.map