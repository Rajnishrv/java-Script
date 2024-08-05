// hoisting in java

// console.log(a);
// let a= 20; //not support hoisting
// const a = 85; //not support hoisting
// var a = 58; //support hoisting

// add(5);

// function add(a, b){//support hoisting
// console.log(a+b);
// }

// let add = (a) => {//not supported
// console.log(a);
// }

// let add = function(a){//not supported 
//     console.log(a);
// }

//laxical/closer/
// function sum() {//laxical scope 
//     let num1 = 20; num2 = 30;//it can be access by chilt(laxical variable);

//     function mult() {
//         let num3= 2;//it not access by parent
//         console.log(num1 + num2, num3);
//     }
//     console.log(num1, num2);
//     mult()

// }

// sum();
