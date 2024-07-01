// Script che parte al click del Bottone con ID check-partecipation...
document.getElementById("check-partecipation-btn").addEventListener("click", function() {
    // Variabili
    const guestsList = ["Pippo", "Pluto", "Topolino", "Tizio", "Caio", "Sempronio"];
    const userName = document.getElementById("input-name").value;
    let canPartecipate = false;

    // Cicla attraverso la lista degli ospiti per controllare se l'utente è presente
    for (let i = 0; i < guestsList.length; i++) {
        if (guestsList[i] === userName) {
            canPartecipate = true;
        }
    }

    const partecipateBox = document.getElementById("partecipate-box");
    const partecipateMessage = document.getElementById("partecipate-message");

    // Controlla se l'utente può partecipare e aggiorna lo stile e il messaggio del Box
    if (canPartecipate) {
        partecipateBox.classList.remove("partecipate-red");
        partecipateBox.classList.add("partecipate-green");
        partecipateMessage.textContent = "Sei stato invitato !!!";
    } else {
        partecipateBox.classList.remove("partecipate-green");
        partecipateBox.classList.add("partecipate-red");
        partecipateMessage.textContent = "Non sei stato invitato ...";
    }
});