// listSize(属性) 列表的元素个数
// pos(属性) 列表的当前位置
// length (属性) 返回列表中元素的个数
// clear (方法) 清空列表中的所有元素
// toString (方法)  返回列表的字符串形式
// getElement (方法) 返回当前位置的元素
// insert (方法) 在现有元素后插入新元素
// append (方法) 在列表的末尾添加新元素
// remove (方法) 从列表中删除元素
// front (方法) 将列表的当前位置移动到第一个元素
// end (方法) 将列表的当前位置移动到最后一个元素
// prev (方法) 将当前位置后移一位
// next (方法) 将当前位置前移一位
// hasNext (方法) 判断后一位
// hasPrev (方法) 判断前一位
// currPos (方法) 返回列表的当前位置
// moveTo(方法) 将当前位置移动到指定位置

//实现列表类
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; //保存列表元素
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.hasNext = hasNext;
  this.hasPrev = hasPrev;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

//添加新元素
function append(element) {
  this.dataStore[this.listSize++] = element;
}

//查找制定元素
function find(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
}

//删除元素
function remove(element) {
  let foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    this.listSize--;
    return true;
  }
  return false;
}

//列表有多少元素
function length() {
  return this.listSize;
}

//显示列表元素
function toString() {
  console.log('to string');
  return this.dataStore;
}

let names = new List();
names.append('xin');
names.append('yu');
names.append('de');
names.append('class');
console.log(names.toString());
names.remove('de');
console.log(names.toString(), names.find('yu'));

//插入元素
function insert(element, after) {
  let insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos, 0, element);
    this.listSize++;
    return true;
  }
  return false;
}

//清空列表
function clear() {
  delete this.dataStore;
  this.dataStore.length = 0;
  this.listSize = this.pos = 0;
}

//判断值是否在列表中
function contains(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return true;
    }
  }
  return false;
}

//
function front() {
  this.pos = 0;
}

//
function end() {
  this.pos = this.listSize--;
}

//
function prev() {
  this.pos--;
}

//
function next() {
  if (this.pos < this.listSize) {
    this.pos++;
  }
}

//
function currPos() {
  return this.pos;
}

//
function moveTo(position) {
  this.pos = position;
}

//返回列表当前元素
function getElement() {
  return this.dataStore[this.pos];
}

//同下hasprev
function hasNext() {
  return ++this.pos < this.listSize;
}

//和原文不一样，我觉得这个判断前一位有没有元素这样才正确
function hasPrev() {
  return this.pos > 0;
}

names.front();
console.log(names.getElement())
names.next();
names.prev();
console.log(names.getElement())
names.moveTo(2)
console.log(names.hasPrev(), names.pos, names.listSize)

////////////实现基于列表的应用

//电影名数组
let movies = ['The Godfather', 'The Godfather: ParII ', 'Schindler\'s List', 'Forrest Gump', 'The Matrix'];
//将movies元素保存到列表中
let movieList = new List();
for (let i = 0; i < movies.length; i++) {
  movieList.append(movies[i]);
}

//显示现有影碟
function displayList(list) {
  for (list.front(); list.currPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Customer) {
      console.log(list.getElement()['name'] + ',' + list.getElement()['movie'], 'displayList0');
    } else {
      console.log(list.getElement(), 'displayList');
    }
  }
}

//新列表 customer，保存在系统中检出电影的客户
let customers = new List();

function Customer(name, movie) {
  this.name = name;
  this.movie = movie;
}

//允许客户检出电影,电影可租借会从现有影碟删除添加到客户customers列表
function checkOut(name, movie, movieList, customerList) {
  if (movieList.contains(movie)) {
    let c = new Customer(name, movie);
    customerList.append(c);
  } else {
    console.log(movie, 'is not available.')
  }
}

//测试checkout函数
// let movies = 上面已声明
let movieList1 = new List();
let customers1 = new List();
for (let i = 0; i < movies.length; i++) {
  movieList1.append(movies[i]);
}
console.log('available movie:');
displayList(movieList1);
checkOut('XinYu', 'The Godfather', movieList1, customers1);
console.log('customers list');
displayList(customers1);
