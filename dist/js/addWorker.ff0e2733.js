(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["addWorker"],{"1b33":function(e,a,t){"use strict";var o=t("b0cc"),s=t.n(o);s.a},"9e690":function(e,a,t){"use strict";t.r(a);var o,s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"addprofessional"},[t("jy-n-field",{attrs:{label:e.$t("addworker.worker"),"arrow-icon":"jy-jiantou_you",disabled:"",type:"textarea",rows:"1",maxlength:"255",autosize:""},on:{"click-arrow-icon":function(a){return e.showDialog("worker")}},model:{value:e.dialogDatas.worker.value.DICNAME,callback:function(a){e.$set(e.dialogDatas.worker.value,"DICNAME",a)},expression:"dialogDatas.worker.value.DICNAME"}}),t("jy-n-field",{attrs:{label:e.$t("addworker.income"),"arrow-icon":"jy-jiantou_you",disabled:""},on:{"click-arrow-icon":function(a){return e.showDialog("income")}},model:{value:e.dialogDatas.income.value.DICNAME,callback:function(a){e.$set(e.dialogDatas.income.value,"DICNAME",a)},expression:"dialogDatas.income.value.DICNAME"}}),t("jy-n-field",{attrs:{label:e.$t("addworker.salaryDate"),"arrow-icon":"jy-jiantou_you",disabled:""},on:{"click-arrow-icon":function(a){return e.showDialog("salaryDate")}},model:{value:e.dialogDatas.salaryDate.value.DICNAME,callback:function(a){e.$set(e.dialogDatas.salaryDate.value,"DICNAME",a)},expression:"dialogDatas.salaryDate.value.DICNAME"}}),t("jy-n-field",{attrs:{label:e.$t("addworker.payway"),"arrow-icon":"jy-jiantou_you",disabled:""},on:{"click-arrow-icon":function(a){return e.showDialog("payway")}},model:{value:e.dialogDatas.payway.value.DICNAME,callback:function(a){e.$set(e.dialogDatas.payway.value,"DICNAME",a)},expression:"dialogDatas.payway.value.DICNAME"}}),t("jy-n-field",{attrs:{type:"textarea",rows:"1",maxlength:"255",autosize:"",label:e.$t("addworker.company")},model:{value:e.addWorker.company,callback:function(a){e.$set(e.addWorker,"company",a)},expression:"addWorker.company"}}),t("jy-n-field",{attrs:{label:e.$t("addworker.area"),"arrow-icon":"jy-jiantou_you",disabled:"",type:"textarea",rows:"1",autosize:""},on:{"click-arrow-icon":function(a){return e.showDialog("area")}},model:{value:e.area,callback:function(a){e.area=a},expression:"area"}}),t("div",{staticClass:"add-margin"}),t("jy-n-field",{attrs:{type:"textarea",rows:"1",maxlength:"255",autosize:"",placeholder:e.$t("addworker.address")},model:{value:e.addWorker.address,callback:function(a){e.$set(e.addWorker,"address",a)},expression:"addWorker.address"}}),t("jy-n-field",{attrs:{type:"number",label:e.$t("addworker.phone"),maxlength:"12",error:e.errors&&e.errors.phone&&e.errors.phone.error},model:{value:e.addWorker.phone,callback:function(a){e.$set(e.addWorker,"phone",a)},expression:"addWorker.phone"}}),t("div",{staticClass:"choose-type"},[t("p",[e._v(e._s(e.$t("addworker.uploadTip")))]),t("div",{staticClass:"van-cell__title .van-n-field__control choose-label",on:{click:function(a){return e.showDialog("certificate")}}},[t("span",[e._v(e._s(e.dialogDatas.certificate.value.DICNAME||e.$t("addworker.chooseOne")))])]),t("div",{staticClass:"van-n-field__arrow-icon"},[t("jy-icon",{attrs:{name:"jy-jiantou_you"},on:{click:function(a){return e.showDialog("certificate")}}})],1)]),t("div",{staticClass:"photo photo-margin",on:{click:e.jyAppTakephoto}},[e.addWorker.fileUrl?t("img",{staticClass:"photo-img",attrs:{src:e.addWorker.fileUrl}}):t("jy-icon",{attrs:{name:"photograph",color:"#4285F4",size:"38px"}})],1),t("section",[t("jy-button",{attrs:{loading:e.saving,type:"primary",size:"large","loading-type":"spinner",disabled:e.hasEmpty},on:{click:e.handleSave}},[e._v(e._s(e.$t("addocr.save")))])],1),t("jy-n-radio-dialog",{attrs:{options:e.chooseObj.options,"selected-option":e.chooseObj.value,"confirm-button-text":"OKE","cancel-button-text":"BATAL","cancel-button-color":"#4285F4","close-on-click-overlay":""},on:{cancel:e.onCancel,confirm:e.onSelect},model:{value:e.show,callback:function(a){e.show=a},expression:"show"}}),t("jy-n-pop-area",{attrs:{districts:e.areaList,province:e.selectedAddress.province.value,city:e.selectedAddress.city.value,area:e.selectedAddress.area.value,title:e.$t("addressPop.choose"),placeholders:e.columnsPlaceholder,"close-on-click-overlay":""},on:{select:e.onSelectAddress},model:{value:e.showArea,callback:function(a){e.showArea=a},expression:"showArea"}})],1)},r=[],i=(t("a4d3"),t("4de4"),t("4160"),t("0d03"),t("b0c0"),t("e439"),t("dbb4"),t("b64b"),t("159b"),t("2fa7")),c=(t("2805"),t("a9bb")),n=(t("23de"),t("4223")),l=(t("546f"),t("e2f0")),d=(t("6e0d"),t("307b")),p=(t("7804"),t("d2a5")),u=(t("28a4"),t("4357")),h=(t("4747"),t("c96e")),y=t("61f7"),b=t("2ef0"),f=t("ed08"),v=t("2f62"),g=t("5f87"),D=t("b893");function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function k(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(t,!0).forEach((function(a){Object(i["a"])(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var j={components:(o={},Object(i["a"])(o,h["a"].name,h["a"]),Object(i["a"])(o,u["a"].name,u["a"]),Object(i["a"])(o,p["a"].name,p["a"]),Object(i["a"])(o,d["a"].name,d["a"]),Object(i["a"])(o,l["a"].name,l["a"]),Object(i["a"])(o,n["a"].name,n["a"]),Object(i["a"])(o,c["a"].name,c["a"]),o),data:function(){return{show:!1,areaList:{},errors:[],showArea:!1,selectedAddress:{province:{code:"",value:""},city:{code:"",value:""},area:{code:"",value:""}},columnsPlaceholder:{province:"provinsi",city:"cota",area:"kecamatan"},file:void 0,addWorker:{company:"",address:"",phone:"",fileBase64:"",fileUrl:""},saving:!1,isDisable:!0,sexData:[],chooseObj:{type:"",options:[],value:{}},dialogDatas:{worker:{type:"worker",options:[],value:{}},income:{type:"income",options:[],value:{}},salaryDate:{type:"salaryDate",options:[],value:{}},payway:{type:"payway",options:[],value:{}},certificate:{type:"certificate",options:[],value:{}}}}},mounted:function(){var e=this.$route.query.applyId;console.log("====addWorker---applyId=====>",e),this.applyId=e,this.getProcessData()},watch:{file:function(e,a){console.log("================",e,a);var t=new FormData;t.append("file",e),this.saveCertificatePhoto(t)},"$store.state.addprofessional.workerPhoto":function(e){this.addWorker.fileUrl=e},"addWorker.address":{handler:function(e){console.log("=====addWorker.address======",e),Object(D["g"])(e)&&(Object(f["b"])("请不要输入表情"),this.addWorker.address=Object(D["b"])(e))}}},computed:{area:function(){return this.selectedAddress.province.value+" "+this.selectedAddress.city.value+" "+this.selectedAddress.area.value},hasEmpty:function(){return Object(y["d"])(this.addWorker,this.dialogDatas,this.selectedAddress)}},created:function(){Object(f["c"])({action:"jyAppGoPage",data:{pagerName:"addworker",pagerTitle:this.$i18n.t("pageTitle.addworker"),pagerType:"0"}}),this.setDialogDatas();for(var e=1;e<31;e++)this.dialogDatas.salaryDate.options.push({DICVALUE:"".concat(e),DICNAME:"".concat(e)}),this.$set(this.dialogDatas.salaryDate,"value",{DICVALUE:"15",DICNAME:""})},methods:k({jyAppTakephoto:function(){var e=this;Object(f["c"])({action:"jyAppTakephoto",callback:function(a){Object(f["d"])(!0),e.addWorker.fileBase64="data:image/png;base64,"+a.base64FileString,e.file=Object(D["a"])("data:image/png;base64,".concat(a.base64FileString),"".concat((new Date).valueOf(),".png")),console.log(" _THIS.file====>",e.file)},data:{width:0,height:0,iscompress:!1}})},getProcessData:function(){var e=this.getProcess();console.log("getProcessData====>",e),Object(b["isEmpty"])(e)&&this.queryProcess({custId:Object(g["a"])()})}},Object(v["b"])(["saveWorker","saveCertificatePhoto","queryProcess","setArealist"]),{},Object(v["c"])(["getDictionary","getAreaList","getProcess"]),{setDialogDatas:function(){var e=this.getDictionary(),a=e.APP_OCCUPATION,t=e.APP_MONTHLY_INCOME,o=e.APP_SALARY_METHOD,s=e.APP_FILE_TYPE;this.dialogDatas.worker.options=a||[],this.dialogDatas.income.options=t||[],this.dialogDatas.payway.options=o||[],this.dialogDatas.certificate.options=s||[],this.dealAreaList()},showDialog:function(e){"area"===e?this.showArea=!0:(this.show=!0,this.chooseObj=this.dialogDatas[e])},onSelect:function(e){this.show=!1,e&&(this.chooseObj.value=e,this.$set(this.dialogDatas[this.chooseObj.type],"value",e))},onCancel:function(){this.show=!1},onSelectAddress:function(e){this.selectedAddress=e,this.showArea=!1,console.log("onSelectAddress",e)},dealAreaList:function(){var e=this.getAreaList();Object(b["isEmpty"])(e)?(console.log("原生获取省市区"),this.jyAppSysAreas()):(console.log("vuex获取省市区"),this.areaList=e)},jyAppSysAreas:function(){var e=this;Object(f["c"])({action:"jyAppSysAreas",callback:function(a){e.areaList=a,e.setArealist(a)},data:{languageType:"NY"}})},handleSave:function(){var e=Object(y["g"])(this.addWorker.phone);if(Object(b["isEmpty"])(e)){var a={applyId:this.applyId,custId:Object(g["a"])(),phone:Object(g["b"])(),companyTelephone:this.addWorker.phone,companyDetailAddr:this.addWorker.address,companyName:this.addWorker.company,occupationCode:this.dialogDatas.worker.value.DICVALUE,monthlyIncomeCode:this.dialogDatas.income.value.DICVALUE,payDay:this.dialogDatas.salaryDate.value.DICVALUE,salaryMethodCode:this.dialogDatas.payway.value.DICVALUE,fileType:this.dialogDatas.certificate.value.DICVALUE,companyProvice:this.selectedAddress.province.code,companyCity:this.selectedAddress.city.code,companyCounty:this.selectedAddress.area.code,fileUrl:this.addWorker.fileUrl,$router:this.$router};this.saveWorker(a)}else{this.errors=e;var t=Object.keys(e),o="validate.".concat(e[t[0]].type);Object(f["b"])(this.$i18n.t(o))}}})},m=j,A=(t("1b33"),t("2877")),O=Object(A["a"])(m,s,r,!1,null,"06859939",null);a["default"]=O.exports},b0cc:function(e,a,t){}}]);