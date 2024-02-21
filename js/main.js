const data = require('./content.js');

// -------------------------------------------------------------------------------------------------------


/* Q1. Write a function filterByName that accepts a string as a parameter and returns an
 array with only those objects where the first_name field includes that string.
*/
function filterByName(name) {
  /*
      this will check for the object that contains the name 
      via includes() method
  */
  return data.filter((obj) => obj.first_name.includes(name))
}
// console.log(filterByName("Virgi"))
/* 
It will return:
[
  {
    id: 9,
    first_name: 'Virgilio',
    email: 'vferandez8@e-recht24.de',
    date_of_birth: '2000/09/07'
  }
]
*/

// -------------------------------------------------------------------------------------------------------



/* Q2. Use Array.map to return an array of all the email fields. */
// const emails = data.map(obj => obj.email);

//Can also write this as like below, since
// direct de-structuring in the parameter is possible
let emails = data.map(({email: e}) => e);  //syntactic-sugar version
// let emails = data.map(({email}) => email);

// console.log(emails)
// Returns: all the emails

// -------------------------------------------------------------------------------------------------------



/* Q3. Use Array.sort to return the array sorted in descending order by date_of_birth. */
const sortedData = data.sort((a, b) => new Date(b.date_of_birth) - new Date(a.date_of_birth));
// console.log(sortedData);

// -------------------------------------------------------------------------------------------------------


/*  Q4. Write a function getById that accepts a number as a parameter and 
    returns the object where the id is equal to that number. 
*/
function getById(id) {
  const result = data.find(obj => obj.id === id);
  if(result) {
    return result;
  }else {
    return "ID not found";
  }
}
console.log(getById(9)); // returns: json with that specific object
// console.log(getById(19)); // returns: "ID not found"

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------


