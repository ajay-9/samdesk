import * as fs from "fs";

function countXMAS(grid: string[]): number {
  const n = grid.length;
  const m = grid[0].length;
  const word = "XMAS";
  const len = word.length;
  let count = 0;

  // 8 possible directions (horizontal, vertical, diagonal)
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] !== "X") continue;

      for (let d = 0; d < 8; d++) {
        let found = true;

        for (let k = 0; k < len; k++) {
          const x = i + dx[d] * k;
          const y = j + dy[d] * k;

          if (x < 0 || y < 0 || x >= n || y >= m || grid[x][y] !== word[k]) {
            found = false;
            break;
          }
        }

        if (found) count++;
      }
    }
  }

  return count;
}

// Read input
const input = fs.readFileSync("day4/input.txt", "utf8").trim();
const grid = input.split("\n").filter(line => line.length > 0);

console.log(countXMAS(grid));
