<!-------------------------
     CONSEGNA ESERCIZIO
-------------------------->
Ciao ragazzi,
nome repo di oggi: js-jsnacks-blocco-1
SNACK 1:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
SNACK 2:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell'array
SNACK 3:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
BONUS:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Numero push: 15 circa
Create una sotto-cartella per ogni jsnack e riportate la consegna all'inizio del file js.
La struttura dei file dovrebbe essere la seguente:
`jsnack1 (cartella)
- index.html
- script.js
jsnack2 (cartella)
- index.html
- script.js`
e così via




<!----------------------------
    PSEUDO-CODICE JSNACK1
----------------------------->
1. Definire un array chiamato "guests" contenente i nomi degli invitati (es. ["Nick", "Daisy", "Tom", "Jordan", ...]).
2. Chiedere all'utente di inserire il suo nome.
3. Leggere il nome dell'utente e memorizzalo in una variabile chiamata "userName".
4. Inizializzare una variabile "canPartecipate" su FALSE.
5. Per ogni nome nell'array "guests":
    5.1 SE "userName" è uguale al nome nell'array:
        5.1.1 IMPOSTA "canPartecipate" su TRUE.
        5.1.2 ROMPI il ciclo.
6. SE "canPartecipate" è TRUE:
    6.1 STAMPA "Puoi partecipare al party!".
7. ALTRIMENTI:
    7.1 STAMPA "Non puoi partecipare al party...".




<!----------------------------
    PSEUDO-CODICE JSNACK2
----------------------------->
1.   Definire un array vuoto chiamato "evenNumber".
2.   Per 6 volte:
     2.1 Chiedere all'utente di inserire un numero.
     2.2 Leggere il numero inserito e memorizzarlo in una variabile chiamata "number".
     2.3 SE "numero" è dispari (numero % 2 != 0):
          2.3.1 Aggiungere "numero" all'array "evenNumber".
3. Stampare l'array "evenNumber".