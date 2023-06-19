// fetch ("settings.json").then(response => {
//     return response.json()
// }
// ).then (responseJson => {
//     console.log(responseJson);
//     console.log(responseJson.password);
// })


// ? ************* Fetch ile API'den veri alma *********
// let userList = document.getElementById ("userName")
// fetch ("https://jsonplaceholder.typicode.com/albums").then (response => 
// response.json()
// ).then (responseJson => {
//     console.log(responseJson);
    
//     responseJson.forEach(item => {
//         let pDom = document.createElement ("p")
//         pDom.innerText = item.id
//         userList.appendChild(pDom)
//     });
// })

fetch ("https://jsonplaceholder.typicode.com/todos").then (response => {
    response.json()
}).then (data => {
    console.log(data);
})