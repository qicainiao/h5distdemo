(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["addContact"],{2999:function(t,e,n){"use strict";var a=n("f217"),o=n.n(a);o.a},3055:function(t,e,n){},"546f":function(t,e,n){"use strict";n("94df"),n("c457"),n("865a"),n("edf5"),n("3055"),n("a48a")},"61f7":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return d}));n("0d03"),n("d3b7"),n("25f0");var a=n("2ef0");function o(t,e){return Object(a["isEmpty"])(t.fileBase64)||Object(a["isEmpty"])(t.customerName)||Object(a["isEmpty"])(t.cardNo)||Object(a["isEmpty"])(e.value.DICVALUE)}function i(t,e){return Object(a["isEmpty"])(t.contact1)||Object(a["isEmpty"])(t.contact1.value)||Object(a["isEmpty"])(t.contact1.value.DICNAME)||Object(a["isEmpty"])(t.contact2.value)||Object(a["isEmpty"])(t.contact2.value.DICNAME)||Object(a["isEmpty"])(e.name1)||Object(a["isEmpty"])(e.phone1)||Object(a["isEmpty"])(e.name2)||Object(a["isEmpty"])(e.phone2)}function c(t,e,n){return Object(a["isEmpty"])(t.surname)||Object(a["isEmpty"])(t.address)||Object(a["isEmpty"])(e.education.value)||Object(a["isEmpty"])(e.education.value.DICNAME)||Object(a["isEmpty"])(e.maritalStatus.value)||Object(a["isEmpty"])(e.maritalStatus.value.DICNAME)||Object(a["isEmpty"])(e.childrenNum.value)||Object(a["isEmpty"])(e.childrenNum.value.DICNAME)||Object(a["isEmpty"])(e.residenceLength.value)||Object(a["isEmpty"])(e.residenceLength.value.DICNAME)||Object(a["isEmpty"])(e.loanPurpose.value)||Object(a["isEmpty"])(e.loanPurpose.value.DICNAME)||Object(a["isEmpty"])(n.province.value)||Object(a["isEmpty"])(n.city.value)||Object(a["isEmpty"])(n.area.value)}function s(t,e,n){return Object(a["isEmpty"])(t.company)||Object(a["isEmpty"])(t.address)||Object(a["isEmpty"])(t.phone)||Object(a["isEmpty"])(t.fileBase64)||Object(a["isEmpty"])(e.worker.value)||Object(a["isEmpty"])(e.worker.value.DICNAME)||Object(a["isEmpty"])(e.income.value)||Object(a["isEmpty"])(e.income.value.DICNAME)||Object(a["isEmpty"])(e.salaryDate.value)||Object(a["isEmpty"])(e.salaryDate.value.DICNAME)||Object(a["isEmpty"])(e.payway.value.DICNAME)||Object(a["isEmpty"])(e.certificate.value)||Object(a["isEmpty"])(e.certificate.value.DICNAME)||Object(a["isEmpty"])(n.province.value)||Object(a["isEmpty"])(n.city.value)||Object(a["isEmpty"])(n.area.value)}var r={};function l(t,e){r={};var n=/[\d]/;n.test(t)&&(r.customerName={error:!0,type:"customerNameReg1"}),t.length>255&&(r.customerName={error:!0,type:"customerNameReg2"});var a=/^(\d{16})$/;return a.test(e)||(r.cardNo={error:!0,type:"cardNoReg1"}),r}function u(t){r={};var e=/^[0-9]{7,12}$/;return e.test(t)||(r.phone={error:!0,type:"phoneReg1"}),r}function d(t,e,n,a){if(t==n||e==a)return!0}},"6e0d":function(t,e,n){"use strict";n("94df"),n("865a")},7804:function(t,e,n){"use strict";n("94df")},a48a:function(t,e,n){},d2a5:function(t,e,n){"use strict";var a=n("2638"),o=n.n(a),i=n("c20f"),c=n("020a"),s=n("100e"),r=Object(i["a"])("cell-group"),l=r[0],u=r[1];function d(t,e,n,a){var i,r=t("div",o()([{class:[u(),(i={},i[s["e"]]=e.border,i)]},Object(c["b"])(a,!0)]),[n.default&&n.default()]);return e.title||n.title?t("div",[t("div",{class:u("title")},[n.title?n.title():e.title]),r]):r}d.props={title:String,border:{type:Boolean,default:!0}},e["a"]=l(d)},ded0:function(t,e,n){"use strict";var a,o=n("c31d"),i=n("2b0e"),c=n("c709"),s=n("67b7");function r(t){return document.body.contains(t)}function l(){a&&a.$destroy(),a=new(i["a"].extend(c["a"]))({el:document.createElement("div"),propsData:{lazyRender:!1}}),a.$on("input",(function(t){a.value=t}))}function u(t){return s["d"]?Promise.resolve():new Promise((function(e,n){a&&r(a.$el)||l(),Object(o["a"])(a,u.currentOptions,t,{resolve:e,reject:n})}))}u.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){a["confirm"===t?"resolve":"reject"](t)}},u.alert=u,u.confirm=function(t){return u(Object(o["a"])({showCancelButton:!0},t))},u.close=function(){a&&(a.value=!1)},u.setDefaultOptions=function(t){Object(o["a"])(u.currentOptions,t)},u.resetDefaultOptions=function(){u.currentOptions=Object(o["a"])({},u.defaultOptions)},u.resetDefaultOptions(),u.install=function(){i["a"].use(c["a"])},u.Component=c["a"],i["a"].prototype.$dialog=u,e["a"]=u},e082:function(t,e,n){"use strict";n("94df"),n("c457"),n("865a"),n("edf5")},e2f0:function(t,e,n){"use strict";var a=n("c31d"),o=n("c20f"),i=n("6c3f"),c=n("c709"),s=n("2b0e");function r(t){var e=[];function n(t){t.forEach((function(t){e.push(t),t.children&&n(t.children)}))}return n(t),e}function l(t,e){var n,a;void 0===e&&(e={});var o=e.indexKey||"index";return s["a"].extend({inject:(n={},n[t]={default:null},n),computed:(a={parent:function(){return this.disableBindRelation?null:this[t]}},a[o]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},a),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),e=r(this.parent.slots());t.sort((function(t,n){return e.indexOf(t.$vnode)-e.indexOf(n.$vnode)})),this.parent.children=t}}}})}function u(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}var d=Object(o["a"])("radio-group"),p=d[0],h=d[1],f=p({mixins:[u("vanRadio")],props:{value:null,disabled:Boolean,checkedColor:String,iconSize:[Number,String]},watch:{value:function(t){this.$emit("change",t)}},render:function(){var t=arguments[0];return t("div",{class:h(),attrs:{role:"radiogroup"}},[this.slots()])}}),m=n("307b"),b=n("296d"),y=function(t){var e=t.parent,n=t.bem,a=t.role;return{mixins:[l(e)],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===a&&!this.checked?-1:0}},methods:{onClick:function(t){var e=this.$refs.label,n=t.target,a=e&&(e===n||e.contains(n));this.isDisabled||a&&this.labelDisabled||this.toggle(),this.$emit("click",t,this.name,this.value)}},render:function(){var t=arguments[0],e=this.slots,o=this.checked,i=e("icon",{checked:o})||t(m["a"],{attrs:{name:"success"},style:this.iconStyle}),c=e()&&t("span",{ref:"label",class:n("label",[this.labelPosition,{disabled:this.isDisabled}])},[e()]),s=this.iconSize||this.parent&&this.parent.iconSize,r=[t("div",{class:n("icon",[this.shape,{disabled:this.isDisabled,checked:o}]),style:{fontSize:Object(b["a"])(s)}},[i])];return"left"===this.labelPosition?r.unshift(c):r.push(c),t("div",{attrs:{role:a,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:n(),on:{click:this.onClick}},[r])}}},v=Object(o["a"])("radio"),C=v[0],O=v[1],g=C({mixins:[y({bem:O,role:"radio",parent:"vanRadio"})],computed:{currentValue:{get:function(){return this.parent?this.parent.value:this.value},set:function(t){(this.parent||this).$emit("input",t)}},checked:function(){return this.currentValue===this.name}},methods:{toggle:function(){this.currentValue=this.name}}}),j=Object(o["a"])("n-radio-dialog"),E=j[0],D=j[1];e["a"]=E({props:Object(a["a"])({},i["a"].props,{value:Boolean,title:String,actions:Array,duration:Number,cancelButtonText:String,confirmButtonText:String,cancelButtonColor:String,confirmButtonColor:String,selectedOption:{type:Object,default:function(){}},round:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},showConfirmButton:{type:Boolean,default:!0},options:{type:Array,default:function(){return[]}},radioSelectIconName:{type:String,default:"jy-radio_checked"},radioDefultconName:{type:String,default:"jy-radio"},radioSelectColor:{type:String,default:"#4285F4"},radioDefaultColor:{type:String,default:"#7B7B7B"},radioSize:{type:String,default:"20px"},itemHeight:{type:Number,default:30}}),data:function(){return{show:this.value,radioSelected:"",currentValueCode:this.getDefaultSelect()}},watch:{show:function(t){var e=this,n=0,a=0;if(this.$emit("input",t),t){if(this.currentValueCode=this.getDefaultSelect(),t&&this.currentValueCode){for(a in this.options)if(this.currentValueCode===this.options[a].DICVALUE){n=a;break}n>7&&this.$nextTick((function(){var t=document.getElementsByClassName("van-radio-group");t&&t[0]&&(t[0].scrollTop=n*e.itemHeight)}))}}else this.$emit("cancel")},value:function(t){this.show=t},selectedOption:function(t){this.currentValueCode=t.DICVALUE||this.getDefaultSelect()}},methods:{getDefaultSelect:function(){return this.selectedOption&&this.selectedOption.DICVALUE||this.options&&this.options.length>0&&this.options[0].DICVALUE||""},onCancel:function(){this.currentValueCode=this.getDefaultSelect(),this.$emit("cancel"),this.$emit("input",!1)},onConfirm:function(){var t=this;this.$emit("input",!1),this.$emit("confirm",this.options.filter((function(e){return e.DICVALUE===t.currentValueCode}))[0])},radioChange:function(t,e){this.currentValueCode=e}},render:function(){var t=this,e=arguments[0];return e(c["a"],{class:D(),attrs:{getContainer:this.getContainer,closeOnClickOverlay:this.closeOnClickOverlay,safeAreaInsetBottom:this.safeAreaInsetBottom,showCancelButton:!0,cancelButtonText:this.cancelButtonText,confirmButtonText:this.confirmButtonText,cancelButtonColor:this.cancelButtonColor},on:{cancel:this.onCancel,confirm:this.onConfirm},model:{value:t.show,callback:function(e){t.show=e}}},[e(f,{attrs:{value:this.currentValueCode}},[this.options.map((function(n,a){return e(g,{attrs:{name:n.DICVALUE},on:{click:t.radioChange},key:a,ref:"ref"+n.DICVALUE},[n.DICNAME,n.DICVALUE===t.currentValueCode?e(m["a"],{slot:"icon",attrs:{color:t.radioSelectColor,size:t.radioSize,name:"jy-radio_checked"}}):e(m["a"],{slot:"icon",attrs:{name:"jy-radio",color:t.radioDefaultColor,size:t.radioSize}})])}))])])}})},eee2:function(t,e,n){"use strict";n.r(e);var a,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"addprofessional"},[n("jy-n-field",{attrs:{label:t.$t("addContact.contact1"),"arrow-icon":"jy-jiantou_you",disabled:""},on:{"click-arrow-icon":function(e){return t.showDialog("contact1")}},model:{value:t.dialogDatas.contact1.value.DICNAME,callback:function(e){t.$set(t.dialogDatas.contact1.value,"DICNAME",e)},expression:"dialogDatas.contact1.value.DICNAME"}}),n("div",{staticClass:"add-margin"}),n("jy-n-field",{attrs:{"right-icon":"jy-answer","right-icon-color":"#4285F4","right-icon-size":"18px",disabled:"",placeholder:t.$t("addContact.name1")},on:{"click-arrow-icon":function(e){return t.jyAppContact(1)}},model:{value:t.addContact.name1,callback:function(e){t.$set(t.addContact,"name1",e)},expression:"addContact.name1"}}),n("div",{staticClass:"add-margin"}),n("jy-n-field",{attrs:{disabled:"",placeholder:t.$t("addContact.phone1")},model:{value:t.addContact.phone1,callback:function(e){t.$set(t.addContact,"phone1",e)},expression:"addContact.phone1"}}),n("div",{staticClass:"add-margin"}),n("jy-n-field",{attrs:{label:t.$t("addContact.contact2"),"arrow-icon":"jy-jiantou_you",disabled:""},on:{"click-arrow-icon":function(e){return t.showDialog("contact2")}},model:{value:t.dialogDatas.contact2.value.DICNAME,callback:function(e){t.$set(t.dialogDatas.contact2.value,"DICNAME",e)},expression:"dialogDatas.contact2.value.DICNAME"}}),n("div",{staticClass:"add-margin"}),n("jy-n-field",{attrs:{"right-icon":"jy-answer","right-icon-color":"#4285F4","right-icon-size":"18px",disabled:"",placeholder:t.$t("addContact.name2")},on:{"click-arrow-icon":function(e){return t.jyAppContact(2)}},model:{value:t.addContact.name2,callback:function(e){t.$set(t.addContact,"name2",e)},expression:"addContact.name2"}}),n("div",{staticClass:"add-margin"}),n("jy-n-field",{attrs:{disabled:"",placeholder:t.$t("addContact.phone2")},model:{value:t.addContact.phone2,callback:function(e){t.$set(t.addContact,"phone2",e)},expression:"addContact.phone2"}}),n("section",[n("jy-button",{attrs:{loading:t.saving,type:"primary",size:"large","loading-type":"spinner",disabled:t.hasEmpty},on:{click:t.handleSave}},[t._v(t._s(t.$t("addocr.save")))])],1),n("jy-n-radio-dialog",{attrs:{options:t.chooseObj.options,"selected-option":t.chooseObj.value,"confirm-button-text":"OKE","cancel-button-text":"BATAL","cancel-button-color":"#4285F4","close-on-click-overlay":""},on:{cancel:t.onCancel,confirm:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},i=[],c=(n("a4d3"),n("4de4"),n("4160"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),s=(n("6e0d"),n("307b")),r=(n("7804"),n("d2a5")),l=(n("28a4"),n("4357")),u=(n("546f"),n("e2f0")),d=(n("e082"),n("ded0")),p=(n("4747"),n("c96e")),h=(n("365c"),n("61f7")),f=n("2ef0"),m=n("2f62"),b=n("ed08"),y=n("b893"),v=n("5f87");function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g={components:(a={},Object(c["a"])(a,p["a"].name,p["a"]),Object(c["a"])(a,d["a"].Component.name,d["a"].Component),Object(c["a"])(a,u["a"].name,u["a"]),Object(c["a"])(a,l["a"].name,l["a"]),Object(c["a"])(a,r["a"].name,r["a"]),Object(c["a"])(a,s["a"].name,s["a"]),a),data:function(){return{addContactType:0,show:!1,addContact:{name1:"",phone1:"",name2:"",phone2:""},saving:!1,chooseObj:{type:"",options:[],value:{}},dialogDatas:{contact1:{type:"contact1",options:[],value:{}},contact2:{type:"contact2",options:[],value:{}}}}},computed:{hasEmpty:function(){return Object(h["a"])(this.dialogDatas,this.addContact)}},created:function(){Object(b["c"])({action:"jyAppGoPage",data:{pagerName:"addcontact",pagerTitle:this.$i18n.t("pageTitle.addcontact"),pagerType:"0"}}),this.setDialogDatas()},mounted:function(){var t=this.$route.query.applyId;console.log("=contact========>",t),this.applyId=t,this.getProcessData()},methods:O({jyAppContact:function(t){var e=this;this.addContactType=t,Object(b["c"])({action:"jyAppChooseContact",callback:function(t){var n=JSON.parse(t),a=n.contactName,o=n.phone,i=e.$i18n.t("contact"),c="";a&&(i=Object(y["c"])(a),i=Object(f["isEmpty"])(i)?e.$i18n.t("contact"):i),o&&(c=o),1==e.addContactType?(e.addContact.name1=i,e.addContact.phone1=c):(e.addContact.name2=i,e.addContact.phone2=c)},data:{}})},showDialog:function(t){this.show=!0,this.chooseObj=this.dialogDatas[t]},onSelect:function(t){this.show=!1,t&&(this.chooseObj.value=t,this.$set(this.dialogDatas[this.chooseObj.type],"value",t),console.log(this.dialogDatas))},onCancel:function(){this.show=!1},getProcessData:function(){var t=this.getProcess();console.log("getProcessData====>",t),Object(f["isEmpty"])(t)&&(console.log("queryProcess====>"),this.queryProcess({custId:Object(v["a"])()}))},handleSave:function(){if(console.log("===contact==handleSave================",this.applyId),Object(h["e"])(this.addContact.name1,this.addContact.phone1,this.addContact.name2,this.addContact.phone2))Object(b["b"])(this.$i18n.t("validate.contactReg1"));else{var t={applyId:this.applyId,custId:Object(v["a"])(),phone:Object(v["b"])(),contactRelation1:this.dialogDatas.contact1.value.DICVALUE,contactRelation2:this.dialogDatas.contact2.value.DICVALUE,contactName1:this.addContact.name1,contactName2:this.addContact.name2,contactTelephone1:this.addContact.phone1,contactTelephone2:this.addContact.phone2,$router:this.$router};this.saveContact(t)}},setDialogDatas:function(){var t=this.getDictionary(),e=t.APP_CONTACT_RELATION1,n=t.APP_CONTACT_RELATION2;console.log("=contact========",e,n),this.dialogDatas.contact1.options=e||[],this.dialogDatas.contact2.options=n||[]}},Object(m["b"])(["saveContact","queryProcess"]),{},Object(m["c"])(["getDictionary","getProcess"]))},j=g,E=(n("2999"),n("2877")),D=Object(E["a"])(j,o,i,!1,null,"7df2fff0",null);e["default"]=D.exports},f217:function(t,e,n){}}]);