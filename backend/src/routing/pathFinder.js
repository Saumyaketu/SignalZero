export function findShortestPath(startNodeId, endNodeId, nodes) {
  if (startNodeId === endNodeId) {
    return [startNodeId];
  }

  const graph = new Map();

  nodes.forEach((node) => {
    graph.set(node.nodeId, node.neighbors);
  });

  const visited = new Set();
  const queue = [];

  queue.push([startNodeId]);
  visited.add(startNodeId);

  while (queue.length) {
    const path = queue.shift();
    const current = path[path.length - 1];
    const neighbors = graph.get(current) || [];

    for (const neighbor of neighbors) {
      if (visited.has(neighbor)) continue;

      const newPath = [...path, neighbor];
      if (neighbor === endNodeId) {
        return newPath;
      }

      visited.add(neighbor);
      queue.push(newPath);
    }
  }

  return null;
}
