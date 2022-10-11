/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
----
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/


//CREARE ARRAY con un elenco di fake emails
//es emails: pluto@gmail.com paperino@gmail.com topolino@gmail.com
const emailList = ["pluto@gmail.com", "paperino@gmail.com", "topolino@gmail.com", "topolina@gmail.com", "cipeciop@gmail.com", "pippo@gmail.com" ]; 
console.log(emailList)
// CHIEDERE ALL'UTENTE l'email 
const userEmail = prompt("Qual'è la tua email?")
console.log(userEmail)

//SCORRERE la lista e verificare se email dell'utente sia nella arrow
//SE l'email c'è nella lista 
//  messaggio: email corretta, benvenuto
//ALTRIMENTI
//  messaggio: email errata, riprovare 