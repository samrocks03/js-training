// function personInfo(){
//     console.log(`person name: ${this.fN} and age is: ${this.age}`)
//     // console.log(this)
// }

/*
// Learning call() method
const p1 = {
    fN: 'John',
    age: 25,

    info: function(hobby,art){
        console.log(`person name: ${this.fN} and age is: ${this.age} and hobby is: ${hobby} and art is: ${art} `)
    }
}

const p2 = {
    fN: 'Jane',
    age: 22,
    // info: personInfo
}

p1.info("listening","drawing")
p1.info.call(p2,"gaana","drawing") //here we change the bindings of the this keyword to p2 object
*/


/*
// Learning apply method
// - apply method uses call internally,
// - with the help of apply, u need to pass the array of arguments


function about(hobby,art){
    console.log(`person name: ${this.fN} and age is: ${this.age} and hobby is: ${hobby} and art is: ${art} `)
}
const p1 = {
    fN: 'John',
    age: 25,
}

const p2 = {
    fN: 'Jane',
    age: 22,
    // info: personInfo
}
about.apply(p1,["listening","drawing"])
*/

// Learning bind() method
function about(hobby,art){
    console.log(`person name: ${this.fN} and age is: ${this.age} and hobby is: ${hobby} and art is: ${art} `)
}
const p1 = {
    fN: 'John',
    age: 25,
    broo: function(){
        console.log(this.fN, this.age)
    }
}

const p2 = {
    fN: 'Jane',
    age: 22,
    // info: personInfo
}

// here, we will store the reference of the function about in the func variable, and use it whenever necessary
// const func = about.bind(p2,"guiding","painting")

const func = p1.broo;

// hence, don't do this:->
// func(); //this will return "undefined undefined" 

// instead do this:->
func.bind(p2)(); //this will ensure that when func is called, it will be called with p2 object,
