function checkScientificNumber() {
    var numberInput = document.getElementById("numberInput").value.trim();
    var scientificRegex = /^[+-]?\d+(\.\d+)?(e[+-]?\d+)?$/i;

    if (scientificRegex.test(numberInput)) {
        document.getElementById("result").innerText = "Yes, it's a scientific number.";
    } else {
        document.getElementById("result").innerText = "No, it's not a scientific number.";
    }
}
