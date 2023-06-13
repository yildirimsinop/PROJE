// *********** Selectors ***********
let userInput = document.getElementById("input-item");
let addButton = document.getElementById("add-button");
let showTask = document.querySelector(".container");

// *********** Events ***********
addButton.addEventListener("click", (e) => {
    let userText = userInput.value;
    showTask.appendChild(createDiv(userText));
    console.log(userText);
        
    userInput.value = "";

})

function createDiv(userTextParameter){
    let newDiv = document.createElement("div");
    let newDivChild = document.createElement("div");
    let newInput = document.createElement("input");
    let newP = document.createElement("p");

    newDiv.className = "input-group mb-3";
    newDivChild.className = "input-group-text";
    newInput.className = "form-check-input mt-0";
    newInput.type = "checkbox";
    newInput.style.backgroundColor = "rgba(103, 192, 237, 0.867)"; // Add this line


    newP.innerText = userTextParameter;

    // Add event listener to newInput
    newInput.addEventListener('change', function(e) {
        if(e.target.checked) {
            newP.style.textDecoration = "line-through";

            // Remove the parent div after 1 second
            setTimeout(function() {
                newDiv.remove();
            }, 2000);
        }
    });

    newDivChild.appendChild(newInput);
    newDiv.appendChild(newDivChild);
    newDiv.appendChild(newP);
    
    return newDiv;
}

