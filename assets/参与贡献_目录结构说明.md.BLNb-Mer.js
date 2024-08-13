import{_ as s,c as a,o as i,V as e}from"./chunks/framework.CMKosmpS.js";const u=JSON.parse('{"title":"目录结构说明","description":"","frontmatter":{},"headers":[],"relativePath":"参与贡献/目录结构说明.md","filePath":"参与贡献/目录结构说明.md","lastUpdated":1708674619000}'),n={name:"参与贡献/目录结构说明.md"},l=e(`<h1 id="目录结构说明" tabindex="-1">目录结构说明 <a class="header-anchor" href="#目录结构说明" aria-label="Permalink to &quot;目录结构说明&quot;">​</a></h1><p>贡献时，希望您根据现有模块，不改动目前的文件结构。重要改动请提 issue，否则可能不会通过合并。</p><p><strong>目录只与首页强相关</strong> 若你想增加分类，可考虑下首页是否还要增加类别 ~ 反正我觉得基本够了</p><h2 id="本站的几大版块分类" tabindex="-1">本站的几大版块分类 <a class="header-anchor" href="#本站的几大版块分类" aria-label="Permalink to &quot;本站的几大版块分类&quot;">​</a></h2><h3 id="直击概念" tabindex="-1">直击概念 <a class="header-anchor" href="#直击概念" aria-label="Permalink to &quot;直击概念&quot;">​</a></h3><p>添加的内容尽量把这个东西说清楚即可，思路：是什么，什么背景下，做了什么 ~</p><blockquote><p>index 只与创建时间有关（为了方便找文件，sidebar和nav顺序 在config里可调整不冲突）</p></blockquote><h3 id="面试官问" tabindex="-1">面试官问 <a class="header-anchor" href="#面试官问" aria-label="Permalink to &quot;面试官问&quot;">​</a></h3><p>可先浏览下该模块，尽量不添加重复问题。避免为堆内容而堆内容</p><blockquote><p>index 只与创建时间有关（为了方便找文件，sidebar和nav顺序 在config里可调整不冲突）</p></blockquote><h3 id="编写代码" tabindex="-1">编写代码 <a class="header-anchor" href="#编写代码" aria-label="Permalink to &quot;编写代码&quot;">​</a></h3><p>和面试官问的唯一区别就是，一个口述，一个实操。涉及到代码，请尽量提交可运行的代码。</p><p>可写思路，这样便于学习，可添加 <code>::: details</code> 或是 <code>::: code-group</code> 渐进式能更好的帮助我们理解。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>代码没有标准答案。若有更好的思路和解法，会提高展示优先级，还请理解。</p></div><h3 id="网友面经" tabindex="-1">网友面经 <a class="header-anchor" href="#网友面经" aria-label="Permalink to &quot;网友面经&quot;">​</a></h3><p>按范例一样，直接写过程就好了。不用写答案</p><p>当然，如果您愿意附答案那再好不过了。</p><p>可适当提炼关键词，结合本站搜索，附带 直击概念 或是 其他版块的链接</p><h3 id="相关准备" tabindex="-1">相关准备 <a class="header-anchor" href="#相关准备" aria-label="Permalink to &quot;相关准备&quot;">​</a></h3><p>我自己加的，毕竟和面试配套，有个简历也说得过去，可继续完善</p><h3 id="参与贡献" tabindex="-1">参与贡献 <a class="header-anchor" href="#参与贡献" aria-label="Permalink to &quot;参与贡献&quot;">​</a></h3><p>啰嗦了一堆后才发现开源真的不易，细节太多了 ~</p><p><code>站在巨人的肩膀上，致敬和感谢前辈们！</code></p><h2 id="文件命名规范" tabindex="-1">文件命名规范 <a class="header-anchor" href="#文件命名规范" aria-label="Permalink to &quot;文件命名规范&quot;">​</a></h2><p>[模块_类型_创作编号]-文件标题</p><p>如：</p><ul><li>q_http_2-http_header</li><li>s_http_2-http_header</li><li>c_js_1-promise</li></ul><p>只有上面 直击概念、面试官问、编写代码 三个版块这么分，其他就不用了。</p><p>分割号 <code>-</code> 后的才是文件名，但这样的好处是有个清晰的类别。<code>这不挺像函数作用域嘛</code> 不然容易有同样的命名，易写错。</p><p>特别是http的，这样就能有效地区分了</p><h3 id="关于我的idea" tabindex="-1">关于我的idea <a class="header-anchor" href="#关于我的idea" aria-label="Permalink to &quot;关于我的idea&quot;">​</a></h3><p>为什么这么命名，其实就是整理到一半突然有了个<code>idea</code>，但我知道想短期内实现估计很困难 = = 算埋下个种子吧，万一以后真实现了呢</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleFilename</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FilenameType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> types</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> filename.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> keywords</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> filename.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 以后若面经多了，可提取关键词 和 question 里的 keyword 做匹配</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 或者 再扩展下设计权重啥的</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 再弄个通用 template</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // render -&gt; generatge</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>若是有必要，后续可能会将这些 .mjs 改成 .ts 啊 = = 后面再说吧</p>`,34),p=[l];function t(h,r,k,d,o,c){return i(),a("div",null,p)}const g=s(n,[["render",t]]);export{u as __pageData,g as default};
