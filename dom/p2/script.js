let body = document.querySelector('body')

let tag = document.createElement('h1')
console.log(tag)
tag.innerText="welcome to javascript"
body.appendChild(tag)

let table = document.createElement('table')
body.append(table);
table.border='20'
let tr = document.createElement('tr')
table.appendChild(tr);

let td1 = document.createElement('td')
let td2 = document.createElement('td')
let td3 = document.createElement('td')

tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)

td1.innerText = 'jspiders'
td2.innerHTML = 'qspiders'
let img = document.createElement('img')
img.src = "https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg"
td3.appendChild(img)
img.width="200"