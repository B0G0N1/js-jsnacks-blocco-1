let evenNumber = [];

for (let i = 0; i < 6; i++) {
    let number = prompt("Inserisci un numero:");
    number = parseInt(number);

    if (number % 2 !== 0) {
        evenNumber.push(number);
    }

    console.log(number);
}

console.log(evenNumber);
alert(evenNumber);