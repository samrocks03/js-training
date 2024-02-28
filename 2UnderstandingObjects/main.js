const person = {
  name: "Bru",
  age: 25,
  "person hobbies": ["music", "sports"],
}

// for in loop
// Object.keys
/*
for(let key in person) {
  // console.log(`${key}, ${person.key}`) // this will return: key_name: undefined
  // console.log(`${key}: ${person[key]}`) // this will return: key_name: undefined
  console.log(person[key]); //this will iterate entire object `person`
}
*/

// console.log(Object.keys(person)); // this will return an array of keys of the object `person`

// console.log(Object.values(person)); // this will return an array of values of the object `person`


/*
// Computed Properties
const key1 = "myObject1", key2 = "myObject2";
const val1 = "myValue1", val2 = "myValue1";

const obj = {
  [key1]: val1,
  [key2]: val2,
} //this is an example of computed properties
console.log(obj);
*/


// Spread Operator
const newArr = [..."newString"]
console.log(newArr);

// Spread operator in objects
const newObj = {
  ...["item1", "item2"]
}
console.log(newObj);

const newObj2withString = {
  ..."ThisIsNewString"
}
console.log(newObj2withString);

// Object destructuring
const band = {
  bandName: "Metallica",
  famousSong: "Enter Sandman",
  year: 1981,

  anotherFamousSong: "Nothing Else Matters"
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// bandName = "Iron Maiden";

const {bandName: bN, famousSong: fS, ...restProps} = band;

console.log(`The band "${bN}" is famous for their song "${fS}"`);
console.log(bN);
console.log(fS);
console.log(restProps); //returns remaining properties of object `band`
