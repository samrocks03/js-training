/*
// object is not iterable
*/
/*
  const obj1 = {
    1: "value1",
    2: "value2",
    3: "value3",
    4: "value4"
  }

 
  // even length property won't work
  console.log(obj1.length)
  // for(obj of obj1){
  //   console.log(obj)
  // }
  
*/
// Sets:

const set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(set1)

/*
1. no index-based access
2. store data
3. order is not guaranteed
4. unique items only
*/

// console.log(set1.size)
// console.log(set1.has(1))
// console.log(set1.has(10)) 


// object
/*
const obj1 = {
  1: "value1",
  2: "value2",
  3: "value3",
  4: "value4",
  endgame: "end-game p1"
}
console.log(obj1["endgame"]);
*/

// Map
/*
1. In map, u can use any datatype to store as a key,
  meanwhile in the objects, u need to use only symbol or string

2. Thus, u cannot apply for-in loop, since, index is not-present,

3. But u can use for-of loop
*/
const person = new Map()
person.set("name", "John")
person.set("age", 30)

console.log(person)
console.log(person.keys())

person.forEach(() => console.log(`I'm ${person.get("name")}, being ${person.get("age")} years old`))


// CAN use for of loop like this:
console.log('--------------------------------')
for(let [k,v] of person){
  console.log(k,v)
}

// can also initiate new array like:
const person2 = new Map([['fN',"vijay"], ['lN',"Varma"], ['age',29]])
console.log(person2)

const p1 = {
  id: 1,
  fN: "harsh"
}

const p2 = {
  id: 2,
  fN: "rahul"
}

const extra = new Map()
extra.set(p1,{age:9, gender: "male"})
extra.set(p2,{age:7, gender: "male"})


console.log(p1.id,)
console.log(extra.get(p1))
console.log(extra.get(p2))
console.log(extra);
// console.log("hkh")