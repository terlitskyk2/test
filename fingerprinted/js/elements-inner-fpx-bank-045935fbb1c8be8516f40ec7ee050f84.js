webpackJsonp([3],{"1Q1T":function(e,n,t){e.exports=t.p+"fingerprinted/img/bank_rakyat-32a99eb091a55cf7cc7690b980bf4e40.svg"},"4u7Z":function(e,n,t){"use strict";function a(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function c(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Object.defineProperty(n,"__esModule",{value:!0});var l=t("GiK3"),f=t.n(l),p=t("O27J"),b=t.n(p),d=t("jTEE"),h=(t("kSHn"),t("h8J9")),k={retrieve:function(e,n){return Object(h.a)({url:"https://api.stripe.com/v1/fpx/bank_statuses",method:"GET",data:{account_holder_type:e,key:n}}).then(function(e){var n=JSON.parse(e.responseText);return 200===e.status?{type:"object",object:n}:{type:"error",error:n}}).catch(function(e){return{type:"error",error:e}})}},y=t("xMLw"),g=t.n(y),m=t("ihjQ"),v=t.n(m),_=t("LULx"),B=t.n(_),x=t("flr/"),O=t.n(x),j=t("vmWG"),C=t.n(j),A=t("1Q1T"),S=t.n(A),H=t("AevX"),w=t.n(H),M=t("U5iZ"),F=t.n(M),P=t("F+OE"),E=t.n(P),T=t("mQ+0"),L=t.n(T),W=t("Gdw1"),I=t.n(W),R=t("O16L"),U=t.n(R),K=t("NzYb"),D=t.n(K),G=t("lqW+"),J=t.n(G),Q=t("fb6A"),Z=t.n(Q),N=t("Vou2"),X=t.n(N),q=t("F3mh"),z=t.n(q),V=t("Hile"),Y=t.n(V),$=t("IhPv"),ee=function(e){switch(e){case"affin_bank":return g.a;case"alliance_bank":return v.a;case"ambank":return B.a;case"bank_islam":return O.a;case"bank_muamalat":return C.a;case"bank_rakyat":return S.a;case"bsn":return w.a;case"cimb":return F.a;case"deustche_bank":return E.a;case"hong_leong_bank":return L.a;case"hsbc":return I.a;case"kfh":return U.a;case"maybank2e":case"maybank2u":return D.a;case"ocbc":return J.a;case"pb_enterprise":case"public_bank":return Z.a;case"rhb":return X.a;case"standard_chartered":return z.a;case"uob":return Y.a;default:return Object($.a)(e)}},ne=ee,te=t("ZBjb"),ae=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},re={maybank2u:{icon:ne("maybank2u"),text:"Maybank2U"},cimb:{icon:ne("cimb"),text:"CIMB Clicks"},public_bank:{icon:ne("public_bank"),text:"Public Bank"},rhb:{icon:ne("rhb"),text:"RHB Bank"},hong_leong_bank:{icon:ne("hong_leong_bank"),text:"Hong Leong Bank"},ambank:{icon:ne("ambank"),text:"AmBank"},affin_bank:{icon:ne("affin_bank"),text:"Affin Bank"},alliance_bank:{icon:ne("alliance_bank"),text:"Alliance Bank"},bank_islam:{icon:ne("bank_islam"),text:"Bank Islam"},bank_muamalat:{icon:ne("bank_muamalat"),text:"Bank Muamalat"},bank_rakyat:{icon:ne("bank_rakyat"),text:"Bank Rakyat"},bsn:{icon:ne("bsn"),text:"BSN"},deustche_bank:{icon:ne("deustche_bank"),text:"Deutsche Bank"},hsbc:{icon:ne("hsbc"),text:"HSBC Bank"},kfh:{icon:ne("kfh"),text:"KFH"},maybank2e:{icon:ne("maybank2e"),text:"Maybank2E"},ocbc:{icon:ne("ocbc"),text:"OCBC Bank"},pb_enterprise:{icon:ne("pb_enterprise"),text:"Public Bank Enterprise"},standard_chartered:{icon:ne("standard_chartered"),text:"Standard Chartered"},uob:{icon:ne("uob"),text:"UOB"}},ie={maybank2u:{individual:"MB2U0227"},cimb:{individual:"BCBB0235",company:"BCBB0235"},rhb:{individual:"RHB0218",company:"RHB0218"},affin_bank:{individual:"ABB0233",company:"ABB0232"},alliance_bank:{individual:"ABMB0212",company:"ABMB0213"},ambank:{individual:"AMBB0209",company:"AMBB0208"},bank_islam:{individual:"BIMB0340",company:"BIMB0340"},bank_muamalat:{individual:"BMMB0341",company:"BMMB0342"},bank_rakyat:{individual:"BKRM0602",company:"BKRM0602"},bsn:{individual:"BSN0601"},deustche_bank:{company:"DBB0199"},hong_leong_bank:{individual:"HLB0224",company:"HLB0224"},hsbc:{individual:"HSBC0223",company:"HSBC0223"},kfh:{individual:"KFH0346",company:"KFH0346"},maybank2e:{individual:"MBB0228",company:"MBB0228"},ocbc:{individual:"OCBC0229",company:"OCBC0229"},public_bank:{individual:"PBB0233",company:"PBB0233"},pb_enterprise:{company:"PBB0234"},standard_chartered:{individual:"SCB0216",company:"SCB0215"},uob:{individual:"UOB0226",company:"UOB0228"}},ce=function(e,n){return!!ie[n][e]},oe=function(e){return Object.keys(re).reduce(function(n,t){return ce(e,t)?[].concat(a(n),[t]):n},[])},ue=function(e){return oe(e).map(function(e){return{value:e,icon:re[e].icon,text:re[e].text}})},se=function(e,n){return k.retrieve(e,n).then(function(n){if("object"===n.type){var t=n.object,a=t.parsed_bank_status;return Object.keys(ie).filter(function(n){var t=ie[n][e];return a.hasOwnProperty(t)&&!a[t]})}return[]})},le=function(e,n,t){return se(e,n).then(function(n){var a=ue(e);return 0===n.length?a:a.reduce(function(e,a){if(-1!==n.indexOf(a.value)){var r=Object(te.a)(t,"fpx.offlineBank");e.push(ae({},a,{text:a.text+" - "+r}))}else e.push(a);return e},[])})},fe=t("kU+X"),pe=t("afZ+"),be=t("oTrx"),de=t("8lzR"),he=t("luC2"),ke=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ye=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),ge=function(e){function n(e){var t=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));ve.call(t);var a=e.onChange,i=e.meta,c=e.value,o=e.accountHolderType;return a(c,ke({},i,{accountHolderType:o})),t.state=ke({},t.state,{banks:ue(o)}),t}return i(n,e),ye(n,[{key:"componentDidMount",value:function(){var e=this.props;this.handleFetchBankWithStatusesAction(e.accountHolderType,e.apiKey,e.locale,e.onDispatchSiblingAction)}},{key:"componentWillReceiveProps",value:function(e){var n=e.value,t=e.accountHolderType,a=e.apiKey,r=e.locale,i=e.onDispatchSiblingAction,c=this.props,o=c.value,u=c.accountHolderType;n!==o&&this._propagateChange(n),t!==u&&this.handleFetchBankWithStatusesAction(t,a,r,i)}},{key:"handleFetchBankWithStatusesAction",value:function(e,n,t,a){var r=this;le(e,n,t).then(function(e){r.setState({banks:e}),a(pe.a.fpxBankSecondary,{type:"sendBanksWithStatuses",payload:{banks:e}})})}},{key:"focus",value:function(){this._selectField.focus()}},{key:"focusError",value:function(){this.focus()}},{key:"validate",value:function(){return!0}},{key:"wantsError",value:function(){return!1}},{key:"clear",value:function(){this._propagateChange("")}},{key:"calculateWidth",value:function(){return this._selectField.calculateWidth()}},{key:"calculateHeight",value:function(){return this._selectField.calculateHeight()}},{key:"performSiblingAction",value:function(e){Object(he.b)(e)&&this._selectField.performAction(e)}},{key:"_propagateChange",value:function(e){var n=this.props;(0,n.onChange)(e,ke({},n.meta,{safeValue:{type:"string",value:e},empty:""===e,autocorrectComplete:""!==e}))}},{key:"render",value:function(){var e=this,n=this.props,t=n.rtl,a=n.hideIcon,r=n.disabled,i=n.locale,c=this.state.banks,o=Object(be.b)(c,function(n){return n.value===e.props.value})||null,u=this.props.useFallback||fe.h,s=Object(te.a)(i,"placeholders.selectBank");return f.a.createElement(de.a,{ref:function(n){return n&&(e._selectField=n)},name:"fpx_bank",label:"FPX bank",items:c,defaultText:s,useFallback:u,value:o,rtl:t,hideIcon:a,onChange:this.handleChange,onAction:this.handleSelectFieldAction,disabled:r})}}]),n}(f.a.Component);ge.defaultProps={hideIcon:!1,value:""};var me,ve=function(){var e=this;this.handleChange=function(n){e._propagateChange(n)},this.handleSelectFieldAction=function(n){e.props.onDispatchSiblingAction(pe.a.fpxBankSecondary,n)}},_e=ge,Be=t("cXr9"),xe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Oe=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),je=function(e){function n(e){c(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.performSiblingAction=function(e){Object(he.c)(e)&&t._selectList.performAction(e),Object(he.a)(e)&&t.setState({banks:e.payload.banks})},t.handleOutsideClick=function(){t._selectList.outsideClick()},t.handleHeightChange=function(){t.props.onHeightChange(t.calculateHeight())},t.handleSelectFieldAction=function(e){t.props.onDispatchSiblingAction(t.props.primaryElementType,e)},t.state=xe({},t.state,{banks:ue(e.accountHolderType)}),t}return u(n,e),Oe(n,[{key:"focus",value:function(){}},{key:"focusError",value:function(){this.focus()}},{key:"wantsError",value:function(){return!1}},{key:"clear",value:function(){}},{key:"validate",value:function(){return!0}},{key:"calculateWidth",value:function(){return 0}},{key:"calculateHeight",value:function(){return this._container?this._container.offsetHeight:0}},{key:"render",value:function(){var e=this,n=this.props,t=n.hideIcon,a=n.rtl,r=this.state.banks;return f.a.createElement("div",{ref:function(n){return e._container=n}},f.a.createElement(Be.a,{rtl:a,hideIcon:t,items:r,onHeightChange:this.handleHeightChange,onAction:this.handleSelectFieldAction,ref:function(n){return n&&(e._selectList=n)}}))}}]),n}(f.a.Component),Ce=je,Ae=(me={},s(me,pe.a.fpxBank,_e),s(me,pe.a.fpxBankSecondary,Ce),me),Se=(t("uMdJ"),window.location.hash.substring(1).split("?")[0]),He=document.getElementById("root");b.a.render(f.a.createElement(d.a,{queryString:Se,components:Ae}),He)},5:function(e,n,t){t("hC4F"),e.exports=t("4u7Z")},AevX:function(e,n,t){e.exports=t.p+"fingerprinted/img/bsn-617c8b86c7a3749f815df6085d90c8f4.svg"},"F+OE":function(e,n,t){e.exports=t.p+"fingerprinted/img/deutsche_bank-6fa4f080d57abaf2d7cce470f3149210.svg"},F3mh:function(e,n,t){e.exports=t.p+"fingerprinted/img/standard_chartered-0f9d38da191fe8cbe988fbc817cc3caa.svg"},Gdw1:function(e,n,t){e.exports=t.p+"fingerprinted/img/hsbc-4628986fee0f6be0481f2cd7893ec32c.svg"},Hile:function(e,n,t){e.exports=t.p+"fingerprinted/img/uob-57bc76dffc64e46f0324f86ac69e0473.svg"},LULx:function(e,n,t){e.exports=t.p+"fingerprinted/img/ambank-6fa0d22793d9df116f5d9286b60d1106.svg"},NzYb:function(e,n,t){e.exports=t.p+"fingerprinted/img/maybank-598198030f437632adc7016a4f019559.svg"},O16L:function(e,n,t){e.exports=t.p+"fingerprinted/img/kfh-e24a8a957467926d45923d2fefc42ed7.svg"},U5iZ:function(e,n,t){e.exports=t.p+"fingerprinted/img/cimb-10338205756c534a7ccab63a59ca4a07.svg"},Vou2:function(e,n,t){e.exports=t.p+"fingerprinted/img/rhb-c3628db51907f05fb6d9277e13941dc3.svg"},fb6A:function(e,n,t){e.exports=t.p+"fingerprinted/img/public_bank-f21b11057e6bc792f4b488f37c4777cf.svg"},"flr/":function(e,n,t){e.exports=t.p+"fingerprinted/img/bank_islam-422ba408492a38c45b31b875c2d432ec.svg"},ihjQ:function(e,n,t){e.exports=t.p+"fingerprinted/img/alliance_bank-e45590c6afd10f5bf573d33cca7025de.svg"},"lqW+":function(e,n,t){e.exports=t.p+"fingerprinted/img/ocbc-41fb8a207dbc717b76796af9976efc04.svg"},"mQ+0":function(e,n,t){e.exports=t.p+"fingerprinted/img/hongleong_bank-b40cf00c456ea226a1d8525517d7a68d.svg"},uMdJ:function(){},vmWG:function(e,n,t){e.exports=t.p+"fingerprinted/img/bank_muamalat-8267fae83316e122e81d3e83c4da1c41.svg"},xMLw:function(e,n,t){e.exports=t.p+"fingerprinted/img/affin_bank-9a54a230fb27fa5df16df4c2813e97e7.svg"}},[5]);