document.getElementById("start-script-btn").addEventListener("click", function() {
    let evenNumbers = [];

    for (let i = 0; i < 6; i++) {
        let number = prompt("Inserisci un numero:");
        number = parseInt(number);

        if (number % 2 === 1) {
            evenNumbers.push(number);
        }

        console.log(number);
    }

    console.log(evenNumbers);
    alert("I tuoi numeri sono: " + evenNumbers.join(", "));
});