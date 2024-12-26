function factorial(n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}

function calculateFactorial() {
    let num = document.getElementById("number").value;
    let result = factorial(num);
    document.getElementById("result").innerHTML = "Factorial: " + result;
}
