<?php
$array = [1, 2, 3, 4, 5];
$product = 1;
foreach ($array as $element) {
    $product *= $element;
}
echo "The product of all elements in the array is: $product";
?>
