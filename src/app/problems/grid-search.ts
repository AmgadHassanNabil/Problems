export function gridSearch(grid: number[][], pattern: number[][]): boolean
{
    let patternRow = 0, patternCol = 0, startCol = 0;
    for (let row = 0; row < grid.length; row++)
    {
        for (let col = startCol; col < grid[0].length; col++)
        {
            if (grid[row][col] === pattern[patternRow][patternCol])
            {
                patternCol++;

                if (patternCol === pattern[0].length)
                {
                    patternRow++;
                    if (patternRow === pattern.length && patternCol === pattern[0].length)
                        return true;
                    // startCol = grid.length - patternCol - pattern.length;
                    startCol = col - (patternCol - 1);
                    patternCol = 0
                    break;
                }

            }
            else
                patternRow = patternCol = startCol = 0;
        }
    }
    return false;
}
