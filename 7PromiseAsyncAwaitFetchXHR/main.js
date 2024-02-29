// Promise 
console.log("Start");
const bucket = ["coffee", "chips", "veggies", "salt", "rice"];



// producing a promise
const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("veggies") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Frieddd Ricee");
    } else {
        reject("No fried rice possible");
    }
})

// consuming a promise
friedRicePromise.
    then(
        // receives a callback function which will come after resolving the promise 
        (myFriedRice) => console.log(myFriedRice),
    ).catch(
        // receives a callback function which will come after rejecting the promise 
        (err) => console.log(err)
); 


// promise is an asynchronous task,
// this work will also be done by browser


for(let i=0;i<9;i++){
    console.log(Math.random() * 10);
}

console.log("End");

console.log(friedRicePromise);