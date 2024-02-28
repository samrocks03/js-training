// understanding callbacks, callback hell, pyramid of doom
// asynchronous programming

console.log("helu ");

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");

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
function changeText(ele, text, color, time,onSuccessCallback) {
  setTimeout(() => {
    if (ele) {
      ele.textContent = text;
      ele.style.color = color;
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } else {
      console.log("Element not found");
    }
  }, time);
}

changeText(heading1, "Headddding 1", "violet", 3000, ()=>{
  changeText(heading2, "Headdding 2", "green", 1000, ()=>{
    changeText(heading3, "Headdding 3", "yellow", 1000, ()=>{
      changeText(heading4, "Headdding 4", "blue", 1000)
    })
  })
});
