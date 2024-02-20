/*
1. What is the difference between ++i and i++?
==>     ++i is called pre-increment and i++ is called post-increment.

        What'd happen is that, in pre-increment, the value will be incremented first,
        and then displayed later

        But, in post-increment, the value will be displayed first, 
        and then incremented later.
*/


/*
2. What do you think would happen if you pass an index beyond the range 
of the string? Or if you pass a negative index? Try it out.
==>
        If you pass an index beyond the range of the string, it will return undefined.
        If you pass a negative index, it will return undefined.
*/
const stri = "Hello, world!";
// console.log(str.length)
console.log(stri[20]); // returns: undefined
console.log(stri[-5]); // returns: undefined
console.log("-------------------------------------")

/*
3. Do you think JSON.stringify would work for arrays as well? 
    What about nested objects? What happens if we pass numbers,
    strings, undefined, null to JSON.stringify?

==>     Yes, JSON.stringify would work for arrays as well.
*/

const arr = [1, 2, 3];
const obj = { name: "John", age: 30, nested: { prop: "value" } };
const num = 42;
const str = "Hello, world!";
const undef = undefined;
const nul = null;

console.log(JSON.stringify(arr)); // returns: "[1,2,3]"
console.log(JSON.stringify(obj)); // returns: "{"name":"John","age":30,"nested":{"prop":"value"}}"
console.log(JSON.stringify(num)); // returns: "42"
console.log(JSON.stringify(str)); // returns: ""Hello, world!""
console.log(JSON.stringify(undef)); // returns: undefined
console.log(JSON.stringify(nul)); // returns: "null"


/*
4. What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen 
    if such an invalid function runs in the program? Will other parts of the code execute correctly after that?
==>    If you pass a regular/invalid JSON string to JSON.parse, it will throw an error.
*/
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const invalidJsonString = '{"name": "John", "age": 30, "city": "New York",}';

const validObject = JSON.parse(jsonString);
console.log(validObject); // Output: { name: 'John', age: 30, city: 'New York' }

const invalidObject = JSON.parse(invalidJsonString); // This line will throw a SyntaxError
console.log(invalidObject); // This line will not be executed