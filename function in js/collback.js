// furst order function
function add (a, b){
return a+b;
}
// higher order function
function total (a, b,operation){
    return a*b- operation
}
let result = total(5, 6, /*collback function=>*/ add(5, 6));
console.log(result);