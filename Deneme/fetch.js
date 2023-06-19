fetch ("settings.json").then(response => {
    return response.json()
}
).then (responseJson => {
    console.log(responseJson);
    console.log(responseJson.password);
})

let userList = document.getElementById ("userName")
fetch ("https://jsonplaceholder.typicode.com/albums").then (response => 
response.json()
).then (responseJson => {
    console.log(responseJson);
    
    responseJson.forEach(item => {
        let pDom = document.createElement ("p")
        pDom.innerHTML = item.id
        userList.appendChild(pDom)
    });
})