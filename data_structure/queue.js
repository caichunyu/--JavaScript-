//enqueue 入队
//dequeue 出队
//front 取队头元素
//end 队尾元素
//toString 字符串输出
//empty 判空

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.end = end;
  this.toString = toString;
  this.empty = empty;
}

function enqueue(e) {
  this.dataStore.push(e);
}

function dequeue() {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function end() {
  return this.dataStore[this.dataStore.length - 1]
}

function toString() {
  let retStr = '';
  for (let i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i] + '\n';
  }
  return retStr;
}

function empty() {
  if (this.dataStore.length === 0) {
    return true;
  } else {
    return false;
  }
}

//测试
let q = new Queue();
q.enqueue('xin');
q.enqueue('yu');
q.enqueue('s');
console.log(q.toString(), q.front(), q.end(), '1');
q.dequeue();
console.log(q.toString(), '2');

//方块舞舞伴问题 两个队列，第一个人分别组成舞伴，后面的成为新的队首
//这个没意思，看p60

//基数排序，这个有意思 先个位后十位
//根据相应位（个位十位）上的数值，将数字分配到对应的队列的函数

//nums表示待排序数字数组形式，queues表示桶队列数组，n表示排序的总个数，digit表示个位或者十位上的值
function distribute(nums, queues, n, digit) { //digit表示个位或者十位上的值
  for (let i = 0; i < n; i++) {
    if (digit === 1) { //个位上
      queues[nums[i] % 10].enqueue(nums[i]); //个位对nums数组的所有元素先取余（得到数组对应的队列中），然后进队
    } else { //十位
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i]); //同上，按十位排序进队列
    }
  }
}

//从队列中收集数字 如果所有的十个队列中,有队列不为空，那就出队，然后赋值nums显示排序成功的
function collect(queues, nums) {
  let i = 0;
  for (let digit = 0; digit < 10; digit++) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
  console.log('当前排序效果：', nums)
}

//展示将队列中的数据展示
function disparray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + ' ');
  }
}

//主程序
let queues = [];
for (let i = 0; i < 10; i++) { //声明十个队列
  queues[i] = new Queue();
}
let nums = [];
for (let i = 0; i < 10; i++) { //生成要排序的十个数字
  nums[i] = Math.floor(Math.floor(Math.random() * 101));
  console.log('nums',nums[i])
}

console.log('排序前：');
disparray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log('排序后：');
disparray(nums)

