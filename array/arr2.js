// let arr = [10,93,54,99,65,42];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>50){
//         console.log(arr[i]);
//     }
// }


// let res=arr.filter((x)=>{
//     return x>50
// })

// console.log(res);




// arr.map((x)=>{
//     console.log(x);
// })


// arr.forEach((x)=>{
//     console.log(x);
// })

let cart=[
    {
        id:101,
        pname:"bike",
        price:5000
    },
    {
        id:102,
        pname:"car",
        price:50000
    },
    {
        id:103,
        pname:"boat",
        price:500000
    }
]

// let total=cart.reduce((sum,x)=>sum=sum+x.price,0)
let MRP=cart.reduce((sum,x)=>{
    return sum+x.price
},0)
// console.log(total);
console.log(MRP);