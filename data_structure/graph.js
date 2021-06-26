//图类的构建(邻接表法表示图的边，属性，方法，深度优先，广度优先
function Graph(v) {
  this.vertices = v; //图的顶点
  this.edges = 0; //图的边
  this.adj = [];
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push('');
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

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
