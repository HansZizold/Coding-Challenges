const pacificAtlantic = (matrix) => {
  if (!matrix || !matrix[0]) {
    return [];
  }

  const m = matrix.length;
  const n = matrix[0].length;

  // Initialize the two arrays to keep track of cells that can flow to the Pacific and Atlantic oceans, respectively.
  const canFlowToPacific = new Array(m).fill().map(() => new Array(n).fill(false));
  const canFlowToAtlantic = new Array(m).fill().map(() => new Array(n).fill(false));

  // Perform a DFS for each cell in the first and last column of the matrix to check if the water can flow from that cell to the Pacific and Atlantic oceans, respectively.
  for (let i = 0; i < m; i++) {
    dfs(matrix, canFlowToPacific, i, 0);
    dfs(matrix, canFlowToAtlantic, i, n - 1);
  }

  // Perform a DFS for each cell in the first and last row of the matrix to check if the water can flow from that cell to the Pacific and Atlantic oceans, respectively.
  for (let j = 0; j < n; j++) {
    dfs(matrix, canFlowToPacific, 0, j);
    dfs(matrix, canFlowToAtlantic, m - 1, j);
  }

  const result = [];

  // Iterate through the matrix and check if each cell can flow to both oceans. If it can, add the cell's coordinates to the `result` array.
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (canFlowToPacific[i][j] && canFlowToAtlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

// DFS function to check if the water can flow from the current cell to the specified ocean.
const dfs = (matrix, canFlowToOcean, i, j) => {
  canFlowToOcean[i][j] = true;

  // Check the neighbors of the current cell and recursively call the DFS function on each neighbor that has a higher or equal height.
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  for (let [di, dj] of directions) {
    const ni = i + di;
    const nj = j + dj;
    if (ni < 0 || ni >= matrix.length || nj < 0 || nj >= matrix[0].length) {
      continue;
    }
    if (canFlowToOcean[ni][nj] || matrix[ni][nj] < matrix[i][j]) {
      continue;
    }
    dfs(matrix, canFlowToOcean, ni, nj);
  }
};

console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]));
