(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1d5c"],{2217:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("d2-container",[i("template",{slot:"header"},[i("el-select",{attrs:{placeholder:"请选择服务",size:"small",filterable:"",clearable:""},model:{value:e.serviceName,callback:function(t){e.serviceName=t},expression:"serviceName"}},e._l(e.serviceOptions,(function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),1),i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"search",size:"small"},on:{click:e.getTableList}},[e._v("搜索")])],1),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"mini",icon:"el-icon-circle-plus"},on:{click:e.handleCreate}},[e._v("添加")]),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableList,size:"small",stripe:"","highlight-current-row":"","element-loading-text":"正在向服务器请求数据","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[i("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),i("el-table-column",{attrs:{align:"center",prop:"ip",label:"ip"}}),i("el-table-column",{attrs:{align:"center",width:"200px",prop:"port",label:"端口"}}),i("el-table-column",{attrs:{align:"center",prop:"instanceId",label:"实例ID"}}),i("el-table-column",{attrs:{align:"center",label:"操作",width:"150",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"small",type:"success"},on:{click:function(i){return e.handleEidt(t.row)}}},[e._v("编辑\n        ")]),i("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(i){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),i("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.FormRules,"label-width":"120px",size:"small"}},[i("el-form-item",{attrs:{label:"ip",prop:"ip"}},[i("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入ip"},model:{value:e.addForm.ip,callback:function(t){e.$set(e.addForm,"ip",t)},expression:"addForm.ip"}})],1),i("el-form-item",{attrs:{label:"类型端口",prop:"port"}},[i("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入端口"},model:{value:e.addForm.port,callback:function(t){e.$set(e.addForm,"port",t)},expression:"addForm.port"}})],1),i("el-form-item",{attrs:{label:"服务名",prop:"serviceName"}},[i("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入服务名"},model:{value:e.addForm.serviceName,callback:function(t){e.$set(e.addForm,"serviceName",t)},expression:"addForm.serviceName"}})],1),i("el-form-item",{attrs:{label:"是否健康",prop:"healthy"}},[i("el-radio",{attrs:{label:"true"},model:{value:e.addForm.healthy,callback:function(t){e.$set(e.addForm,"healthy",t)},expression:"addForm.healthy"}},[e._v("是")]),i("el-radio",{attrs:{label:"false"},model:{value:e.addForm.healthy,callback:function(t){e.$set(e.addForm,"healthy",t)},expression:"addForm.healthy"}},[e._v("否")])],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:e.closeAddDialog}},[e._v("取 消")]),"添加实例"===e.title?i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.createSubmit("addForm")}}},[e._v("确 定")]):i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.updateSubmit("addForm")}}},[e._v("确 定")])],1)],1)],2)},l=[],r=(i("f559"),i("fcd0")),o={name:"deviceManage",data:function(){return{tableLoading:!1,tableList:[],total:0,currentPage:1,pageSize:20,serviceOptions:[],serviceName:"",dialogFormVisible:!1,title:"添加实例",FormRules:{ip:[{required:!0,message:"请输入ip",trigger:"blur"}],port:[{required:!0,message:"请输入端口",trigger:"blur"}],serviceName:[{required:!0,message:"请输入服务名",trigger:"blur"}]},addForm:{ip:"",port:"",serviceName:"",healthy:!1}}},created:function(){this.getService()},methods:{getService:function(){var e=this;Object(r["u"])({pageNo:1,pageSize:50}).then((function(t){console.log(t),e.serviceOptions=t.doms.filter((function(e){return!e.startsWith("ace")})),e.serviceOptions.length>0&&(e.serviceName=e.serviceOptions[0],e.getTableList())})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},getTableList:function(){var e=this;Object(r["k"])({serviceName:this.serviceName}).then((function(t){e.tableList=t.hosts})).catch((function(t){console.log(t),e.$alert(t,"网络请求发生错误",{confirmButtonText:"确定",callback:function(e){}})}))},handleCreate:function(){this.dialogFormVisible=!0,this.title="添加实例"},handleEidt:function(e){this.dialogFormVisible=!0,this.title="编辑实例",this.addForm.ip=e.ip,this.addForm.port=e.port,this.addForm.serviceName=e.serviceName},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["f"])({ip:e.ip,serviceName:e.serviceName,port:e.port}).then((function(e){t.getTableList()}))}))},createSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;Object(r["a"])(t.addForm).then((function(){t.closeAddDialog(),t.getTableList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))}))},updateSubmit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;Object(r["G"])(t.addForm).then((function(){t.closeAddDialog(),t.getTableList(),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))}))},closeAddDialog:function(){this.dialogFormVisible=!1,this.$refs["addForm"]&&this.$refs["addForm"].resetFields()}}},n=o,s=i("2877"),c=Object(s["a"])(n,a,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0b1d5c.2097043a.js.map