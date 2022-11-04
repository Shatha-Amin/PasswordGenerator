const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

let lowerCheckBox = document.getElementById("lowercase");
let upperCheckBox = document.getElementById("uppercase");
let number = document.getElementById("numbers");
let specialSign = document.getElementById("symbols");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  let createInput = document.createElement("input");
  createInput.value = resultEl.textContent;

  // Select the text field
  createInput.select();
  createInput.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(createInput.value);

  // Alert the copied text
  alert("Copied the Password: " + createInput.value);
});

generateEl.addEventListener("click", () => {
  if (
    lowerCheckBox.checked == false &&
    upperCheckBox.checked == false &&
    number.checked == false &&
    specialSign.checked == false
  ) {
    alert("Plese Check At least One Box.");
    resultEl.textContent = "";
  } else {
    generatePassword(
      getRandomLower(),
      getRandomUpper(),
      getRandomNumber(),
      getRandomSymbol(),
      lengthEl.value
    );
  }
});

function generatePassword(lower, upper, number, symbol, length) {
  let pass = lower + symbol + upper + number + symbol + lower + upper;
  //   console.log("length is ", length);

  if (length <= 20 && length >= 4) {
    let returnPass = " ";
    for (i = 0; i < length; i++) {
      returnPass += pass[Math.floor(Math.random() * pass.length)];
    }
    console.log(returnPass);
    resultEl.textContent = returnPass;
  } else {
    alert("Password length Should be lessthan 20char or greaterthan 4char 😏");
  }
}

function getRandomLower() {
  if (lowerCheckBox.checked == true) {
    let lower = "abcdefghijklmnopqrstuvwxyz";

    let returnValue = "a";
    for (i = 0; i < 6; i++) {
      let val = lower[Math.floor(Math.random() * 27)];
      returnValue = returnValue + val;
    }
    //   console.log(returnValue);
    return returnValue;
  } else {
    return "";
  }
}

function getRandomUpper() {
  if (upperCheckBox.checked == true) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let returnValue = "A";
    for (i = 0; i < 6; i++) {
      let val = upper[Math.floor(Math.random() * 27)];
      returnValue = returnValue + val;
    }
    //   console.log(returnValue);
    return returnValue;
  } else {
    return "";
  }
}

function getRandomNumber() {
  if (number.checked == true) {
    let random = 1;
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * 10);
      random = random + randomNumber.toString();
    }
    //   console.log(random);
    return random;
  } else {
    return "";
  }
}

function getRandomSymbol() {
  if (specialSign.checked) {
    let symbols = "!@#$%&*";
    let symbol = "@";
    for (i = 0; i < 4; i++) {
      let val = symbols[Math.floor(Math.random() * 7)];
      symbol = symbol + val;
    }
    //   console.log(symbol);
    return symbol;
  } else {
    return "";
  }
}
