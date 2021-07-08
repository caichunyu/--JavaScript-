// 这个文件就主要针对排序算法，本文件内容不会使用书中的搭建的测试方法
// 例如swap交换方法等初步只有书中的冒泡、选择排序、插入排序、希尔、归并、快排这几个排序算法
// 本文件中对代码也会尽量注释，但是详细的算法过程，还是需要到我的博客caichunyu.com中讲述，2021.6.30
// 冒泡，两两比较，从前到后冒泡，参数是要排序的数组，返回用冒泡排好序的数组
function bubbleSort(data) {
  let temp; //临时变量，用来存交换的值
  for (let outer = data.length; outer > 1; outer--) { //每冒泡一轮，最后一个为已排好序的，需要排序的总量减一，直到最后一个
    console.log(data, '每轮冒泡'); //这个是每轮冒泡的结果
    for (let inner = 0; inner < outer; inner++) { //从前向后，到outer-1是到排好序的位置
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

// 冒泡 test
let arry = [10, 8, 2, 4, 9, 5, 3];
console.log('bubbleSort', bubbleSort(arry));

// 选择排序
// 将排序的序列分为两个部分，一部分是前面的有序部分，一部分是后面的无序部分，
// 每一轮交换（i）在第i轮后面的待排序元素中选取最小的元素，作为有序数列的第i个元素，直到n-1趟排完
function selectSort(data) {
  // outer、min、inner都是代表指针的，temp;临时变量，用来存交换的值
  let min, temp; //我去掉了min，要是使用的话，要注意调换完元素数值后把min指针也交换
  for (let outer = 0; outer < data.length; outer++) { //整体的遍历所有元素
    console.log(data, '每轮选择排序'); //这个是每轮选择排序的结果
    // min = outer;
    for (let inner = outer + 1; inner < data.length; inner++) { //每轮遍历有序序列后面最小的元素
      if (data[inner] < data[outer]) { //当后面要排序的元素中的数据小于前面已排好顺序的元素时
        // min = inner;
        //交换
        temp = data[inner];
        data[inner] = data[outer];
        data[outer] = temp;
        // min = outer; //用min的话注意交换数值后交换指针
        console.log(data, '每次选择排序交换', inner, outer, data[outer], data[inner]); //这个是每次选择排序的结果
      }
    }
  }
  return data;
}

//selectSort test
let selectArry = [10, 8, 2, 4, 9, 5, 3];
console.log('selectSort', selectSort(selectArry));

// 直接插入排序
// 将排序的序列分为两个部分，一部分是前面的有序部分，一部分是后面的无序部分，取后面的无序部分元素，在有序部分
// 进行查找，有小于有序部分的就将元素后移添加进有序部分
//
function insertSort(data) {
  let temp, inner; //
  // 默认第一个元素有序，然后整体的遍历其后所有元素，外面的循环是一趟，里面循环的是外面遍历元素里面一趟
  for (let outer = 1; outer < data.length; outer++) {
    temp = data[outer]; //让temp等于要排序的无序的元素数值
    // inner = outer - 1; //inner是有序序列的最后一个元素指针，outer是无序的从前开始的第一个指针
    console.log(data, '每轮直接插入排序'); //这个是每轮直接插入排序的结果
    // inner>0是从后遍历一趟有序序列， data[inner] > temp是有序的比无序待排的大,inner>=0减少执行-1的那一趟
    // data[inner] > temp不能为outer因为移动后会变
    for (inner = outer - 1; data[inner] > temp && inner >= 0; inner--) {
      data[inner + 1] = data[inner]; //向后移动，
      console.log(data, '每次直接插入排序交换'); //这个是每次直接插入排序的结果
    }
    data[inner + 1] = temp; //inner为0的执行后，再减减就为-1了，跳出当前循环，然后就要+1再插入
  }
  return data;
}

//insertSort test
let insertArry = [10, 8, 2, 4, 9, 5, 3];
console.log('insertSort', insertSort(insertArry));

// 希尔排序,适合大量数据
// 待排序数据总数为n，取一个小于n的步长d1，将n内所有步长为d1的数据分为一组，然后组内进行直接插入排序，然后
// 再取d2<d1，重复上述，直到取的d=1时候，就是所有的数据都在一个组里，然后进行直接插入排序，结束。
// 希尔提出的方法是d1=n/2，d（i+1）=di/2取下界
function shellSort(data) {

}

//insertSort test
let shellArry = [10, 8, 2, 4, 9, 5, 3];
console.log('insertSort', shellSort(shellArry));
