// rest and spread operators in javascript
//rest operator or rest parameter


// function add(a, b, ...c) {
//     console.log(a, b, c);
//     for(let i=0; i<c.length; i++){
//         console.log("the rest values: "+c[i]);
//     }
// }
// add(1, 2, 3, 4, 5, 6);

let arr = [12, 32, 24, 534, 334, 53, 34];
let a= 10;
let b = 20;
let c = 30;
let [...n] = [a, b, c]
console.log(n);