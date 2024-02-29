// escaping the callback-hell by promise-chaining
// We had this code for callback hell:

/*
// Pyramid of DOOM
function changeText(ele, text, color, time, onSuccessCallback, onFailureCallback) {
  setTimeout(() => {
    if (ele) {
      ele.textContent = text;
      ele.style.color = color;
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } else {
      console.log("Element not found");
      if (onFailureCallback) {
        onFailureCallback();
      }
    }
  }, time);
}

changeText(heading1, "Headddding 1", "violet", 3000, () => {
  changeText(heading2, "Headdding 2", "green", 1000, () => {
    changeText(heading3, "Headdding 3", "yellow", 1000, () => {
      changeText(heading4, "Headdding 4", "blue", 1000, () => {
        changeText(heading5, "Headdding 5", "red", 1000, () => {
          changeText(heading6, "Headdding 6", "orange", 1000, () => {
            changeText(heading7, "Headdding 7", "purple", 1000, () => {
              console.log("All done");
            }, () => { console.log("Headdding 7 does not exist") })
          }, () => { console.log("Headdding 6 does not exist") })
        }, () => { console.log("Headdding 5 does not exist") })
      }
        , () => { console.log("Headdding 4 does not exist") })
    }, () => { console.log("Headdding 3 does not exist") })
  }, () => { console.log("Headdding 2 does not exist") })
}, () => { console.log("Headdding 1 does not exist") });

*/

// We can escape this callback hell by using promises. We can convert the above code to promise-chaining as follows:
// So we rewrote it using Promises as follows:

console.log("helu ");

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


function changeText(ele, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ele) {
                ele.textContent = text;
                ele.style.color = color;
                resolve();
            } else {
                // console.log("Element not found");
                reject();
            }
        }, time);
    })
}


changeText(heading1, "First one", "red", 1000) //this one returns the promise object
    .then(() => changeText(heading2, "Second one", "green", 1200))
    .then(() => changeText(heading3, "Third one", "blue", 1300))
    .then(() => changeText(heading4, "Fourth one", "yellow", 1400))
    .then(() => changeText(heading5, "Fifth one", "orange", 1500))
    .then(() => changeText(heading6, "Sixth one", "violet", 1600))
    .then(() => changeText(heading7, "Seventh one", "purple", 1700))
    .catch(err => {
        console.log("Error: ", err);
    }) 
