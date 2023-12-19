const text = document.querySelector(".error-p");
const button = document.querySelector("a");
const input = document.querySelector("input");

button.addEventListener("click", checkInput);

function checkInput() {
    if (input.value === "") {
        text.classList.add("error");
        return false;
    } else {
        text.classList.remove("error");
        return true;
    }
}