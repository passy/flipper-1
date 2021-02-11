(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),i=(r(0),r(142)),o=r(144),c={id:"react-native",title:"React Native Support"},l={unversionedId:"features/react-native",id:"features/react-native",isDocsHomePage:!1,title:"React Native Support",description:"The React Native and Developer tooling teams at Facebook work in close collaboration to make sure Flipper offers top-notch value out of the box for React Native development.",source:"@site/../docs/features/react-native.mdx",slug:"/features/react-native",permalink:"/docs/features/react-native",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/react-native.mdx",version:"current",sidebar:"features",previous:{title:"Share Flipper Data",permalink:"/docs/features/share-flipper-data"}},p=[{value:"Device type: React Native",id:"device-type-react-native",children:[]},{value:"Native plugins for React Native",id:"native-plugins-for-react-native",children:[]},{value:"Writing JavaScript plugins for React Native + Flipper",id:"writing-javascript-plugins-for-react-native--flipper",children:[{value:"Community React Native plugins for Flipper",id:"community-react-native-plugins-for-flipper",children:[]}]}],u={rightToc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("img",{alt:"React Native + React DevTools",src:Object(o.a)("img/react-native-react.png")}),Object(i.b)("p",null,"The React Native and Developer tooling teams at Facebook work in close collaboration to make sure Flipper offers top-notch value out of the box for React Native development.\nIntegration between React Native and Flipper is enabled out of the box in React Native version 0.62 and higher."),Object(i.b)("p",null,"\u2192 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/index#setup-your-react-native-app"}),"See setup instructions for React Native")),Object(i.b)("center",null,Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/WltZTn3ODW4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("br",null),Object(i.b)("em",null,"Flipper: The Extensible DevTool Platform for React Native")),Object(i.b)("h2",{id:"device-type-react-native"},"Device type: React Native"),Object(i.b)("p",null,"In Flipper there is a dedicated device type, \u201cReact Native\u201d, that connects to a locally running Metro instance to interact with your React Native app. This device will be detected as soon as you fire up a Metro instance by running ",Object(i.b)("inlineCode",{parentName:"p"},"yarn run ios")," or ",Object(i.b)("inlineCode",{parentName:"p"},"yarn run android")," in your project."),Object(i.b)("p",null,"If Metro is connected, two new buttons will appear in Flipper\u2019s main toolbar: \u201cReload\u201d and \u201cOpen Dev Menu\u201d. Both do exactly what their name suggests, without needing the agility of a pianist to get to the right keyboard combo inside your emulator. The \u201cReact Native\u201d device will feature two plugins out of the box: \u201cLogs\u201d and \u201cReact DevTools\u201d."),Object(i.b)("img",{alt:"React Native Action Buttons and Logs",src:Object(o.a)("img/react-native-logs.png")}),Object(i.b)("p",null,"The React DevTools allows you to inspect the component tree and tune the props and state of your React components."),Object(i.b)("p",null,"The Logs plugins will allow you to search, filter and even put watch expressions on your logging output. This offers a much richer way to interact with your logs compared to the terminal output of Metro."),Object(i.b)("h2",{id:"native-plugins-for-react-native"},"Native plugins for React Native"),Object(i.b)("p",null,"Beyond the React Native specific Flipper plugins described above, with Flipper you will also inherit the plugin eco-system that exists for native Android and iOS apps. This means that you will be able to use plugins that are aimed at native apps for your React Native app as well. Example plugins include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Device logs"),Object(i.b)("li",{parentName:"ul"},"Device crash reporter"),Object(i.b)("li",{parentName:"ul"},"Inspecting network requests"),Object(i.b)("li",{parentName:"ul"},"Inspecting app local databases"),Object(i.b)("li",{parentName:"ul"},"Inspecting device preferences"),Object(i.b)("li",{parentName:"ul"},"Inspecting cached images"),Object(i.b)("li",{parentName:"ul"},"Inspecting native layout elements")),Object(i.b)("h2",{id:"writing-javascript-plugins-for-react-native--flipper"},"Writing JavaScript plugins for React Native + Flipper"),Object(i.b)("p",null,"One of the greatest values of Flipper is its extensibility. Many teams across Facebook already have written their own one-off plugins that help with analysing very specific use cases.\nWriting plugins for Flipper doesn't require any native code, as the Flipper SDK is exposed directly to JavaScript through the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-flipper"}),"react-native-flipper")," package."),Object(i.b)("img",{alt:"Tic Tac Toe example plugin",src:Object(o.a)("img/react-native-tictactoe.png")}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example Flipper plugin: playing a game of Tic Tac Toe using Flipper and some emulators")),Object(i.b)("p",null,"If you would love to build a specific (or generic) extension for Flipper check out the following pointers! Plugins for Flipper can be distributed through NPM so sharing them is trivial."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/tutorial/react-native"}),"Creating a React Native Flipper Plugin")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/tutorial/js-setup"}),"Create a Flipper Desktop Plugin"))),Object(i.b)("h3",{id:"community-react-native-plugins-for-flipper"},"Community React Native plugins for Flipper"),Object(i.b)("p",null,"The React Native community has also started to build plugins for Flipper."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://infinite.red/reactotron"}),"Reactotron's")," ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/infinitered/flipper-plugin-reactotron"}),"Flipper plugin")," is an example of a standalone React Native desktop app, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://shift.infinite.red/better-react-native-debugging-with-reactotron-in-flipper-6b823af29220"}),"ported to work as a Flipper plugin"),".")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Got your own Flipper plugin for React Native you want to plug here? Please sent us a ",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/facebook/flipper/blob/master/docs/features/react-native.mdx"}),"Pull Request"),"!")))}s.isMDXComponent=!0},142:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,d=s["".concat(o,".").concat(f)]||s[f]||b[f]||i;return r?n.a.createElement(d,c(c({ref:t},p),{},{components:r})):n.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},143:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(20);t.default=function(){var e=Object(a.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},144:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var a=r(143),n=r(145);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,p=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(n.b)(r))return r;if(c)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return p?e+u:u}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},145:function(e,t,r){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}))}}]);