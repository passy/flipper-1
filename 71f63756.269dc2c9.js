(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(o,".").concat(d)]||p[d]||f[d]||i;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},152:function(e,t,n){"use strict";var r=n(0),a=n(153);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},153:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},155:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(152),o=n(150),c=n(55),l=n.n(c),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.children,p=e.defaultValue,f=e.values,d=e.groupId,b=e.className,m=Object(i.a)(),O=m.tabGroupChoices,g=m.setTabGroupChoices,v=Object(r.useState)(p),y=v[0],h=v[1];if(null!=d){var j=O[d];null!=j&&j!==y&&f.some((function(e){return e.value===j}))&&h(j)}var w=function(e){h(e),null!=d&&g(d,e)},P=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(c.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},156:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(7),i=(n(0),n(142)),o=n(155),c=n(156),l={id:"shared-preferences-plugin",title:"Shared Preferences Setup",sidebar_label:"Shared Preferences"},u={unversionedId:"setup/shared-preferences-plugin",id:"setup/shared-preferences-plugin",isDocsHomePage:!1,title:"Shared Preferences Setup",description:"This plugin is available for both Android and iOS.",source:"@site/../docs/setup/shared-preferences-plugin.mdx",slug:"/setup/shared-preferences-plugin",permalink:"/docs/setup/shared-preferences-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/shared-preferences-plugin.mdx",version:"current",sidebar_label:"Shared Preferences",sidebar:"setup",previous:{title:"Sandbox Setup",permalink:"/docs/setup/sandbox-plugin"},next:{title:"LeakCanary Setup",permalink:"/docs/setup/leak-canary-plugin"}},s=[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}],p={rightToc:s};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This plugin is available for both Android and iOS."),Object(i.b)("h2",{id:"android"},"Android"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'import com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin;\n\nclient.addPlugin(\n    new SharedPreferencesFlipperPlugin(context, "my_shared_preference_file"));\n')),Object(i.b)("h2",{id:"ios"},"iOS"),Object(i.b)("p",null,"If you want to use the Shared Preferences plugin, you need to add ",Object(i.b)("inlineCode",{parentName:"p"},"FlipperKit/FlipperKitUserDefaultsPlugin")," to your Podfile."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),"pod 'FlipperKit/FlipperKitUserDefaultsPlugin', '~>' + flipperkit_version\n")),Object(i.b)("p",null,"Initialize the plugin in the following way:"),Object(i.b)(o.a,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"ios",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-objectivec"}),'#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>\n\n[client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:@"your_suitename"]];\n'))),Object(i.b)(c.a,{value:"swift",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),'import FlipperKit\n\nclient?.add(FKUserDefaultsPlugin.init(suiteName: "your_suitename"))\n')))))}f.isMDXComponent=!0}}]);