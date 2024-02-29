// function that will return a promise

const bucket = ["coffee", "chips", "veggies", "salt", "rice"];

function ricePromise() {
    return new Promise((resolve, reject) => {
        if (bucket.includes("veggies") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve("Frieddd Ricee");
        } else {
            reject("No fried rice possible");
        }
    })  
}

ricePromise().then(
    (myFriedRice) => console.log("let's eat:",myFriedRice)
).catch((err) => console.log(err));