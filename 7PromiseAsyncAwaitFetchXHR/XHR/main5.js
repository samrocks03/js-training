
// AJAX in js: asynchronous js and xml
// our client is browser


/*set of 'web-dev techniques' using many web-technologies on the 
 client side to create asynchronous web applications

 With AJAX, web applications can send and receive data from a server asynchronously without interfering with the display and behavior of the existing page.
 Right now, XML format is not used extensively, meanwhile JSON is used extensively.s

 3 common ways to create and send request to server:
    - xmlHTTPRequest (old way of doing)
    - fetch API (new way of doing)
    - axios library (new way of doing)
 
*/

const xhr = new XMLHttpRequest();
// Fetch API: 
// console.log(xhr)

xhr.open("GET", URL)