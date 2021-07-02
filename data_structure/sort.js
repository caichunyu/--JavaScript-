//这个文件就主要针对排序算法，本文件内容不会使用书中的搭建的测试方法
// 例如swap交换方法等初步只有书中的冒泡、选择排序、插入排序、希尔、归并、快排这几个排序算法
//本文件中对代码也会尽量注释，但是详细的算法过程，还是需要到我的博客caichunyu.com中讲述，2021.6.30
//冒泡，两两比较，从前到后冒泡，参数是要排序的数组，返回用冒泡排好序的数组
function bubbleSort(data) {
  let temp; //临时变量，用来存交换的值
  for (let outer = data.length; outer > 1; outer--) { //每冒泡一轮，最后一个为已排好序的，需要排序的总量减一，直到最后一个
    console.log(data, '每轮冒泡'); //这个是每轮冒泡的结果
    for (let inner = 0; inner <= outer - 1; inner++) { //从前向后，到outer-1是到排好序的位置
      if (data[inner] > data[inner + 1]) { //比较大小，交换
        // console.log(data, '每次交换') //这个可以打印出每次交换的结果
        temp = data[inner];
        data[inner] = data[inner + 1];
        data[inner + 1] = temp;
      }
    }
  }
  return data;
}

//冒泡 test
let arry = [10, 8, 2, 4, 9, 5, 3];
console.log('bubbleSort', bubbleSort(arry));

//选择排序
//第一轮：对除了第一个以外的元素进行排序，然后和第一个进行对比，然后交换，
//第二轮：对第二个元素后面的元素排序，然后和第二个对比，然后交换，直到倒数第二个对比，交换完成，排序完成。
function selectionSort(data) {
  let min, temp;
  for (let outer = 0; outer <= data.length - 2; outer++) {
    min = outer;
    for (let inner = outer + 1; inner<=data.length-1;inner++) {
      if (data[inner]<data[min]){
        min= inner;
      }
      temp = data[inner];
      data[inner] = data[inner + 1];
      data[inner + 1] = temp;
    }
  }
}
