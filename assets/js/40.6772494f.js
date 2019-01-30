(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{198:function(a,t,s){"use strict";s.r(t);var r=s(0),e=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"上手指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上手指南","aria-hidden":"true"}},[a._v("#")]),a._v(" 上手指南")]),a._v(" "),s("h2",{attrs:{id:"运行官方示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行官方示例","aria-hidden":"true"}},[a._v("#")]),a._v(" 运行官方示例")]),a._v(" "),s("p",[a._v("将官方示例("),s("a",{attrs:{href:"//github.com/macaca-sample/sample-nodejs"}},[a._v("sample-nodejs")]),a._v(")克隆到本地，然后按照如下命令即可下载已提供好的"),s("code",[a._v("示例 App")]),a._v("，并运行自动化测试。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装工具包和驱动")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i macaca-cli macaca-ios -g\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/macaca-sample/sample-nodejs.git --depth"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" sample-nodejs\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装项目依赖")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run doctor\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run test:ios\n")])])]),s("h3",{attrs:{id:"执行测试用例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行测试用例","aria-hidden":"true"}},[a._v("#")]),a._v(" 执行测试用例")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# run test in current cwd")]),a._v("\n$ macaca run --verbose\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定测试文件目录及测试框架，此功能只支持 Node.js 版")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 目前支持 mocha, jasmine, tman 和 ava。")]),a._v("\n$ macaca run -d ./test -f mocha\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将结果导出为文件")]),a._v("\n$ macaca run -o\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 静默执行（只支持桌面浏览器）")]),a._v("\n$ macaca run --no-window\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 使用自定义的报告器")]),a._v("\n$ CUSTOM_DIR"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("path/to/screenshot macaca run -d ./test --reporter macaca-simple-reportor\n")])])]),s("p",[s("code",[a._v("macaca-simple-reportor")]),a._v(" 是自定义报告器的一个示例，可以作为参考。")]),a._v(" "),s("h3",{attrs:{id:"只启动服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只启动服务器","aria-hidden":"true"}},[a._v("#")]),a._v(" 只启动服务器")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 普通用法，添加了 --verbose 可以看到详细的信息")]),a._v("\n$ macaca server --verbose\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置端口号")]),a._v("\n$ macaca server -p 3456\n")])])]),s("h3",{attrs:{id:"检查当前-macaca-的安装环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查当前-macaca-的安装环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 检查当前 Macaca 的安装环境")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ macaca doctor\n")])])]),s("h3",{attrs:{id:"更多的选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多的选项","aria-hidden":"true"}},[a._v("#")]),a._v(" 更多的选项")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ macaca -h\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 服务器相关选项")]),a._v("\n$ macaca server -h\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如何执行用例的选项")]),a._v("\n$ macaca run -h\n\n")])])]),s("p",[s("strong",[a._v("注：")]),a._v(" 相比桌面浏览器，移动 App 测试有更多环境上的要求，如果没有看到预期的效果一般都是简单的坏境问题导致的，可以看下面提供的示例视频进行了解，更多关于环境的配置可以参考"),s("a",{attrs:{href:"./environment-setup"}},[a._v("环境配置")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"多语言栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多语言栈","aria-hidden":"true"}},[a._v("#")]),a._v(" 多语言栈")]),a._v(" "),s("p",[a._v("如上示例基于 Node.js 开发平台，Macaca 也提供多语言栈支持，请阅读"),s("a",{attrs:{href:"./multi-lang"}},[a._v("多语言")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"示例集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例集合","aria-hidden":"true"}},[a._v("#")]),a._v(" 示例集合")]),a._v(" "),s("p",[a._v("更多的示例请访问"),s("a",{attrs:{href:"//github.com/macaca-sample"}},[a._v("macaca-sample")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"视频演示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视频演示","aria-hidden":"true"}},[a._v("#")]),a._v(" 视频演示")]),a._v(" "),s("h3",{attrs:{id:"ios-应用测试-含-webview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios-应用测试-含-webview","aria-hidden":"true"}},[a._v("#")]),a._v(" iOS 应用测试(含 WebView)")]),a._v(" "),s("p",[s("video",{attrs:{src:"//os.alipayobjects.com/rmsportal/fyuMolxdSsGMlNw.mp4",controls:"controls"}})]),a._v(" "),s("h3",{attrs:{id:"ios-手机端浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios-手机端浏览器","aria-hidden":"true"}},[a._v("#")]),a._v(" iOS 手机端浏览器")]),a._v(" "),s("p",[s("video",{attrs:{src:"//os.alipayobjects.com/rmsportal/TDeTXmTfeqRlxhj.mp4",controls:"controls"}})]),a._v(" "),s("h3",{attrs:{id:"android-应用测试-含-webview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-应用测试-含-webview","aria-hidden":"true"}},[a._v("#")]),a._v(" Android 应用测试(含 WebView)")]),a._v(" "),s("p",[s("video",{attrs:{src:"//os.alipayobjects.com/rmsportal/vjoZfJaZmCvInDv.mp4",controls:"controls"}})]),a._v(" "),s("h3",{attrs:{id:"android-手机端浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-手机端浏览器","aria-hidden":"true"}},[a._v("#")]),a._v(" Android 手机端浏览器")]),a._v(" "),s("p",[s("video",{attrs:{src:"//os.alipayobjects.com/rmsportal/VoxFKOVDsOjKyMs.mp4",controls:"controls"}})]),a._v(" "),s("h3",{attrs:{id:"桌面端-electron"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#桌面端-electron","aria-hidden":"true"}},[a._v("#")]),a._v(" 桌面端 (Electron)")]),a._v(" "),s("p",[s("video",{attrs:{src:"//os.alipayobjects.com/rmsportal/bgBKHXYSrlYpuvv.mp4",controls:"controls"}})])])}],!1,null,null,null);t.default=e.exports}}]);