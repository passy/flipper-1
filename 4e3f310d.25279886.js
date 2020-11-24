(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return n?i.a.createElement(f,l(l({ref:t},p),{},{components:n})):i.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},139:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(141),i=n(140);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,l=void 0!==o&&o,c=a.absolute,p=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+s:s}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},140:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},141:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(20);t.default=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(138)),o=(n(139),{id:"testing-rn",title:"Testing React Native Changes in the Sample App",sidebar_label:"Testing RN Changes"}),l={unversionedId:"extending/testing-rn",id:"extending/testing-rn",isDocsHomePage:!1,title:"Testing React Native Changes in the Sample App",description:"When making changes to the React Native integration, it can be helpful to",source:"@site/../docs/extending/testing-rn.mdx",slug:"/extending/testing-rn",permalink:"/docs/extending/testing-rn",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/testing-rn.mdx",version:"current",sidebar_label:"Testing RN Changes",sidebar:"extending",previous:{title:"Extending Layout Inspector",permalink:"/docs/extending/layout-inspector"}},c=[{value:"Publishing a Local Release",id:"publishing-a-local-release",children:[]},{value:"Using the new Release",id:"using-the-new-release",children:[]},{value:"Full Diff",id:"full-diff",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When making changes to the React Native integration, it can be helpful to\ntest them directly in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/tree/master/react-native/ReactNativeFlipperExample"}),"sample\napp"),"\nwe provide in the repository. However, the app is building against a production release\nof Flipper and not the version checked in in the repository."),Object(a.b)("p",null,"In order to test against the changes you have made, you need to publish a Flipper\nrelease locally."),Object(a.b)("h2",{id:"publishing-a-local-release"},"Publishing a Local Release"),Object(a.b)("p",null,"First, create a unique version number. This step is optional but is helpful\nto prevent accidentally testing against the wrong version."),Object(a.b)("p",null,"In the top-level ",Object(a.b)("inlineCode",{parentName:"p"},"gradle.properties"),", change the version:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"...\n# POM publishing constants\nVERSION_NAME=0.44.99-SNAPSHOT # Change this one.\nGROUP=com.facebook.flipper\n...\n")),Object(a.b)("p",null,"Now, run ",Object(a.b)("inlineCode",{parentName:"p"},"./gradlew install")," in the root of the repository. This will\nplace the artifact files in your local ",Object(a.b)("inlineCode",{parentName:"p"},"~/.m2/repository")," folder."),Object(a.b)("h2",{id:"using-the-new-release"},"Using the new Release"),Object(a.b)("p",null,"Usually, you need to change your project to also pick up files in ",Object(a.b)("inlineCode",{parentName:"p"},"mavenLocal()"),".\nAs this is already done, you can directly change the ",Object(a.b)("inlineCode",{parentName:"p"},"FLIPPER_VERSION")," to the previously used identifier\nin ",Object(a.b)("inlineCode",{parentName:"p"},"react-native/ReactNativeFlipperExample/android/gradle.properties"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"# Version of flipper SDK to use with React Native\nFLIPPER_VERSION=0.30.2\nFLIPPER_VERSION=0.44.99-SNAPSHOT\n")),Object(a.b)("p",null,"Now run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn android")," to rebuild, install and launch the RN sample app."),Object(a.b)("p",null,"To test further changes, rerun the ",Object(a.b)("inlineCode",{parentName:"p"},"./gradlew install")," and ",Object(a.b)("inlineCode",{parentName:"p"},"yarn android")," steps."),Object(a.b)("h2",{id:"full-diff"},"Full Diff"),Object(a.b)("p",null,"For a quick overview, here are the two changes you need to make:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),"diff --git a/gradle.properties b/gradle.properties\nindex 1ccd002a..100a7169 100644\n--- a/gradle.properties\n+++ b/gradle.properties\n@@ -4,7 +4,7 @@\n # LICENSE file in the root directory of this source tree.\n \n # POM publishing constants\n-VERSION_NAME=0.44.1-SNAPSHOT\n+VERSION_NAME=0.44.99-SNAPSHOT\n GROUP=com.facebook.flipper\n POM_URL=https://github.com/facebook/flipper\n POM_SCM_URL=https://github.com/facebook/flipper.git\ndiff --git a/react-native/ReactNativeFlipperExample/android/gradle.properties b/react-native/ReactNativeFlipperExample/android/gradle.properties\nindex 495c12e8..bc815d0e 100644\n--- a/react-native/ReactNativeFlipperExample/android/gradle.properties\n+++ b/react-native/ReactNativeFlipperExample/android/gradle.properties\n@@ -30,4 +30,4 @@ android.useAndroidX=true\n android.enableJetifier=true\n \n # Version of flipper SDK to use with React Native\n-FLIPPER_VERSION=0.30.2\n+FLIPPER_VERSION=0.44.99-SNAPSHOT\n\n")))}s.isMDXComponent=!0}}]);