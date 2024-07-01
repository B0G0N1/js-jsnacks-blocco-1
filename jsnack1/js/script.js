document.getElementById("check-partecipation-btn").addEventListener("click", function() {
    const guestsList = ["Pippo", "Pluto", "Topolino", "Tizio", "Caio", "Sempronio"];

    const userName = document.getElementById("input-name").value;

    let canPartecipate = false;

    for (let i = 0; i < guestsList.length; i++) {
        if (guestsList[i] === userName) {
            canPartecipate = true;
        }
    }

    const partecipateBox = document.getElementById("partecipate-box");
    const partecipateMessage = document.getElementById("partecipate-message");

    if (canPartecipate) {
        partecipateBox.classList.remove("partecipate-red");
        partecipateBox.classList.add("partecipate-green");
        partecipateMessage.textContent = "Sei stato invitato !!!";
    } else {
        partecipateBox.classList.remove("partecipate-green");
        partecipateBox.classList.add("partecipate-red");
        partecipateMessage.textContent = "Non sei stato invitato ...";
    }

    console.log(userName)
});