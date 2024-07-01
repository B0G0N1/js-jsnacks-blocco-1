let number = prompt("Inserisci un numero di 4 cifre:");
let sum = 0;
for (let i = 0; i < number.length; i++) {
    let digit = number.charAt(i);
    let digitValue = parseInt(digit, 10);
    sum += digitValue;
}
console.log(sum);
alert("Il tuo numero sommato è: " + sum);