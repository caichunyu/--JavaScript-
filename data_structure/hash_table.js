//HashTable 散列表
//simpleHash 散列函数
function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;

}

//散列函数，将字符串中每个ASCII码的值相加，散列值为ASCII和除以数组的余数
function simpleHash(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

//
function put(data) {
  let pos = this.simpleHash(data);
  this.table[pos] = data;
}

//
function showDistro() {
  let n = 0;
  for (let i = 0; i < this.table.length; i++) {

  }
}
