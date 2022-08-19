const paragraphs = document.querySelectorAll("[data-paragraph]");
const spans = document.querySelectorAll("span");
const inputs = document.querySelectorAll("input");
const cardName = document.querySelector("#cardName");
const cardNumber = document.querySelector("#cardNumber");
const cardMonth = document.querySelector("#cardMonth");
const cardYear = document.querySelector("#cardYear");
const cardCVC = document.querySelector("#cardCvc");
const button = document.querySelector("#confirmBtn")
const form = document.querySelector("form");
const messege = document.querySelector(".messege");


form.addEventListener('submit', e => {
    e.preventDefault()
    if (inputsCorrect()){
        showThankYou()
    }
})

function showThankYou(){    
    form.style.display = "none"
    messege.style.display = "flex"
}

// inputsCorrect bellow

function inputsCorrect(){    
    inputs.forEach(input => {
        let errorMessage = input.parentElement.lastElementChild;
            
        if (input.value === ""){            
            checkMessage("Can't be blank", input, errorMessage)            
        } else if (input.id === "cardNumber"){
            const message = checkIfNumberCorrect(input.value)
            checkMessage(message, input, errorMessage)            
        } else if (input.id === "cardCvc"){        
            const message = cvcErrorMessage(input.value)
            checkMessage(message, input, errorMessage)
        } else if (input.id === "cardMonth") {        
            const message = checkIfExpDateMonthCorrect(input.value)
            checkMessage(message, input, errorMessage)           
        } else if (input.id === "cardYear") {     
            const message = checkIfExpDateYearCorrect(input.value)
            checkMessage(message, input, errorMessage)         
        } else {
            errorMessage.style.display = 'none'            
            input.style.borderColor = 'hsl(270, 3%, 87%)'
        }
    });
    const inputArr = Array.from(form.getElementsByTagName('input'));
    return inputArr.some(input => input.style.borderColor === 'red') !== true
}

function checkMessage(message, input, errorMessage){    
    if (message !== "correct") {                
        errorMessage.style.display = "block";
        errorMessage.textContent = message
        input.style.borderColor = 'red'
    } else {
        errorMessage.style.display = 'none'
        input.style.borderColor = 'hsl(270, 3%, 87%)'
    }   
}

cardName.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-z\s]/gi, '').substring(0, 20);
    paragraphs[1].textContent = this.value
});

cardNumber.addEventListener("input", function() {
    this.value = this.value.replace(/[^\d\s/]/g , "").substring(0, 16);
    const str = `${this.value}`;
    const arr = str.split("");
    arr.splice(4, 0, " ");
    arr.splice(9, 0, " ");
    arr.splice(14, 0, " ");
    const result = arr.join("");
    paragraphs[0].textContent = `${result}`
});

function checkIfNumberCorrect(){    
    if (cardNumber.value.length < 4) {
        return "Wrong format"    
    }
    return "correct"
}

cardCVC.addEventListener("input", function() {
    this.value = this.value.replace(/[^\d\s/]/g , "").substring(0, 3);
    paragraphs[2].textContent = this.value
});

function cvcErrorMessage(value){     
    if (value.length !== 3)  return "Must consist 3 numbers"
    return "correct"
}

cardMonth.addEventListener("input", function() {
    this.value = this.value.replace(/[^\d\s/]/g , "").substring(0, 2);
    if(this.value < 1 || this.value > 12) {
        this.value = this.value.substring(0, 1);
    }
    spans[0].textContent = this.value;
});

function checkIfExpDateMonthCorrect(value){
    const expMonth = parseInt(value);
    if (expMonth < 1 || expMonth > 12) return "Between 1 and 12"    
    return "correct"
}

cardYear.addEventListener("input", function() {
    this.value = this.value.replace(/[^\d\s/]/g , "").substring(0, 2);
    spans[1].textContent = this.value;
});

function checkIfExpDateYearCorrect(value) {
    const expYear = parseInt(value)   
    const currentYear = new Date().getFullYear() % 100;
    if (expYear < currentYear) return "Card expired"
    return "correct"
}