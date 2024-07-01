document.getElementById("start-script-btn").addEventListener("click", function() {
    let number = prompt("Inserisci un numero di 4 cifre:");
    if (number.length === 4 && !isNaN(number)) {
        let sum = 0;
        for (let i = 0; i < number.length; i++) {
            let digit = number.charAt(i);
            let digitValue = parseInt(digit, 10);
            sum += digitValue;
        }
        console.log(sum);
        alert("Il tuo numero sommato è: " + sum);
    } else {
        alert("Per favore, inserisci un numero di 4 cifre.");
    }
});