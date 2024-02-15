/*! For license information please see 9ff76588.97b9fcee.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[944743],{42087:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=n(824246),s=n(511151);const c={id:"plugin-kubernetes-backend.kubernetesbuilder",title:"KubernetesBuilder",description:"API reference for KubernetesBuilder"},d=void 0,i={id:"reference/plugin-kubernetes-backend.kubernetesbuilder",title:"KubernetesBuilder",description:"API reference for KubernetesBuilder",source:"@site/../docs/reference/plugin-kubernetes-backend.kubernetesbuilder.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-backend.kubernetesbuilder",permalink:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-kubernetes-backend.kubernetesbuilder.md",tags:[],version:"current",frontMatter:{id:"plugin-kubernetes-backend.kubernetesbuilder",title:"KubernetesBuilder",description:"API reference for KubernetesBuilder"}},u={},l=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-kubernetes-backend"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder",children:(0,t.jsx)(r.code,{children:"KubernetesBuilder"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class KubernetesBuilder \n"})}),"\n",(0,t.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Constructor"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder._constructor_",children:"(constructor)(env)"})}),(0,t.jsx)(r.td,{}),(0,t.jsxs)(r.td,{children:["Constructs a new instance of the ",(0,t.jsx)(r.code,{children:"KubernetesBuilder"})," class"]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.env",children:"env"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"readonly"})})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesenvironment",children:"KubernetesEnvironment"})}),(0,t.jsx)(r.td,{})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Method"}),(0,t.jsx)(r.th,{children:"Modifiers"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.addauthstrategy",children:"addAuthStrategy(key, strategy)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.build",children:"build()"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildauthstrategymap",children:"buildAuthStrategyMap()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildclustersupplier",children:"buildClusterSupplier(refreshInterval)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildcustomresources",children:"buildCustomResources()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildfetcher",children:"buildFetcher()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildhttpservicelocator",children:"buildHttpServiceLocator(_clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildmultitenantservicelocator",children:"buildMultiTenantServiceLocator(clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildobjectsprovider",children:"buildObjectsProvider(options)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildproxy",children:"buildProxy(logger, clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildrouter",children:"buildRouter(objectsProvider, clusterSupplier, catalogApi, proxy, permissionApi)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildservicelocator",children:"buildServiceLocator(method, clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.buildsingletenantservicelocator",children:"buildSingleTenantServiceLocator(clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.createbuilder",children:"createBuilder(env)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"static"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.fetchclusterdetails",children:"fetchClusterDetails(clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getauthstrategymap",children:"getAuthStrategyMap()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getclustersupplier",children:"getClusterSupplier()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getfetcher",children:"getFetcher()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getobjectsprovider",children:"getObjectsProvider(options)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getobjecttypestofetch",children:"getObjectTypesToFetch()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getproxy",children:"getProxy(logger, clusterSupplier)"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getservicelocator",children:"getServiceLocator()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.getservicelocatormethod",children:"getServiceLocatorMethod()"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"protected"})}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setauthstrategymap",children:"setAuthStrategyMap(authStrategyMap)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setclustersupplier",children:"setClusterSupplier(clusterSupplier)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setdefaultclusterrefreshinterval",children:"setDefaultClusterRefreshInterval(refreshInterval)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setfetcher",children:"setFetcher(fetcher)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setobjectsprovider",children:"setObjectsProvider(objectsProvider)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setproxy",children:"setProxy(proxy)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-backend.kubernetesbuilder.setservicelocator",children:"setServiceLocator(serviceLocator)"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},371426:(e,r,n)=>{var t=n(827378),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,c={},l=null,o=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(o=r.ref),r)d.call(r,t)&&!u.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:o,props:c,_owner:i.current}}r.Fragment=c,r.jsx=l,r.jsxs=l},541535:(e,r)=>{var n=Symbol.for("react.element"),t=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),o=Symbol.for("react.suspense"),a=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p=Object.assign,j={};function x(e,r,n){this.props=e,this.context=r,this.refs=j,this.updater=n||b}function k(){}function y(e,r,n){this.props=e,this.context=r,this.refs=j,this.updater=n||b}x.prototype.isReactComponent={},x.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=x.prototype;var g=y.prototype=new k;g.constructor=y,p(g,x.prototype),g.isPureReactComponent=!0;var v=Array.isArray,m=Object.prototype.hasOwnProperty,_={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,t){var s,c={},d=null,i=null;if(null!=r)for(s in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(d=""+r.key),r)m.call(r,s)&&!S.hasOwnProperty(s)&&(c[s]=r[s]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var l=Array(u),o=0;o<u;o++)l[o]=arguments[o+2];c.children=l}if(e&&e.defaultProps)for(s in u=e.defaultProps)void 0===c[s]&&(c[s]=u[s]);return{$$typeof:n,type:e,key:d,ref:i,props:c,_owner:_.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,s,c,d){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case t:u=!0}}if(u)return d=d(u=e),e=""===c?"."+w(u,0):c,v(d)?(s="",null!=e&&(s=e.replace(P,"$&/")+"/"),R(d,r,s,"",(function(e){return e}))):null!=d&&(E(d)&&(d=function(e,r){return{$$typeof:n,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(d,s+(!d.key||u&&u.key===d.key?"":(""+d.key).replace(P,"$&/")+"/")+e)),r.push(d)),1;if(u=0,c=""===c?".":c+":",v(e))for(var l=0;l<e.length;l++){var o=c+w(i=e[l],l);u+=R(i,r,s,o,d)}else if(o=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof o)for(e=o.call(e),l=0;!(i=e.next()).done;)u+=R(i=i.value,r,s,o=c+w(i,l++),d);else if("object"===i)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return u}function O(e,r,n){if(null==e)return e;var t=[],s=0;return R(e,t,"","",(function(e){return r.call(n,e,s++)})),t}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},M={transition:null},A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:M,ReactCurrentOwner:_};r.Children={map:O,forEach:function(e,r,n){O(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return O(e,(function(){r++})),r},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=x,r.Fragment=s,r.Profiler=d,r.PureComponent=y,r.StrictMode=c,r.Suspense=o,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=p({},e.props),c=e.key,d=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(d=r.ref,i=_.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in r)m.call(r,l)&&!S.hasOwnProperty(l)&&(s[l]=void 0===r[l]&&void 0!==u?u[l]:r[l])}var l=arguments.length-2;if(1===l)s.children=t;else if(1<l){u=Array(l);for(var o=0;o<l;o++)u[o]=arguments[o+2];s.children=u}return{$$typeof:n,type:e.type,key:c,ref:d,props:s,_owner:i}},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:l,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=M.transition;M.transition={};try{e()}finally{M.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return I.current.useCallback(e,r)},r.useContext=function(e){return I.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return I.current.useDeferredValue(e)},r.useEffect=function(e,r){return I.current.useEffect(e,r)},r.useId=function(){return I.current.useId()},r.useImperativeHandle=function(e,r,n){return I.current.useImperativeHandle(e,r,n)},r.useInsertionEffect=function(e,r){return I.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return I.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return I.current.useMemo(e,r)},r.useReducer=function(e,r,n){return I.current.useReducer(e,r,n)},r.useRef=function(e){return I.current.useRef(e)},r.useState=function(e){return I.current.useState(e)},r.useSyncExternalStore=function(e,r,n){return I.current.useSyncExternalStore(e,r,n)},r.useTransition=function(){return I.current.useTransition()},r.version="18.2.0"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>d});var t=n(667294);const s={},c=t.createContext(s);function d(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);