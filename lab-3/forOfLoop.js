function forOfLoopExample()
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for(let val of arr)
    {
        console.log("value of arr["+arr.indexOf(val) + "] is: "+ val);
    }
}

forOfLoopExample();