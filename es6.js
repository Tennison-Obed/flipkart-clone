// ES6 Features
// -> Hard to Read
// -> Callback hell
// -> Verbose code

// After ES6
// -> Cleaner
// -> Better Readability
// -> Less Code
// -> Professional Code

// Arrow function
// const markAttendence = () => "present";
// const addition = (a, b) => a + b;

// // to define function
// submitButton.addEventListener("click", (e) => { })
// submitButton.addEventListener("click", function (e) {
// });

// keyword -> reserved word in JS
// this -> current Object instance

// const cart = {
//     cartItem: ["Mobile", "Laptop", "pen"],
//     addItem: (item) => {
//         console.log(this);
//         cart.cartItem.push(item);
//         return "Succefully added a item";
//     },
//     removeItem: function () { }
// }
// function
// bind this keyword with current exec obj
// Arrow function
// do not bind this keyword with current executing obj


// Destructuring
// const cart = {
//     cartItem: ["Mobile", "Laptop", "pen"],
//     addItem: (item) => {
//         console.log(this);
//         cart.cartItem.push(item);
//         return "Succefully added a item";
//     },
//     removeItem: function () { }
// }

// const { addItem: addProducts, cartItem: products, removeItem } = cart;

// const languages = ["java", "python", "c", "C++"];
// const [item1, item2] = languages;
// // Destructuring allows you to
// // extract values from array or object easily
// console.log(languages[1]);
// console.log(item2);



// default value
// API response

// // old method
// let speaker = null;
// speaker = apiResponse.speaker;

// // boat
// const { speaker : nameSpeaker = null, headphone = null, earbuds = null } = apiResponse;


const [a, ...othervalues] = [1, 2, 3, 4];
console.log(a)
console.log(othervalues)





