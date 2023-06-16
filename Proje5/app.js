const main = document.querySelector(".grid-container")
const screen = document.querySelector(".screen")
let firstScreen = null
let symbol = null
main.addEventListener("click", (e) => {
    let greys = ["0","1","2","3","4","5","6","7","8","9","."]
    let oranges = ["+","-","x","÷","%","="]
    if (greys.includes(e.target.innerText)){
        if ((e.target.innerText == ".") && (screen.innerText == "")){
            screen.innerText = "0."
        } else {
            // if (screen.innerText.includes(".") && e.target.innerText =="." ){
            //     screen.innerText = screen.innerText
            // }else {
            //     screen.innerText += e.target.innerText
            // }
            if (!(screen.innerText.includes(".") && e.target.innerText ==".")){
                screen.innerText += e.target.innerText
            }
        }
    } else if (oranges.includes(e.target.innerText)){
        switch (e.target.innerText) {
            case "+":
                firstScreen = screen.innerText
                screen.innerText = ""
                symbol = "+"
                console.log(symbol);
                console.log(firstScreen);
                break;
            case "-":
                firstScreen = screen.innerText
                screen.innerText = ""
                symbol = "-"
                break;
            case "x":
                firstScreen = screen.innerText
                screen.innerText = ""
                symbol = "x"
                break;
            case "÷":
                firstScreen = screen.innerText
                screen.innerText = ""
                symbol = "÷"
                break;
            case "%":
                firstScreen = screen.innerText
                screen.innerText = ""
                symbol = "%"
                break;
            case "=":
                console.log(symbol);
                console.log(firstScreen);
                switch (symbol) {
                    case "+":
                        screen.innerText = Number(firstScreen) + Number(screen.innerText)
                        console.log(screen.innerText);
                        break;
                    case "-":
                        screen.innerText = Number(firstScreen) - Number(screen.innerText)
                        break;
                    case "x":
                        screen.innerText = Number(firstScreen) * Number(screen.innerText)
                        break;
                    case "÷":
                        screen.innerText = Number(firstScreen) / Number(screen.innerText)
                        break;
                    case "%":
                        screen.innerText = Number(firstScreen) * Number(screen.innerText) / 100
                        break;
                    default:
                        break;
                }
              
                break;
            default:
                break;
        } 

        } else if (e.target.innerText == "AC") {
            firstScreen = ""
            screen.innerText = ""
            symbol = ""
    } else if (e.target.innerText == "±") {
        screen.innerText = Number(screen.innerText) * (-1)
    }

})