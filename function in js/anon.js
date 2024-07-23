// imideatlly invoke function
(function (a,b){
    console.log("welcome to js");
    console.log("mult: ", a*b)
}
)(4,5);

// function with exprassion
let print=function(a, b){
    console.log("hello world");
    console.log("sum: ",a+b);
}

print(4,6)       

let add  = (a, b)=>{
    console.log('sum: ', a+b)
}

add(5, 2);