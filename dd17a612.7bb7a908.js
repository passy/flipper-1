(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(138)),a={id:"network-plugin",title:"Network Setup",sidebar_label:"Network"},p={unversionedId:"setup/network-plugin",id:"setup/network-plugin",isDocsHomePage:!1,title:"Network Setup",description:"To use the network plugin, you need to add the plugin to your Flipper client instance.",source:"@site/../docs/setup/network-plugin.mdx",slug:"/setup/network-plugin",permalink:"/docs/setup/network-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/network-plugin.mdx",version:"current",sidebar_label:"Network",sidebar:"setup",previous:{title:"Navigation Plugin Setup",permalink:"/docs/setup/navigation-plugin"},next:{title:"Databases Plugin Setup",permalink:"/docs/setup/databases-plugin"}},l=[{value:"Android",id:"android",children:[{value:"OkHttp Integration",id:"okhttp-integration",children:[]}]},{value:"iOS",id:"ios",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To use the network plugin, you need to add the plugin to your Flipper client instance."),Object(o.b)("h2",{id:"android"},"Android"),Object(o.b)("p",null,"The network plugin is shipped as a separate Maven artifact:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-groovy"}),"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-network-plugin:0.66.0'\n}\n")),Object(o.b)("p",null,"Once added to your dependencies, you can instantiate the plugin and add it to\nthe client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;\n\nNetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();\nclient.addPlugin(networkFlipperPlugin);\n")),Object(o.b)("h3",{id:"okhttp-integration"},"OkHttp Integration"),Object(o.b)("p",null,"If you are using the popular OkHttp library, you can use the Interceptors system to automatically hook into your existing stack."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;\n\nnew OkHttpClient.Builder()\n    .addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin))\n    .build();\n")),Object(o.b)("p",null,"As interceptors can modify the request and response, add the Flipper interceptor after all others to get an accurate view of the network traffic."),Object(o.b)("h2",{id:"ios"},"iOS"),Object(o.b)("p",null,"To enable network inspection, add the following pod to your Podfile:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version\n")),Object(o.b)("p",null,"Initialise the plugin in the following way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objective-c"}),"#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n\n[[FlipperClient sharedClient] addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"import FlipperKit\n\nclient?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n\n")))}u.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,g=s["".concat(a,".").concat(b)]||s[b]||d[b]||o;return n?i.a.createElement(g,p(p({ref:t},c),{},{components:n})):i.a.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);