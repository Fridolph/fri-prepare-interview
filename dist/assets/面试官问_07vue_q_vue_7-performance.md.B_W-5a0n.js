import{_ as a,c as e,o as i,V as s}from"./chunks/framework.CMKosmpS.js";const k=JSON.parse('{"title":"Vue 性能优化 和 最佳实践","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/07vue/q_vue_7-performance.md","filePath":"面试官问/07vue/q_vue_7-performance.md","lastUpdated":1708674619000}'),l={name:"面试官问/07vue/q_vue_7-performance.md"},t=s(`<h1 id="vue-性能优化-和-最佳实践" tabindex="-1">Vue 性能优化 和 最佳实践 <a class="header-anchor" href="#vue-性能优化-和-最佳实践" aria-label="Permalink to &quot;Vue 性能优化 和 最佳实践&quot;">​</a></h1><h2 id="说说-vue-项目相关的性能优化" tabindex="-1">说说 Vue 项目相关的性能优化 <a class="header-anchor" href="#说说-vue-项目相关的性能优化" aria-label="Permalink to &quot;说说 Vue 项目相关的性能优化&quot;">​</a></h2><h3 id="编码阶段" tabindex="-1">编码阶段 <a class="header-anchor" href="#编码阶段" aria-label="Permalink to &quot;编码阶段&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>对象层级不能过深（数据递归等，影响性能）</li><li>减少 data 中的数据（会增加 getter 和 setter，会收集对应的 watcher）</li><li>确定不需要响应式数据，可不放到 data 中，单独存储（如 Object.freeze()）</li><li>如果使用 v-for 给每项元素绑定事件，可改为使用事件委托</li><li>SPA 页面有效采用 keep-alive 缓存组件</li><li>区分场景，正确使用 v-if、v-show</li><li>区分场景，正确使用 computed 和 watch</li><li>v-for 遍历时加 key，最好为 id，且 key 值唯一</li><li>使用异步组件，提升用户交互</li><li>图片懒加载</li><li>路由懒加载，按需加载</li><li>第三方插件尽可能按需引入</li><li>考虑 DOM 操作性能 - 虚拟列表 / 虚拟表格</li><li>防止内存泄露，组件销毁要把全局变量和事件销毁</li><li>使用路由懒加载</li><li>节流、防抖的运用</li></ul></details><h3 id="打包优化" tabindex="-1">打包优化 <a class="header-anchor" href="#打包优化" aria-label="Permalink to &quot;打包优化&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>代码压缩、混淆</li><li>Tree Shaking 模块按需加载</li><li>使用 Scope Hoisting（作用域提升）Webpack 配置 ModuleConcatenationPlugin</li><li>使用 cdn 加载第三方模块</li><li>多线程打包 happypack</li><li>splitChunks 抽离公共文件</li><li>sourceMap 策略</li></ul></details><h3 id="请求相关优化" tabindex="-1">请求相关优化 <a class="header-anchor" href="#请求相关优化" aria-label="Permalink to &quot;请求相关优化&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>客户端缓存</li><li>服务端缓存</li><li>开启 gzip</li></ul></details><h3 id="用户体验" tabindex="-1">用户体验 <a class="header-anchor" href="#用户体验" aria-label="Permalink to &quot;用户体验&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>白屏、首屏优化</li><li>使用骨架屏 Skeleton</li><li>PWA</li></ul></details><h3 id="其他方案" tabindex="-1">其他方案 <a class="header-anchor" href="#其他方案" aria-label="Permalink to &quot;其他方案&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>预渲染</li><li>服务端渲染 SSR</li></ul></details><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="组件中的-name-属性有什么用" tabindex="-1">组件中的 name 属性有什么用 <a class="header-anchor" href="#组件中的-name-属性有什么用" aria-label="Permalink to &quot;组件中的 name 属性有什么用&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>项目使用 keep-alive 时，可搭配组件 name 进行缓存过滤</li><li>DOM 做递归组件时需要调用自身 name</li><li>Vue-devtools 调试工具里显示的组见名称是由 Vue 中组件 name 决定的</li><li>动态切换组件</li></ul></details><h3 id="vue-中的-key-的作用是什么" tabindex="-1">Vue 中的 Key 的作用是什么 <a class="header-anchor" href="#vue-中的-key-的作用是什么" aria-label="Permalink to &quot;Vue 中的 Key 的作用是什么&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>key 的作用主要是为了<code>高效的更新虚拟 DOM</code>。另外 vue 中在使用相同标签名元素的<code>过渡切换</code>时，也会使用到 key 属性，其目的也是为了<code>让 vue 可以区分它们</code>，否则 vue 只会替换其内部属性而不会触发过渡效果。</p></details><h3 id="用过-is-吗-有什么作用" tabindex="-1">用过 is 吗，有什么作用 <a class="header-anchor" href="#用过-is-吗-有什么作用" aria-label="Permalink to &quot;用过 is 吗，有什么作用&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li><p>解决 html 模板的限制</p><p>比如 ul 里面嵌套 li 的写法是 html 语法的固定写法，如果想在 ul 里面嵌套自己的组件，但是 html 在渲染 dom 的时候，组件对 ul 来说并不是有效的 dom</p></li></ul><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> is</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my-component&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><p>动态组件 - 用于组件切换</p><p>componentName 可以是在本页面已经注册的局部组件名和全局组件名, 也可以是一个组件的选项对象。当控制 componentName 改变时就可以动态切换选择组件。</p></li></ul><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">component</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :is</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;componentName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></details><h2 id="场景" tabindex="-1">场景 <a class="header-anchor" href="#场景" aria-label="Permalink to &quot;场景&quot;">​</a></h2><h3 id="在-vue-中要获取当前时间你会放到-computed-还是-methods-里" tabindex="-1">在 Vue 中要获取当前时间你会放到 computed 还是 methods 里 <a class="header-anchor" href="#在-vue-中要获取当前时间你会放到-computed-还是-methods-里" aria-label="Permalink to &quot;在 Vue 中要获取当前时间你会放到 computed 还是 methods 里&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>放在 computed 里面。</p><ul><li>因为 computed 只有在它的相关依赖发生改变时才会重新求值</li><li>相比而言，方法只要发生重新渲染，methods 调用总会执行所有函数</li></ul></details><h3 id="什么使用需要用到-vuex" tabindex="-1">什么使用需要用到 vuex <a class="header-anchor" href="#什么使用需要用到-vuex" aria-label="Permalink to &quot;什么使用需要用到 vuex&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li><p>为什么需要 vuex</p><p>由于<code>组件只维护自身的状态</code>(data)，<strong>组件创建时或者路由切换时，组件会被<code>初始化</code></strong>，从而导致 data 也随之销毁。</p></li><li><p>什么场景下用到 vuex</p><p>如果是 vue 的小型应用，那么没有必要使用 vuex，这个时候使用 vuex 反而会带来负担。组件之间的状态传递使用 props、自定义事件来传递即可。 但是如果涉及到 vue 的大型应用，那么就需要类似于 vuex 这样的<code>集中管理状态的状态机来管理所有组件的状态</code>。例如登录状态、加入购物车、音乐播放等，总之只要是开发 vue 的大型应用都推荐使用<code> vuex 来管理所有组件状态</code>。</p></li></ul></details><h3 id="使用-vue-渲染大量数据时应该怎么优化-说下你的思路" tabindex="-1">使用 vue 渲染大量数据时应该怎么优化？说下你的思路 <a class="header-anchor" href="#使用-vue-渲染大量数据时应该怎么优化-说下你的思路" aria-label="Permalink to &quot;使用 vue 渲染大量数据时应该怎么优化？说下你的思路&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>渲染大量数据，此时很容易出现卡顿的情况。比如大数据量的表格、树、多项下拉选项等，在处理时需根据不同情况做相应处理：</p><ol><li><p>可以采取分页（或到底部刷新）的方式获取，<code>避免渲染大量数据</code></p></li><li><p>使用虚拟列表滚动等解决方案，只<code>渲染视口范围内的数据</code></p></li><li><p>若确定数据不需要更新的场景，可以使用<code>v-once</code>方式<code>只渲染一次</code></p></li><li><p>可以采用懒加载的方式，在用户<code>需要的时候再加载数据</code>，比如 tree 组件子树的懒加载、Table 二级表格当用户点击时再获取数据，级联选择的二级、三级（数据较多时）用户点击后再获取更多数据</p></li><li><p>更多等待补充</p></li></ol></details><h3 id="vue-data-中某一个属性的值发生改变后-视图会立即同步执行重新渲染吗" tabindex="-1">Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗 <a class="header-anchor" href="#vue-data-中某一个属性的值发生改变后-视图会立即同步执行重新渲染吗" aria-label="Permalink to &quot;Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p><strong>不会立即同步执行重新渲染</strong>。Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。<code>Vue 在更新 DOM 时是异步执行的</code>。只要<code>侦听到数据变化</code>， Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。</p><p>如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，<code>在下一个的事件循环tick中</code>，Vue 刷新队列并执行实际（已去重的）工作。</p></details><h2 id="样式" tabindex="-1">样式 <a class="header-anchor" href="#样式" aria-label="Permalink to &quot;样式&quot;">​</a></h2><h3 id="vue-初始化页面闪动问题" tabindex="-1">Vue 初始化页面闪动问题 <a class="header-anchor" href="#vue-初始化页面闪动问题" aria-label="Permalink to &quot;Vue 初始化页面闪动问题&quot;">​</a></h3><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 如类似于 {{ msg }} 这样的出现在页面上 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v-cloak</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="scoped-样式隔离的原理" tabindex="-1">scoped 样式隔离的原理 <a class="header-anchor" href="#scoped-样式隔离的原理" aria-label="Permalink to &quot;scoped 样式隔离的原理&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>在当前组件的 .vue 文件中，如果 style 标签加了 <code>scoped</code> 属性，那么在组件渲染为 DOM 时，<strong>会对每个组件中的 DOM 元素添加格式为：<code>data-v-[hash:8]</code> 的属性</strong>，然后该组件的所有选择器也会添加上对应的<code>[data-v-[hash:8]</code> 属性选择器来<code>只对自身组件产生影响</code>，以此来实现样式隔离。</p></details><h3 id="scoped-是如何实现样式穿透的" tabindex="-1">scoped 是如何实现样式穿透的 <a class="header-anchor" href="#scoped-是如何实现样式穿透的" aria-label="Permalink to &quot;scoped 是如何实现样式穿透的&quot;">​</a></h3><details class="details custom-block"><summary>首先说一下什么场景下需要 scoped 样式穿透</summary><p>当项目引用了第三方组件，需要在组件中局部修改第三方组件的样式，而又不想去除 scoped 属性造成组件之间的样式污染。此时只能通过特殊的方式，scoped 样式穿透。</p><p>有三种常用的方法来实现样式穿透：</p><ol><li>使用 <code>::v-deep</code> 操作符( &gt;&gt;&gt; 的别名)；vue3 为 <code>:deep</code></li><li><code>使用 scoped 标签</code>，再用一个不写 scoped 的来添加样式覆盖</li><li>在组件的外层 DOM 上添加唯一的 class 来区分不同组件，在书写样式时就可以正常针对针对这部分 DOM 书写样式</li></ol></details><h3 id="如何修改组件样式又不去掉-scoped" tabindex="-1">如何修改组件样式又不去掉 scoped <a class="header-anchor" href="#如何修改组件样式又不去掉-scoped" aria-label="Permalink to &quot;如何修改组件样式又不去掉 scoped&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ol><li><p>样式穿透，使用 /deep/ , vue3 为 :deep</p></li><li><p>使用两个 style 标签</p></li></ol></details><h2 id="函数式组件" tabindex="-1">函数式组件 <a class="header-anchor" href="#函数式组件" aria-label="Permalink to &quot;函数式组件&quot;">​</a></h2><h3 id="函数式组件原理" tabindex="-1">函数式组件原理 <a class="header-anchor" href="#函数式组件原理" aria-label="Permalink to &quot;函数式组件原理&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>函数式组件需要在声明组件是指定 <code>functional:true</code></li><li><code>不需要实例化</code>，所以没有 this,this 通过 render 函数的第二个参数 context 来代替</li><li><code>没有生命周期</code>钩子函数，不能使用计算属性，watch</li><li><code>不能通过 $emit 对外暴露事件</code>，调用事件只能通过 context.listeners.click 的方式调用外部传入的事件</li><li>因为函数式组件是没有实例化的，所以在外部通过 ref 去引用组件时，<code>实际引用的是 HTMLElement</code></li><li>函数式组件的 props 可以不用显示声明，所以没有在 props 里面声明的属性都会被自动隐式解析为 prop，而普通组件所有未声明的属性都解析到 $attrs 里面，并自动挂载到组件根元素上面(可以通过 inheritAttrs 属性禁止)</li></ul></details><h3 id="函数式组件的优势及使用场景" tabindex="-1">函数式组件的优势及使用场景 <a class="header-anchor" href="#函数式组件的优势及使用场景" aria-label="Permalink to &quot;函数式组件的优势及使用场景&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>优势：</p><ol><li>由于函数式组件<code>不需要实例化</code>，<code>无状态</code>，<code>没有生命周期</code>，所以<strong>渲染性能</strong>要好于普通组件</li><li>函数式组件结构比较简单，代码结构更清晰</li></ol><p>使用场景：</p><ul><li>一个简单的展示组件，作为容器组件使用 比如 <code>router-view</code> 就是一个函数式组件</li><li>“高阶组件”——用于接收一个组件作为参数，返回一个被包装过的组件</li></ul></details><h2 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h2><h3 id="assets-和-static-的区别" tabindex="-1">assets 和 static 的区别 <a class="header-anchor" href="#assets-和-static-的区别" aria-label="Permalink to &quot;assets 和 static 的区别&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><p>相同点：<strong>存放静态资源文件</strong></p><p>不同点： 1.assets：<code>走打包压缩流程</code>，压缩后的文件会放置在 static 文件中跟着 index.html 一同上传至服务器 2.static：<code>不走打包压缩</code>等流程，而是直接进入打包好的目录，直接上传至服务器（<code>打包效率高但体积大</code>）</p><p>建议：</p><ol><li>将项目中 template 需要的样式文件、js 文件等都可以放置在 assets 中</li><li>项目引入的第三方资源文件如 iconfoont.css 等放置在 static 中（第三方文件已经被处理过了）</li></ol></details><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7208005892313579576?from=search-suggest#heading-16" target="_blank" rel="noreferrer">2023 高频前端面试题合集之 Vue（上）</a></li><li><a href="https://juejin.cn/post/7275608678827868179" target="_blank" rel="noreferrer">2023 前端 Vue 面试题汇总</a></li></ul>`,47),o=[t];function d(r,n,h,c,u,p){return i(),e("div",null,o)}const b=a(l,[["render",d]]);export{k as __pageData,b as default};
