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

button.addEventListener("click", () => {
    form.style.display = "none";
    messege.style.display = "flex";
})