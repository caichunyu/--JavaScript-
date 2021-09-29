function showPic(whichpic) {
  let source = whichpic.getAttribute('href'); //获取a的href，img的图片地址
  let placeholder = document.getElementById('placeholder'); //获取到要展示的img元素
  placeholder.setAttribute('src', source); //让要展示的img换成a的
  let text = whichpic.getAttribute('title'); // a的title
  let description = document.getElementById('description'); //获取p元素，让p内容变为a的title
  description.firstChild.nodeValue = text;
}

//把在页面加载完毕时候执行函数创建为一个队列，当这个处理函数上没有绑定函数时候，把新函数
// 添加给他，绑定了的话就添加到现有的末尾。
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
