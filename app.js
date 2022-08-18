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
    button.textContent = "CONTINUE"
}

// inputsCorrect bellow

function inputsCorrect(){    
    inputs.forEach(input => {
        let errorMessage = input.parentElement.lastElementChild;
        
        console.log(errorMessage)

        // debugger              
        if (input.value === ""){            
            checkMessage("Can't be blank", input, errorMessage)            
        } else if (input.id === "cardNumber"){
            const message = checkIfNumberCorrect(input.value)
            checkMessage(message, input, errorMessage)            
        }
        
        // else if (input.id === "exp_date--cvc"){        
        //     const message = cvcErrorMessage(input.value)
        //     checkMessage(message, input, errorMessage)
        // } 
        
        // else if (input.id === "exp_date--mm") {        
        //     const message = checkIfExpDateMonthCorrect(input.value)
        //     checkMessage(message, input, errorMessage)           
        // } 
        
        // else if (input.id === "exp_date--yy") {     
        //     if (errorMessage.style.display === "none"){
        //         const message = checkIfExpDateYearCorrect(input.value)
        //         checkMessage(message, input, errorMessage)         
        //     }
        // }
        // else {
        //     errorMessage.style.display = 'none'            
        //     input.style.borderColor = '#dfdfdf'
        // }
    })
    // return inputs.some(input => input.style.borderColor === 'red') !== true
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

function checkIfNumberCorrect(){    
    const len = cardholdersNumber.value.split(" ")
    if (len.length !== 4) return "wrong format"    
    for (let i = 0; i < len.length; i++){         
        if (isNaN(parseInt(len[i])) || parseInt(len[i]) != len[i]) return "wrong format, numbers only!"
        if (len[i].length !== 4) return "must consist 16 number"
    }
    return "correct"
}

inputsCorrect()





// formName.addEventListener("input", function() {
//     this.value = this.value.replace(/[^a-z\s]/gi, '').substring(0, 20);
//     paragraphs[1].textContent = this.value
//     return cardHolderName = this.value.toString();
// });


// cardNumber.addEventListener("input", (e) => {
//     e.target.value = e.target.value.replace(/[^\d\s/]/g , "").substring(0, 16);
//     const str = `${e.target.value}`;
//     const arr = str.split("");
//     arr.splice(4, 0, " ");
//     arr.splice(9, 0, " ");
//     arr.splice(14, 0, " ");
//     const result = arr.join("");
//     paragraphs[0].textContent = `${result}`
// });

// cardMonth.addEventListener("input", (e) => {
//     e.target.value = e.target.value.replace(/[^\d\s/]/g , "").substring(0, 2);
//     if(e.target.value < 1 || e.target.value > 12) {
//         e.target.value = e.target.value.replace("")
//     }
//     spans[0].textContent = e.target.value;
// });

// cardYear.addEventListener("input", (e) => {
//     e.target.value = e.target.value.replace(/[^\d\s/]/g , "").substring(0, 2);
//     spans[1].textContent = e.target.value;
// });

// cardCVC.addEventListener("input", (e) => {
//     e.target.value = e.target.value.replace(/[^\d\s/]/g , "").substring(0, 3);
//     paragraphs[3].textContent = e.target.value
// });


// button.addEventListener("click", () => {
//     if(a === true) {
//         form.style.display = "none";
//         messege.style.display = "flex";
//     }
// })