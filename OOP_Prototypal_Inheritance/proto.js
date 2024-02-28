// const user = {
//     fN: "Dave",
//     lN: "Batista",
//     email: "dave.batista@wwe.com",
//     age: 39,
//     about: function(){
//         console.log(`person name: ${this.fN} and age is: ${this.age}`)
//     },
//     is18: function(){
//         return this.age >= 18
//     }
// }

// const aboutDave = user.about();
// console.log(aboutDave);

// function- create an object
// 2. add key:value pair
// 3. object la return karel


// const userMethods = {
//     about(){
//         return `${this.fN} ${this.lN} is ${this.age} years old`
//             + `and lives in ${this.address}`
//     },

//     is18(){
//         return this.age >= 18
//     },

//     sing(){
//         return "Uuuh laaa laaa laaaaaa"
//     }

//     // this will now come in [[Prototype]] 

// }

// function createUser(fN,lN,email,age,address){
//     // const user = {};
//     // u can create proto chain by creating object by this line:
//     const user = Object.create(userMethods);
//     user.fN = fN;
//     user.lN = lN;
//     user.email = email;
//     user.age = age;
//     user.address = address;
    
//     // // now, we are storing the reference of the function in the object
//     // user.about = userMethods.about;
//     // user.is18 = userMethods.is18;
//     return user;
// }
// const p1 = createUser("John", "Cena", "john.cena@wwe.com", "42", "USA");
// console.log(p1);

// const is18 = p1.is18();
// console.log(is18);

// console.log(p1.about());

// --------------------------------------------------------------------------



function createUser(fN,lN,email,age,address){
    // const user = {};
    // u can create proto chain by creating object by this line:
    // const user = Object.create(userMethods);

    const user = Object.create(createUser);
    user.fN = fN;
    user.lN = lN;
    user.email = email;
    user.age = age;
    user.address = address;
    
    // // now, we are storing the reference of the function in the object
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    return user;
}
const p1 = createUser("John", "Cena", "john.cena@wwe.com", "42", "USA");
console.log(p1);



createUser.prototype.about = function(){
    return `${this.fN} ${this.lN} is ${this.age} years old`
        + `and lives in ${this.address}`
    }

createUser.prototype.is18 = function(){
    return this.age >= 18
}

createUser.prototype.sing = function(){
    return "Uuuh laaa laaa laaaaaa"
}



// Important:
// - prototype is an object
// - __proto__ --> is a reference of the chain created

