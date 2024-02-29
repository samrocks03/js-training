const api_url = "https://api.github.com/users/samrocks03";

async function handlePromise(){
    
    try{

        const data = await fetch(api_url) //fetch returns a promise 
        
        // fetch() => Response object contains a body with a Readable stream and we have to convert it to json,
        // meanwhile .json() data is also promise, we have to resolve the promise and then get the result
        // i.e fetch() => Response.json() => jsonValue
        
        // now, with the response object, we will convert it to json
        const jsonValue = await data.json()
        // return jsonValue
        console.log(jsonValue);
    }catch(error){
        console.log("in catch: ", error)
    }
}

handlePromise();

// One can also handle the errors by :
handlePromise().catch((e) => console.log(e));


// async await vs Promise.then/.catch
// async await is syntactic sugar over promise.then/.catch