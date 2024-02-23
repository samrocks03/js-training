/*
    Write a function to filter an array of strings
     to hold only unique values
*/

const unique = (arr) => {
    return arr.filter((v, i, a) => a.indexOf(v) === i);
}

console.log(unique(["a", "b", "c", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]));
