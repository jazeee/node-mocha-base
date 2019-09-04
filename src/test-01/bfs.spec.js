const { expect } = require('chai');
/* eslint-disable no-undef */

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacencies = Array(vertices).fill(0).map(() => []);
    this.addEdge = this.addEdge.bind(this);
  }

  addEdge(from, to) {
    this.adjacencies[from].push(to);
    this.adjacencies[to].push(from);
    return this;
  }
}

function doBFS(graph, node) {
  const isVisited = Array(graph.vertices).fill(false);
  const queue = [];
  isVisited[node] = true;
  queue.push(node);
  let output = '';
  while (queue.length) {
    const currentNode = queue.shift();
    output += `${output ? ' ' : ''}${currentNode}`;
    const adjacencies = graph.adjacencies[currentNode];
    adjacencies.forEach((i) => {
      if (!isVisited[i]) {
        isVisited[i] = true;
        queue.push(i);
      }
    });
  }
  return output;
}

const simpleGraph = new Graph(4).addEdge(0, 2).addEdge(1, 2);
const biggerGraph = new Graph(4)
  .addEdge(0, 1)
  .addEdge(0, 2)
  .addEdge(1, 2)
  .addEdge(2, 0)
  .addEdge(2, 3)
  .addEdge(3, 3);

const testCases = [
  {
    graph: new Graph(10),
    startingNode: 9,
    expected: '9',
  },
  {
    graph: simpleGraph,
    startingNode: 0,
    expected: '0 2 1',
  },
  {
    graph: simpleGraph,
    startingNode: 3,
    expected: '3',
  },
  {
    graph: biggerGraph,
    startingNode: 2,
    expected: '2 0 1 3',
  },
  {
    graph: biggerGraph,
    startingNode: 3,
    expected: '3 2 0 1',
  },
];

describe('BFS', () => {
  testCases.forEach((testCase, index) => {
    it(`should find overlap for test case ${index}`, () => {
      const { graph, startingNode, expected } = testCase;
      expect(doBFS(graph, startingNode)).to.equal(expected);
    });
  });
});
