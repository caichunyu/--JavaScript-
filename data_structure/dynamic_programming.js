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
console.log(recurFib(53));
console.timeEnd('递归计算斐波那契数列耗时');
console.time('动态规划计算斐波那契数列耗时');
console.log(dpFib(0));
console.timeEnd('动态规划计算斐波那契数列耗时');

// 书中还有一个用动态规划找两个字符串公共最长子串的算法，这也是经典的算法，把动态规划实现的和
// 普通的写到blog中。
// 确定两个字符串中最长公共子串
function lcs(word1, word2) {
  let max  = 0;
  let index = 0;
  let lcsarr = new Array(word1.length+1);
  for (let i=0;i<=word1.length+1; i++){
    lcsarr[i] =new Array(word2.length+1);
    for (let j=0; j<=word2.length+1;j++){
      lcsarr[i][j]=0;
    }
  }

}
