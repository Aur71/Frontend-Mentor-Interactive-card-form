const paragraphs = document.querySelectorAll("p");
const button = document.querySelector("button");
const form = document.querySelector("form");
const messege = document.querySelector(".messege");
const errors = document.querySelectorAll(".error");
const formName = document.getElementById("name");
const cardNumber = document.getElementById("number")
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const cardCVC = document.getElementById("CVC");


formName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-z\s]/gi, '');
    e.target.value = e.target.value.replace(/[a-z\s]{21}/i, '');
    paragraphs[1].textContent = e.target.value
});

cardNumber.addEventListener("input", (e) => {
    paragraphs[0].textContent = e.target.value
})

cardMonth.addEventListener("input", (e) => {
    if(e.target.value < 1 || e.target.value > 12) {
        e.target.value = e.target.value.replace('');
    }
    paragraphs[2].textContent = e.target.value;
})

cardYear.addEventListener("input", (e) => {
    if(e.target.value.length > 2) {
        e.target.value = e.target.value.replace('');
    }
})

cardCVC.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\d{4}/, '');
    if(e.target.value.length < 3) {
        button.addEventListener("click", () => {
            errors[0].style.display = "block"
        })
    }
})

// button.addEventListener("click", () => {
//     form.style.display = "none";
//     messege.style.display = "flex";
// })