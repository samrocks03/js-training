const {users, users2} = require('./content.js');

// -------------------------------------------------------------------------------------------------------


function mapBy(arr, key) {
    return arr.reduce((acc, obj) => {
        acc[obj[key]] = obj;
        return acc;
    }, {});
}
// console.log(mapBy(users,"first_name"))
// console.log(mapBy(users2,"gender"))



//This should return
//{
// “Nicki”:{id:1, first_name:”Nicki”, ...},
// “Raychel”:{id:2, first_name:”Raychell”, ...},
//}
    
