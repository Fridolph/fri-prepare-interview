import{_ as s,c as a,o as i,V as n}from"./chunks/framework.CMKosmpS.js";const g=JSON.parse('{"title":"内容模版格式参考","description":"","frontmatter":{},"headers":[],"relativePath":"参与贡献/范例.md","filePath":"参与贡献/范例.md","lastUpdated":1708674619000}'),e={name:"参与贡献/范例.md"},l=n(`<h1 id="内容模版格式参考" tabindex="-1">内容模版格式参考 <a class="header-anchor" href="#内容模版格式参考" aria-label="Permalink to &quot;内容模版格式参考&quot;">​</a></h1><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;"># h1 模块标题 - 必须</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">为了更好的 local search 和目录结构，需要添加 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`&lt;h1&gt;\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 主标题 </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">请为你的内容添加 主标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### 副标题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">若需要可继续添加 副标题，让该页具有良好的目录结构。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## 参考资料</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">例：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> HTTPS &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">https://developer.mozilla.org/zh-CN/docs/Glossary/HTTPS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="一些注意事项" tabindex="-1">一些注意事项 <a class="header-anchor" href="#一些注意事项" aria-label="Permalink to &quot;一些注意事项&quot;">​</a></h2><p>请务必确保页面中只有一个<code>&lt;h1&gt;</code>标签。如果存在多个<code>&lt;h1&gt;</code>标签，您应该考虑将内容拆分到新的文档中。</p><p>本页的导航会根据<code>&lt;h2&gt;</code>、<code>&lt;h3&gt;</code>和<code>&lt;h4&gt;</code>标签来生成大纲，因此请确保标题清晰简洁，以便用户能够轻松理解内容结构。</p><h2 id="关于图片引用" tabindex="-1">关于图片引用 <a class="header-anchor" href="#关于图片引用" aria-label="Permalink to &quot;关于图片引用&quot;">​</a></h2><p>如果你的文档涉及复杂的流程、业务逻辑或难以理解的概念，我强烈建议配上相关图片。</p><ol><li><p>你可以直接将图片放到<code>public/[类别]</code>目录下，但请确保在压缩的情况下图像依然清晰。</p></li><li><p>更推荐的做法是引用图片地址，但需要注意安全性和有效性，请确保外部链接能够正常访问。</p></li><li><p>我自己曾经因为服务器长时间停机的缘故遇到了问题，因此，如果你的站点是个人站点或者静态服务器的话，我建议将图片存放在本地。</p></li></ol><h2 id="文件命名规范" tabindex="-1">文件命名规范 <a class="header-anchor" href="#文件命名规范" aria-label="Permalink to &quot;文件命名规范&quot;">​</a></h2><p>[模块_类型_创作编号]-文件标题</p><p>如：</p><ul><li>q_http_2-http_header</li><li>s_http_2-http_header</li><li>c_js_1-promise</li></ul><p>只有上面 直击概念、面试官问、编写代码 三个版块这么分，其他就不用了。</p><p>分割号 <code>-</code> 后的才是文件名，但这样的好处是有个清晰的类别。<code>这不挺像函数作用域嘛</code> 不然容易有同样的命名，易写错。</p><p>特别是http的，这样就能有效地区分了</p><h3 id="关于我的idea" tabindex="-1">关于我的idea <a class="header-anchor" href="#关于我的idea" aria-label="Permalink to &quot;关于我的idea&quot;">​</a></h3><p>为什么这么命名，其实就是整理到一半突然有了个<code>idea</code>，但我知道想短期内实现估计很困难 = = 算埋下个种子吧，万一以后真实现了呢</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleFilename</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">filename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FilenameType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>若是有必要，后续可能会将这些 .mjs 改成 .ts 啊 = = 后面再说吧</p>`,19),p=[l];function t(h,r,k,d,c,o){return i(),a("div",null,p)}const E=s(e,[["render",t]]);export{g as __pageData,E as default};
