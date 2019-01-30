(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{185:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[a._v("#")]),a._v(" Quick Start")]),a._v(" "),e("p",[a._v("If you are new to UI automation test or cross-platform automation tool, the basic idea is")]),a._v(" "),e("ol",{attrs:{start:"0"}},[e("li",[a._v("You have a test target, such as a website, or an mobile app.")]),a._v(" "),e("li",[a._v("You need to write some test codes to validate the properties and state of UI elements of your target.")]),a._v(" "),e("li",[a._v("Your test codes talk to Macaca, and Macaca talks to your target, execute what you have commanded in your test codes such as switching between screens, inputting text you predefined, return the UI element and properties you described in your test code, and generate a report about pass or failure.\nWatching the following videos will help you understand the concepts better.")])]),a._v(" "),e("p",[a._v("If you have done some UI automation before, you probably have grasped what Macaca can do. You might want to jum right into what's capability.\nWe prepare an example for you to get a taste.")]),a._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),e("p",[a._v("Check out the sample located in this repo("),e("a",{attrs:{href:"//github.com/macaca-sample/sample-nodejs"}},[a._v("sample-nodejs")]),a._v(").")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/macaca-sample/sample-nodejs.git --depth"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" sample-nodejs\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run doctor\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run test:ios\n")])])]),e("h3",{attrs:{id:"run-test-tasks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-test-tasks","aria-hidden":"true"}},[a._v("#")]),a._v(" Run test tasks")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# run test in current cwd")]),a._v("\n$ macaca run --verbose\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# run test in a pointed directry and set a framework")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# mocha, jasmine, tman, ava supported for Node.js env.")]),a._v("\n$ macaca run -d ./test -f mocha\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# output log file as html code")]),a._v("\n$ macaca run -o\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# run in silence, desktop only")]),a._v("\n$ macaca run --no-window\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# custom mocha reporter")]),a._v("\n$ CUSTOM_DIR"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("path/to/screenshot macaca run -d ./test --reporter macaca-simple-reportor\n")])])]),e("h3",{attrs:{id:"start-webdriver-server-only"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-webdriver-server-only","aria-hidden":"true"}},[a._v("#")]),a._v(" Start webdriver server only")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# normal usage")]),a._v("\n$ macaca server --verbose\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# set a port")]),a._v("\n$ macaca server -p 3456\n")])])]),e("h3",{attrs:{id:"environment-doctor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-doctor","aria-hidden":"true"}},[a._v("#")]),a._v(" Environment doctor")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ macaca doctor\n")])])]),e("h3",{attrs:{id:"more-help"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more-help","aria-hidden":"true"}},[a._v("#")]),a._v(" More Help")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ macaca -h\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# helper for server")]),a._v("\n$ macaca server -h\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# helper for how to run test")]),a._v("\n$ macaca run -h\n")])])]),e("h2",{attrs:{id:"sample-video"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample-video","aria-hidden":"true"}},[a._v("#")]),a._v(" Sample Video")]),a._v(" "),e("h3",{attrs:{id:"ios-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ios-app","aria-hidden":"true"}},[a._v("#")]),a._v(" iOS APP")]),a._v(" "),e("p",[e("video",{attrs:{src:"//os.alipayobjects.com/rmsportal/fyuMolxdSsGMlNw.mp4",controls:"controls"}})]),a._v(" "),e("h3",{attrs:{id:"mobile-safari"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mobile-safari","aria-hidden":"true"}},[a._v("#")]),a._v(" Mobile Safari")]),a._v(" "),e("p",[e("video",{attrs:{src:"//os.alipayobjects.com/rmsportal/TDeTXmTfeqRlxhj.mp4",controls:"controls"}})]),a._v(" "),e("h3",{attrs:{id:"android-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android-app","aria-hidden":"true"}},[a._v("#")]),a._v(" Android APP")]),a._v(" "),e("p",[e("video",{attrs:{src:"//os.alipayobjects.com/rmsportal/vjoZfJaZmCvInDv.mp4",controls:"controls"}})]),a._v(" "),e("h3",{attrs:{id:"android-browser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android-browser","aria-hidden":"true"}},[a._v("#")]),a._v(" Android Browser")]),a._v(" "),e("p",[e("video",{attrs:{src:"//os.alipayobjects.com/rmsportal/VoxFKOVDsOjKyMs.mp4",controls:"controls"}})]),a._v(" "),e("h3",{attrs:{id:"desktop-electron"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#desktop-electron","aria-hidden":"true"}},[a._v("#")]),a._v(" Desktop (Electron)")]),a._v(" "),e("p",[e("video",{attrs:{src:"//os.alipayobjects.com/rmsportal/bgBKHXYSrlYpuvv.mp4",controls:"controls"}})]),a._v(" "),e("h2",{attrs:{id:"more-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more-examples","aria-hidden":"true"}},[a._v("#")]),a._v(" More Examples")]),a._v(" "),e("p",[e("a",{attrs:{href:"//github.com/macaca-sample"}},[a._v("more sample")]),a._v(".")])])}],!1,null,null,null);t.default=r.exports}}]);