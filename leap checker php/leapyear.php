<?php
$year = readline("Enter the year: ");
if (($year % 400 == 0) || ($year % 4 == 0 && $year % 100 != 0)) {
    echo "It is a leap year";
} else {
    echo "It isn't a leap year";
}
?>
