//push 入栈方法
//pop 出栈方法
//peek 返回栈顶元素
//length 返回栈顶长度
//clear 清空栈

//构造函数
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

//入栈，注意++先执行后++；
function push(e) {
  this.dataStore[this.top++] = e;
}

//出栈
function pop() {
  return this.dataStore[--this.top];
}

//返回栈顶元素
function peek() {
  return this.dataStore[this.top - 1];
}

//栈内元素长度
function length() {
  return this.top;
}

//清空栈
// !!!!!我有点疑惑，清空栈的话，这样并没有清掉dataStore数组里的内容，为什么不也清掉呢？
function clear() {
  this.top = 0;
}

//测试栈实现代码
let s = new Stack();
s.push('Xin');
s.push('Yu');
s.push('\'S');
s.push('blog');
s.clear()
// s.push('blg');
console.log(s, s.length(), s.peek());


//应用 数制转换 针对基数2-9
//思想如下 假设将数字n转换为以b为基数的数字，那么
// 1 最高位为n%b 然后压入栈
// 2 使用n/b 代理n
// 3 重复1 2 直到n=0，并且没有余数
// 4 然后将元素出栈，依次排列就是转换成功的形式
function mulBase(num, base) {
  let s1 = new Stack();
  do {
    s1.push(num % base);
    num = Math.floor(num /= base);
  } while (num > 0);
  let converted = '';
  while (s1.length() > 0) {
    converted += s1.pop();
  }
  return converted;
}

let num = 9;
let base = 8;
let newNum = mulBase(num, base);
console.log('new num', newNum)

//应用 回文
// 回文指的是一个单词短语从前往后写和从后往前写是一样的
function isPalindrome(word) {
  let s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  let rword = '';
  while (s.length() > 0) {
    rword += s.pop();
  }
  if (word === rword) {
    return true;
  } else {
    return false;
  }
}

let word = 'raar';
if (isPalindrome(word)) {
  console.log('palindrome true');
} else {
  console.log('false');
}

//递归演示
function factorial(n) {
  let s = new Stack();
  while (n > 1){
    console.log('n1', n)
    s.push(n--);
    console.log('n2', n)

  }
  console.log('s', s)
  let product = 1;
  while (s.length() > 0){
    product *= s.pop();
  }
  return product;
}

console.log('fraction', factorial(5));
