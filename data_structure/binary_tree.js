//实现二叉查找树，特殊的二叉树，左小右大
//定义node类，参数是数据，左节点右节点；
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show() {
  return this.data;
}

//二叉查找树
function BST() {
  this.root = null; //根节点
  this.insert = insert;
  this.inOrder = inOrder;
}

//插入方法
function insert(data) {
  let n = new Node(data, null, null);
  if (!this.root) { //root不存在
    this.root = n; //初始化root
  } else {
    let current = this.root; //让root根节点为当前节点
    let parent; //父节点
    while (true) {
      parent = current; //默认吧当前节点赋值给父节点
      if (data < current.data) { //如果要插入的数据小于当前节点
        current = current.left //就让当前节点的向左下走
        if (!current) { //如果当前节点不存在，
          parent.left = n; //让父节点指向插入的n
          break;
        }
      } else {
        current = current.right; //就让当前节点的向右下走
        if (!current) { //不存在
          parent.right = n;
          break;
        }
      }
    }
  }
}

//中序遍历，得到的数据是升序排列，先左下然后左下父节点，然后右，数据升序 用递归实现
function inOrder(node) {
  if (node){
    inOrder(node.left);
    console.log(node.show()+' ');
    inOrder(node.right);
  }
}

// inorder 测试
let nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log('inorder traversal:');
inOrder(nums.root);
