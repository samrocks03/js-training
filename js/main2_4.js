const {userNames: uN, userEmails: uE} = require('./content.js');

console.log(uN)
console.log("------------------------------------")
console.log(uE)
console.log("------------------------------------")


/*
let result = {
    1: {
        first_name: "name",
        email: "email@gmail.com"
    }
}
*/


console.log("----------------------------")

let res = {}
for(let key in uN){
    res[uN[key].id] = {
        id: uN[key].id,
        first_name : uN[key].first_name,
    }
}

for(let key in uE){
    res[uE[key].id].email = uE[key].email
}
// console.log(res)
console.log(Object.values(res))


/*
let res = {}
for (let i = 0; i < uN.length; i++) {
    res[uN[i].id] = {
        first_name: uN[i].first_name
    }
}
// console.log(res)

for(var id in uE){
    res[uE[id].id].id = uE[id].id;
    res[uE[id].id].email = uE[id].email;
}
console.log(Object.values(res));
*/