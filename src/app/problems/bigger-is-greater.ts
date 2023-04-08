export function biggerIsGreater(word: string): string | null
{
    const possibleStrings = [... new Set(allPossibleStrings([...word]))];
    let result: string | null = null;
    for (const possibleString of possibleStrings)
        if (possibleString > word && (!result || possibleString < result))
            result = possibleString;

    return result;
}


function allPossibleStrings(word: string[], start = 0): string[]
{
    if (start && start >= word.length)
        return [];

    const result: string[] = [];
    for (let i = start + 1; i < word.length; i++)
    {
        const currentWord = [...word];
        [currentWord[i - 1], currentWord[i]] = [currentWord[i], currentWord[i - 1]];
        result.push(currentWord.join(""));
    }

    const allResults = [...result];
    for (const possibleString of result)
        allResults.push(...allPossibleStrings([...possibleString], start + 1));

    return allResults;
}

console.log(biggerIsGreater("abcdefghjijrtfgsdfgasd"))