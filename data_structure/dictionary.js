//字典 dictionary类的基础是array类不是object类 同时可以排序
//add方法，接受键和值
function Dictionary() {
  this.dataStore = new Array();
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

//show
function showAll() {
  let dataKeys = Array.prototype.slice.call(object.keys(this.dataStore));
  for (let key in dataKeys) {
    console.log(dataKeys[key] + '->' + this.dataStore[key]);
  }
}
