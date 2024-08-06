let img = document.querySelectorAll("img");
let title = document.querySelectorAll(".title");
let pID = document.querySelectorAll(".pID")

async function fetchData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/photos")
    let res = await data.json();
    console.log(res)
    for (let i = 0; i < img.length; i++) {
        img[i].src = res[i].thumbnailUrl;
        title[i].innerHTML = res[i].title;
        pID[i].innerHTML = res[i].id;
    }
}
fetchData();