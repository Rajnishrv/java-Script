let h1 = document.getElementById("welcome");
h1.innerText= "welcome to dom";
h1.style="background-color: gray; color: red;"
h1.style.fontSize="88px"

let para = document.getElementsByClassName("para");
para[0].innerText="this is first para"
console.log(para)
para[1].innerHTML="this is second para"

let h3 = document.getElementsByTagName("h3");
h3[0].innerText="first h3 tag"
h3[1].textContent= "second h3 tag"
h3[1].style.backgroundColor="gray3"

let body = document.querySelector("body")
body.style.transition = '2s';     
function dark(){
    if(body.style.backgroundColor !="black"){ 
        body.style.backgroundColor="black"
        body.style.color="white"
    }else{
        body.style.backgroundColor="white"
        body.style.color="black"
    }
}