sap.ui.define(['require', 'exports'], (function (require, exports) { 'use strict';

	function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t);}function s(e){return "function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let o,a;function c(e,t){return e===t||(o||(o=document.createElement("a")),o.href=t,e===o.href)}function u(e){return null==e?"":e}function l(e,t,n){const i=function(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;if(t&&t.host)return t;return e.ownerDocument}(e);if(!i.getElementById(t)){const e=m("style");e.id=t,e.textContent=n,function(e,t){((function(e,t){e.appendChild(t);}))(e.head||e,t),t.sheet;}(i,e);}}function d(e,t,n){e.insertBefore(t,n||null);}function h(e){e.parentNode&&e.parentNode.removeChild(e);}function m(e){return document.createElement(e)}function p(){return e="",document.createTextNode(e);var e;}function E(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n);}function g(e){a=e;}function _(){if(!a)throw new Error("Function called outside component initialization");return a}function $(e){_().$$.on_mount.push(e);}const f=[],T=[];let C=[];const R=[],b=Promise.resolve();let S=!1;function A(e){C.push(e);}const I=new Set;let w=0;function v(){if(0!==w)return;const e=a;do{try{for(;w<f.length;){const e=f[w];w++,g(e),O(e.$$);}}catch(e){throw f.length=0,w=0,e}for(g(null),f.length=0,w=0;T.length;)T.pop()();for(let e=0;e<C.length;e+=1){const t=C[e];I.has(t)||(I.add(t),t());}C.length=0;}while(f.length);for(;R.length;)R.pop()();S=!1,I.clear(),g(e);}function O(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A);}}const U=new Set;function N(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];C.forEach((i=>-1===e.indexOf(i)?t.push(i):n.push(i))),n.forEach((e=>e())),C=t;}(n.after_update),i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[]);}function P(e,t){-1===e.$$.dirty[0]&&(f.push(e),S||(S=!0,b.then(v)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31;}function L(r,o,c,u,l,d,m=null,p=[-1]){const E=a;g(r);const _=r.$$={fragment:null,ctx:[],props:d,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(E?E.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:o.target||E.$$.root};m&&m(_.root);let $=!1;if(_.ctx=c?c(r,o.props||{},((e,t,...n)=>{const i=n.length?n[0]:t;return _.ctx&&l(_.ctx[e],_.ctx[e]=i)&&(!_.skip_bound&&_.bound[e]&&_.bound[e](i),$&&P(r,e)),t})):[],_.update(),$=!0,i(_.before_update),_.fragment=!!u&&u(_.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);_.fragment&&_.fragment.l(e),e.forEach(h);}else _.fragment&&_.fragment.c();o.intro&&((f=r.$$.fragment)&&f.i&&(U.delete(f),f.i(T))),function(e,n,r){const{fragment:o,after_update:a}=e.$$;o&&o.m(n,r),A((()=>{const n=e.$$.on_mount.map(t).filter(s);e.$$.on_destroy?e.$$.on_destroy.push(...n):i(n),e.$$.on_mount=[];})),a.forEach(A);}(r,o.target,o.anchor),v();}var f,T;g(E);}let y;function x(e,t,n,i){const s=n[e]?.type;if(t="Boolean"===s&&"boolean"!=typeof t?null!=t:t,!i||!n[e])return t;if("toAttribute"===i)switch(s){case"Object":case"Array":return null==t?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return null==t?null:t;default:return t}else switch(s){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":default:return t;case"Number":return null!=t?+t:t}}function D(e,t,n,i,s,r){let o=class extends y{constructor(){super(e,n,s),this.$$p_d=t;}static get observedAttributes(){return Object.keys(t).map((e=>(t[e].attribute||e).toLowerCase()))}};return Object.keys(t).forEach((e=>{Object.defineProperty(o.prototype,e,{get(){return this.$$c&&e in this.$$c?this.$$c[e]:this.$$d[e]},set(n){n=x(e,n,t),this.$$d[e]=n,this.$$c?.$set({[e]:n});}});})),i.forEach((e=>{Object.defineProperty(o.prototype,e,{get(){return this.$$c?.[e]}});})),r&&(o=r(o)),e.element=o,o}"function"==typeof HTMLElement&&(y=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"});}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const n=this.$$c.$on(e,t);this.$$l_u.set(t,n);}super.addEventListener(e,t,n);}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const e=this.$$l_u.get(t);e&&(e(),this.$$l_u.delete(t));}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){if(await Promise.resolve(),!this.$$cn)return;function e(e){return ()=>{let t;return {c:function(){t=m("slot"),"default"!==e&&E(t,"name",e);},m:function(e,n){d(e,t,n);},d:function(e){e&&h(t);}}}}const t={},n=function(e){const t={};return e.childNodes.forEach((e=>{t[e.slot||"default"]=!0;})),t}(this);for(const s of this.$$s)s in n&&(t[s]=[e(s)]);for(const r of this.attributes){const o=this.$$g_p(r.name);o in this.$$d||(this.$$d[o]=x(o,r.value,this.$$p_d,"toProp"));}for(const a in this.$$p_d)a in this.$$d||void 0===this[a]||(this.$$d[a]=this[a],delete this[a]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const i=()=>{this.$$r=!0;for(const e in this.$$p_d)if(this.$$d[e]=this.$$c.$$.ctx[this.$$c.$$.props[e]],this.$$p_d[e].reflect){const t=x(e,this.$$d[e],this.$$p_d,"toAttribute");null==t?this.removeAttribute(this.$$p_d[e].attribute||e):this.setAttribute(this.$$p_d[e].attribute||e,t);}this.$$r=!1;};this.$$c.$$.after_update.push(i),i();for(const c in this.$$l)for(const u of this.$$l[c]){const l=this.$$c.$on(c,u);this.$$l_u.set(u,l);}this.$$l={};}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=x(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}));}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0);}));}$$g_p(e){return Object.keys(this.$$p_d).find((t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e))||e}});class k{$$=void 0;$$set=void 0;$destroy(){N(this,1),this.$destroy=e;}$on(t,n){if(!s(n))return e;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const e=i.indexOf(n);-1!==e&&i.splice(e,1);}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1);}}var M,Q;"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4"),function(e){e.CUSTOM_MESSAGE="custom-message",e.GET_CONTEXT_REQUEST="get-context-request",e.NAVIGATION_REQUEST="navigation-request",e.ALERT_REQUEST="show-alert-request",e.ALERT_CLOSED="close-alert-request",e.INITIALIZED="initialized",e.ADD_SEARCH_PARAMS_REQUEST="add-search-params-request",e.ADD_NODE_PARAMS_REQUEST="add-node-params-request",e.SHOW_CONFIRMATION_MODAL_REQUEST="show-confirmation-modal-request",e.SHOW_LOADING_INDICATOR_REQUEST="show-loading-indicator-request",e.HIDE_LOADING_INDICATOR_REQUEST="hide-loading-indicator-request",e.SET_CURRENT_LOCALE_REQUEST="set-current-locale-request",e.LOCAL_STORAGE_SET_REQUEST="set-storage-request",e.RUNTIME_ERROR_HANDLING_REQUEST="runtime-error-handling-request",e.SET_ANCHOR_LINK_REQUEST="set-anchor-request",e.SET_THIRD_PARTY_COOKIES_REQUEST="set-third-party-cookies-request",e.BACK_NAVIGATION_REQUEST="navigate-back-request",e.GET_CURRENT_ROUTE_REQUEST="get-current-route-request",e.NAVIGATION_COMPLETED_REPORT="report-navigation-completed-request",e.UPDATE_MODAL_PATH_DATA_REQUEST="update-modal-path-data-request",e.CHECK_PATH_EXISTS_REQUEST="check-path-exists-request",e.SET_DIRTY_STATUS_REQUEST="set-dirty-status-request";}(M||(M={})),function(e){e.CUSTOM_MESSAGE="custom",e.GET_CONTEXT="luigi.get-context",e.SEND_CONTEXT_HANDSHAKE="luigi.init",e.CONTEXT_RECEIVED="luigi.init.ok",e.NAVIGATION_REQUEST="luigi.navigation.open",e.ALERT_REQUEST="luigi.ux.alert.show",e.ALERT_CLOSED="luigi.ux.alert.hide",e.INITIALIZED="luigi.init.ok",e.ADD_SEARCH_PARAMS_REQUEST="luigi.addSearchParams",e.ADD_NODE_PARAMS_REQUEST="luigi.addNodeParams",e.SHOW_CONFIRMATION_MODAL_REQUEST="luigi.ux.confirmationModal.show",e.SHOW_LOADING_INDICATOR_REQUEST="luigi.show-loading-indicator",e.HIDE_LOADING_INDICATOR_REQUEST="luigi.hide-loading-indicator",e.SET_CURRENT_LOCALE_REQUEST="luigi.ux.set-current-locale",e.LOCAL_STORAGE_SET_REQUEST="storage",e.RUNTIME_ERROR_HANDLING_REQUEST="luigi-runtime-error-handling",e.SET_ANCHOR_LINK_REQUEST="luigi.setAnchor",e.SET_THIRD_PARTY_COOKIES_REQUEST="luigi.third-party-cookie",e.BACK_NAVIGATION_REQUEST="luigi.navigation.back",e.GET_CURRENT_ROUTE_REQUEST="luigi.navigation.currentRoute",e.SEND_CONTEXT_OBJECT="luigi.navigate",e.NAVIGATION_COMPLETED_REPORT="luigi.navigate.ok",e.UPDATE_MODAL_PATH_DATA_REQUEST="luigi.navigation.updateModalDataPath",e.CHECK_PATH_EXISTS_REQUEST="luigi.navigation.pathExists",e.SET_DIRTY_STATUS_REQUEST="luigi.set-page-dirty";}(Q||(Q={}));const H=new class{isFunction(e){return e&&"[object Function]"==={}.toString.call(e)}isObject(e){return !(!e||"object"!=typeof e||Array.isArray(e))}checkWebcomponentValue(e){return "string"==typeof e?JSON.parse(e):"boolean"==typeof e||"object"==typeof e?e:void console.warn("Webcomponent value has a wrong type.")}resolveContext(e){return e?"string"==typeof e?JSON.parse(e):e:{}}};class W{isVisible(e){return !!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}sendCustomMessageToIframe(e,t,n){const i=n||"custom";if(e.iframe.contentWindow){const n=new URL(e.iframe.src);"custom"===i?e.iframe.contentWindow.postMessage({msg:i,data:t},n.origin):e.iframe.contentWindow.postMessage(Object.assign({msg:i},t),n.origin);}else console.error("Message target could not be resolved");}dispatch(e,t,n,i,s){const r=new CustomEvent(e,{detail:n});i&&H.isFunction(i)&&s&&(r[s]=e=>{i(e);}),t.dispatchEvent(r);}getTargetContainer(e){let t;return globalThis.__luigi_container_manager.container.forEach((n=>{var i;(null===(i=n.iframeHandle)||void 0===i?void 0:i.iframe)&&n.iframeHandle.iframe.contentWindow===e.source&&(t=n);})),t}getContainerManager(){return globalThis.__luigi_container_manager||(globalThis.__luigi_container_manager={container:[],messageListener:e=>{var t,n;const i=this.getTargetContainer(e),s=null===(n=null===(t=null==i?void 0:i.iframeHandle)||void 0===t?void 0:t.iframe)||void 0===n?void 0:n.contentWindow;if(s&&s===e.source){const t=e.data.msg;switch(t){case Q.CUSTOM_MESSAGE:{const t=e.data.data,n=t.id;delete t.id,this.dispatch(M.CUSTOM_MESSAGE,i,{id:n,_metaData:{},data:t});}break;case Q.GET_CONTEXT:s.postMessage({msg:Q.SEND_CONTEXT_HANDSHAKE,context:i.context||{},internal:{}},"*");break;case Q.NAVIGATION_REQUEST:this.dispatch(M.NAVIGATION_REQUEST,i,e.data.params);break;case Q.ALERT_REQUEST:this.dispatch(M.ALERT_REQUEST,i,e);break;case Q.INITIALIZED:this.dispatch(M.INITIALIZED,i,e.data.params);break;case Q.ADD_SEARCH_PARAMS_REQUEST:this.dispatch(M.ADD_SEARCH_PARAMS_REQUEST,i,{data:e.data.data,keepBrowserHistory:e.data.keepBrowserHistory});break;case Q.ADD_NODE_PARAMS_REQUEST:this.dispatch(M.ADD_NODE_PARAMS_REQUEST,i,{data:e.data.data,keepBrowserHistory:e.data.keepBrowserHistory});break;case Q.SHOW_CONFIRMATION_MODAL_REQUEST:this.dispatch(M.SHOW_CONFIRMATION_MODAL_REQUEST,i,e.data.data);break;case Q.SHOW_LOADING_INDICATOR_REQUEST:this.dispatch(M.SHOW_LOADING_INDICATOR_REQUEST,i,e);break;case Q.HIDE_LOADING_INDICATOR_REQUEST:this.dispatch(M.HIDE_LOADING_INDICATOR_REQUEST,i,e);break;case Q.SET_CURRENT_LOCALE_REQUEST:this.dispatch(M.SET_CURRENT_LOCALE_REQUEST,i,e);break;case Q.LOCAL_STORAGE_SET_REQUEST:this.dispatch(M.LOCAL_STORAGE_SET_REQUEST,i,e);break;case Q.RUNTIME_ERROR_HANDLING_REQUEST:this.dispatch(M.RUNTIME_ERROR_HANDLING_REQUEST,i,e);break;case Q.SET_ANCHOR_LINK_REQUEST:this.dispatch(M.SET_ANCHOR_LINK_REQUEST,i,e);break;case Q.SET_THIRD_PARTY_COOKIES_REQUEST:this.dispatch(M.SET_THIRD_PARTY_COOKIES_REQUEST,i,e);break;case Q.BACK_NAVIGATION_REQUEST:this.dispatch(M.BACK_NAVIGATION_REQUEST,i,e);break;case Q.GET_CURRENT_ROUTE_REQUEST:this.dispatch(M.GET_CURRENT_ROUTE_REQUEST,i,e);break;case Q.NAVIGATION_COMPLETED_REPORT:this.dispatch(M.NAVIGATION_COMPLETED_REPORT,i,e);break;case Q.UPDATE_MODAL_PATH_DATA_REQUEST:this.dispatch(M.UPDATE_MODAL_PATH_DATA_REQUEST,i,e);break;case Q.CHECK_PATH_EXISTS_REQUEST:this.dispatch(M.CHECK_PATH_EXISTS_REQUEST,i,e);break;case Q.SET_DIRTY_STATUS_REQUEST:this.dispatch(M.SET_DIRTY_STATUS_REQUEST,i,e);break;default:console.warn("Functionality not yet implemented: ",t);}}}},window.addEventListener("message",globalThis.__luigi_container_manager.messageListener)),globalThis.__luigi_container_manager}registerContainer(e){this.getContainerManager().container.push(e);}}const G=new W;class j{constructor(e){e?(this.rendererObject=e,this.config=e.config||{}):this.config={};}createCompoundContainer(){return document.createElement("div")}createCompoundItemContainer(e){return document.createElement("div")}attachCompoundItem(e,t){e.appendChild(t);}}class q extends j{constructor(e){super(e||{use:{}}),e&&e.use&&e.use.extends&&(this.superRenderer=B({use:e.use.extends,config:e.config}));}createCompoundContainer(){return this.rendererObject.use.createCompoundContainer?this.rendererObject.use.createCompoundContainer(this.config,this.superRenderer):this.superRenderer?this.superRenderer.createCompoundContainer():super.createCompoundContainer()}createCompoundItemContainer(e){return this.rendererObject.use.createCompoundItemContainer?this.rendererObject.use.createCompoundItemContainer(e,this.config,this.superRenderer):this.superRenderer?this.superRenderer.createCompoundItemContainer(e):super.createCompoundItemContainer(e)}attachCompoundItem(e,t){this.rendererObject.use.attachCompoundItem?this.rendererObject.use.attachCompoundItem(e,t,this.superRenderer):this.superRenderer?this.superRenderer.attachCompoundItem(e,t):super.attachCompoundItem(e,t);}}class F extends j{createCompoundContainer(){const e="__lui_compound_"+(new Date).getTime(),t=document.createElement("div");t.classList.add(e);let n="";return this.config.layouts&&this.config.layouts.forEach((t=>{if(t.minWidth||t.maxWidth){let i="@media only screen ";null!=t.minWidth&&(i+=`and (min-width: ${t.minWidth}px) `),null!=t.maxWidth&&(i+=`and (max-width: ${t.maxWidth}px) `),i+=`{\n            .${e} {\n              grid-template-columns: ${t.columns||"auto"};\n              grid-template-rows: ${t.rows||"auto"};\n              grid-gap: ${t.gap||"0"};\n            }\n          }\n          `,n+=i;}})),t.innerHTML=`\n        <style scoped>\n          .${e} {\n            display: grid;\n            grid-template-columns: ${this.config.columns||"auto"};\n            grid-template-rows: ${this.config.rows||"auto"};\n            grid-gap: ${this.config.gap||"0"};\n            min-height: ${this.config.minHeight||"auto"};\n          }\n          ${n}\n        </style>\n    `,t}createCompoundItemContainer(e){const t=e||{},n=document.createElement("div");return n.setAttribute("style",`grid-row: ${t.row||"auto"}; grid-column: ${t.column||"auto"}`),n}}const B=e=>{const t=e.use;return t?"grid"===t?new F(e):t.createCompoundContainer||t.createCompoundItemContainer||t.attachCompoundItem?new q(e):new j(e):new j(e)},V=(e,t,n,i)=>{(null==t?void 0:t.eventListeners)&&t.eventListeners.forEach((t=>{const s=t.source+"."+t.name,r=e[s],o={wcElementId:n,wcElement:i,action:t.action,converter:t.dataConverter};r?r.push(o):e[s]=[o];}));};function K(e){return String(e).replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&quot;",'"').replaceAll("&#39;","'").replaceAll("&sol;","/")}class X{constructor(){this.containerService=new W;}dynamicImport(e){return Object.freeze(import(/* webpackIgnore: true */e))}processViewUrl(e,t){return e}attachWC(e,t,n,i,s,r,o){if(n&&n.contains(t)){const a=document.createElement(e);r&&a.setAttribute("nodeId",r),this.initWC(a,e,n,s,i,r,o),n.replaceChild(a,t),n._luigi_node&&(n._luigi_mfe_webcomponent=a),n.dispatchEvent(new Event("wc_ready"));}}dispatchLuigiEvent(e,t,n){this.containerService.dispatch(e,this.thisComponent,t,n);}createClientAPI(e,t,n,i,s){return {linkManager:()=>({navigate:e=>{this.dispatchLuigiEvent(M.NAVIGATION_REQUEST,{link:e});}}),uxManager:()=>({showAlert:e=>{this.dispatchLuigiEvent(M.ALERT_REQUEST,e);},showConfirmationModal:async e=>new Promise(((t,n)=>{this.dispatchLuigiEvent(M.SHOW_CONFIRMATION_MODAL_REQUEST,e,(e=>{e?t(e):n(new Error("No data"));}));})),getCurrentTheme:()=>this.thisComponent.theme}),getCurrentLocale:()=>this.thisComponent.locale,getActiveFeatureToggles:()=>this.thisComponent.activeFeatureToggleList||[],publishEvent:s=>{e&&e.eventBus&&e.eventBus.onPublishEvent(s,t,n);const r={id:s.type,_metaData:{nodeId:t,wc_id:n,src:i},data:s.detail};this.dispatchLuigiEvent(M.CUSTOM_MESSAGE,r);},luigiClientInit:()=>{this.dispatchLuigiEvent(M.INITIALIZED,{});},addNodeParams:(e,t)=>{s||this.dispatchLuigiEvent(M.ADD_NODE_PARAMS_REQUEST,{params:e,keepBrowserHistory:t});},getNodeParams:e=>{return s?{}:e?(t=this.thisComponent.nodeParams,Object.entries(t).reduce(((e,t)=>(e[K(t[0])]=K(t[1]),e)),{})):this.thisComponent.nodeParams||{};var t;},setAnchor:e=>{s||this.dispatchLuigiEvent(M.SET_ANCHOR_LINK_REQUEST,e);},getAnchor:()=>this.thisComponent.anchor||"",getCoreSearchParams:()=>this.thisComponent.searchParams||{},getPathParams:()=>this.thisComponent.pathParams||{},getClientPermissions:()=>this.thisComponent.clientPermissions||{},getUserSettings:()=>this.thisComponent.userSettings||{}}}initWC(e,t,n,i,s,r,o){const a=this.createClientAPI(n,r,t,e,o);if(e.__postProcess){const t=new URL(document.baseURI).origin===new URL(i,document.baseURI).origin?new URL("./",new URL(i,document.baseURI)):new URL("./",i);e.__postProcess(s,a,t.origin+t.pathname);}else e.context=s,e.LuigiClient=a;}generateWCId(e){let t="";const n=new URL(e,encodeURI(location.href)).href;for(let e=0;e<n.length;e++)t+=n.charCodeAt(e).toString(16);return "luigi-wc-"+t}registerWCFromUrl(e,t){const n=this.processViewUrl(e);return new Promise(((e,i)=>{if(this.checkWCUrl(n))this.dynamicImport(n).then((n=>{try{if(!window.customElements.get(t)){let e=n.default;if(!HTMLElement.isPrototypeOf(e)){const t=Object.keys(n);for(let i=0;i<t.length&&(e=n[t[i]],!HTMLElement.isPrototypeOf(e));i++);}window.customElements.define(t,e);}e(1);}catch(e){i(e);}})).catch((e=>{i(e);}));else {i(`Error: View URL '${n}' not allowed to be included`);}}))}includeSelfRegisteredWCFromUrl(e,t,n){if(this.checkWCUrl(t)){this.containerService.getContainerManager()._registerWebcomponent||(this.containerService.getContainerManager()._registerWebcomponent=(e,t)=>{window.customElements.define(this.generateWCId(e),t);}),window.Luigi||(window.Luigi={},window.Luigi._registerWebcomponent||(window.Luigi._registerWebcomponent=(e,t)=>{this.containerService.getContainerManager()._registerWebcomponent(e,t);}));const i=document.createElement("script");i.setAttribute("src",t),"module"===e.webcomponent.type&&i.setAttribute("type","module"),i.setAttribute("defer","true"),i.addEventListener("load",(()=>{n();})),document.body.appendChild(i);}else console.warn(`View URL '${t}' not allowed to be included`);}checkWCUrl(e){return !0}renderWebComponent(e,t,n,i,s,r){var o;const a=this.processViewUrl(e,{context:n}),c=(null===(o=null==i?void 0:i.webcomponent)||void 0===o?void 0:o.tagName)||this.generateWCId(a),u=document.createElement("div");t.appendChild(u),t._luigi_node=i,window.customElements.get(c)?this.attachWC(c,u,t,n,a,s,r):window.luigiWCFn?window.luigiWCFn(a,c,u,(()=>{this.attachWC(c,u,t,n,a,s,r);})):i.webcomponent&&i.webcomponent.selfRegistered?this.includeSelfRegisteredWCFromUrl(i,a,(()=>{this.attachWC(c,u,t,n,a,s,r);})):this.registerWCFromUrl(a,c).then((()=>{this.attachWC(c,u,t,n,a,s,r);})).catch((e=>{console.warn("ERROR =>",e),this.containerService.dispatch(M.RUNTIME_ERROR_HANDLING_REQUEST,this.thisComponent,e);}));}createCompoundContainerAsync(e,t,n){return new Promise(((i,s)=>{var r;if(e.viewUrl)try{const s=(null===(r=null==n?void 0:n.webcomponent)||void 0===r?void 0:r.tagName)||this.generateWCId(e.viewUrl);n.webcomponent&&n.webcomponent.selfRegistered?this.includeSelfRegisteredWCFromUrl(n,e.viewUrl,(()=>{const n=document.createElement(s);this.initWC(n,s,n,e.viewUrl,t,"_root"),i(n);})):this.registerWCFromUrl(e.viewUrl,s).then((()=>{const n=document.createElement(s);this.initWC(n,s,n,e.viewUrl,t,"_root"),i(n);})).catch((e=>{console.warn("Error: ",e),this.containerService.dispatch(M.RUNTIME_ERROR_HANDLING_REQUEST,this.thisComponent,e);}));}catch(e){s(e);}else i(e.createCompoundContainer());}))}renderWebComponentCompound(e,t,n){var i;let s;return e.webcomponent&&e.viewUrl?(s=new j,s.viewUrl=this.processViewUrl(e.viewUrl,{context:n}),s.createCompoundItemContainer=e=>{const t=document.createElement("div");return e&&e.slot&&t.setAttribute("slot",e.slot),t}):(null===(i=e.compound)||void 0===i?void 0:i.renderer)&&(s=B(e.compound.renderer)),s=s||new j,new Promise((i=>{this.createCompoundContainerAsync(s,n,e).then((r=>{var o;t._luigi_mfe_webcomponent=r,t._luigi_node=e;const a={};r.eventBus={listeners:a,onPublishEvent:(e,t,n)=>{const i=a[t+"."+e.type]||[];i.push(...a["*."+e.type]||[]),i.forEach((t=>{const n=t.wcElement||r.querySelector("[nodeId="+t.wcElementId+"]");n?n.dispatchEvent(new CustomEvent(t.action,{detail:t.converter?t.converter(e.detail):e.detail})):console.debug("Could not find event target",t);}));}},null===(o=e.compound)||void 0===o||o.children.forEach(((e,t)=>{const i=Object.assign(Object.assign({},n),e.context),o=s.createCompoundItemContainer(e.layoutConfig);o.eventBus=r.eventBus,s.attachCompoundItem(r,o);const c=e.id||"gen_"+t;this.renderWebComponent(e.viewUrl,o,i,e,c,!0),V(a,e,c);})),t.appendChild(r),V(a,e.compound,"_root",r),i(r);})).catch((e=>{console.warn("Error: ",e),this.containerService.dispatch(M.RUNTIME_ERROR_HANDLING_REQUEST,this.thisComponent,e);}));}))}}const z=new class{constructor(){this.updateContext=(e,t,n)=>{if(n){const i=t||{};G.sendCustomMessageToIframe(n,{context:e,internal:i,withoutSync:!0},Q.SEND_CONTEXT_OBJECT);}else console.warn("Attempting to update context on inexisting iframe");},this.sendCustomMessage=(e,t,n,i,s)=>{if(n&&t._luigi_mfe_webcomponent)G.dispatch(e,t._luigi_mfe_webcomponent,s);else {const t=Object.assign({},s);t.id&&console.warn('Property "id" is reserved and can not be used in custom message data'),t.id=e,G.sendCustomMessageToIframe(i,t);}};}closeAlert(e,t,n){G.sendCustomMessageToIframe(n,{id:e,dismissKey:t},Q.ALERT_CLOSED);}};function Z(e){l(e,"svelte-nm2qba","main.svelte-nm2qba,iframe.svelte-nm2qba{width:100%;height:100%;border:none}main.lui-isolated.svelte-nm2qba{line-height:0}");}function J(e){let t,n=!e[2]&&Y(e);return {c(){n&&n.c(),t=p();},m(e,i){n&&n.m(e,i),d(e,t,i);},p(e,i){e[2]?n&&(n.d(1),n=null):n?n.p(e,i):(n=Y(e),n.c(),n.m(t.parentNode,t));},d(e){e&&h(t),n&&n.d(e);}}}function Y(e){let t,n;return {c(){t=m("iframe"),c(t.src,n=e[0])||E(t,"src",n),E(t,"title",e[1]),E(t,"class","svelte-nm2qba");},m(n,i){d(n,t,i),e[19](t);},p(e,i){1&i&&!c(t.src,n=e[0])&&E(t,"src",n),2&i&&E(t,"title",e[1]);},d(n){n&&h(t),e[19](null);}}}function ee(t){let n,i,s=t[5]&&J(t);return {c(){n=m("main"),s&&s.c(),E(n,"class",i=u(t[2]?void 0:"lui-isolated")+" svelte-nm2qba");},m(e,i){d(e,n,i),s&&s.m(n,null),t[20](n);},p(e,[t]){e[5]?s?s.p(e,t):(s=J(e),s.c(),s.m(n,null)):s&&(s.d(1),s=null),4&t&&i!==(i=u(e[2]?void 0:"lui-isolated")+" svelte-nm2qba")&&E(n,"class",i);},i:e,o:e,d(e){e&&h(n),s&&s.d(),t[20](null);}}}function te(e,t,n){let{viewurl:i}=t,{context:s}=t,{label:r}=t,{webcomponent:o}=t,{deferInit:a}=t,{locale:c}=t,{theme:u}=t,{activeFeatureToggleList:l}=t,{skipInitCheck:d}=t,{nodeParams:h}=t,{searchParams:m}=t,{pathParams:p}=t,{clientPermissions:E}=t,{userSettings:g}=t,{anchor:f}=t;const C={};let R,b=!1;const S=new X,A=e=>{if(!b){e.sendCustomMessage=(e,t)=>{z.sendCustomMessage(e,R,!!o,C,t);},e.updateContext=(e,t)=>{o?n(4,R._luigi_mfe_webcomponent.context=e,R):z.updateContext(e,t,C);},e.closeAlert=(e,t)=>{z.closeAlert(e,t,C);},G.registerContainer(e),S.thisComponent=e;const t=H.resolveContext(s);if(o){n(4,R.innerHTML="",R);const e=H.checkWebcomponentValue(o);S.renderWebComponent(i,R,t,"object"==typeof e?{webcomponent:e}:{});}d?(e.initialized=!0,setTimeout((()=>{S.dispatchLuigiEvent(M.INITIALIZED,{});}))):o&&R.addEventListener("wc_ready",(()=>{var t;(null===(t=R._luigi_mfe_webcomponent)||void 0===t?void 0:t.deferLuigiClientWCInit)||(e.initialized=!0,S.dispatchLuigiEvent(M.INITIALIZED,{}));})),n(5,b=!0),e.containerInitialized=!0;}};var I;return $((async()=>{const e=R.getRootNode().host;e.iframeHandle=C,e.init=()=>{A(e);},a||A(e);})),I=async()=>{},_().$$.on_destroy.push(I),e.$$set=e=>{"viewurl"in e&&n(0,i=e.viewurl),"context"in e&&n(6,s=e.context),"label"in e&&n(1,r=e.label),"webcomponent"in e&&n(2,o=e.webcomponent),"deferInit"in e&&n(7,a=e.deferInit),"locale"in e&&n(8,c=e.locale),"theme"in e&&n(9,u=e.theme),"activeFeatureToggleList"in e&&n(10,l=e.activeFeatureToggleList),"skipInitCheck"in e&&n(11,d=e.skipInitCheck),"nodeParams"in e&&n(12,h=e.nodeParams),"searchParams"in e&&n(13,m=e.searchParams),"pathParams"in e&&n(14,p=e.pathParams),"clientPermissions"in e&&n(15,E=e.clientPermissions),"userSettings"in e&&n(16,g=e.userSettings),"anchor"in e&&n(17,f=e.anchor);},[i,r,o,C,R,b,s,a,c,u,l,d,h,m,p,E,g,f,()=>c&&u&&l&&h&&m&&p&&E&&g&&f,function(e){T[e?"unshift":"push"]((()=>{C.iframe=e,n(3,C);}));},function(e){T[e?"unshift":"push"]((()=>{R=e,n(4,R);}));}]}class ne extends k{constructor(e){super(),L(this,e,te,ee,r,{viewurl:0,context:6,label:1,webcomponent:2,deferInit:7,locale:8,theme:9,activeFeatureToggleList:10,skipInitCheck:11,nodeParams:12,searchParams:13,pathParams:14,clientPermissions:15,userSettings:16,anchor:17,unwarn:18},Z);}get viewurl(){return this.$$.ctx[0]}set viewurl(e){this.$$set({viewurl:e}),v();}get context(){return this.$$.ctx[6]}set context(e){this.$$set({context:e}),v();}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),v();}get webcomponent(){return this.$$.ctx[2]}set webcomponent(e){this.$$set({webcomponent:e}),v();}get deferInit(){return this.$$.ctx[7]}set deferInit(e){this.$$set({deferInit:e}),v();}get locale(){return this.$$.ctx[8]}set locale(e){this.$$set({locale:e}),v();}get theme(){return this.$$.ctx[9]}set theme(e){this.$$set({theme:e}),v();}get activeFeatureToggleList(){return this.$$.ctx[10]}set activeFeatureToggleList(e){this.$$set({activeFeatureToggleList:e}),v();}get skipInitCheck(){return this.$$.ctx[11]}set skipInitCheck(e){this.$$set({skipInitCheck:e}),v();}get nodeParams(){return this.$$.ctx[12]}set nodeParams(e){this.$$set({nodeParams:e}),v();}get searchParams(){return this.$$.ctx[13]}set searchParams(e){this.$$set({searchParams:e}),v();}get pathParams(){return this.$$.ctx[14]}set pathParams(e){this.$$set({pathParams:e}),v();}get clientPermissions(){return this.$$.ctx[15]}set clientPermissions(e){this.$$set({clientPermissions:e}),v();}get userSettings(){return this.$$.ctx[16]}set userSettings(e){this.$$set({userSettings:e}),v();}get anchor(){return this.$$.ctx[17]}set anchor(e){this.$$set({anchor:e}),v();}get unwarn(){return this.$$.ctx[18]}}function ie(e){l(e,"svelte-1buc46y","main.svelte-1buc46y{width:100%;height:100%;border:none}");}function se(t){let n;return {c(){n=m("main"),E(n,"class","svelte-1buc46y");},m(e,i){d(e,n,i),t[13](n);},p:e,i:e,o:e,d(e){e&&h(n),t[13](null);}}}function re(e,t,n){let i,s,{viewurl:r}=t,{webcomponent:o}=t,{context:a}=t,{deferInit:c}=t,{compoundConfig:u}=t,{nodeParams:l}=t,{searchParams:d}=t,{pathParams:h}=t,{clientPermissions:m}=t,{userSettings:p}=t,{anchor:E}=t,g=!1;const _=new W,f=new X,C=e=>{if(!u||g)return;e.updateContext=(e,t)=>{n(0,i._luigi_mfe_webcomponent.context=e,i);};const t=H.resolveContext(a);n(1,c=!1);const l={compound:u,viewUrl:r,webcomponent:H.checkWebcomponentValue(o)||!0};f.renderWebComponentCompound(l,i,t).then((t=>{s=t,e.hasAttribute("skip-init-check")||!l.viewUrl?(e.initialized=!0,setTimeout((()=>{f.dispatchLuigiEvent(M.INITIALIZED,{});}))):s.LuigiClient&&!s.deferLuigiClientWCInit&&(e.initialized=!0,f.dispatchLuigiEvent(M.INITIALIZED,{}));})),g=!0,e.containerInitialized=!0;};return $((async()=>{const e=i.getRootNode().host;e.init=()=>{C(e);},c||C(e),_.registerContainer(e),f.thisComponent=e;})),e.$$set=e=>{"viewurl"in e&&n(2,r=e.viewurl),"webcomponent"in e&&n(3,o=e.webcomponent),"context"in e&&n(4,a=e.context),"deferInit"in e&&n(1,c=e.deferInit),"compoundConfig"in e&&n(5,u=e.compoundConfig),"nodeParams"in e&&n(6,l=e.nodeParams),"searchParams"in e&&n(7,d=e.searchParams),"pathParams"in e&&n(8,h=e.pathParams),"clientPermissions"in e&&n(9,m=e.clientPermissions),"userSettings"in e&&n(10,p=e.userSettings),"anchor"in e&&n(11,E=e.anchor);},[i,c,r,o,a,u,l,d,h,m,p,E,()=>l&&d&&h&&m&&p&&E,function(e){T[e?"unshift":"push"]((()=>{i=e,n(0,i);}));}]}D(ne,{viewurl:{type:"String",reflect:!1,attribute:"viewurl"},context:{type:"String",reflect:!1,attribute:"context"},label:{type:"String",reflect:!1,attribute:"label"},webcomponent:{type:"String",reflect:!1,attribute:"webcomponent"},deferInit:{type:"Boolean",attribute:"defer-init"},locale:{type:"String",reflect:!1,attribute:"locale"},theme:{type:"String",reflect:!1,attribute:"theme"},activeFeatureToggleList:{type:"Array",reflect:!1,attribute:"active-feature-toggle-list"},skipInitCheck:{type:"Boolean",reflect:!1,attribute:"skip-init-check"},nodeParams:{type:"Object",reflect:!1,attribute:"node-params"},searchParams:{type:"Object",reflect:!1,attribute:"search-params"},pathParams:{type:"Object",reflect:!1,attribute:"path-params"},clientPermissions:{type:"Object",reflect:!1,attribute:"client-permissions"},userSettings:{type:"Object",reflect:!1,attribute:"user-settings"},anchor:{type:"String",reflect:!1,attribute:"anchor"}},[],["unwarn"],!0,(e=>{let t=e=>()=>console.warn(e+" can't be called on luigi-container before its micro frontend is attached to the DOM.");return class extends e{sendCustomMessage=t("sendCustomMessage");updateContext=t("updateContext");closeAlert=t("closeAlert");attributeChangedCallback(e,t,n){this.containerInitialized&&"context"===e&&this.updateContext(JSON.parse(n));}}}));class oe extends k{constructor(e){super(),L(this,e,re,se,r,{viewurl:2,webcomponent:3,context:4,deferInit:1,compoundConfig:5,nodeParams:6,searchParams:7,pathParams:8,clientPermissions:9,userSettings:10,anchor:11,unwarn:12},ie);}get viewurl(){return this.$$.ctx[2]}set viewurl(e){this.$$set({viewurl:e}),v();}get webcomponent(){return this.$$.ctx[3]}set webcomponent(e){this.$$set({webcomponent:e}),v();}get context(){return this.$$.ctx[4]}set context(e){this.$$set({context:e}),v();}get deferInit(){return this.$$.ctx[1]}set deferInit(e){this.$$set({deferInit:e}),v();}get compoundConfig(){return this.$$.ctx[5]}set compoundConfig(e){this.$$set({compoundConfig:e}),v();}get nodeParams(){return this.$$.ctx[6]}set nodeParams(e){this.$$set({nodeParams:e}),v();}get searchParams(){return this.$$.ctx[7]}set searchParams(e){this.$$set({searchParams:e}),v();}get pathParams(){return this.$$.ctx[8]}set pathParams(e){this.$$set({pathParams:e}),v();}get clientPermissions(){return this.$$.ctx[9]}set clientPermissions(e){this.$$set({clientPermissions:e}),v();}get userSettings(){return this.$$.ctx[10]}set userSettings(e){this.$$set({userSettings:e}),v();}get anchor(){return this.$$.ctx[11]}set anchor(e){this.$$set({anchor:e}),v();}get unwarn(){return this.$$.ctx[12]}}D(oe,{viewurl:{type:"String",reflect:!1,attribute:"viewurl"},webcomponent:{},context:{type:"String",reflect:!1,attribute:"context"},deferInit:{type:"Boolean",attribute:"defer-init"},compoundConfig:{type:"Object",reflect:!1,attribute:"compound-config"},nodeParams:{type:"Object",reflect:!1,attribute:"node-params"},searchParams:{type:"Object",reflect:!1,attribute:"search-params"},pathParams:{type:"Object",reflect:!1,attribute:"path-params"},clientPermissions:{type:"Object",reflect:!1,attribute:"client-permissions"},userSettings:{type:"Object",reflect:!1,attribute:"user-settings"},anchor:{type:"String",reflect:!1,attribute:"anchor"}},[],["unwarn"],!0,(e=>class extends e{updateContext=(e=>()=>console.warn(e+" can't be called on luigi-container before its micro frontend is attached to the DOM."))("updateContext");attributeChangedCallback(e,t,n){this.containerInitialized&&"context"===e&&this.updateContext(JSON.parse(n));}}));var ae=M;customElements.get("luigi-container")||customElements.define("luigi-container",ne.element),customElements.get("luigi-compound-container")||customElements.define("luigi-compound-container",oe.element);

	try { Object.defineProperty(ae, "__" + "esModule", { value: true }); ae.default = ae; } catch (ex) {}

	exports.LuigiCompoundContainer = oe;
	exports.LuigiContainer = ne;
	exports.default = ae;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
