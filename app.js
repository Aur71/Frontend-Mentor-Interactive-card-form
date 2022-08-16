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


formName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-z\s]/gi, '').substring(0, 20);
    paragraphs[1].textContent = e.target.value
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
})

const dateM = [];

cardMonth.addEventListener("input", (e) => {
    if(e.target.value < 1 || e.target.value > 12) {
        e.target.value = e.target.value.replace("")
    }
    e.target.value = e.target.value.replace(/[^\d\s/]/g , "").substring(0, 2);
    const month = e.target.value;
    dateM.push(month)
})

console.log(dateM)


button.addEventListener("click", () => {
    if(paragraphs[1].textContent == "Jane Appleseed") {
        errors[0].style.display = "block";
        formName.style.border = "1px solid red"
    } 
    if(paragraphs[0].textContent == `0000 0000 0000 0000`) {
        errors[1].style.display = "block";
        cardNumber.style.border = "1px solid red"
    }
    
    // else {
    //     form.style.display = "none";
    //     messege.style.display = "flex";
    // }
})