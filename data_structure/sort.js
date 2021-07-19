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
let array = [10, 8, 2, 4, 9, 5, 3];
console.time('冒泡排序耗时');
console.log('bubbleSort', bubbleSort(array));
console.timeEnd('冒泡排序耗时')

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
let selectArray = [10, 8, 2, 4, 9, 5, 3];
console.time('选择排序耗时');
console.log('selectSort', selectSort(selectArray));
console.timeEnd('选择排序耗时')

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
let insertArray = [10, 8, 2, 4, 9, 5, 3];
console.time('直接插入排序耗时');
console.log('insertSort', insertSort(insertArray));
console.timeEnd('直接插入排序耗时')

// 希尔排序,适合大量数据
// 待排序数据总数为n，取一个小于n的步长d1，将n内所有步长为d1的数据分为一组，然后组内进行直接插入排序，然后
// 再取d2<d1，重复上述，直到取的d=1时候，就是所有的数据都在一个组里，然后进行直接插入排序，结束。
// 希尔提出的方法是d1=n/2，d（i+1）=di/2取下界
function shellSort(data) {
  let temp, j; // temp是存储数值的，直接插入排序待排元素数值的
  // dk是希尔排序取得间隔值，按照希尔提出的方法取，步长为排序数据长度的一半取下界，到最小为1终止（相当于直接插入排序）
  for (let dk = Math.floor(data.length / 2); dk > 0; dk = Math.floor(dk / 2)) {
    //类似直接插入排序过程，注意i，j初始值
    for (let i = dk; i < data.length; i++) {
      temp = data[i];
      for (j = i - dk; j >= 0 && temp < data[j]; j -= dk) { //除了判别条件，j等于j-dk可以让循环向前，类似直插
        data[j + dk] = data[j]; //为了向前循环不能用i
      }
      data[j + dk] = temp;
    }
  }
  return data;
}

//shellSort test
let shellArray = [10, 8, 2, 4, 9, 5, 3];
console.time('希尔排序耗时');
console.log('shellSort', shellSort(shellArray));
console.timeEnd('希尔排序耗时')

// 归并排序：将两个或者两个以上的有序表组合成一个新的有序表
// 待排表有n个元素，视为n个有序的子表，每个子表长度为1，两个归并后，得到n/2取上界个的长度为2或者1的有序表，
// 然后继续合并，重复到一个长度为n的有序表终止。
function mergeSort(data) {
  //采用自上而下的递归方法
  let len = data.length; //len是待排序数据个数
  if (len < 2) { // 一个就直接有序了
    return data;
  }
  // 取中点middle，然后分为两个子数组
  let middle = Math.floor(len / 2),
    left = data.slice(0, middle),
    right = data.slice(middle); // 拆分为两个子数组
  return merge(mergeSort(left), mergeSort(right));
}

let merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.小的加到已排序数组里
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
//一个子数组为空后，把另一个中数据加到结果里
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
};

//insertSort test
let mergeArray = [10, 8, 2, 4, 9, 5, 3];
// console.log('mergeSort', mergeSort(mergeArray));
console.time('归并排序耗时');
console.log('mergeSort :', mergeSort(mergeArray));
console.timeEnd('归并排序耗时');

//快排
// 基于分治法思想，是对冒泡排序对改进，选一个基准值pivot，通过一趟排序将待排表划分为两部分，左边的所有元素小于
// pivot，右边的都大于pivot，然后分别递归的对两个子表进行上述过程，知道每部分内只有一个或者为空，所有元素都排序完成。
function quickSort(array) {
  if (array.length === 0) { //输入空数据直接返回
    return [];
  }

  let left = []; //左边数组
  let right = []; //右边数组
  let pivot = array[0]; //取第一个位置的数值为pivot基准值

  for (let i = 1; i < array.length; i++) { //将除了pivot的所有数据大于的放到右侧，小于的放到左侧数组
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  // 对左右数组进行递归和连接左侧数组，pivot右侧数组
  return quickSort(left).concat(pivot, quickSort(right));
}

//quickSort test
let quickArray = [10, 8, 2, 4, 9, 5, 3];
console.time('快速排序耗时');
console.log('quickArray :', quickSort(quickArray));
console.timeEnd('快速排序耗时');
