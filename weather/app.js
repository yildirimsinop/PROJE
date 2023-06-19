const form = document.querySelector("form")
const input = document.querySelector("form #input-alani")
console.log(input);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);
    input.value = "";
    // form.reset();
    // e.target.reset();
    // e.currentTarget.reset();
   getData ();
   e.currentTarget.reset();
});

// async function name(params) {

const