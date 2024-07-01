// Lo script parte con il click del bottone
document.getElementById("start-script-btn").addEventListener("click", function() {
    let number = prompt("Inserisci un numero di 4 cifre:");
    
    // Controlla se il numero inserito ha una lunghezza di 4 caratteri ed è un numero
    // isNan(number) cercata su internet
    if (number.length === 4 && !isNaN(number)) {
        let sum = 0;
        
        // Cicla attraverso ogni carattere del numero inserito
        for (let i = 0; i < number.length; i++) {
            // Ottiene il carattere corrente dal numero
            // charAt cercata su internet
            let digit = number.charAt(i);
            // Converte il carattere in un valore intero
            let digitValue = parseInt(digit, 10);
            // Aggiunge il valore del digit alla somma
            sum += digitValue;
        }
        
        console.log(sum);
        alert("Il tuo numero sommato è: " + sum);
    } else {
        // Mostra un alert se l'input non è un numero di 4 cifre
        alert("Per favore, inserisci un numero di 4 cifre.");
    }
});