// const obj1 = {
//     key1: "val1",
//     key2: "val2",
// }

// // another way to create an empty object
// const obj2 = Object.create(obj1)
// // console.log(obj2);

// obj2.key3 = "val3";
// console.log(obj2);


// These things are for objects
// in official ES docs:
// [[prototype]]
// __proto__ , [[prototype]]



// This is for function:
// prototype

// in js, a function can be a function as well as object too


// function hello(){
//     console.log("Hello");
// }

// // hell();
// console.log(hello.prototype);
// only functions provide prototype property

//prototype is an object, which is basically found out with a function

// hello.abc = "abc";  //by this, abc will come in constructor of f

// hello.prototype.bbc = "bbc"; //by this, bbc will come in constructor


// getters and setters in the class
class Person{
    constructor(fN, lN, age){
        this.fN = fN;
        this.lN = lN;
        this.age = age;
    }

    get fullName(){
        return `${this.fN} ${this.lN} ${this.age}`;
    }

    set fullName(full_name){
        const [fn,ln] = full_name.split(' ');
        this.fN = fn;
        this.lN = ln;
    }
}

const p1 = new Person("John", "Cena", 25);
console.log(p1.fullName);
p1.fullName = "Vijay Yadav";
console.log(p1.fullName);