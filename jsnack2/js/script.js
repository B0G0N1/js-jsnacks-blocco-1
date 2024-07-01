// Lo script parte con il bottone
document.getElementById("start-script-btn").addEventListener("click", function() {
    let oddNumbers = [];

    // Cicla 6 volte per ottenere 6 numeri dall'utente
    for (let i = 0; i < 6; i++) {
        // Chiedi all'utente di inserire un numero
        let number = prompt("Inserisci un numero:");
        
        // Converti la stringa inserita in un numero intero
        number = parseInt(number);

        // Controlla se il numero è dispari (number % 2 === 1)
        if (number % 2 === 1) {
            // Se il numero è dispari, aggiungilo all'array oddNumbers
            oddNumbers.push(number);
        }

        console.log(number);
    }

    console.log(oddNumbers);
    alert("I tuoi numeri dispari sono: " + oddNumbers.join(", "));
});