/* 1. What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break?
Do statements after the loop run? What is the return value? 
 Can we pass a return value from within a loop? ==> 
    Yes

    Can you return from inside an if block? What impact does that have?
*/


/* What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break?

==> break will just break the loop and execute the further code
     in the function while return will break the loop and will not
      be executing the further code in the function

Can you return from inside an if block? What impact does that have?
==> Yes we can return from inside an if block, and the further code will not be executed after return.
*/
function print() {
    for(let i=0;i<10;i++){
      if(i==6){
        return i;
      }
      console.log(i);
    }
    console.log("Something"); //when we use return in the loop this will not be printed
  }
  
  console.log("Value returned is : ",print());