// 动态规划，将一个问题拆成几个子问题，即可推断出大问题的解；动态规划算法从能解决的最简单
// 的子问题开始，通过得到的解去解决更复杂的子问题知道整个问题被解决，子问题解一般存数组里。
// 使用递归计算斐波那契数列
// 斐波那契数列：以公元700年意大利数学家列奥纳多*斐波那契的名字命名，用来描述理想状态下
// 兔子的增长。***数列中后一个值等于前两个的和。
function recurFib(n) {
  if (n < 2) { //边界，当n小于2返回n
    return n;
  } else {
    return recurFib(n - 1) + recurFib(n - 2); // 后一个值为前两个的和
  }
}

//动态规划计算斐波那契数列
function dpFib(n) {
  let val = []; // 存子解的数组
  for (let i = 0; i <= n; i++) { // 初始化子解数组
    val[i] = 0;
  }
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) { // 数列长度为1或2时，返回1,为0时返回0
    return 1;
  } else {
    //计算数列为3开始，数列的1，2分别存储，为计算3铺垫
    val[1] = 1;
    val[2] = 2;
    // 数列长度3及以上，当前的值为前两个相加
    for (let i = 3; i <= n; i++) {
      val[i] = val[i - 1] + val[i - 2];
    }
    // return val;
    return val[n - 1]; //返回值
  }
}

//test
console.time('递归计算斐波那契数列耗时');
console.log(recurFib(10));
console.timeEnd('递归计算斐波那契数列耗时');
console.time('动态规划计算斐波那契数列耗时');
console.log(dpFib(55));
console.timeEnd('动态规划计算斐波那契数列耗时');

// 书中还有一个用动态规划找两个字符串公共最长子串的算法，这也是经典的算法，把动态规划实现的和
// 普通的写到blog中。
// 确定两个字符串中最长公共子串
// 使用一个二维数组存储两个字符串相同位置字符比较结果，初始化二维数组值均为0，两个数组的
// 相同位置发现了匹配，就将数组的对于行和列元素加1，最后由数组得出公共子串
// 参考 https://github.com/xuexueq/blog/issues/29
// 参考 https://juejin.cn/post/6844903613861462029
// 参考 https://www.bilibili.com/video/BV1aK411J7b8?p=1&share_medium=iphone&share_plat=ios&share_source=QQ&share_tag=s_i&timestamp=1631631325&unique_k=KatrKf
// 参考 https://alchemist-al.com/algorithms/longest-common-substring
function lcs(word1, word2) { // 参数分别代表两个字符串
                             // 声明两个变量和存储两个字符串相同位置字符比较结果的二维数组
  let max = 0; // 子串的长度值
  let index = 0; // 子串开始的位置
  let m = word1.length;
  let n = word2.length;


  let lcsarr = [];
  // let lcsarr =[new Array(n + 1).fill(0)]; //初始化一行
  // 初始化最初的匹配结果矩阵
  for (let i = 0; i <= word1.length; i++) {
    lcsarr[i] = new Array(word2.length);
    for (let j = 0; j <= word2.length; j++) {
      lcsarr[i][j] = 0;
    }
  }
  console.log('111', lcsarr)
  // 根据状态迁移方程求最大值，然后最大值的所在的位置
  // 做矩阵，可以看出子串
  for (let i = 1; i <= m; i++) {
    // lcsarr[i] = [0]; //同上的 //初始化一行 后的初始化列
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1;
        max = Math.max(lcsarr[i][j], max);   // 判断最大值
        index = i - 1;    // 判断位置
      } else {
        lcsarr[i][j] = 0;
      }
      console.log(max, 'max')


      // if (max <= lcsarr[i][j] + 1) {
      //   max = lcsarr[i][j];
      //   index = i;
      console.log(index, 'index')
      // }
    }
  }
  // 组子串，感觉还有些问题，后续可以改进下(错误原因是如果word1变2不变的话，index在变，导致无法根据index和
  // max取到一致的word2中子串，解决办法就是下面暴力求子串中先比较2字符中，求个最小word长度，这样就应该可以了，
  console.log('222', lcsarr)
  let str = '';
  if (max === 0) {
    return '';
  } else {
    str = word2.slice(index - max, index)
    // for (let i = index - max; i < index; i++) {
    //   str += word2[i];
    // }
    return str;
  }
}

//暴力求最长公共子串
const findSubStr = (str1, str2) => {
  if (str1.length > str2.length) { // 把长度较小的字符串赋值给str1
    [str1, str2] = [str2, str1];
  }
  let result = ''; // 变量用来存公共子串
  const length = str1.length; // 较短的字符串的长度
  //这两个循环是对'较短的字符串'进行全长到长度为0的遍历和判断是否在较长的字符串中匹配
  for (let i = length; i > 0; i--) { // 对较短字符串从后向前遍历
    // 对较短字符串从前向后全部遍历，直到和上个for从后向前遍历相接
    for (let j = 0; j < i - 1; j++) {
      result = str1.substring(j, i); // 将较短串中j到i(不包括i）的部分赋给result
      if (str2.includes(result) && result.length > 1) { //如果较长的串中包括结果的话，return
        return result;
      }
    }
  }
}
//test 动态规划和暴力最长公共子串
console.time('动态规划最长公共子串耗时');
console.log('动态规划最长公共子串:', lcs('323wej', 'fjawe'));
console.timeEnd('动态规划最长公共子串耗时');

console.time('暴力最长公共子串耗时');
console.log('暴力最长公共子串:', findSubStr('fawejfl;dsak；ew', 'dfklajsd;lfjawe;'));
console.timeEnd('暴力最长公共子串耗时')
