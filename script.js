const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const errorDisplay = document.querySelector(".error");
const errorDictionary = {
  1: "У числа должна быть целая часть",
  2: "Невозможно сделать результат выражения дробным числом",
  3: "Дробное число не закончено",
  4: "Сначала нужно ввести число",
  5: "Невозможно изменить число после нажатия на арифметический оператор",
  6: "Число уже является результатом выражения",
  7: "Деление на ноль",
  8: "Превышение длины числа",
  9: "Превышена максимальная длина числа",
};
let result = "";
let expression = "";
let block = true;
let flagNegative = true;
display.value = "0";

function checkError() {
  if (errorDisplay.value.includes("Ошибка")) {
    errorDisplay.value = "";
  }
}

function isExponential(num) {
  return /\d+\.?\d*e[+-]?\d+/i.test(num);
}

function changeInput(val) {
  result = "";
  if (val) {
    display.value = val;
  } else {
    display.value = "";
  }
}

function removeClass() {
  buttons.forEach((button) => {
    button.classList.remove("chosen");
  });
}

function errorInput(errCode) {
  errorDisplay.value = `Ошибка! ${errorDictionary[errCode]}`;
}

function clearInput(val) {
  changeInput(val);
  result = "";
  expression = "";
  block = true;
}

function makeFractional() {
  if (display.value.includes(".")) {
    return;
  } else if (flagNegative === false || display.value === "") {
    errorInput(1);
    return;
  } else if (expression.slice(-1) === "=") {
    errorInput(2);
    return;
  }
  display.value += ".";
}

function makePositiveNegative() {
  if (display.value.slice(-1) === ".") {
    errorInput(3);
    return;
  } else if (
    flagNegative === false ||
    display.value === "" ||
    expression.slice(-1) === "="
  ) {
    errorInput(4);
    return;
  } else if (display.value !== "0") {
    display.value = (parseFloat(display.value) * -1).toString();
  }
}

function deleteSymbol() {
  if (display.value === "") {
    errorInput("Нечего удалять");
  } else if (flagNegative === false || expression.slice(-1) === "=") {
    errorInput(5);
  } else {
    display.value = display.value.slice(0, display.value.length - 1);
  }
}

function equals(buttonValue, button) {
  if (display.value === result) {
    errorInput(6);
  } else {
    calculate(display.value, buttonValue, button);
  }
}

function calculate(input, operator, btn) {
  removeClass();
  btn.classList.add("chosen");
  let currentOperator = expression.slice(expression.length - 1);

  if (input.slice(input.length - 1) === ".") {
    errorInput(3);
  } else {
    if (currentOperator !== operator && block === false) {
      expression = expression.slice(0, -1);
      expression += operator;
    }

    if (block) {
      expression += display.value;
      if (expression.includes("--")) {
        expression = expression.replace("--", "+");
      }
      result = eval(expression).toString();
      expression = parseFloat(Number(result).toFixed(3)).toString();
      if (isExponential(Number(expression))) {
        clearInput("0");
        removeClass();
        errorInput(8);
        return;
      }
      expression += operator;
      display.value = result.toString();
      if (Math.abs(display.value) == Infinity || display.value == "NaN") {
        display.value = "Ошибка";
        errorInput(7);
      } else if (result.includes(".")) {
        display.value = parseFloat(Number(result).toFixed(3));
      }
      block = false;
    }
  }
}

function calculator(button) {
  return function () {
    checkError();
    if (expression.slice(-1) === "=" && button.classList.contains("number")) {
      clearInput("");
    }
    if (button.classList.contains("number")) {
      block = true;
      flagNegative = true;
      if (result) {
        changeInput(button.value);
      } else {
        if (display.value === "0") {
          changeInput(button.value);
        } else {
          if (display.value.length >= 10) {
            errorInput(9);
            return;
          } else {
            display.value += button.value;
          }
        }
      }
    } else {
      switch (button.value) {
        case "C":
          clearInput("0");
          removeClass();
          break;

        case "+":
        case "-":
        case "*":
        case "/":
          flagNegative = false;
          calculate(display.value, button.value, button);
          break;

        case ".":
          makeFractional();
          break;

        case "+/-":
          makePositiveNegative();
          break;

        case "=":
          equals(button.value, button);
          break;

        case "Del":
          deleteSymbol();
          break;
      }
    }
  };
}

buttons.forEach((button) => {
  button.addEventListener("click", calculator(button));
});
