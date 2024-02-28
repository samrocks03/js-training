// understanding callbacks, callback hell, pyramid of doom
// asynchronous programming

console.log("helu ");

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// Callback hell example:-->
/*
setTimeout(()=>{
    heading1.textContent = "Headddding 1"
    heading1.style.color = "violet"
    // console.log("first violet")

    setTimeout(()=>{
        heading2.textContent = "Headddding 2"
        heading2.style.color = "green"

        setTimeout(()=>{
            heading3.textContent = "Headddding 3"
            heading3.style.color = "yellow"    

            setTimeout(()=>{
                heading4.textContent = "Headddding 4"
                heading4.style.color = "blue"
            },1000)
        },1000)
    },1000)
},3000)
*/

// setTimeout(()=>{
//     heading2.textContent = "Headddding 2"
//     heading2.style.color = "green"
//     console.log("first green")
// },1000)

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
