let h4 = document.querySelector('#astha');
h4.innerHTML= "i am query selector";


let h2 = document.querySelector('.lufi');
h2.textContent = "i am the heading part two"

let para = document.querySelectorAll('#ben');
para[0].textContent = 'i am ben'
console.log(para)
para[1].textContent= 'i am also ben'

let body = document.querySelector('body')
body.style.transition = '2s'
body.style.background = 'gray'