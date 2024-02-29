
// async always returns a promise 
// await: keyword which can be used only inside of async function

const p = new Promise((resolve, reject) => {
    setTimeout(() => { 
        resolve("Promise is resolved values");
    }, 7000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => { 
        resolve("Promise is resolved values");
    }, 4000)
});


async function handlePromise() {
    console.log("Helu worlllld") //this will get executed and then it will wait 
    // for requested setTimeout time provided in the promise 
    
    // js engine was waiting for promise to get resolved
    const val = await p; //the await has got the resolved value from the promise 
    console.log("Helu bruuu")
    console.log(val);


    // if the same promise is called again, it will not wait for the promise to get resolved
    const val2 = await p2; //the await has got the resolved value from the promise 
    console.log("Helu bruuu2")
    console.log(val2);


    // in async await block
    // the code is going to wait 10 seconds, then only it will return the 
}
handlePromise();


/*
function getData(){
    p.then(val => console.log(val)); //(2), then this will take place
    console.log("Helu bruuu"); //(1)this will run first,
}
*/

// await function() {} // SyntaxError: await is only valid in async function
// await can be used only inside of async function


