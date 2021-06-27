//图类的构建(邻接表法表示图的边（图的顶点列表构成数组，对应数组存着相连的顶点），属性，方法，深度优先，广度优先
function Graph(v) {
  this.vertices = v; //图的顶点
  this.edges = 0; //图的边
  ////构建邻接表
  this.adj = [];
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push('0'); //这个默认值影响到dfs的递归了，查下怎么回事
  }
  this.dfs = dfs;
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
    console.log(this.adj[v],'visit vertex:', v);
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

//测试
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0)
