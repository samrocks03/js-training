// sync vs async
// sync: until a task is completed, the other one won't start(take place)

// console.log("script started") 

// we can do async programming in js, even though it's synchronous and single threaded in nature

// async: tasks can be completed independently of the main thread and the other tasks will wait for them to complete before moving on 

// understanding async programming via setTimeout()

/*
console.log("script started")
function hello(){
    console.log("hello js");
}
setTimeout(hello, 1000); //this `hello` function must be called after 1 second,


console.log("script ended")
*/


/*
console.log("script started");

const id = setTimeout(()=>{
    console.log("inside the set timeout")
    },1000);

for(let i=0;i<100;i++){
    console.log("inside the loop")
}

console.log("setTimeout id is :", id)

console.log("clearing out timeout");
clearTimeout(id);


console.log("script ended");
*/


// Understanding callbacks
function addTwonums(num1,num2,onSuccess,onError){
    if(typeof num1 === "number" && typeof num2==="number"){
        onSuccess(num1,num2);
    }else{
        onError();
        // console.log("Please provide numbers only");
    }
}

function addNums(a,b){
    return console.log(a+b);
}

addTwonums(10,20,addNums,()=>console.log("Please provide numbers only"));