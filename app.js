const paragraphs = document.querySelectorAll("p");
const button = document.getElementById("confirmBtn")
const form = document.querySelector("form");
const messege = document.querySelector(".messege");
const errors = document.querySelectorAll(".error");
const formName = document.getElementById("name");
const cardNumber = document.getElementById("number")
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const cardCVC = document.getElementById("CVC");
const spans = document.querySelectorAll("span");

let cardHolderName;

formName.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-z\s]/gi, '').substring(0, 20);
    paragraphs[1].textContent = this.value
    return cardHolderName = this.value.toString();
});


cardNumber.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d\s/]/g , "").substring(0, 16);
    const str = `${e.target.value}`;
    const arr = str.split("");
    arr.splice(4, 0, " ");
    arr.splice(9, 0, " ");
    arr.splice(14, 0, " ");
    const result = arr.join("");
    paragraphs[0].textContent = `${result}`
});

cardMonth.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d\s/]/g , "").substring(0, 2);
    if(e.target.value < 1 || e.target.value > 12) {
        e.target.value = e.target.value.replace("")
    }
    spans[0].textContent = e.target.value;
});

cardYear.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d\s/]/g , "").substring(0, 2);
    spans[1].textContent = e.target.value;
});

cardCVC.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d\s/]/g , "").substring(0, 3);
    paragraphs[3].textContent = e.target.value
});


// button.addEventListener("click", () => {
//     if(a === true) {
//         form.style.display = "none";
//         messege.style.display = "flex";
//     }
// })