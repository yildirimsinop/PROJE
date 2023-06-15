const main = document.querySelector(".grid-container")
const screen = document.querySelector(".screen")
main.addEventListener("click", (e) => {
    // screen.innerText +=
    let greys = ["0","1","2","3","4","5","6","7","8","9","."]
    let oranges = ["+","-","X","÷","%"]
    console.log(e.target.innerText);
    // e.target.innerText == "2"
    if (greys.includes(e.target.innerText)){
        screen.innerText += e.target.innerText
    }
})