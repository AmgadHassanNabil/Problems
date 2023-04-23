export function gridSearch(grid: number[][], pattern: number[][]): boolean
{
    for (let row = 0; row < grid.length; row++)
    {
        for (let col = 0; col < grid[0].length; col++)
        {
            if (grid[row][col] === pattern[0][0])
            {
                let patternRow = 0, patternCol = 0;
                outerloop: for (patternRow = 0; patternRow < pattern.length; patternRow++)
                {
                    for (patternCol = 0; patternCol < pattern[0].length; patternCol++)
                    {
                        if (grid[row + patternRow][col + patternCol] !== pattern[patternRow][patternCol])
                            break outerloop;
                    }
                }
                if (patternRow === pattern.length && patternCol === pattern[0].length)
                    return true;
            }
        }
    }
    return false;
}

export function gridSearchText(grid: string[], pattern: string[]): boolean
{
    return gridSearch(grid.map(a => a.split("").map(b => +b)), pattern.map(a => a.split("").map(b => +b)));
}