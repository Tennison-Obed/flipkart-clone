// Basic Pillar of JS 
//  - function 
//  - Variable 
//  - Operator // + - * /  == 
//  - DataType 
//     - Primitive 
//     - Non Primitive
//  - Control statement  
//     - if( opt === userInput  )
//            got to next  
//  -Loop


// add
// subtract
// multiple
// divide



// What is Function
//  Block of code designed to perform a task

// Why we need function
// - Reuse
// - Clean code
// - Avoid Duplication


// Syntax
function login(){
// code to loggin in
}

function add(a, b){
 return a+b;
}

function subtract (a, b){
    return a-b;
}

// DataType


const contactNumber = null;
console.log(contactNumber);

// Primitive Data Types
// Data are stored as values
// Numbers 
// String "ewfrsd"  `dsfds` 'sdfdsds'
// Boolean -  true / false 
// Undefined
// Null


// Non Primitive Data Types
// Datas are store in address
// Object 
// Array
// Functions


// Object are key: value pair
// Collection of related data of different DataType
const student = {
    firstName : "Tennison",
    lastName : "Obed",
    gender : "Male",
    phone: 32547,
    isPresent : true,
    markAttendence : function (){
            //  logic for marking attendence
    },
}

const userAccount = {
    firstName : "Tennison",
    lastName : "Obed",
    gender : "Male",
    login : function (){},
    logout : function (){},
    addToCart : function (){},
    isLoggedin : true
}


let name = userAccount.firstName;

// Array
// collect of related dataType
// list of items
// it can be tracked using Index
// index of the array start with zero
// 0           1        2
const fruits  = [ "mango", "orange", "apple" ]

let value1 = fruits[2]; // apple


//  Difference btween array and object

// Array
// - Array are ordered collections
// - It is accessed used index value ||  fruits[0],  fruits[0],


// Object
// Collection of named key-value pair
// It will be accessed using keys student.firstName \\ userAccount.gender || userAccount["gender"]






// Operators
//  Arithmetic Operators -> +, -, *, / 
//  Comparison Operator  -> ==, > , <, >=, <=, !=
//  Logical Operators ->  && ( and ), condiotion 1 ||  condition 2 
// Boolean Operators - true / false

