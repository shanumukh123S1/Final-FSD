// External JavaScript
function externalJS() {
    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");

    // Type conversion from string to number
    num1 = Number(num1);
    num2 = Number(num2);

    let sum = num1 + num2;
    alert("Sum = " + sum + " (From External JS)");
}
