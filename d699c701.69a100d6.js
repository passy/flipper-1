(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{116:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return u}));var a=r(3),t=r(7),c=(r(0),r(138)),o={id:"leak-canary-plugin",title:"LeakCanary Setup",sidebar_label:"LeakCanary"},i={unversionedId:"setup/leak-canary-plugin",id:"setup/leak-canary-plugin",isDocsHomePage:!1,title:"LeakCanary Setup",description:"Ensure that you already have an explicit dependency in your application's",source:"@site/../docs/setup/leak-canary-plugin.mdx",slug:"/setup/leak-canary-plugin",permalink:"/docs/setup/leak-canary-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/leak-canary-plugin.mdx",version:"current",sidebar_label:"LeakCanary",sidebar:"setup",previous:{title:"Shared Preferences Setup",permalink:"/docs/setup/shared-preferences-plugin"},next:{title:"Crash Reporter Setup",permalink:"/docs/setup/crash-reporter-plugin"}},l=[],p={rightToc:l};function u(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Ensure that you already have an explicit dependency in your application's\n",Object(c.b)("inlineCode",{parentName:"p"},"build.gradle")," including the plugin dependency, e.g."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-leakcanary-plugin:0.66.0'\n  debugImplementation 'com.squareup.leakcanary:leakcanary-android:1.6.1'\n  releaseImplementation 'com.squareup.leakcanary:leakcanary-android-no-op:1.6.1'\n}\n")),Object(c.b)("p",null,"First, add the plugin to your Flipper client instance:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"import com.facebook.flipper.plugins.leakcanary.LeakCanaryFlipperPlugin;\n\nclient.addPlugin(new LeakCanaryFlipperPlugin());\n")),Object(c.b)("p",null,"Next, build a custom RefWatcher using RecordLeakService: (see ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/square/leakcanary/wiki/Customizing-LeakCanary#uploading-to-a-server"}),"LeakCanary docs")," for more information on RefWatcher)"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"import com.facebook.flipper.plugins.leakcanary.RecordLeakService;\n\nRefWatcher refWatcher = LeakCanary.refWatcher(this)\n    .listenerServiceClass(RecordLeakService.class)\n    .buildAndInstall();\n")),Object(c.b)("p",null,"Then, add the ",Object(c.b)("inlineCode",{parentName:"p"},"RecordLeakService")," in your debug variant AndroidManifest.xml."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<service android:name="com.facebook.flipper.plugins.leakcanary.RecordLeakService" />\n')))}u.isMDXComponent=!0},138:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return f}));var a=r(0),t=r.n(a);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=t.a.createContext({}),u=function(e){var n=t.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return t.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},b=t.a.forwardRef((function(e,n){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=a,f=s["".concat(o,".").concat(b)]||s[b]||d[b]||c;return r?t.a.createElement(f,i(i({ref:n},p),{},{components:r})):t.a.createElement(f,i({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);