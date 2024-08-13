import{_ as t,E as l,c,J as o,V as a,o as r}from"./chunks/framework.CMKosmpS.js";const y=JSON.parse('{"title":"面向对象","description":"","frontmatter":{},"headers":[],"relativePath":"面试官问/02js/q_js_3-object.md","filePath":"面试官问/02js/q_js_3-object.md","lastUpdated":1709476749000}'),s={name:"面试官问/02js/q_js_3-object.md"},i=a('<h1 id="面向对象" tabindex="-1">面向对象 <a class="header-anchor" href="#面向对象" aria-label="Permalink to &quot;面向对象&quot;">​</a></h1><p>回顾 <a href="./../../直击概念/02js/s_js_3-object.html">直击概念 - 变量</a></p><h2 id="类与继承" tabindex="-1">类与继承 <a class="header-anchor" href="#类与继承" aria-label="Permalink to &quot;类与继承&quot;">​</a></h2><h3 id="说一下原型链" tabindex="-1">说一下原型链 <a class="header-anchor" href="#说一下原型链" aria-label="Permalink to &quot;说一下原型链&quot;">​</a></h3><details class="details custom-block"><summary>详细信息</summary><ul><li>每个对象都有属性 prototype，一个隐式原型叫 <code>__proto__</code>，它指向其<code>构造函数的原型对象</code></li><li>当查找某个属性或方法时，先从自身上查找，没有找到会沿着 <code>__proto__</code> 找到构造函数（constructor）的原型对象（prototype），仍然没有找到会继续沿着 <code>__proto__</code> 向上查找到它构造函数原型对象的原型对象</li><li>直到找到顶级对象 object 为 null，由此形成的链条为原型链</li></ul></details>',5),d=a('<details class="details custom-block"><summary>引用类型四个特性</summary><ul><li>引用类型，都具有对象特性，即可自由扩展属性</li><li>引用类型，都有一个隐式原型，即 <code>__proto__</code>，属性值为一个普通对象</li><li>引用类型，隐式原型的属性值指向它构造函数 <code>Constructor</code> 的显式原型 prototype 属性值</li><li>当查找一个对象某个属性时，若对象本身没有该属性，会去找它隐式原型 <code>__proto__</code> 中寻找</li><li>若还是没找到会继续在它构造函数的显式原型 <code>prototype</code> 中寻找，直至找到或 <code>__proto__</code> 为 null 为止，由此形成原型链</li></ul></details><h2 id="什么是浅拷贝" tabindex="-1">什么是浅拷贝 <a class="header-anchor" href="#什么是浅拷贝" aria-label="Permalink to &quot;什么是浅拷贝&quot;">​</a></h2><p>浅拷贝是创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以<code>如果其中一个对象改变了这个地址，就会影响到另一个对象</code>。</p><details class="details custom-block"><summary>实现浅拷贝的几种方式</summary><ol><li><code>Object.assign()</code></li><li><code>lodash</code>的 _.clone 方法</li><li>ES6 展开运算符 <code>...</code></li><li>Array.prototype.<code>concat()</code></li><li>Array.prototype.<code>slice()</code></li></ol></details><h2 id="什么是深拷贝" tabindex="-1">什么是深拷贝 <a class="header-anchor" href="#什么是深拷贝" aria-label="Permalink to &quot;什么是深拷贝&quot;">​</a></h2><p>深拷贝是将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象，且<code>修改新对象不会影响原对象</code>。</p><h2 id="赋值和深浅拷贝的区别" tabindex="-1">赋值和深浅拷贝的区别 <a class="header-anchor" href="#赋值和深浅拷贝的区别" aria-label="Permalink to &quot;赋值和深浅拷贝的区别&quot;">​</a></h2>',7),_=a('<details class="details custom-block"><summary>实现深拷贝的几种方式</summary><ol><li>JSON.parse(JSON.stringify()) <code>缺点是不能处理函数和正则</code></li><li><code>lodash</code>的 <code>_.cloneDeep</code> 方法</li><li><code>jQuery.extend()</code> 方法</li><li>手写递归方法 - 见 <a href="./../../编写代码/02js/c_js_2-deepcopy/c_js_2-deepcopy.html">deepCopy</a></li></ol></details><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><p>浅拷贝与深拷贝 <a href="https://juejin.cn/post/6844904197595332622" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904197595332622</a></p></li><li><p>深拷贝的终极探索 <a href="https://segmentfault.com/a/1190000016672263" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000016672263</a></p></li><li><p>How to deep clone a JavaScript object<a href="https://flaviocopes.com/how-to-clone-javascript-object/" target="_blank" rel="noreferrer">https://flaviocopes.com/how-to-clone-javascript-object/</a></p></li></ul>',3);function n(p,h,m,u,j,b){const e=l("Image");return r(),c("div",null,[i,o(e,{src:"/02js/prototype-chain.png",alt:"原型链"}),d,o(e,{src:"/02js/clone1.png",alt:"shadowCopy"}),o(e,{src:"/02js/clone2.png",alt:"deepCopy"}),_])}const q=t(s,[["render",n]]);export{y as __pageData,q as default};
