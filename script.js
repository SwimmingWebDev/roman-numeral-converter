const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const resultText = document.getElementById("output");

let oneDigit;
let tensDigit;
let hundredsDigit;
let thousandsDigit;

const romanConverter = (input) => {
  input = String(input);
  const splitInput = input.split("").reverse();

  //oneDigit
  if (splitInput.length === 1) {
    return oneConverter(splitInput[0]);
  }

  //tensDigit
  if (splitInput.length === 2) {
    return tensConverter(splitInput[1]) + oneConverter(splitInput[0]);
  }

  //hundredsDigit
  if (splitInput.length === 3) {
    return (
      hundredsConverter(splitInput[2]) +
      tensConverter(splitInput[1]) +
      oneConverter(splitInput[0])
    );
  }

  //thousandsDigit
  if (splitInput.length === 4) {
    return (
      thousandsConverter(splitInput[3]) +
      hundredsConverter(splitInput[2]) +
      tensConverter(splitInput[1]) +
      oneConverter(splitInput[0])
    );
  }
};

const oneConverter = (digit) => {
  const num = parseInt(digit);
  if (1 <= num && num < 4) {
    oneDigit = "I".repeat(num);
  } else if (num === 4) {
    oneDigit = "IV";
  } else if (num === 5) {
    oneDigit = "V";
  } else if (5 < num && num < 9) {
    oneDigit = "V" + "I".repeat(num - 5);
  } else if (num === 9) {
    oneDigit = "IX";
  } else if (num === 0) {
    oneDigit = "";
  }
  return oneDigit;
};

const tensConverter = (digit) => {
  const num = parseInt(digit);
  if (1 <= num && num < 4) {
    tensDigit = "X".repeat(num);
  } else if (num === 4) {
    tensDigit = "XL";
  } else if (num === 5) {
    tensDigit = "L";
  } else if (5 < num && num < 9) {
    tensDigit = "L" + "X".repeat(num - 5);
  } else if (num === 9) {
    tensDigit = "XC";
  } else if (num === 0) {
    tensDigit = "";
  }
  return tensDigit;
};

const hundredsConverter = (digit) => {
  const num = parseInt(digit);
  if (1 <= num && num < 4) {
    hundredsDigit = "C".repeat(num);
  } else if (num === 4) {
    hundredsDigit = "CD";
  } else if (num === 5) {
    hundredsDigit = "D";
  } else if (5 < num && num < 9) {
    hundredsDigit = "D" + "C".repeat(num - 5);
  } else if (num === 9) {
    hundredsDigit = "CM";
  } else if (num === 0) {
    hundredsDigit = "";
  }
  return hundredsDigit;
};

const thousandsConverter = (digit) => {
  const num = parseInt(digit);
  if (1 <= num && num < 4) {
    thousandsDigit = "M".repeat(num);
  }
  return thousandsDigit;
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!inputInt) {
    resultText.textContent = "Please enter a valid number";
    return;
  }
  if (inputInt <= 0) {
    resultText.textContent = "Please enter a number greater than or equal to 1";
    return;
  }
  if (inputInt >= 4000) {
    resultText.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  resultText.textContent = romanConverter(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
