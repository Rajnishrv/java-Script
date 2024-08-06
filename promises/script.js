
let img = document.querySelectorAll("img");
let h1 = document.querySelectorAll("h1");
fetch("https://jsonplaceholder.typicode.com/photos")
    .then((resolve) => {
        resolve.json()
            .then((res) => { 
                for(let i = 0; i<res.length; i++){
                    img[i].src=res[i].thumbnailUrl;
                    h1[i].innerHTML = res[i].title;
                }
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    .catch((reject) => {
        console.log(reject)
    })