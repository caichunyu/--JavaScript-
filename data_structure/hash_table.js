//HashTable 散列表
//simpleHash 散列函数
//本文的散列函数是除留余数法构造的，其余还有直接定址法、数字分析法、平方取中法、折叠法等
function HashTable() {
  this.table = new Array(137);
  this.values = new Array(137); // 线性探测法中加上，实际系统中用来存data的，table存key
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.showDistroChains = showDistroChains; // 针对开链法
  this.put = put;
  this.putChains = putChains; // 针对开链法
  this.betterHash = betterHash;
  this.buildChains = buildChains;
}

//散列函数，将字符串中每个ASCII码的值相加，散列值为ASCII和除以数组的余数
function simpleHash(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  console.log('Hash value', data, '=>', total); //输出散列值，发现碰撞发生
  return total % this.table.length;
}

//将数据存入散列表
function put(data) {
  let pos = this.simpleHash(data); //普通
  // let pos = this.betterHash(data);
  this.table[pos] = data;
}

//显示散列表中的数据
function showDistro(data) {
  let n = 0;
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i] !== undefined) {
      console.log(i + ':' + this.table[i]);
    }
  }
}

//测试
let someNames = ['xin', 'yu', 'a', 'na', 'na', 'Clayton', 'Tom', 'Raymond'];
let hTable = new HashTable();
for (let i = 0; i < someNames.length; i++) {
  hTable.put(someNames[i]);
}
hTable.showDistro();

//散列表中数组为质数，使用霍纳算法的不碰撞的更好的散列函数
function betterHash(string) {
  // console.log('better')
  const H = 37;
  let total = 0;
  for (let i = 0; i < string.length; i++) {
    total += H * total + string.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total += this.table.length - 1;
  }
  console.log('Hash value', string, '=b>', total); //输出散列值，发现碰撞发生 na叠加还是会
  return parseInt(total);
}

//测试，使用更好的散列函数
console.log('---------better');
hTable.showDistro();

//从散列表中存数据 p95作用就是后面的人名对应电话号码的例子，输入人名key，获得data，电话号码
function put1(key, data) {
  let pos = this.betterHash(key);
  this.table[pos] = data;
}

//根据散列表的值key，取出散列表中的数据
function get(key) {
  return this.table[this.betterHash(key)];
}

//碰撞处理，么有完美的散列函数，碰撞要进行处理，处理的方法主要有以下
//文中写了1 开链法 2 线性探测法，线探属于开放定址法，同属的其余还有平方探测、再散列、伪随机序列法等

//开链法处理碰撞，用数组或链表当散列表的元素,本文用数组来当链
function buildChains() {
  for (let i = 0; i < this.table.length; i++) {
    this.table[i] = [];
  }
}

//showDistroChains
function showDistroChains() {
  let n = 0;
  console.log('showDistroChains', this.table);
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i][0] !== undefined) {
      console.log(i + ':,' + this.table[i]);
    }
  }
}

//将数据存入散列表 这个书本的函数是有问题的，现在这个是修复的
function putChains(data) {
  let pos = this.betterHash(data);
  let index = 0;
  if (this.table[pos][index] === undefined) { //子数组第一个位置是否为空
    this.table[pos][index] = data;
  } else {
    while (this.table[pos][index] !== undefined) {
      ++index;
    }
    this.table[pos][index] = data; //用push我觉得就ok
  }
}

//测试
console.log('---------开链法');
let hTableChains = new HashTable();
hTableChains.buildChains();
for (let i = 0; i < someNames.length; i++) {
  hTableChains.putChains(someNames[i]);
}
hTableChains.showDistroChains()

//线性探测法 当前位置不行，就看散列表下一个位置，为空就放进去
function newPut(key, data) {
  let pos = this.betterHash(key);
  if (this.table[pos] === undefined){
    this.table[pos] = key;
    this.values[pos] = data;
  } else {
    while (this.table[pos] !== undefined) {
      pos++
    }
    this.table[pos] = key;
    this.values[pos] = data;
  }
}
