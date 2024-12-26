function changeCase() {
    const input = document.getElementById('textInput');
    input.value = input.value === input.value.toUpperCase() ? input.value.toLowerCase() : input.value.toUpperCase();
}
