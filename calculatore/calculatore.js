const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('#display');


let currentNum = "";
let prevNum = "";
let operator = null;

const updateDisplay = () =>{
    display.value = currentNum || prevNum || "0";
}

const appendNum = (data) =>{
    currentNum = currentNum + data;
    updateDisplay();
}

const chooseOperator = (ope) =>{
    prevNum = currentNum;
    operator = ope;
    currentNum = ""
}

const calculateMe = () =>{
    let pNum = parseFloat(prevNum)
    let cNum = parseFloat(currentNum);
    let result;

    switch (operator) {
        case "+":
            result = pNum + cNum;
            break;
        case "-":
            result = pNum - cNum;
            break;
        case "*":
            result = pNum * cNum;
            break;
        
        default:
            break;
    }
    currentNum = result.toString();
    operator =null;
    prevNum = "";
    updateDisplay();
}
 const clearFun = () => {
        currentNum = "";
        prevNum = "";
        operator = null;
        updateDisplay();
    };

buttons.forEach( (button) =>{
    button.addEventListener( 'click', ()=>{
        const value = button.textContent;
        console.log(value);

        if(!isNaN(value)){
            appendNum(value);
        }else if(value === "="){
            calculateMe();
        }
        else if(value === "C"){
            clearFun();
        }
        else{
            chooseOperator(value);
        }
        console.log("Current Num: ", currentNum)
        console.log("Prev Num: ", prevNum)
        console.log("Operator: ", operator);

    })
})






// const buttons = document.querySelectorAll('.btn');
// const display = document.querySelector('#display');

// let currentNum = "";
// let prevNum = "";
// let operator = null;

// const updateDisplay = () => {
//     display.value = currentNum || prevNum || "0";
// };

// const appendNum = (data) => {
//     currentNum = currentNum + data;
//     updateDisplay();
// };

// const chooseOperator = (ope) => {
//     if (currentNum === "") return; // Prevent operator selection without a number
//     prevNum = currentNum;
//     operator = ope;
//     currentNum = "";
// };

// const calculateMe = () => {
//     if (!prevNum || !currentNum || !operator) return; // Validate input
//     let pNum = parseFloat(prevNum);
//     let cNum = parseFloat(currentNum);
//     let result;

//     switch (operator) {
//         case "+":
//             result = pNum + cNum;
//             break;
//         case "-":
//             result = pNum - cNum;
//             break;
//         case "*":
//             result = pNum * cNum;
//             break;
//         case "/":
//             result = cNum !== 0 ? pNum / cNum : "Error"; // Prevent division by zero
//             break;
//         default:
//             result = "Error"; // Handle unexpected operator
//             break;
//     }
//     currentNum = result.toString();
//     prevNum = "";
//     operator = null;
//     updateDisplay();
// };

// const clearFun = () => {
//     currentNum = "";
//     prevNum = "";
//     operator = null;
//     updateDisplay();
// };

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         const value = button.textContent.trim();

//         if (!isNaN(value)) {
//             appendNum(value);
//         } else if (value === "=") {
//             calculateMe();
//         } else if (value === "C") {
//             clearFun();
//         } else {
//             chooseOperator(value);
//         }

//         console.log("Current Num: ", currentNum);
//         console.log("Prev Num: ", prevNum);
//         console.log("Operator: ", operator);
//     });
// });
