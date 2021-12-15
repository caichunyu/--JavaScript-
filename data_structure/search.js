//查找算法
// 1 顺序查找就是直接从列表的第一个元素开始对列表元素逐个查找判断
function search(array, key) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return true;
    }
  }
  return false;
}

//test 顺序查找
let array = [10, 8, 2, 4, 9, 5, 3];
console.time('顺序查找耗时');
console.log('顺序查找 :', search(array, 91));
console.timeEnd('顺序查找耗时');

// 折半查找或二分查找，要查找的数据需要是有序的，会比顺序查找快
// 1 首先将要查找的key与表中间位置的数据进行比较相等则成功返回元素在表中存储位置，否则在中间
// 元素以外的前半部分（较小）或者后半部分（较大）寻找，重复上述直到找到为止。
function binarySearch(array, key) { //参数为查找的数组和查找的key
  let upperBound = array.length - 1, lowerBound = 0; //查找的上下界数据位置
  while (lowerBound <= upperBound) { //当下界小于等于上界时候执行，=时搜索边界值
    let mid = Math.floor((upperBound + lowerBound) / 2); // 中点
    if (array[mid] < key) { //中点数值小于待查找key
      //下界变为中点的后一个位置，相当于后续在中点的后半部分查找,+1因为mid时肯定不等于key
      lowerBound = mid + 1;
    } else if (array[mid] > key) { //中点值比key大
      upperBound = mid - 1; //上界位置变为中点前一个，后续在前面查找
    } else {
      return mid; //相等，返回当前的位置
    }
  }
  return false;
}

//test 折半查找
let binaryArray = [2, 4, 5, 7, 9, 11, 34, 55];
console.time('折半查找耗时');
console.log('折半查找 :', binarySearch(binaryArray, 34));
console.timeEnd('折半查找耗时');
