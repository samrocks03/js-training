
/*
Q1. 
    How will you create a new copy of 
    the object below while updating the value 
    of address.details[0] to “5“?
*/

let oobj = {
    name:"Harry Potter",
    age : 12,
    address: {
     details: ["4", "Privet Drive"],
     area:"Little Whinging",
     city: "Surrey",
     state: "England"
    } 
}

oobj2 = JSON.parse(JSON.stringify(oobj));
oobj2.address.details[0] = "5";

// Original Object:
// console.log(oobj)


// New Object with copy by updating the value
// console.log(oobj2)


/*  
Q2.
    Write a function filterObj that will filter 
    out all the keys of a flat object that have 
    sobjects or arrays using Object.keys and Object.entries. 
*/
let obj = {
    a: "Apple",
    b: ["Basketball", "Baseball"],
    c: { call: "cellphone"},
    d: "Dog"
}

function filterObj(obj) {
    return Object.keys(obj)
        .filter(key => {
            const value = obj[key];
            return typeof value !== 'object' || value === null;
        })
        .reduce((acc, key) => {
            acc[key] = obj[key];
            return acc;
        }, {});
}

let filteredObj = filterObj(obj);
console.log(filteredObj);
