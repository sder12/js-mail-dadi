/* Gioco dei dadi
Generare un numero random da 1 a 6, 
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
----
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/


//CREARE 2 NUMERI RANDOM pc & user
//creare numero random del pc
const numberComputer = Math.floor(Math.random()*(7 -1)) + 1;
console.log(numberComputer)
//creare numero random utente 
const numberUser = Math.floor(Math.random()*(7 -1)) + 1;
console.log(numberUser)

//STABILIRE IL VINCITORE = chi ha n° >
// SE numero pc > numero utente
//      messaggio: Ha vinto il PC
//ALTRIMENTI SE numero utente > numero pc
//      messaggio: Ha vinto l'utente 
//ALTRIMENTI pareggio
//      messaggio: Nessun vincitore, è un pareggio