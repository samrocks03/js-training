const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))

/*
    async function getP(){
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("Something went wrong!!")
        }
        const data = await response.json();
        return data
    }
*/ 
// can also write it as async function:
const getP = async () => {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error("Something went wrong!!")
    }
    const data = await response.json();
    return data
}

// const returnv =  getP();
// console.log(returnv); // undefined

getP()
    .then(data => console.log(data))
    .catch(error => console.log("in catch: ", error))


// async always returns a promise 
// await: keyword which can be used only inside of async function