import{_ as t,c as a,o as e,V as l}from"./chunks/framework.cwIXGwyx.js";const m=JSON.parse('{"title":"HTTP缓存机制","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/04http/q_http_3-cache.md","filePath":"面试官问/04http/q_http_3-cache.md","lastUpdated":1709101052000}'),h={name:"面试官问/04http/q_http_3-cache.md"},d=l('<h1 id="http缓存机制" tabindex="-1">HTTP缓存机制 <a class="header-anchor" href="#http缓存机制" aria-label="Permalink to &quot;HTTP缓存机制&quot;">​</a></h1><h2 id="浏览器有几种刷新方式-它们有什么区别" tabindex="-1">浏览器有几种刷新方式，它们有什么区别？ <a class="header-anchor" href="#浏览器有几种刷新方式-它们有什么区别" aria-label="Permalink to &quot;浏览器有几种刷新方式，它们有什么区别？&quot;">​</a></h2><details class="details custom-block"><summary>详细信息</summary><table><thead><tr><th>特性</th><th>地址栏输入</th><th>手动刷新</th><th>强制刷新</th></tr></thead><tbody><tr><td>操作方式</td><td>输入url链接跳转</td><td>F5或右键点击刷新</td><td>ctrl+F5强制刷新</td></tr><tr><td>缓存支持</td><td>强缓存、协商缓存都生效</td><td>强缓存失效，协商缓存有效</td><td>缓存都失效</td></tr></tbody></table></details><h2 id="说一下浏览器缓存策略" tabindex="-1">说一下浏览器缓存策略 <a class="header-anchor" href="#说一下浏览器缓存策略" aria-label="Permalink to &quot;说一下浏览器缓存策略&quot;">​</a></h2><details class="details custom-block"><summary>分为：</summary><ul><li><code>强缓存</code>：命中后浏览器不走服务器，直接读取本地的缓存资源，更快读取。 <ul><li>Cache-Control</li><li>Expires</li></ul></li><li><code>协商缓存</code>：会通知服务器若命中，浏览器返304通知浏览器使用本地缓存资源，更快读取 <ul><li>ETag / If-None-Match</li><li>Last-Modified / If-Modified-Since</li></ul></li></ul></details><h2 id="回顾" tabindex="-1">回顾 <a class="header-anchor" href="#回顾" aria-label="Permalink to &quot;回顾&quot;">​</a></h2><ul><li><p><a href="./../../直击概念/04http/s_http_1-http.html">http</a></p></li><li><p><a href="./../../直击概念/04http/s_http_4-cache.html">http缓存</a></p></li></ul>',7),i=[d];function r(o,c,s,_,n,p){return e(),a("div",null,i)}const f=t(h,[["render",r]]);export{m as __pageData,f as default};
