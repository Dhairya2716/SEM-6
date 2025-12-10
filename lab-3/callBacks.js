function callBackExample(callBack)
{
    console.log("Before executing the callback");
    callBack();
    console.log("After executing the callback");
}

function callBack()
{
    console.log("Inside the callback function");
}


callBackExample(callBack);