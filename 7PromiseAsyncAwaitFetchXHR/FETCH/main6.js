// Fetch API: 


const url = "https://jsonplaceholder.typicode.com/postssss";
// console.log(fetch(url));

fetch(url)
    .then(response =>{
        response.json(); 
        // return response.json();
    })

/*
fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log("in catch",err))

    // promise is never ever rejected at 404, hence the catch won't work here   
*/


// fetch(url)
//     .then(res => {
//         if(res.ok){
//             return res.json();
//         }else{
//             throw new Error("Something went wrong!!")
//         }
//     })
//     .then(data => console.log(data))
//     .catch(error => {
//         console.log("in catch",error)
// })