// Closures:
/*
function myFunc(power){
    return function(number){
        return number ** power;
    }
}

const square = myFunc(2); // this is a closure
// this will get the value of power from the outer function i.e myFunc
// which is present in the lexical environment of that function,
// i.e scope
// and use it to calculate the square of the number
console.log(square(2)); // Output: 4


const cube = myFunc(3);
// similarly for cube,
// now cube will have the value 3, as well as the function which returns ```number ** power```

console.log(cube(2)); // Output: 8  
// now being called 2 times, it will have 2 different lexical environments


// Before learning closures: Why this works?!
// After learning closures: Okay! so this is how it works!
*/

const myFunc = (power) => {
    return (number) => number ** power; 
}

const square = myFunc(2);
console.log(square(2)); // Output: 4

const cube = myFunc(3);
console.log(cube(2)); // Output: 8



function func(){
    let c = 0;
    return function(){
        if(c < 1){
            console.log("Hello, u called me?");
            c++;
        }else{
            console.log("Maza call aadhich zaalay");
        }
    }
}
const a = func();
a(); // Output: Hello, u called me?

a();

const b = func();
b();
b();