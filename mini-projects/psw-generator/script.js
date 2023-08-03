// // to fetch custom attributes if js need we use document.querySelector("[]");
const inputSlider = document.querySelector("[data-length-slider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#number");
const symbolsCheck = document.querySelector("#symbol");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateBtn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+=[]{}|;:"<>?/.,';

// // Default values for password generator
let password = "";
let passwordLength = 10;
let checkCount = 1;
handleSlider();
//set strength cicle color = grey;

// //set passwordLength 
// //(this function work is to refect the passwordLenght on UI)
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

// //this function is used to set color in strength indicator
function setIndicator(color){
    indicator.style.backgroundColor = color;
    //shadow do in HW
}

// //This function would find the interger under it min and max values
function getRandomInteger(min, max){
    Math.floor(Math.random() * (max - min)) + min;
}

// //Is used to give random integer between 0 to 9
function genrateRandomNumber(){
    return getRandomInteger(0,9);
}

// //Is used to give random alphabet between a to z
function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97,123));
}

// //Is used to give random alphabet between A to Z
function generateUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

// //Is used to give random symbols writen in the string above declared
function generateSymbol(){
    const ranNum = getRandomInteger(0, symbols.length);
    return symbols.charAt(ranNum);
}

// // Checks how many checkboxs are checked or inchecked and according to that would change color of the indicator passwordLength
function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

// // to await a function we write async
// // this function is used to copy the data which is used to display on the input field
async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e){
        copyMsg.innerText = "failed";
    }
    // to make copy wala span visible
    copyMsg.classList.add("active");
    setTimeout(()=>{
        copyMsg.classList.remove("active");
    }, 2000);
}

function handleCheckBoxChanged(){
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked)
        checkCount++;
    });

    //speciall condition
    if(passwordLength<checkCount){
    passwordLength = checkCount;
    handleSlider();
    }

}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChanged);
})

// // Eventlistener is added to slider to check what would be the password length and change it on the display and passwordLength
inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click' ,() => {
    if(passwordDisplay.value)
    copyContent();
})

generateBtn.addEventListener('click', () =>{
    //none of the checkbox are selected
    if(checkCount <= 0) return;

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    //let's start the journey to find new password
    
    //remove old password
    password = "";
});