let pImg = document.querySelectorAll(".pImg");
let title = document.querySelectorAll(".title");
let pID = document.querySelectorAll(".pID")

async function fetchData() {
    let data = await fetch("https://dummyjson/products")
    let res = await data.json();
    for (let i = 0; i <pImg.length; i++) {
        pImg[i].src = res[i].thumbnailUrl;
        title[i].innerHTML = res[i].title;
        pID[i].innerHTML = res[i].id;
    }
}
fetchData();