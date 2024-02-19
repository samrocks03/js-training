// 5. Can you use return instead of break in loops?

function findNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i; // This will exit the function and return the index if the number is found
        }
    }
    return -1; // Return -1 if the number is not found in the array
}

let arraySize = 25;
let numbersArray = [12,35,46,57,25,26,16];
console.log(findNumber(numbersArray,arraySize))