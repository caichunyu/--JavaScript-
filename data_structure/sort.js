//这个文件就主要针对排序算法，本文件内容会和书中有较大的出入了，不会使用书中的搭建的测试方法
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

//
