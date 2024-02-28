// // var n = "heluuu"
// // console.log(n);
// // document.getElementById("name").innerHTML = "Hello Bhai";

// // var a = null
// // console.log(typeof a)

// // var arr = [1,2,3,4,5,6,7,8,9,10, "hello", "world", "hi", "bye"]
// // console.log(arr);

// // arr.push("new")
// // console.log(arr);

// // arr.pop()
// // console.log(arr);

// /*
// let promise = new Promise((res,rej) => {
//     let val = 10 + 30;
//     if(val == 50){
//         res("Success")
//     }else{
//         rej("Failed")
//     }
// });

// console.log(promise);

// promise.then((res) =>{
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Finally completed promise");
// });*/

// /*
// getName()
// console.log(x)
// console.log(getName)

// let x = 7; //cannot access before initialization
// function getName(){
//     console.log("Hello")
// }
// */

// /*if i write the same function as arrow function with `var`, it would
//  consider it as undefined, like the call is made above in the current scenario
// */

// let x = 7; //cannot access before initialization
// function getName(){
//     console.log("Hello")
// }
// getName()
// console.log(x)
// console.log(getName)

// let v1 = { sample: 'Test'};
// const func = (v1) => {
// varl.sample = 'Changed';
// };
// func(v1);
// console.log(v1.sample);

function one() {
  const uName = "bravo";

  function two() {
    const website = "youtube";
    console.log(uName);
  }
//   console.l  og(website);
//   two();
}
// one();

if(true){
    const uN = "bravo";
    if(uN === "bravo"){
        const website = " youtube";
        console.log(uN + website);
    }
    // console.log(website); // not defined 
}
// console.log(uN); //not defined