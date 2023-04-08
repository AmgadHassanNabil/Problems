export function nonDivisibleSubset(divisible: number, s: number[]): number
{
    let count = 0;
    for (let i = 0; i < s.length; i++)
    {
        for (let j = i + 1; j < s.length; j++)
        {
            const sum = s[i] + s[j];
            if (sum % divisible === 0)
            {
                console.log(`${i} + ${j} = ${sum}, ${sum / divisible}`)
                count++;
            }
        }
    }
    return count;
}