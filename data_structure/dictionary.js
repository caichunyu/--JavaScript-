//字典 dictionary类的基础是array类不是object类 同时可以排序
//add方法，接受键和值
function Dictionary() {
  this.dataStore = new Array();
  this.add = add;
  this. find = find;
  this. remove = remove;
  this.showAll = showAll;
}

//add方法
function add(key, value) {
  this.dataStore[key] = value;
}

//find方法
function find(key) {
  return this.dataStore[key];
}

//remove
function remove(key) {
  delete this.dataStore[key];
}

//show 这个函数有些疑问，  console.log(this.dataStore, 'ddd')这个就行啊。。。
function showAll() {
  let dataKeys = Array.prototype.slice.call(Object.keys(this.dataStore));
  console.log(this.dataStore, 'ddd')
  for (let key in dataKeys) {
    console.log(dataKeys[key] + '->' + this.dataStore[key]);
  }
}

//测试
let pbook = new Dictionary();
pbook.add('mike', '123');
pbook.add('david', '44');
pbook.add('tom', '55');
console.log(pbook.find('david'));
pbook.remove('david');
pbook.showAll();

