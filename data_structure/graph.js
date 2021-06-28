//图类的构建(邻接表法表示图的边（图的顶点列表构成数组，对应数组存着相连的顶点），属性，方法，深度优先，广度优先
function Graph(v) {
  this.vertices = v; //图的顶点个数
  this.edges = 0; //图的边
  ////构建邻接表
  this.adj = [];
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    // this.adj[i].push(''); //这个默认值影响到dfs的递归了，查下怎么回事,原书问题还是有些的，
    // 解释：加入字符的数据typeof g.adj[0] Object，对象没有iterator接口，所以for of用不了，解决办法有一些
    //可以自己在Symbol.iterator上部署，或者使用别的数据结构set，或者 Object.keys迭代属性，
    // 但是本文加入是number类型就能成功遍历，上面是思路，稍后个人博客会实现验证下
    this.adj[i] = []; //邻接表初始化
  }
  this.dfs = dfs;
  this.bfs = bfs;
  //深度优先搜索的标记访问与否的数组
  this.marked = [];
  for (let i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }
  this.addEdge = addEdge; //添加边
  this.showGraph = showGraph; //展示图
}

//添加边，参数是两个顶点，传入会互相添加到对应的邻接表中，然后边到数量加一
function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

//展示图打印所有顶点和相邻顶点列表
function showGraph() {
  for (let i = 0; i < this.vertices; i++) {
    console.log(i + '=>');
    for (let j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] !== undefined) {
        console.log(this.adj[i][j] + ' ');
      }
    }
  }
}

//深度优先搜索，深搜先从一条起始顶点开始，到达最后一个顶点，然后回溯，继续下一个路径；直到最后，没有路径位置。
// 实现的时候访问当前没有访问过的顶点，然后标记为已访问，再递归的访问初始顶点邻接表中其它没有访问的
function dfs(v) {
  this.marked[v] = true; //访问过的节点标记true
  if (this.adj[v]) {
    console.log(this.adj[v], 'visit vertex:', v);
  }
  // this.adj[v].forEach(w=>{
  //   if (!this.marked[w]) { //没有访问过的话，就递归访问
  //     this.dfs(w);
  //   }
  //   })
  for (let w of this.adj[v]) { //遍历邻接表中的图节点
    if (!this.marked[w]) { //没有访问过的话，就递归访问
      this.dfs(w);
    }
  }
}

//广度优先搜索，实现原理
//1 查找与当前顶点相邻的为访问顶点，将其添加到已访问顶点列表和队列中
//2 从图中找出与当前相邻的下一个顶点，加入到已访问顶点列表并与当前相邻的未访问顶点添加到队列，直到全部访问
function bfs(s) {
  let queue = []; //存放顶点的队列
  this.marked[s] = true; //访问标记列表
  queue.push(s); //访问过的进队列
  while (queue.length > 0) { //队列不为空时，出队一个顶点，
    let v = queue.shift(); //出队
    if (this.adj[v]) { //出队的顶点在邻接表中，表示已广度优先遍历到节点
      console.log('visited vertex:', v);
    }
    for (let w of this.adj[v]) { //遍历当前已访问的节点邻接表其它值
      if (!this.marked[w]) { //如果有未访问的顶点
        this.marked[w] = true; //设为已访问
        queue.push(w); //入队
      }
    }
  }
}

//测试
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
// g.addEdge(0, 5);
// g.addEdge(4, 6);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
console.log('in232222===--', typeof g.adj[0], g.adj)
g.dfs(0)
console.log('bfs-------===--')
//一开始用g.bfs，但是结果不行，原因是marked在dfs已经全标记为true了，构造函数使用原型模式不够好，应该公共方法
//和公共属性使用原型模式，属性尤其是引用类型的属性要用构造函数，组合继承的，这样就又复用还每个实例都有自己的属性
// 这个也抽时间写博客实践验证下
g1 = new Graph(5);
g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 4);
g1.bfs(0)


