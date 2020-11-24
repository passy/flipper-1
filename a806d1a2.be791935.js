(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return p})),i.d(n,"metadata",(function(){return r})),i.d(n,"rightToc",(function(){return o})),i.d(n,"default",(function(){return b}));var t=i(3),a=i(7),l=(i(0),i(138)),p={id:"js-setup",title:"Desktop Plugin Development"},r={unversionedId:"extending/js-setup",id:"extending/js-setup",isDocsHomePage:!1,title:"Desktop Plugin Development",description:"Workflow",source:"@site/../docs/extending/jssetup.mdx",slug:"/extending/js-setup",permalink:"/docs/extending/js-setup",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/jssetup.mdx",version:"current",sidebar:"extending",previous:{title:"Publishing your Plugin",permalink:"/docs/tutorial/js-publishing"},next:{title:"Desktop Plugin API",permalink:"/docs/extending/flipper-plugin"}},o=[{value:"Workflow",id:"workflow",children:[]},{value:"Dynamically Loading Plugins",id:"dynamically-loading-plugins",children:[]},{value:"Plugin Definition",id:"plugin-definition",children:[{value:"flipper-pkg",id:"flipper-pkg",children:[]},{value:"Package Format",id:"package-format",children:[]}]},{value:"Anatomy of a Desktop plugin",id:"anatomy-of-a-desktop-plugin",children:[{value:"Creating a Device Plugin",id:"creating-a-device-plugin",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Transpilation",id:"transpilation",children:[]},{value:"npm dependencies",id:"npm-dependencies",children:[]}]},{value:"Migration to the new Plugin Specification",id:"migration-to-the-new-plugin-specification",children:[]},{value:"Development Build",id:"development-build",children:[]},{value:"Transpiling and Bundling",id:"transpiling-and-bundling",children:[]},{value:"Packaging and Publishing",id:"packaging-and-publishing",children:[{value:"Publishing to npm",id:"publishing-to-npm",children:[]},{value:"Packaging to File",id:"packaging-to-file",children:[]},{value:"Installation from File",id:"installation-from-file",children:[]}]}],c={rightToc:o};function b(e){var n=e.components,i=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},c,i,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"workflow"},"Workflow"),Object(l.b)("p",null,"In a nutshell, the workflow for creating Flipper Desktop Plugin is the following:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"#dynamically-loading-plugins"}),"To make your custom plugins discoverable by Flipper"),", create a directory to contain them, e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"~/flipper-plugins"),", and add this path to the ",Object(l.b)("inlineCode",{parentName:"li"},"pluginPaths")," property in the Flipper config (",Object(l.b)("inlineCode",{parentName:"li"},"~/.flipper/config.json"),")."),Object(l.b)("li",{parentName:"ol"},"Create a directory for your plugin inside the directory created at step 1, e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"~/flipper-plugins/my-plugin"),"."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"#plugin-definition"}),"Define your plugin")," in the directory created at step 2."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"#development-build"}),"Start a development build of Flipper")," which will automatically ",Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"#transpiling-and-bundling"}),"transpile, bundle and load")," the defined plugin, as well as all other plugins found in the directories specified as ",Object(l.b)("inlineCode",{parentName:"li"},"pluginPaths")," in the Flipper config."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"debugging"}),"Debug your plugin"),", make necessary changes and verify them in the running Flipper development build instance which will re-load the changed components automatically."),Object(l.b)("li",{parentName:"ol"},"If you want to be sure the plugin works as expected with a release build, you can ",Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"#packaging-to-file"}),"package it as a tarball")," and ",Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"#installation-from-file"}),"install it from the file system")," into a released version of Flipper."),Object(l.b)("li",{parentName:"ol"},"Finally, ",Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"#publishing-to-npm"}),"bundle the plugin and publish it to npm"),", so it can be discovered and installed by any Flipper user.")),Object(l.b)("h2",{id:"dynamically-loading-plugins"},"Dynamically Loading Plugins"),Object(l.b)("p",null,"Flipper loads and runs plugins it finds in a configurable location. The paths searched are specified in ",Object(l.b)("inlineCode",{parentName:"p"},"~/.flipper/config.json"),". These paths, ",Object(l.b)("inlineCode",{parentName:"p"},"pluginPaths"),", should contain one folder for each of the plugins it stores. An example config setting and plugin file structure is shown below:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"~/.flipper/config.json"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),'{\n  ...,\n  "pluginPaths": ["~/flipper-plugins"]\n}\n')),Object(l.b)("p",null,"Plugin File example structure:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"~ flipper-plugins/\n    my-plugin/\n      package.json\n      src/index.tsx\n      dist/bundle.js\n")),Object(l.b)("h2",{id:"plugin-definition"},"Plugin Definition"),Object(l.b)("h3",{id:"flipper-pkg"},"flipper-pkg"),Object(l.b)("p",null,"CLI tool ",Object(l.b)("inlineCode",{parentName:"p"},"flipper-pkg")," helps to initialize, validate, and package Flipper desktop plugins."),Object(l.b)("p",null,"The tool is published to npm and can be installed as a ",Object(l.b)("inlineCode",{parentName:"p"},"devDependency")," for the plugin package, or as a global CLI tool:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"yarn global add flipper-pkg\n")),Object(l.b)("p",null,"or"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"npm install flipper-pkg --global\n")),Object(l.b)("h3",{id:"package-format"},"Package Format"),Object(l.b)("p",null,"All Flipper Desktop plugins must be self-contained in a directory. This directory must contain at a minimum package.json and entry source file, e.g.:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"package.json"),Object(l.b)("li",{parentName:"ul"},"src/index.tsx")),Object(l.b)("p",null,"The best way to initialize a JS plugin is to create a directory, and run ",Object(l.b)("inlineCode",{parentName:"p"},"flipper-pkg init"),' inside it ("flipper-pkg" should be installed globally before that). It will ask few questions and initialize the plugin for you.'),Object(l.b)("p",null,"After ",Object(l.b)("inlineCode",{parentName:"p"},"flipper-pkg init")," finished, you should have files ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," and ",Object(l.b)("inlineCode",{parentName:"p"},"src/index.tsx")," files in the directory. The first file is the plugin package manifest and the second is the entry point to your plugin. An example ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file could look like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),'{\n  "$schema": "https://fbflipper.com/schemas/plugin-package/v2.json",\n  "name": "flipper-plugin-myplugin",\n  "id": "myplugin",\n  "version": "1.0.0",\n  "main": "dist/bundle.js",\n  "flipperBundlerEntry": "src/index.tsx",\n  "license": "MIT",\n  "keywords": ["flipper-plugin"],\n  "title": "My Plugin",\n  "icon": "apps",\n  "bugs": {\n    "email": "you@example.com"\n  },\n  "scripts": {\n    "lint": "flipper-pkg lint",\n    "prepack": "flipper-pkg lint && flipper-pkg bundle"\n  }\n  "peerDependencies": {\n    "flipper": "latest",\n    "flipper-plugin": "latest"\n  },\n  "devDependencies": {\n    "flipper": "latest",\n    "flipper-plugin": "latest",\n    "flipper-pkg": "latest"\n  }\n}\n')),Object(l.b)("p",null,"Important attributes of ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"$schema")," must contain URI identifying scheme according to which the plugin is defined. Currently, Flipper supports plugins defined by the specification version 2 (",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://fbflipper.com/schemas/plugin-package/v2.json"}),"https://fbflipper.com/schemas/plugin-package/v2.json"),"), while version 1 is being deprecated.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"name")," Npm package name. Should start with ",Object(l.b)("inlineCode",{parentName:"p"},"flipper-plugin-")," by convention, so Flipper plugins can be easily found on npm.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"id")," Used as the plugin native identifier and ",Object(l.b)("strong",{parentName:"p"},"must match the mobile plugin identifier"),", e.g. returned by ",Object(l.b)("inlineCode",{parentName:"p"},"getId")," method of your Java plugin.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"main"),' Points to the plugin bundle which will be loaded by Flipper. The "flipper-pkg" utility uses this field to determine output location during plugin bundling.')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"flipperBundlerEntry"),' Points to the source entry point which will be used for plugin code bundling. "flipper-pkg" takes the path specified in ',Object(l.b)("inlineCode",{parentName:"p"},"flipperBundlerEntry")," as source, transpiles and bundles it, and saves the output to the path specified in ",Object(l.b)("inlineCode",{parentName:"p"},"main"),".")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"keywords")," The field must contain the ",Object(l.b)("inlineCode",{parentName:"p"},"flipper-plugin")," keyword, otherwise Flipper won't discover the plugin. Additionally, the field can also contain any other keywords for better plugin discoverability.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"title")," Shown in the main sidebar as the human-readable name of the plugin.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"icon")," Determines the plugin icon which is displayed in the main sidebar. The list of available icons is static for now: ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/blob/master/desktop/static/icons.json"}),"https://github.com/facebook/flipper/blob/master/desktop/static/icons.json"),".")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"bugs")," Specify an email and/or url, where plugin bugs should be reported."))),Object(l.b)("p",null,"In ",Object(l.b)("inlineCode",{parentName:"p"},"index.tsx")," you will define the plugin in JavaScript. "),Object(l.b)("p",null,"Example ",Object(l.b)("inlineCode",{parentName:"p"},"index.tsx"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"export function plugin(client) {\n  return {};\n}\n\nexport function Component() {\n  return 'hello world';\n}\n")),Object(l.b)("p",null,"Some public plugins will use a ",Object(l.b)("inlineCode",{parentName:"p"},"FlipperPlugin")," base class. This format is deprecated but the documentation can still be found ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"/docs/extending/js-plugin-api"}),"here"),"."),Object(l.b)("h2",{id:"anatomy-of-a-desktop-plugin"},"Anatomy of a Desktop plugin"),Object(l.b)("p",null,"A sandy plugin always exposes two elements from its entry module (typically ",Object(l.b)("inlineCode",{parentName:"p"},"src/index.tsx"),"): ",Object(l.b)("inlineCode",{parentName:"p"},"plugin")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Component"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import {PluginClient} from 'flipper-plugin';\n\nexport function plugin(client: PluginClient) {\n  return {}; // API exposed from this plugin\n}\n\nexport function Component() {\n  // Plugin UI\n  return <h1>Welcome to my first plugin</h1>;\n}\n")),Object(l.b)("p",null,"A further guide on how to write custom Flipper plugins can be found here: ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"../tutorial/js-custom"}),"tutorial"),"."),Object(l.b)("h3",{id:"creating-a-device-plugin"},"Creating a Device Plugin"),Object(l.b)("p",null,"Flipper also supports so-called device plugins - plugins that are available for an entire device - but don't receive a connection to a running app,\nso are a bit more limited in general.\nTheir entry module anatomy is:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"import {DevicePluginClient} from 'flipper-plugin';\n\nexport function supportsDevice(device: Device) {\n  // based on the device meta-data, \n  // determine whether this plugin should be enabled \n  return true; \n}\n\nexport function devicePlugin(client: DevicePluginClient) {\n  return {}; // API exposed from this plugin\n}\n\nexport function Component() {\n  // Plugin UI\n  return <h1>Welcome to my first plugin</h1>;\n}\n")),Object(l.b)("p",null,"Device plugins work in general similar to normal client plugins, so aren't worked out in detail in this document.\nThe available APIs for device plugins are listed ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"./flipper-plugin#devicepluginclient"}),"here"),"."),Object(l.b)("h3",{id:"validation"},"Validation"),Object(l.b)("p",null,"Plugin definition can be validated using command ",Object(l.b)("inlineCode",{parentName:"p"},"flipper-pkg lint"),". The command shows all the mismatches which should be fixed to make plugin definition valid."),Object(l.b)("h3",{id:"transpilation"},"Transpilation"),Object(l.b)("p",null,"Flipper has ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"#transpiling-and-bundling"}),"tooling for transpiling and bundling")," which allows writing plugins in plain ES6 JavaScript, ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://flow.org/"}),"Flow")," or ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," but we recommend you use ",Object(l.b)("strong",{parentName:"p"},"TypeScript")," for the best development experience. We also recommend you use the file extension ",Object(l.b)("inlineCode",{parentName:"p"},".tsx")," when using TypeScript which adds support for inline React expressions."),Object(l.b)("h3",{id:"npm-dependencies"},"npm dependencies"),Object(l.b)("p",null,"If you need any dependencies in your plugin, you can install them using ",Object(l.b)("inlineCode",{parentName:"p"},"yarn add"),"."),Object(l.b)("h2",{id:"migration-to-the-new-plugin-specification"},"Migration to the new Plugin Specification"),Object(l.b)("p",null,"Flipper plugins are defined according to the specification. As with any specification, it is evolving, so new versions of it can be released. Currently Flipper supports plugins defined using version 2 of specification which is described in this page. Previous version of specification is being deprecated, and we encourage all the plugins still using it to migrate."),Object(l.b)("p",null,"The main difference of version 2 is that plugins are transpiled and bundled before packaging, while in version 1 this was done in run-time on plugin installation. There are no plugin API changes, so only the ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," changes are required to migrate."),Object(l.b)("p",null,"The easiest way for migration is using of command ",Object(l.b)("inlineCode",{parentName:"p"},"flipper-pkg migrate"),". It will automatically migrate your plugin definition to the latest version."),Object(l.b)("h2",{id:"development-build"},"Development Build"),Object(l.b)("p",null,"A Flipper development build should be used for plugin debugging. It is also used for Flipper core development and provides the following features:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Automatic transpilation and bundling of loaded plugins: ES6, Flow, TypeScript, JSX."),Object(l.b)("li",{parentName:"ul"},"Automatic refresh after code changes."),Object(l.b)("li",{parentName:"ul"},"React and Redux Dev Tools."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"debugging"}),"Debugging")," using Chrome Dev Tools or Visual Studio Code.")),Object(l.b)("p",null,"Prerequisites for Flipper development build:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"node \u2265 8"),Object(l.b)("li",{parentName:"ul"},"yarn \u2265 1.5"),Object(l.b)("li",{parentName:"ul"},"git"),Object(l.b)("li",{parentName:"ul"},"watchman")),Object(l.b)("p",null,"To start a development build, clone the Flipper repository, install the dependencies and execute the ",Object(l.b)("inlineCode",{parentName:"p"},"start")," script:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"git clone https://github.com/facebook/flipper.git\ncd flipper/desktop\nyarn\nyarn start\n")),Object(l.b)("p",null,"You can use several options to customise development build instance. They can be provided as command-line args or environment variables.\nYou can check all of them by executing ",Object(l.b)("inlineCode",{parentName:"p"},"yarn start --help"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),'yarn start [args]\n\nOptions:\n  --embedded-plugins    Enables embedding of plugins into Flipper bundle. If it\n                        disabled then only installed plugins are loaded. The\n                        flag is enabled by default. Env var\n                        FLIPPER_NO_EMBEDDED_PLUGINS is equivalent to the\n                        command-line option "--no-embedded-plugins".   [boolean]\n  --fast-refresh        Enable Fast Refresh - quick reload of UI component\n                        changes without restarting Flipper. The flag is disabled\n                        by default. Env var FLIPPER_FAST_REFRESH is equivalent\n                        to the command-line option "--fast-refresh".   [boolean]\n  --plugin-auto-update  [FB-internal only] Enable plugin auto-updates. The flag\n                        is disabled by default in dev mode. Env var\n                        FLIPPER_NO_PLUGIN_AUTO_UPDATE is equivalent to the\n                        command-line option "--no-plugin-auto-update"  [boolean]\n  --enabled-plugins     Load only specified plugins and skip loading rest. This\n                        is useful when you are developing only one or few\n                        plugins. Plugins to load can be specified as a\n                        comma-separated list with either plugin id or name used\n                        as identifier, e.g. "--enabled-plugins\n                        network,inspector". The flag is not provided by default\n                        which means that all plugins loaded.             [array]\n  --open-dev-tools      Open Dev Tools window on startup. The flag is disabled\n                        by default. Env var FLIPPER_OPEN_DEV_TOOLS is equivalent\n                        to the command-line option "--open-dev-tools". [boolean]\n  --dev-server-port     Dev server port. 3000 by default. Env var "PORT=3001" is\n                        equivalent to the command-line option "--dev-server-port\n                        3001".                          [number] [default: 3000]\n  --version             Show version number                            [boolean]\n  --help                Show help                                      [boolean]\n')),Object(l.b)("p",null,"You can also create file ",Object(l.b)("inlineCode",{parentName:"p"},".env")," in ",Object(l.b)("inlineCode",{parentName:"p"},"desktop")," subfolder and specify any environment variables to load them automatically on ",Object(l.b)("inlineCode",{parentName:"p"},"yarn start")," so you don't need to pass command-line args every time, e.g.:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"FLIPPER_FAST_REFRESH=true\nFLIPPER_OPEN_DEV_TOOLS=true\nFLIPPER_ENABLED_PLUGINS=flipper-messages,network,inspector\n")),Object(l.b)("h2",{id:"transpiling-and-bundling"},"Transpiling and Bundling"),Object(l.b)("p",null,"As we already mentioned, the ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"#development-build"}),"Flipper development build")," automatically transpiles and bundles plugins on loading. It is capable of all the ES6 goodness, Flow annotations, TypeScript, as well as JSX and applies the required babel-transforms."),Object(l.b)("p",null,"The Flipper release build, in contrast, does not transpile or bundle plugins on loading. For production usage, plugins should be ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"#packaging-and-publishing"}),"bundled before publishing")," using ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://classic.yarnpkg.com/en/package/flipper-pkg"}),"flipper-pkg"),". This utility applies the same modifications as the plugin loader of the development build."),Object(l.b)("p",null,"The tool is published to npm and can be installed as a ",Object(l.b)("inlineCode",{parentName:"p"},"devDependency")," for the plugin package, or as a global CLI tool:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"yarn global add flipper-pkg\n")),Object(l.b)("p",null,"Then, to bundle the plugin, execute the following command in its folder:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"flipper-pkg bundle\n")),Object(l.b)("p",null,"This command reads the ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", takes the path specified in the ",Object(l.b)("inlineCode",{parentName:"p"},"flipperBundleEntry")," field as entry point, transpiles and bundles all the required code, and outputs the produced bundle to the path specified in field ",Object(l.b)("inlineCode",{parentName:"p"},"main"),"."),Object(l.b)("p",null,"You can get the list of other available commands by invoking ",Object(l.b)("inlineCode",{parentName:"p"},"flipper-pkg help"),", and get detailed description for any command by invoking ",Object(l.b)("inlineCode",{parentName:"p"},"flipper-pkg help [COMMAND]"),". You can also check README on npmjs.com for usage details: ",Object(l.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.npmjs.com/package/flipper-pkg"}),"https://www.npmjs.com/package/flipper-pkg"),"."),Object(l.b)("h2",{id:"packaging-and-publishing"},"Packaging and Publishing"),Object(l.b)("h3",{id:"publishing-to-npm"},"Publishing to npm"),Object(l.b)("p",null,"Flipper plugins are essentially standard npm packages. So you can publish them by executing ",Object(l.b)("inlineCode",{parentName:"p"},"yarn publish")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish")," in the plugin directory. The only requirements are:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"package.json")," and code ",Object(l.b)("a",Object(t.a)({parentName:"li"},{href:"#plugin-definition"}),"must follow the Flipper plugin specification")),Object(l.b)("li",{parentName:"ol"},'code must be bundled using "flipper-pkg" before packing or publishing. This can be done by executing ',Object(l.b)("inlineCode",{parentName:"li"},"flipper-pkg bundle")," on ",Object(l.b)("inlineCode",{parentName:"li"},"prepack")," step:",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),'{\n  ...\n  "devDependencies": {\n    ...\n    "flipper-pkg": "latest"\n  },\n  "scripts": {\n    ...\n    "prepack": "flipper-pkg bundle"\n  }\n}\n')))),Object(l.b)("h3",{id:"packaging-to-file"},"Packaging to File"),Object(l.b)("p",null,"To package plugin as a tarball, you can use the same command as for packaging any other npm package, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"yarn pack")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm pack"),"."),Object(l.b)("p",null,'"flipper-pkg" also provides a convenient command ',Object(l.b)("inlineCode",{parentName:"p"},"pack")," which:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Installs the plugin dependencies"),Object(l.b)("li",{parentName:"ol"},"Bundles the plugin"),Object(l.b)("li",{parentName:"ol"},"Creates the tarball and saves it at the specified location")),Object(l.b)("p",null,"E.g. to package plugin located at ",Object(l.b)("inlineCode",{parentName:"p"},"~/flipper-plugins/my-plugin")," to ",Object(l.b)("inlineCode",{parentName:"p"},"~/Desktop"),", execute the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(t.a)({parentName:"pre"},{}),"flipper-pkg pack ~/flipper-plugins/my-plugin -o ~/Desktop\n")),Object(l.b)("h3",{id:"installation-from-file"},"Installation from File"),Object(l.b)("p",null,"It is possible to install plugins into Flipper from tarballs. This is useful in cases when you need to try a plugin version which is not published to npm, or if you want to distribute plugin privately:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Launch Flipper"),Object(l.b)("li",{parentName:"ol"},'Click the "Manage Plugins" button in the bottom-left corner'),Object(l.b)("li",{parentName:"ol"},'Select the "Install Plugins" tab in the opened sheet'),Object(l.b)("li",{parentName:"ol"},'Specify the path to the plugin package (or just drag and drop it) and click "Install"')))}b.isMDXComponent=!0},138:function(e,n,i){"use strict";i.d(n,"a",(function(){return s})),i.d(n,"b",(function(){return g}));var t=i(0),a=i.n(t);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function p(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?p(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=a.a.createContext({}),b=function(e){var n=a.a.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},s=function(e){var n=b(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=b(i),u=t,g=s["".concat(p,".").concat(u)]||s[u]||d[u]||l;return i?a.a.createElement(g,r(r({ref:n},c),{},{components:i})):a.a.createElement(g,r({ref:n},c))}));function g(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=i.length,p=new Array(l);p[0]=u;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:t,p[1]=r;for(var c=2;c<l;c++)p[c]=i[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,i)}u.displayName="MDXCreateElement"}}]);