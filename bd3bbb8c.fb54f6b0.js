(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),o=(r(0),r(138)),a=r(139),c={id:"layout-inspector",title:"Extending Layout Inspector"},p={unversionedId:"extending/layout-inspector",id:"extending/layout-inspector",isDocsHomePage:!1,title:"Extending Layout Inspector",description:"The Layout Inspector plugin can be extended to support new kinds of UI components. You can also extend it to customize the data made available in the sidebar.",source:"@site/../docs/extending/layout-inspector.mdx",slug:"/extending/layout-inspector",permalink:"/docs/extending/layout-inspector",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/layout-inspector.mdx",version:"current",sidebar:"extending",previous:{title:"Architecture",permalink:"/docs/extending/arch"},next:{title:"Testing React Native Changes in the Sample App",permalink:"/docs/extending/testing-rn"}},s=[{value:"Android",id:"android",children:[{value:"Node Descriptor",id:"node-descriptor",children:[]},{value:"Register a Descriptor",id:"register-a-descriptor",children:[]},{value:"Extending an existing Descriptor",id:"extending-an-existing-descriptor",children:[]}]},{value:"iOS",id:"ios",children:[{value:"SKNodeDescriptor",id:"sknodedescriptor",children:[]},{value:"Register a Descriptor",id:"register-a-descriptor-1",children:[]},{value:"Extending an existing Descriptor",id:"extending-an-existing-descriptor-1",children:[]},{value:"Subdescriptors",id:"subdescriptors",children:[]}]}],d={rightToc:s};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Layout Inspector plugin can be extended to support new kinds of UI components. You can also extend it to customize the data made available in the sidebar.\nDepending on whether you want to expose new data on Android or iOS, there are different interfaces you can use."),Object(o.b)("img",{alt:"Layout Inspector",src:Object(a.a)("img/layoutinspector.png")}),Object(o.b)("h2",{id:"android"},"Android"),Object(o.b)("h3",{id:"node-descriptor"},"Node Descriptor"),Object(o.b)("p",null,"To expose an object to the Layout Inspector in Flipper you have to implement a ",Object(o.b)("inlineCode",{parentName:"p"},"NodeDescriptor")," which describes your object. For example the ",Object(o.b)("inlineCode",{parentName:"p"},"ViewDescriptor")," describes ",Object(o.b)("inlineCode",{parentName:"p"},"View")," objects and the ",Object(o.b)("inlineCode",{parentName:"p"},"FragmentDescriptor")," describe ",Object(o.b)("inlineCode",{parentName:"p"},"Fragment")," instances. These descriptors have a set of callbacks used to expose children and data associated with the object they describe. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/blob/b0d2983bd440dc41ec67089e11acd394e6566b8f/android/src/main/java/com/facebook/flipper/plugins/inspector/NodeDescriptor.java"}),Object(o.b)("inlineCode",{parentName:"a"},"NodeDescriptor"))," for the full API."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"NodeDescriptor")," implementations should not subclass other ",Object(o.b)("inlineCode",{parentName:"p"},"NodeDescriptor")," implementations. Instead to re-use existing behavior from a more generic descriptor, you should prefer to use delegate."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Don't")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class ViewGroupDescriptor extends ViewDescriptor<ViewGroup> {\n  public String getName(ViewGroup node) {\n    return super.getName(node);\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Do")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"class ViewGroupDescriptor extends NodeDescriptor<ViewGroup> {\n  public String getName(ViewGroup node) {\n    NodeDescriptor descriptor = descriptorForClass(View.class);\n    return descriptor.getName(node);\n  }\n}\n")),Object(o.b)("h3",{id:"register-a-descriptor"},"Register a Descriptor"),Object(o.b)("p",null,"Register your descriptor in the ",Object(o.b)("inlineCode",{parentName:"p"},"DescriptorMapping")," used to instantiate the ",Object(o.b)("inlineCode",{parentName:"p"},"InspectorFlipperPlugin"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"final FlipperClient client = FlipperClient.createInstance(mContext);\nfinal DescriptorMapping descriptorMapping = DescriptorMapping.withDefaults();\ndescriptorMapping.register(MyObject.class, new MyObjectDescriptor());\nclient.addPlugin(new InspectorFlipperPlugin(mContext, descriptorMapping));\n")),Object(o.b)("h3",{id:"extending-an-existing-descriptor"},"Extending an existing Descriptor"),Object(o.b)("p",null,"You may not need to create a whole new descriptor but instead you may just want to change extend an existing one to expose some new piece of data. In that case just locate the correct descriptor and edit its ",Object(o.b)("inlineCode",{parentName:"p"},"getData"),", ",Object(o.b)("inlineCode",{parentName:"p"},"getAttributes")," and perhaps ",Object(o.b)("inlineCode",{parentName:"p"},"setData")," methods."),Object(o.b)("h2",{id:"ios"},"iOS"),Object(o.b)("h3",{id:"sknodedescriptor"},"SKNodeDescriptor"),Object(o.b)("p",null,"To expose an object to the layout inspector in Sonar you have to implement a ",Object(o.b)("inlineCode",{parentName:"p"},"SKNodeDescriptor")," which describes the object. For example ",Object(o.b)("inlineCode",{parentName:"p"},"SKViewDescriptor")," describes ",Object(o.b)("inlineCode",{parentName:"p"},"UIView")," objects, and the ",Object(o.b)("inlineCode",{parentName:"p"},"SKComponentDescriptor")," describes ",Object(o.b)("inlineCode",{parentName:"p"},"CKComponent")," objects. These descriptors have necessary callbacks which is used to expose its children and data associated with the object they describe. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/blob/b0d2983bd440dc41ec67089e11acd394e6566b8f/iOS/Plugins/FlipperKitLayoutPlugin/FlipperKitLayoutPlugin/SKNodeDescriptor.h"}),"SKNodeDescriptor")," for the full available API."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"SKNodeDescriptor")," implementations should ",Object(o.b)("strong",{parentName:"p"},"never")," be subclass other ",Object(o.b)("inlineCode",{parentName:"p"},"SKNodeDescriptor")," implementations. Instead re-use existing behaviour by explicitly using other descriptors and delegate behaviour."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Don't")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec"}),"@interface SKArbitraryViewDescriptor : SKViewDescriptor<ArbitraryView *>\n\n@end\n\n@implementation SKArbitraryViewDescriptor\n\n- (NSString *)identifierForNode:(ArbitraryView *)node\n{\n  return [super identifierForNode:node];\n}\n\n@end\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Do")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec"}),"@interface SKArbitraryViewDescriptor : SKNodeDescriptor<ArbitraryView *>\n@end\n\n@implementation SKArbitraryViewDescriptor\n\n- (NSString *)identifierForNode:(ArbitraryView *)node\n{\n  SKNodeDescriptor *descriptor = [self descriptorForClass:[UIView class]];\n  return [descriptor identifierForNode:node];\n}\n\n@end\n")),Object(o.b)("h3",{id:"register-a-descriptor-1"},"Register a Descriptor"),Object(o.b)("p",null,"In order to register your descriptor for an object, you use ",Object(o.b)("inlineCode",{parentName:"p"},"SKDescriptorMapper"),". After registering all descriptors you pass on the descriptor-mapper object to the plugin during initialisation."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec"}),"[descriptorMapper registerDescriptor:[SKArbitraryViewDescriptor new]\n                            forClass:[ArbitraryView class]];\n\n")),Object(o.b)("p",null,"There's already a set of descriptors registered by default in\n",Object(o.b)("inlineCode",{parentName:"p"},"SKDescriptorMapper"),", and if you want to add a descriptor to the default set\nyou can do it in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/blob/b0d2983bd440dc41ec67089e11acd394e6566b8f/iOS/Plugins/FlipperKitLayoutPlugin/FlipperKitLayoutPlugin/SKDescriptorMapper.mm"}),Object(o.b)("inlineCode",{parentName:"a"},"SKDescriptorMapper")),"."),Object(o.b)("h3",{id:"extending-an-existing-descriptor-1"},"Extending an existing Descriptor"),Object(o.b)("p",null,"Sometimes all you need is to extend the functionality of an existing descriptor. In that case you just need to locate the correct descriptor and edit the methods ",Object(o.b)("inlineCode",{parentName:"p"},"dataForNode"),", ",Object(o.b)("inlineCode",{parentName:"p"},"attributesForNode"),", and possibly ",Object(o.b)("inlineCode",{parentName:"p"},"dataMutationsForNode"),"."),Object(o.b)("h3",{id:"subdescriptors"},"Subdescriptors"),Object(o.b)("p",null,"If you want to extend the ",Object(o.b)("inlineCode",{parentName:"p"},"SKComponentKitLayoutDescriptor")," and add an additional section based on the nodes of the ",Object(o.b)("inlineCode",{parentName:"p"},"SKComponentLayoutDescriptor"),", you can use ",Object(o.b)("inlineCode",{parentName:"p"},"SKSubDescriptor"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-objectivec"}),'#import <FlipperKitLayoutComponentKitSupport/SKComponentLayoutWrapper.h>\n\nNSString *YourSubDescriptor(SKComponentLayoutWrapper *)node {\n    return @"Meta data";\n}\n\n// At setup time, you must register it:\n[SKComponentLayoutDescriptor registerSubDescriptor:&YourSubDescriptor forName:@"Section Name"];\n')),Object(o.b)("p",null,"Swift support is not yet available because you must access ",Object(o.b)("inlineCode",{parentName:"p"},"SKComponentLayoutWrapper")," to implement a subdescriptor."))}b.isMDXComponent=!0},138:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=d(r),u=n,m=b["".concat(a,".").concat(u)]||b[u]||l[u]||o;return r?i.a.createElement(m,c(c({ref:t},s),{},{components:r})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},139:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return a}));var n=r(141),i=r(140);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,c=void 0!==a&&a,p=o.absolute,s=void 0!==p&&p;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(c)return t+r;var d=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+d:d}(o,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},140:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))},141:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r(20);t.default=function(){var e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);