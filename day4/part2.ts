import * as fs from "fs";

function countShapeMAS(grid: string[]): number {
  const n = grid.length;
  const m = grid[0].length;
  let count = 0;

  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < m - 1; j++) {
      if (grid[i][j] !== "A") continue;

      const tl = grid[i - 1][j - 1]; 
      const tr = grid[i - 1][j + 1]; 
      const bl = grid[i + 1][j - 1]; 
      const br = grid[i + 1][j + 1]; 

      const diag1 = tl + grid[i][j] + br;
      const diag2 = tr + grid[i][j] + bl;

      if ((diag1 === "MAS" || diag1 === "SAM") && (diag2 === "MAS" || diag2 === "SAM")) {
        count++;
      }
    }
  }

  return count;
}

// Read input
const input = fs.readFileSync("day4/input.txt", "utf8").trim().split("\n");
console.log(countShapeMAS(input));
