const guestsList = ["Pippo", "Pluto", "Topolino", "Tizio", "Caio", "Sempronio"];

const userName = prompt("Inserisci il tuo nome:");

let canPartecipate = false;

for (let i = 0; i < guestsList.length; i++) {
    if (guestsList[i] === userName) {
        canPartecipate = true;
    }
}

if (canPartecipate) {
    alert("Sei stato invitato al party!");
}
else {
    alert("Non sei stato invitato al party...");
}