//基于对象的列表，有两个类，node类表示节点，llist类提供插入阶段等方法
function Node(e) {
  this.element = e;
  this.next = null;
}

//head 属性使用node对象保存该链表的头节点
//find查找
//insert插入
//查找制定节点的前一个节点，用来删除节点
//remove删除
//display显示
function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.display = display;
}

//根据给定的值找到相应的节点，返回节点
function find(item) {
  let currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next;
    console.log(currNode.element, 'fff');//输入当前的查找节点值
    if (currNode.next === null && currNode.element !== item) { //完善书中链表中没有查找不到值的处理
      console.log('can\'t find item');//输入当前的查找节点值
      return 0;
    }
  }
  return currNode;
  // } else {
  //   console.log('can\'t find item')
  //   return 0;
  // }
}

//给定值查找插入
function insert(newElement, item) {
  let newNode = new Node(newElement);
  let current = this.find(item);
  // console.log(current)
  if (current !== 0) {
    newNode.next = current.next;
    current.next = newNode;
  }
}

//展示
function display() {
  let currNode = this.head;
  while (!(currNode.next === null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

//对上面的测试
let cities = new LList();
cities.insert('xin', 'head');
cities.insert('yu', 'xin');
cities.insert('a', 'yu');
// cities.insert('a1', 'head');
//完善链表中没有查找值的处理 测试
cities.insert('a1', 'a2');
// cities.insert('a12', 'a246');
cities.display();
console.log('插入-----------------');

//查找前一个节点
function findPrevious(item) {
  let currNode = this.head;
  while (currNode.next !== null && currNode.next.element !== item) {
    currNode = currNode.next; //找到前一个节点(不是最后一个的）
  }
  return currNode;
}

//删除
function remove(item) {
  let prevNode = this.findPrevious(item);
  if (prevNode.next !== null) { //这个判断是为了处理删除值为null时的情况
    prevNode.next = prevNode.next.next;
  }
}
//测试删除功能
// cities.display();
cities.remove('xin')
// cities.remove(null)
cities.display();
console.log('删除-----------------');

//双向链表，给Node加一个属性，指向前驱节点
//this.previous = null;
