import{_ as s,E as o,c as i,J as l,m as a,a as e,V as n,o as d}from"./chunks/framework.CMKosmpS.js";const B=JSON.parse('{"title":"链表 Linked List","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/03algo/s_algo_3-linkedlist.md","filePath":"直击概念/03algo/s_algo_3-linkedlist.md","lastUpdated":1708674619000}'),r={name:"直击概念/03algo/s_algo_3-linkedlist.md"},c=a("h1",{id:"链表-linked-list",tabindex:"-1"},[e("链表 Linked List "),a("a",{class:"header-anchor",href:"#链表-linked-list","aria-label":'Permalink to "链表 Linked List"'},"​")],-1),_=a("p",null,"链表是一组节点组成的集合，每个节点都使用一个对象的引用来指向它的后一个节点。指向另一节点的引用讲做链。可参考图片便于理解。",-1),h=a("p",null,"其中，data 中保存着数据，next 保存着下一个链表的引用。上图中，我们说 data2 跟在 data1 后面，而不是说 data2 是链表中的第二个元素。上图，值得注意的是，我们将链表的尾元素指向了 null 节点，表示链接结束的位置。",-1),p=a("p",null,[e("由于"),a("code",null,"链表的起始点"),e("的确定比较麻烦，因此很多链表的实现都会在链表的最前面添加一个特殊的节点，称为 头节点，表示链表的头部。进过改造，链表就成了如下的样子：")],-1),k=a("h2",{id:"链表的操作",tabindex:"-1"},[e("链表的操作 "),a("a",{class:"header-anchor",href:"#链表的操作","aria-label":'Permalink to "链表的操作"'},"​")],-1),u=a("h3",{id:"插入节点",tabindex:"-1"},[e("插入节点 "),a("a",{class:"header-anchor",href:"#插入节点","aria-label":'Permalink to "插入节点"'},"​")],-1),b=a("p",null,"向链表中插入一个节点的效率很高，需要修改它前面的节点(前驱)，使其指向新加入的节点，而将新节点指向原来前驱节点指向的节点即可。下面我将用图片演示如何在 data2 节点 后面插入 data4 节点。",-1),m=a("h3",{id:"删除节点",tabindex:"-1"},[e("删除节点 "),a("a",{class:"header-anchor",href:"#删除节点","aria-label":'Permalink to "删除节点"'},"​")],-1),g=a("p",null,"同样，从链表中删除一个节点，也很简单。只需将待删节点的前驱节点指向待删节点的，同时将待删节点指向 null，那么节点就删除成功了。下面我们用图片演示如何从链表中删除 data4 节点。",-1),f=a("h2",{id:"双向链表",tabindex:"-1"},[e("双向链表 "),a("a",{class:"header-anchor",href:"#双向链表","aria-label":'Permalink to "双向链表"'},"​")],-1),x=a("p",null,"尽管从链表的头节点遍历链表很简单，但是反过来，从后向前遍历却不容易。我们可以通过给 Node 类增加一个 previous 属性，让其指向前驱节点的链接，这样就形成了双向链表，如下图：",-1),P=a("p",null,"此时，向链表插入一个节点就要更改节点的前驱和后继了，但是删除节点的效率提高了，不再需要寻找待删除节点的前驱节点了。",-1),L=a("h2",{id:"循环链表",tabindex:"-1"},[e("循环链表 "),a("a",{class:"header-anchor",href:"#循环链表","aria-label":'Permalink to "循环链表"'},"​")],-1),v=a("p",null,[e("循环链表和单链表相似，节点类型都是一样，唯一的区别是，在创建循环链表的时候，让其头节点的 next 属性执行它本身，即 "),a("code",null,"head.next = head;")],-1),w=a("p",null,"这种行为会导致链表中每个节点的 next 属性都指向链表的头节点，换句话说，也就是链表的尾节点指向了头节点，形成了一个循环链表，如下图所示：",-1),N=n('<h2 id="链表的实现" tabindex="-1">链表的实现 <a class="header-anchor" href="#链表的实现" aria-label="Permalink to &quot;链表的实现&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">跳转到编写代码</p><p><a href="./../../编写代码/03algo/c_algo_3-linkedlist/c_algo_3-linkedlist.html">链表 Linked List</a></p></div><div class="warning custom-block"><p class="custom-block-title">吐槽</p><p>哪怕是掘金高赞文章，依然会存在代码运行不通或其他错误等等。相对于发表文章，开源文档的好处是能及时更新，保持时效性，及时更正错误。写到这更坚信了要把代码这块完善好的决心！作为一名程序员，<strong>首先要保证我们写出的代码能运行！</strong></p></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><p><a href="https://juejin.cn/post/6844903498362912775" target="_blank" rel="noreferrer">JS 中的算法与数据结构——链表(Linked-list)</a></p></li><li><p><a href="https://juejin.cn/post/6850418120755494925" target="_blank" rel="noreferrer">「算法与数据结构」链表的 9 个基本操作</a></p></li></ul><p>参考的这篇，更多推荐看此贴</p>',6);function T(V,S,j,q,I,$){const t=o("Image");return d(),i("div",null,[c,_,l(t,{src:"/03algo/linkedlist1.awebp",alt:"链表结构图"}),h,p,l(t,{src:"/03algo/linkedlist2.awebp",alt:"有头节点的链表"}),k,u,b,l(t,{src:"/03algo/linkedlist3.awebp",alt:"链表 - 插入节点"}),m,g,l(t,{src:"/03algo/linkedlist4.awebp",alt:"链表 - 删除节点"}),f,x,l(t,{src:"/03algo/linkedlist5.awebp",alt:"双向链表结构图"}),P,L,v,w,l(t,{src:"/03algo/linkedlist6.awebp",alt:"循环链表"}),N])}const C=s(r,[["render",T]]);export{B as __pageData,C as default};
