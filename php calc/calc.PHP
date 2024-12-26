<?php
$a = readline("Enter the value of num1: ");
$b = readline("Enter the value of num2: ");
$choice = readline("Enter the operation you want to perform (+, -, *, /): ");

switch ($choice) {
    case '+': echo $a + $b; break;
    case '-': echo $a - $b; break;
    case '*': echo $a * $b; break;
    case '/': echo $a / $b; break;
    default: echo "Invalid operation"; break;
}
?>