"use strict";

function everyOtherInteger_worsePerformance (numbers)
{
    // handle case where numbers is falsy return 
    if (!numbers) return [];
    return numbers
        // map all nulls to 0s
        .map(num => !num ? 0 : num)
        // map to apply the product while excluding the index I am already at
        .map((num, index, cleansedNumbers) =>
        {
            let result = 1;
            for (let i = 0; i < cleansedNumbers.length; i++)
            {
                if (i !== index)
                    result *= cleansedNumbers[i];
            }
            return result;
        });
}
function everyOtherInteger (numbers)
{
    // handle case where numbers is falsy return 
    if (!numbers) return [];
    const numberOfZeros = numbers.filter(num => !num).length;
    numbers = [...numbers.map(num => !num ? 0 : num)]
    const allProduct = numbers.reduce((accum, curr) => accum * (curr || 1), 1);
    if (numberOfZeros === 0)
    {
        return numbers.map(num => allProduct / num);
    } else if (numberOfZeros === 1)
    {
        const result = new Array(numbers.length).fill(0);
        result[numbers.indexOf(0)] = allProduct;
        return result;
    } else
    {
        return new Array(numbers.length).fill(0);
    }
}

console.log(everyOtherInteger([4, 3, 2, 8]))
console.log(everyOtherInteger([4, 3, null, 8]))
console.log(everyOtherInteger([null, 3, null, 8]))
console.log(everyOtherInteger([undefined, 3, null, 8]))
console.log(everyOtherInteger(null))
console.log(everyOtherInteger([]))
console.log(everyOtherInteger([4]))

//[4,3,null,8] -> [4,3,0,8]
// [4,3,0,8] -> [3*8*0, 4*8*0, 4*3*8, 4*3*0]