import{_ as o,E as r,c as i,J as l,m as a,a as e,V as n,o as h}from"./chunks/framework.CMKosmpS.js";const S=JSON.parse('{"title":"OSI 模型","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/04http/s_http_0-osi.md","filePath":"直击概念/04http/s_http_0-osi.md","lastUpdated":1709481614000}'),s={name:"直击概念/04http/s_http_0-osi.md"},c=a("h1",{id:"osi-模型",tabindex:"-1"},[e("OSI 模型 "),a("a",{class:"header-anchor",href:"#osi-模型","aria-label":'Permalink to "OSI 模型"'},"​")],-1),d=a("p",null,[a("code",null,"开放式系统互联模型"),e("（英语：Open System Interconnection Model，缩写：OSI；简称为 OSI 模型）是一种"),a("code",null,"概念模型"),e("，由国际标准化组织提出，一个试图使各种计算机在世界范围内互连为"),a("code",null,"网络的标准框架"),e("。"),a("strong",null,"定义于 ISO/IEC 7498-1"),e("。")],-1),p=a("p",null,"该模型将通信系统中的数据流划分为七个层，从分布式应用程序数据的最高层表示到跨通信介质传输数据的物理实现。每个中间层为其上一层提供功能，其自身功能则由其下一层提供。功能的类别通过标准的通信协议在软件中实现。",-1),_=n('<h2 id="层次划分" tabindex="-1">层次划分 <a class="header-anchor" href="#层次划分" aria-label="Permalink to &quot;层次划分&quot;">​</a></h2><p>根据建议 X.200，OSI 将计算机网络体系结构划分为以下七层，标有 1 ～ 7，第 1 层在底部</p><h3 id="第七层-应用层-最上层" tabindex="-1">第七层 - 应用层 （最上层） <a class="header-anchor" href="#第七层-应用层-最上层" aria-label="Permalink to &quot;第七层 - 应用层 （最上层）&quot;">​</a></h3><p>应用层（Application Layer）是用户真正与电脑沟通的点，这一层只有在真正需要访问网络才有作用。</p><h3 id="第六层-表现层-表示层" tabindex="-1">第六层 - 表现层 （表示层） <a class="header-anchor" href="#第六层-表现层-表示层" aria-label="Permalink to &quot;第六层 - 表现层 （表示层）&quot;">​</a></h3><p>表现层（Presentation Layer）把数据转换为能与接收者的系统格式兼容并适合传输的格式。</p><h3 id="第五层-会话层" tabindex="-1">第五层 - 会话层 <a class="header-anchor" href="#第五层-会话层" aria-label="Permalink to &quot;第五层 - 会话层&quot;">​</a></h3><p>会议层（Session Layer）负责在数据传输中设置和维护计算机网络中两台计算机之间的通信连接。</p><h3 id="第四层-传输层" tabindex="-1">第四层 - 传输层 <a class="header-anchor" href="#第四层-传输层" aria-label="Permalink to &quot;第四层 - 传输层&quot;">​</a></h3><p>传输层（Transport Layer）把传输表头（TH）加至资料以形成分组。传输表头包含了所使用的协议等发送信息。例如:传输控制协议（TCP）等。</p><h3 id="第三层-网络层" tabindex="-1">第三层 - 网络层 <a class="header-anchor" href="#第三层-网络层" aria-label="Permalink to &quot;第三层 - 网络层&quot;">​</a></h3><p>网络层（Network Layer）决定数据的路径选择和转寄，将网络表头（NH）加至数据包，以形成分组。网络表头包含了网络资料。例如:互联网协议（IP）等。</p><h3 id="第二层-数据链路层" tabindex="-1">第二层 - 数据链路层 <a class="header-anchor" href="#第二层-数据链路层" aria-label="Permalink to &quot;第二层 - 数据链路层&quot;">​</a></h3><p>数据链路层（Data Link Layer）负责网络寻址、错误侦测和改错。当表头和表尾被加至数据包时，会形成信息框（Info Box）。数据链表头（DLH）是包含了物理地址和错误侦测及改错的方法。数据链表尾（DLT）是一串指示数据包末端的字符串。例如以太网、无线局域网（Wi-Fi）和通用分组无线服务（GPRS）等。</p><p>分为两个子层：逻辑链路控制（logical link control，LLC）子层和介质访问控制（Media access control，MAC）子层。</p><h3 id="第一层-物理层-最底层" tabindex="-1">第一层 物理层 - 最底层 <a class="header-anchor" href="#第一层-物理层-最底层" aria-label="Permalink to &quot;第一层 物理层 - 最底层&quot;">​</a></h3><p>物理层（Physical Layer）在局域网上传送数据帧（Data Frame），它负责管理电脑通信设备和网络媒体之间的互通。包括了针脚、电压、线缆规范、集线器、中继器、网卡、主机接口卡、路由器等。</p><h2 id="影响" tabindex="-1">影响 <a class="header-anchor" href="#影响" aria-label="Permalink to &quot;影响&quot;">​</a></h2><p>OSI 是一个定义良好的<code>协议规范集</code>，并有许多可选部分完成类似的任务。它定义了开放系统的层次结构、层次之间的相互关系以及各层所包括的可能的任务，作为一个框架来协调和组织各层所提供的服务。</p><p>OSI 参考模型<code>并没有提供一个可以实现的方法</code>，而是<code>描述了一些概念</code>，<strong>用来协调进程间通信标准的制定</strong>。即 OSI 参考模型并不是一个标准，而是<strong>一个在制定标准时所使用的概念性框架</strong>。</p><h2 id="自测" tabindex="-1">自测 <a class="header-anchor" href="#自测" aria-label="Permalink to &quot;自测&quot;">​</a></h2><p><a href="./../../面试官问/04http/q_http_1-base.html">面试官问 - 应用层</a></p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/zylblogs/articles/15531878.html" target="_blank" rel="noreferrer">Java 网络编程-基础-OSI 网络参考模型、TCP、UDP、IP</a></li><li><a href="https://zh.wikipedia.org/wiki/OSI%E6%A8%A1%E5%9E%8B" target="_blank" rel="noreferrer">https://zh.wikipedia.org/wiki/OSI模型</a></li></ul>',24);function u(m,b,f,I,P,k){const t=r("Image");return h(),i("div",null,[c,d,p,l(t,{src:"/04http/OSI.png",alt:"OSI七层协议"}),_])}const O=o(s,[["render",u]]);export{S as __pageData,O as default};
