function getResult() {
    let grade = document.getElementById("grade").value.toUpperCase();
    let result = "";

    switch (grade) {
        case 'A':
            result = "Excellent";
            break;
        case 'B':
            result = "Average";
            break;
        case 'C':
            result = "Poor";
            break;
        default:
            result = "Failed";
    }

    document.getElementById("result").innerText = result;
}
