//查找算法

// 1 顺序查找就是直接从列表的第一个元素开始对列表元素逐个查找判断
function search(array, data) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === data) {
      return true;
    }
  }
  return false;
}

//test 顺序查找
let array = [10, 8, 2, 4, 9, 5, 3];
console.time('顺序查找耗时');
console.log('quickArray :', search(array, 91));
console.timeEnd('顺序查找耗时');

// 折半查找或二分查找，
