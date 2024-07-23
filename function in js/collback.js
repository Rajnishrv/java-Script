function add (a, b){
return a+b;
}
function total (a, b,operation){
    return a*b- operation
}
let result = total(5, 6,  add(5, 6));
console.log(result);