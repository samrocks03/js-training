// 1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument


// this function will stop the execution of the function for 
// the number of milliseconds sent as an argument ```ms```
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const func = async () => {
    console.log('Script started')
    await sleep(2000)
    console.log('Script ended')
}
//func();
/*
    This will print :
    Script started
    ---will take a delay of 2 seconds
    Script ended
*/

// --------------------------------------------------------------------------------

// 2. Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). Log the data into the console once it is received

const fetchDataFromAPI = () => {
    return fetch("https://reqres.in/api/users")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log("Error while fetching data: ", error));
}

// --------------------------------------------------------------------------------

// 3.What will be printed to the console when the promise resolves and when it rejects?
/*
  * Output when the promise resolves is "Response in then block:  Test Resolve"
  * Output when the promise is rejected is "Error caught in testAsyncFunction:  Test Reject Response in then block:  undefined"
*/

const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction: ', err);
    });
};
// testAsyncFunction()
//     .then((response) => {
//         console.log('Response in then block: ', response);
//     })
//     .catch((error) => console.log('Error in catch block: ', error));


// --------------------------------------------------------------------------------

// 4.  What will be printed to the console?
const testAsyncFunction2 = () => {
    return Promise.reject("Test static reject");
}

/*
testAsyncFunction2()
    .then(response => console.log("Response in then block: ",response))
    .catch(error => console.log("Error in catch block: ",error))
*/
//The output will be: Error in catch block:  Test static reject


// --------------------------------------------------------------------------------

// 5. What will be printed to the console?
const testAsyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction', err);
        throw new Error('Forced error');
    });
};
/*
testAsyncFunction3()
    .then(response => console.log("Response in then block: ", response))
    .catch(error => console.log("Error in catch block: ", error))
*/
/* The output will be: 
    ```
        Error caught in testAsyncFunction Test Reject
        Error in catch block:  Error: Forced error
            at /home/jspnlp/Documents/josh_js_training/js/main.js:78:15
    ```        
*/

// --------------------------------------------------------------------------------

//6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.

const fetchDataFromAPIWithDelay = () => {
    return new Promise((resolve, reject) => {
        fetch("https://reqres.in/api/users")
            .then(response => response.json())
            .then(data => setTimeout(() => resolve(data), 2000))
            .catch(error => reject(error));
    });
}
/*
fetchDataFromAPIWithDelay()
    .then(data => console.log(data));
*/
// This will give the api data in an object format after 2 seconds
// --------------------------------------------------------------------------------


//7 .Complete the above tasks with async/await.
const fetchDataFromAPIWithAsyncAwait = async () => {
    try{
        const response = await fetch("https://reqres.in/api/users")
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log("Error while fetching data: ", error);
    }
} 
fetchDataFromAPIWithAsyncAwait();


// -------------- --------------------------- X ------------------- --------------------