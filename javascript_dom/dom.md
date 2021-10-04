#javascript DOM编程艺术笔记
###DOM树
如下html代码，用DOM树的方式来看结构如书中图7-2，就能明白各种DOM操作方法了。
```
<div id="testdiv">
<p>this is <em>my</em> content.</p>
</div>
```
![html-DOM树](html-DOM树.jpg)

###页面加载完毕添加执行函数
把在页面加载完毕时候执行函数创建为一个队列，当这个处理函数上没有绑定函数时候，把新函数 
添加给他，绑定了的话就添加到现有的末尾。
```
function addLoadEvent(func) {
let oldonload = window.onload;
if (typeof window.onload !== 'function') {
window.onload = func;
} else {
window.onload = function () {
oldonload();
func();
}
}
}
```
###把一个节点插入到另一个之后的函数
两个参数一个是待插入元素，一个是目标元素；将目标元素的parentNode属性保存到parent里；然后检查目标元素是否为parent的最后一个子元素，是的话将新元素追加到
parent元素上，不是的话把新元素插入到目标元素和目标元素的下一个兄弟元素中。
```
function insertAfter(newElement, targetElement) {
let parent = targetElement.parentNode;
if (parent.lalastChild === targetElement) {
parent.appendChild(newElement);
} else {
parent.insertBefore(newElement, targetElement.nextSibling);
}
}
```
###js dom动画
书中的使用setTimeout函数改变位置形成动画太古老了，W3C提供了window.requestAnimationFrame API，告诉浏览器下次重绘前执行动画，
使用dom动画的话参考https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame，
https://zh.javascript.info/js-animation，
淘系前端的动画文章https://fed.taobao.org/blog/taofed/do71ct/js-animation-base/
