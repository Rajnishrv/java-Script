// let arr = [true, false , true , false]
// function display(){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]){
//             console.log(arr[i]+10)
//         }else{
//             console.log(arr[i]-10)
//         }
//     }
// }
// display();

let arr2 = ['rajnihs', 33, 'kumar', null];
arr2.push('raj');

for(let i = 0; i<arr2.length; i++){
        console.log(arr2[i]);
}
arr2.pop();
for(let i = 0; i<arr2.length; i++){
    console.log(arr2[i]);
}