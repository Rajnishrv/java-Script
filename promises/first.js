let data = new Promise((resolve, reject) => {
    if (resolve) {
        console.log("Transmission is succesfull")
    } else if (reject) {
        console.log("transmisson rejected")
    }
});

fetch("https://api.github.com/users/Rajnishrv")
    .then((resolve) => {
        resolve.json()
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    .catch((reject) => {
        console.log(reject)
    })