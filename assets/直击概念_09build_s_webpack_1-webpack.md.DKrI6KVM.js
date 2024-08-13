import{_ as e,c as a,o as c,V as o}from"./chunks/framework.CMKosmpS.js";const u=JSON.parse('{"title":"Webpack","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/09build/s_webpack_1-webpack.md","filePath":"直击概念/09build/s_webpack_1-webpack.md","lastUpdated":1709113218000}'),l={name:"直击概念/09build/s_webpack_1-webpack.md"},t=o('<h1 id="webpack" tabindex="-1">Webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;Webpack&quot;">​</a></h1><h2 id="webpack-是什么" tabindex="-1">Webpack 是什么 <a class="header-anchor" href="#webpack-是什么" aria-label="Permalink to &quot;Webpack 是什么&quot;">​</a></h2><p>webpack 是一个模块打包器。webpack 的主要目标是将 JavaScript 文件打包在一起，打包后的文件用于在浏览器中使用，但它也能够胜任转换(transform)、打包(bundle)。</p><h2 id="webpack-原理" tabindex="-1">webpack 原理 <a class="header-anchor" href="#webpack-原理" aria-label="Permalink to &quot;webpack 原理&quot;">​</a></h2><h3 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h3><ul><li>entry：一个可执行模块或者库的入口。</li><li>chunk：多个文件组成一个代码块。可以将可执行的模块和他所依赖的模块组合成一个 chunk，这是打包。</li><li>loader：文件转换器。例如把 es6 转为 es5，scss 转为 css 等</li><li>plugin：扩展 webpack 功能的插件。在 webpack 构建的生命周期节点上加入扩展 hook，添加功能。</li><li>output：编译结果文件输出</li></ul><h3 id="构建流程" tabindex="-1">构建流程 <a class="header-anchor" href="#构建流程" aria-label="Permalink to &quot;构建流程&quot;">​</a></h3><p>Webpack 的运行流程是⼀个<code>串行</code>的过程，从启动到结束会<code>依次执行</code>以下流程：</p><ol><li><strong>初始化参数</strong>：解析 webpack 配置参数，合并 shell 传入和 webpack.config.js 文件配置的参数，形成最后的配置结果。</li><li><strong>开始编译</strong>：上一步得到的参数初始化<code>compiler</code>对象，注册所有配置的插件，插件监听 webpack 构建生命周期的事件节点，做出相应的反应，执行对象的 run 方法开始执行编译。</li><li><strong>确定入口</strong>：从配置的<code>entry</code>入口，开始<code>解析文件</code>构建 AST 语法树，<code>找出依赖</code>，<code>递归</code>下去。</li><li><strong>编译模块</strong>：递归中根据<code>文件类型</code>和<code>loader配置</code>，调用所有配置的 loader 对<code>文件转换</code>，再找出该<code>模块依赖</code>的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。</li><li><strong>完成模块编译</strong>：在经过第 4 步使⽤ Loader 翻译完所有模块后，得到了每个模块被翻译后的<code>最终内容</code>以<code>及它们之间的依赖关系</code>；</li><li><strong>输出资源</strong>：根据⼊⼝和模块之间的依赖关系，组装成⼀个个包含多个模块的 <code>Chunk</code>，再把每个 Chunk 转换成⼀个单独的⽂件加⼊到输出列表，这步是可以修改输出内容的最后机会；</li><li><strong>输出完成</strong>：在确定好输出内容后，根据配置确定输出的路径和⽂件名，把⽂件内容<code>写⼊到⽂件</code>系统。</li></ol><div class="tip custom-block"><p class="custom-block-title">提示</p><p>在以上过程中，Webpack 会在特定的时间点，⼴播出特定的事件，插件在监听到感兴趣的事件后，会执行特定的逻辑。并且插件可以调⽤ Webpack 提供的 API ，改变 Webpack 的运行结果。比如UglifyPlugin，会在loader转换递归完，对结果使用UglifyJs压缩，覆盖之前的结果。</p></div><h2 id="webpack-基本配置" tabindex="-1">Webpack 基本配置 <a class="header-anchor" href="#webpack-基本配置" aria-label="Permalink to &quot;Webpack 基本配置&quot;">​</a></h2><p>其他看文章吧</p><h2 id="自测" tabindex="-1">自测 <a class="header-anchor" href="#自测" aria-label="Permalink to &quot;自测&quot;">​</a></h2><p><a href="./s_webpack_1-webpack.html">面试官问 - Webpack</a></p><h2 id="转载自" tabindex="-1">转载自 <a class="header-anchor" href="#转载自" aria-label="Permalink to &quot;转载自&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7140769906080874504" target="_blank" rel="noreferrer">webpack 系列</a>——何逸轩</li></ul>',16),r=[t];function i(d,s,n,p,b,k){return c(),a("div",null,r)}const _=e(l,[["render",i]]);export{u as __pageData,_ as default};
