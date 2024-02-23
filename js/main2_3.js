/*
    Write a function that sorts an array of objects by
    the key that is passed in the second argument, and 
    in the order passed as the 3rd argiment. 
*/

// const { users2 } = require('./content');
const {users2} = require('./content.js');

function sortBy(arr, key, order) {
    return arr.sort((a, b) => {
        if (order === 'asc') {
            return a[key] > b[key] ? 1 : -1;
        } else {
            return a[key] < b[key] ? 1 : -1;
        }
    });
}
console.log(sortBy(users2, 'first_name', 'desc'));