// using promise and setTimeout at once

function myPromise() {
    return new Promise((resolve, reject) => {
        const value = false;
        setTimeout(() => {
            if (value) {
                resolve("Success")
            } else {
                reject("Failed")
            }
        }, 2000)
    })
}

// myPromise().then(()=>{ console.log("res") })

myPromise().
    then((resolve) => console.log(resolve)).
    catch((reject) => console.log(reject))

