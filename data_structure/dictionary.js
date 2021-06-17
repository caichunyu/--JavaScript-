//字典 dictionary类的基础是array类不是object类 同时可以排序
//add方法，接受键和值
//运行环境，node v14
function Dictionary() {
  this.dataStore = [];
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
  this.sort = sort;
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
//优化，这样显示所有的键值对
function showAll() {
  let dataKeys = Object.keys(this.dataStore);
  console.log(this.dataStore, 'ddd')
  for (let key in dataKeys) {
    console.log(dataKeys[key] + '->' + this.dataStore[dataKeys[key]]);
  }
}

//测试
let pbook = new Dictionary();
pbook.add('mike', '123');
pbook.add('david', '44');
pbook.add('tom', '55');
console.log(pbook.find('david'));
// pbook.remove('david');
pbook.showAll();

//计数，修改count函数可用
function count() {
  let i = 0;
  Object.keys(this.dataStore).forEach(
    () => {
      i++
    })
  console.log(Object.keys(this.dataStore), 'count', i)
}

//clear 清空
function clear() {
  let dataKeys = Object.keys(this.dataStore);
  // console.log(dataKeys, 'clear',)
  for (let i = 0; i < dataKeys.length; i++) {
    // console.log(dataKeys[i], 'clear1')
    delete this.dataStore[dataKeys[i]];
  }
}

//sort 排序
function sort() {
  // for (let key in Object.keys(this.dataStore).sort()) {
    console.log(Object.keys(this.dataStore).sort(), 'sort');
  }
// }

pbook.count();
// pbook.clear();
pbook.showAll();
pbook.sort();
