function calculate(operator) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultText = "";

    if (isNaN(num1) || isNaN(num2)) {
        resultText = "Please enter valid numbers.";
    } else {
        switch (operator) {
            case '+':
                resultText = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
                break;
            case '-':
                resultText = `The difference of ${num1} and ${num2} is ${num1 - num2}.`;
                break;
            case '*':
                resultText = `The product of ${num1} and ${num2} is ${num1 * num2}.`;
                break;
            case '/':
                if (num2 !== 0) {
                    resultText = `The quotient of ${num1} and ${num2} is ${num1 / num2}.`;
                } else {
                    resultText = "Cannot divide by zero.";
                }
                break;
            case '%':
                if (num2 !== 0) {
                    resultText = `The remainder of ${num1} divided by ${num2} is ${num1 % num2}.`;
                } else {
                    resultText = "Cannot divide by zero.";
                }
                break;
            default:
                resultText = "Invalid operation.";
        }
    }

    document.getElementById('result').innerHTML = resultText;
}