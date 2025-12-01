const prompt = require('prompt-sync')();

function IsPrime(val)
{
    if(val < 2) return false

    for(let i = 2; i <= Math.sqrt(val); i++)
    {
        if(val % i == 0) return false
    }

    return true
}

const firstNum = parseInt(prompt("ENter first number : "))
const lastNum = parseInt(prompt("ENter last number : "))

let result = []

for(let i = firstNum; i < lastNum; i++)
{
    if(IsPrime(i)) result.push(i);
}

console.log(result)