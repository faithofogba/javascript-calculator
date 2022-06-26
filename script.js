const value1 = parseFloat(prompt("Enter a number to calculate:"));
const sign = prompt("select operator from: +, -, *, /,.,%");
const value2 = parseFloat(prompt("Enter second number: "));
const error = "Invalid operator"

let result;

if (sign == "+") {
  result = value1 + value2;
} else if (sign == "-") {
  result = value1 - value2;
} else if (sign == "*") {
  result = value1 * value2;
} else if (sign == "/") {
  result = value1 / value2;
}  else if (sign != "+" || "-" || "*" || "/") {
    result = error;
}
alert(result);