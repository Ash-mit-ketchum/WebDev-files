<?php
$n = 10;
$a = 0;
$b = 1;
echo "Fibonacci series up to $n terms: ";
echo "$a, $b";

for ($i = 2; $i < $n; $i++) {
    $next = $a + $b;
    echo ", $next";
    $a = $b;
    $b = $next;
}
?>
