

function test(callback) {
    callback();
}

function callbackFunc() {
    console.log("Calling the callback function");
    return 5;
}

// test(callbackFunc); //returns: Calling the callback function!


// test(callbackFunc()); 
/**
    callback();
    ^
    TypeError: callback is not a function 
*/ 

// test(() => callbackFunc()) //returns: Calling the callback function!


//What happens when you return callback() from the test function?
/* 
    Calling the callback function
 */


//4.What happens when you return callback from the test function?
/*
    returning callback from the test function allows the caller
    to decide when to execute the callback function.
    We have to catch the value that test function is returning.
*/