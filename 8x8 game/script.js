let attempts = 3;
while (attempts > 0) {
    let userAnswer = prompt("What is 8 * 8?");
    if (userAnswer == 64) {
        alert("You win");
        break;
    } else {
        attempts--;
        if (attempts > 0) {
            alert("Incorrect! Attempts left: " + attempts);
        } else {
            alert("Game Over!");
        }
    }
}
