//集合
// 定义：不包含任何成员的为空集，全集是包含一切可能成员的集合
// 定义：如果两个集合成员完全相同，两个集合相等
// 定义：如果一个集合中的所有成员都属于另一个集合前一个为后的子集
//集合操作：并集；交集；补集；

//set类 基于数组
function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union; //并集
  this.contains = contains; //并集辅助方法，判断当前成员在不在集合里
  this.intersect = intersect; //交集
  this.subset = subset;
  // this.diffderence = diffderence; //补集 属于第一个不属于第二个的
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
let names = new Set();
names.add('David');
names.add('Xin');
names.add('Yu');
names.add('na');
names.add('na');
names.add('a');
names.show();
names.remove('a1');

//检查成员是否属于该集合，参数为集合成员，返回值为布尔值
function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else {
    return false;
  }
}

//并集操作，将第一个集合的成员加入到临时集合，检查第二个集合的成员，是否和第一个重复，
// 未重复的加入；参数是第二个集合
function union(set) {
  let tempSet = new Set();
  for (let i = 0; i < this.dataStore.length; i++) { //初始集合的添加到临时集合
    tempSet.add(this.dataStore[i]);
  }
  for (let i = 0; i < set.dataStore.length; i++) { //检查第二个集合set中成员是否重复
    if (!tempSet.contains(set.dataStore[i])) {
      tempSet.dataStore.push(set.dataStore[i]);
    }
  }
  return tempSet;
}

//求交集，当发现第二个集合的成员也是第一个成员的时候，加入新集合中，参数为第二个集合
function intersect(set) {
  let temSet = new Set();
  for (let i = 0; i < this.dataStore.length; i++) {
    if (set.contains(this.dataStore[i])) { //对第二个集合查是否有第一个的重复成员
      temSet.dataStore.push(this.dataStore[i]); //书中使用add方法添加，根据降低耦合度来说，还是不应该依赖其他函数
    }
  }
  return temSet;
}

//求子集 首先确认该集合长度是否小于待求集合，任意一个不属于返回false，参数为父集合
function subset(set) {
  if (this.size() > set.size()) {
    return false;
  } else {
    this.dataStore.forEach(member => {
      if (!set.contains(member)) {
        return false;
      }
    })
  }
  return true;
}

//size
function size() {
  return this.dataStore.length;
}

//

//测试union
console.log('------union')
let cis = names;
let dmp = new Set();
dmp.add('David');
dmp.add('Xin');
dmp.add('Yu');
dmp.add('na');
dmp.add('a');
cis.show();
dmp.show();
let it = new Set();
it = cis.union(dmp);
// console.log(it)
it.show();
console.log('------intersect')
let inter = cis.intersect(dmp);
inter.show();
console.log('------intersect')
if (it.subset(dmp)){
  console.log('it is dmp subSet')
}
