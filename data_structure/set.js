//集合
// 定义：不包含任何成员的为空集，全集是包含一切可能成员的集合
// 定义：如果两个集合成员完全相同，两个集合相等
// 定义：如果一个集合中的所有成员都属于另一个集合前一个为后的子集
//集合操作：并集；交集；补集；

//set类 基于数组
function set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  // this.size = size;
  // this.union = union;
  // this.intersect = intersect;
  // this.subset = subset;
  // this.diffderence = diffderence;
  this.show = show;
}

function add(data) {
  if (this.dataStore.indexOf(data) < 0) { //不能包含相同元素，监测元素是否存在
    this.dataStore.push(data);
    return true;
  } else {
    console.log('can not add');
    return false;
  }
}

function remove(data) {
  if (this.dataStore.indexOf(data) > 0) {
    this.dataStore.splice(this.dataStore.indexOf(data), 1);
    console.log('remove success');
    return true;
  } else {
    console.log('can not remove');
    return false;
  }
}

function show() {
  console.log(this.dataStore);
}

//测试
let names = new set();
names.add('David');
names.add('Xin');
names.add('Yu');
names.add('na');
names.add('na');
names.add('a');
names.show();
names.remove('a1');

//
