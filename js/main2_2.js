// const {users2} = require('./content');

// const { users1, users2 } = require('./content.js');

const { users2 } = require('./content');
// console.log(users2);
// function groupBy(arr,key) {
    
// }


function groupBy(arr){
    return arr.reduce((all,person) => {
        const gender = person.gender
        if(all[gender] == null)
            all[gender] = []
        all[gender].push(person);
        return all
    },{})
}
console.log(groupBy(users2))

/* 
    this can also be done by using the map function from
    `main2_1.js` and passing the parameter 'users2' as well
    as 'gender' 
*/