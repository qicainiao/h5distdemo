(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signStepTwo"],{"100e":function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return l}));var a="#fff",o="van-hairline",i=o+"--top",s=o+"--left",c=o+"--bottom",r=o+"--surround",l=o+"--top-bottom"},"35f1":function(t,e,n){},"3d5b":function(t,e,n){"use strict";function a(t,e){var n=e.to,a=e.url,o=e.replace;if(n&&t){var i=t[o?"replace":"push"](n);i&&i.catch&&i.catch((function(t){if(t&&"NavigationDuplicated"!==t.name)throw t}))}else a&&(o?location.replace(a):location.href=a)}function o(t){a(t.parent&&t.parent.$router,t.props)}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var i={url:String,replace:Boolean,to:[String,Object]}},4298:function(t,e,n){"use strict";n.r(e);var a,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container sign-step-two"},[n("section",{staticClass:"header"},[n("div",{staticClass:"header-item"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("sign.actualLoanAmt"))+":")]),n("div",{staticClass:"value"},[t._v("Rp "+t._s(t._f("formatNum")(t.resData.actualLoanAmt)))])]),n("div",{staticClass:"header-item"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("sign.shouldRepayAmount"))+":")]),n("div",{staticClass:"value"},[t._v("Rp "+t._s(t._f("formatNum")(t.resData.shouldRepayAmount)))])])]),n("section",{staticClass:"content"},[n("jy-n-field",{attrs:{label:t.$t("sign.bankCard"),disabled:""},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),n("div",{staticClass:"tips"},[t._v("*"+t._s(t.$t("sign.tips"))+".")])],1),n("section",{staticClass:"footer"},[n("jy-button",{attrs:{disabled:!t.submitAble,type:"primary"},on:{click:t.handleSubmit}},[t._v(t._s(t.$t("submit")))])],1),n("jy-dialog",{attrs:{title:t.alertTitle,"message-align":"left","title-align":"left",message:t.alertContent,"confirm-button-text":t.$t("sign.alertBtn")},on:{close:t.closeDialog},model:{value:t.showAlert,callback:function(e){t.showAlert=e},expression:"showAlert"}})],1)},i=[],s=(n("b0c0"),n("2fa7")),c=(n("e082"),n("ded0")),r=(n("4747"),n("c96e")),l=(n("28a4"),n("4357")),u=n("365c"),d=n("ed08"),f={name:"SignStepTwo",components:(a={},Object(s["a"])(a,l["a"].name,l["a"]),Object(s["a"])(a,r["a"].name,r["a"]),Object(s["a"])(a,c["a"].Component.name,c["a"].Component),a),data:function(){return{account:this.$route.query.account,orderId:this.$route.query.orderId,bankCode:this.$route.query.bankCode,alertTitle:"",alertContent:"",showAlert:!1,submitAble:!0,resData:{actualLoanAmt:this.$route.query.actualLoanAmt,shouldRepayAmount:this.$route.query.shouldRepayAmount}}},created:function(){Object(d["c"])({action:"jyAppGoPage",data:{pagerName:"signStepTwo",pagerTitle:this.$i18n.t("pageTitle.signStepTwo"),pagerType:"0"}})},methods:{handleSubmit:function(){var t=this,e=this.orderId,n=this.account,a=this.bankCode;this.submitAble=!1,Object(d["d"])(!0),u["a"].fnSubmitSignInfo({orderId:e,bankCode:a,bankCard:n}).then((function(e){Object(d["d"])(!1),t.submitAble=!0;var n=e.data.retCode;"0000"===n?(t.alertTitle=t.$i18n.t("sign.successTitle"),t.alertContent=t.$i18n.t("sign.successContent"),t.showAlert=!0):"2114"===n&&(t.alertTitle="",t.alertContent=t.$i18n.t("sign.invalidContent"),t.showAlert=!0)})).catch((function(){Object(d["d"])(!1),t.submitAble=!0}))},closeDialog:function(){Object(d["c"])({action:"jyAppGoPage",data:{pagerName:"Home",pagerType:"1"}})}}},b=f,p=(n("bde9"),n("cebb"),n("2877")),m=Object(p["a"])(b,o,i,!1,null,"3149af8d",null);e["default"]=m.exports},bde9:function(t,e,n){"use strict";var a=n("fb41"),o=n.n(a);o.a},cebb:function(t,e,n){"use strict";var a=n("35f1"),o=n.n(a);o.a},ded0:function(t,e,n){"use strict";var a,o=n("c31d"),i=n("2b0e"),s=n("c709"),c=n("67b7");function r(t){return document.body.contains(t)}function l(){a&&a.$destroy(),a=new(i["a"].extend(s["a"]))({el:document.createElement("div"),propsData:{lazyRender:!1}}),a.$on("input",(function(t){a.value=t}))}function u(t){return c["d"]?Promise.resolve():new Promise((function(e,n){a&&r(a.$el)||l(),Object(o["a"])(a,u.currentOptions,t,{resolve:e,reject:n})}))}u.defaultOptions={value:!0,title:"",width:"",message:"",overlay:!0,className:"",lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:null,messageAlign:"",getContainer:"body",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!1,closeOnClickOverlay:!1,callback:function(t){a["confirm"===t?"resolve":"reject"](t)}},u.alert=u,u.confirm=function(t){return u(Object(o["a"])({showCancelButton:!0},t))},u.close=function(){a&&(a.value=!1)},u.setDefaultOptions=function(t){Object(o["a"])(u.currentOptions,t)},u.resetDefaultOptions=function(){u.currentOptions=Object(o["a"])({},u.defaultOptions)},u.resetDefaultOptions(),u.install=function(){i["a"].use(s["a"])},u.Component=s["a"],i["a"].prototype.$dialog=u,e["a"]=u},e082:function(t,e,n){"use strict";n("94df"),n("c457"),n("865a"),n("edf5")},fb41:function(t,e,n){}}]);