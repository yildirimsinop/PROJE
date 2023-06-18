fetch ("settings.json").then(response => {
    return response.json()
}
).then (responseJson => {
    console.log(responseJson);
})