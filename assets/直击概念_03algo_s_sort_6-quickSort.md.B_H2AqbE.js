import{_ as o,E as e,c as r,J as i,V as a,o as l}from"./chunks/framework.CMKosmpS.js";const S=JSON.parse('{"title":"快速排序 Quick Sort","description":"","frontmatter":{},"headers":[],"relativePath":"直击概念/03algo/s_sort_6-quickSort.md","filePath":"直击概念/03algo/s_sort_6-quickSort.md","lastUpdated":1708674619000}'),s={name:"直击概念/03algo/s_sort_6-quickSort.md"},c=a('<h1 id="快速排序-quick-sort" tabindex="-1">快速排序 Quick Sort <a class="header-anchor" href="#快速排序-quick-sort" aria-label="Permalink to &quot;快速排序 Quick Sort&quot;">​</a></h1><blockquote><p>快速排序的名字起的是简单粗暴，因为一听到这个名字你就知道它存在的意义，就是快，而且效率高! 它是处理大数据最快的排序算法之一了。</p></blockquote><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。</p><h2 id="算法描述" tabindex="-1">算法描述 <a class="header-anchor" href="#算法描述" aria-label="Permalink to &quot;算法描述&quot;">​</a></h2><p>快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：</p><ol><li>从数列中挑出一个元素，称为 &quot;基准&quot;（pivot）；</li><li>重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；</li><li>递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。</li></ol>',7),n=a('<h2 id="算法实现" tabindex="-1">算法实现 <a class="header-anchor" href="#算法实现" aria-label="Permalink to &quot;算法实现&quot;">​</a></h2><p><a href="./../../编写代码/03algo/c_sort_6-quickSort/c_sort_6-quickSort.html">快速排序实现</a></p><h2 id="算法分析" tabindex="-1">算法分析 <a class="header-anchor" href="#算法分析" aria-label="Permalink to &quot;算法分析&quot;">​</a></h2><ul><li>最佳情况：T(n) = O(nlogn)</li><li>最差情况：T(n) = O(n2)</li><li>平均情况：T(n) = O(nlogn)</li></ul><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6844903444365443080" target="_blank" rel="noreferrer">十大经典排序算法总结（JavaScript 描述）</a></li></ul>',6);function _(h,u,d,p,q,k){const t=e("Image");return l(),r("div",null,[c,i(t,{alt:"快速排序动图演示",src:"/03algo/quickSort.gif"}),n])}const f=o(s,[["render",_]]);export{S as __pageData,f as default};
