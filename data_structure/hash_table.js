//HashTable 散列表
//simpleHash 散列函数
function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  this.betterHash = betterHash;
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
  // let pos = this.simpleHash(data); //普通
  let pos = this.betterHash(data);
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
let someNames = ['xin', 'yu', 'a', 'na', 'Clayton', 'Tom', 'Raymond'];
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

console.log('---------');
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

//碰撞处理，么有完美的散列函数，碰撞要进行处理
