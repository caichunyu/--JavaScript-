//数组相关

//不生成新数组
//数组迭代器方法foreach 接受函数为参数，对每个元素使用该函数
//every 接受返回值为布尔型函数为参数，对每个元素使用该函数，所有返回true，该方法返回true
//some 接受返回值为布尔型函数为参数，只要有返回true，该方法返回true
//reduce 接受函数为参数，返回一个值，会不断累加，可以用做求和，字符串拼接 reduceRight右侧
function add(runningTotal, currentTotal) {
  return runningTotal + currentTotal;
}

let nums = [1, 2, 3, 4];
let sum = nums.reduce(add);
console.log(sum);

//生成新数组
//数组迭代器方法map 类似于foreach 但是生成新数组，可以对原有函数应用某个结果，比如生成一个每个元素加1的新数组
function curve(grade) {
  return grade + 1;
}

let grades = [1, 2, 3, 4];
let newGrades = nums.map(curve);
console.log(newGrades);

//filter 类似于every 不返回true 生成新数组，包含结果为true的元素 可以求奇偶等，过滤字符；
//filter判断奇偶函数
function idOdd(num) {
  return num % 2 === 0;
}

//filter过滤xinyu字符函数
function afterc(str) {
  if (str.indexOf('xinyu') > -1) {
    return true;
  } else {
    return false;
  }
}

//二维数组
// 设定参数设置二维数组行列，初始值
Array.matrix = function (numRows, numCols, initial) {
  let arr = [];
  for (let i = 0; i < numRows; ++i) {
    let columns = [];
    for (let j = 0; j < numCols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}

let nums1 = Array.matrix(3, 3, 1);
console.log(nums1)
