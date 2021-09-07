// 动态规划，将一个问题拆成几个子问题，即可推断出大问题的解

//使用递归计算斐波那契数列
function recurFib(n) {
  if (n < 2) {
    return n;
  } else {
    return recurFib(n - 1) + recurFib(n - 2);
  }
}

//动态规划计算斐波那契数列
function dpFib(n) {
  let val = [];
  for (let i = 0; i <= n; i++) {
    val[i] = 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  } else {
    val[1] = 1;
    val[2] = 2;
    for (let i = 3; i <= n; i++) {
      val[i] = val[i - 1] + val[i - 2];
    }
    return val[n - 1];
  }
}

//test
console.time('递归计算斐波那契数列耗时');
console.log(recurFib(45));
console.timeEnd('递归计算斐波那契数列耗时');
console.time('动态规划计算斐波那契数列耗时');
console.log(dpFib(1453));
console.timeEnd('动态规划计算斐波那契数列耗时');
