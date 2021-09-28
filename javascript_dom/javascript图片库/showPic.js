function showPic(whichpic) {
  let source = whichpic.getAttribute('href'); //获取a的href，img的图片地址
  let placeholder = document.getElementById('placeholder'); //获取到要展示的img元素
  placeholder.setAttribute('src', source); //让要展示的img换成a的
  let text = whichpic.getAttribute('title'); // a的title
  let description = document.getElementById('description'); //获取p元素，让p内容变为a的title
  description.firstChild.nodeValue = text;
}
