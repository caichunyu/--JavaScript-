//堆，本文实现二叉堆，堆首先是完全二叉树，根据完全二叉树性质来说，从数组array第一个位置不放元素，从1开始，对后面对下标i来说
//后面对下标对应对父节点为当前下标除以2后结果取整，左子节点为当前对下标*2，右子节点为下标*2+1，可以方便找到任意节点对父子节点，
//在调整堆时候很方便；堆的实现方式很适合实现优先队列，一般就也才用堆来实现优先队列；
//本文具体思路源自https://blog.csdn.net/m0_38086372/article/details/108440136

class Heap {

  // 构造函数，能够接受自定义的优先级比较方法
  constructor(compare) {
    this.array = [0]; // 初始化存堆数据堆数组，下标从1开始
    this.compare = (typeof compare === 'function') ? compare : this._defaultCompare; //接受传入优先级比较函数，没有传用默认的
  }

  // 入队 新的元素添加到整个堆的末尾，让新加入的元素进行“上浮”，到符合堆定义的位置；具体操作是不断将该元素和父节点比较优先级，如果新的
  //优先级更高，应该更接近堆顶，就和父元素交换位置，直到满足条件；
  push(item) {
    let {array} = this;
    array.push(item);
    this._up(array.length - 1); //上浮元素
  }

  //上浮第k个元素，param k
  _up(k) {
    let {array, compare, _parent} = this;
    //k=1到堆顶，否则有机会继续上浮
    while (k > 1 && compare(array[k], array[_parent(k)])) { //_parent(k)获取父节点下标
      this._swap(_parent(k), k);
      k = _parent(k);
    }
  }

// 返回元素，出队
  pop() {
    if (this.size === 0) { // 当前无元素就返回null
      return null
    }
    let {array} = this;
    this._swap(1, array.length - 1); //换末尾上来，堆顶放到最后
    let res = array.pop();
    this._down(1);//换上来的元素尝试下沉；
    return res;
  }

  //下沉第i个元素 params i
  _down(i) {
    let {array, compare, _left, _right, size} = this;
    //如果i是堆底，就沉不下去了
    while (_left(i) <= size) {
      let child = _left(i);
      if (_right(i) <= size && compare(array[_right(i)], array[child])) { //选孩子节点中更靠近堆顶的，这样能保持原本的左右顺序
        child = _right(i);
      }
      //如果当前i比子节点更靠近堆顶，就不用下沉了
      if (compare(array[i], array[child])) {
        return;
      }
      //继续下沉
      this._swap(i, child);
      i = child;
    }
  }

  // 返回优先级最高元素，不出队
  peek() {
    return this.array[1];
  }

// 队列长度
  get size() {
    return this.array.length - 1;
  }

  //获取左右还有父节点
  _left(i) {
    return i * 2;
  }

  _right(i) {
    return i * 2 + 1;
  }

  _parent(i) {
    return Math.floor(i / 2);
  }

  //交换
  _swap(i, j) {
    [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
  }

  //默认比较函数，a是否比b更解决堆顶，默认小顶堆
  _defaultCompare(a, b) {
    return a < b; // 大顶堆为a>b
  }

  //根据data数据shengcheng堆
  static heapify(data, compare = undefined) {
    let heap = new Heap(compare);
    for (let i of data) {
      heap.push(i)
    }
    return heap;
  }
}

let heap = Heap.heapify([1, 2, 3]);
heap.push(8)
heap.pop();
heap.pop();
heap.pop();
heap.size();
heap.peek();

