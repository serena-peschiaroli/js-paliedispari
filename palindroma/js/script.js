

const UserWord = prompt("Inserisci una parola!");

// funzione che gira la parola:

function giraStringa (UserWord) {
    //prende la parola (UserWord), la itera attravero i singoli caratteri dall'ultimo al primo e costruisce una nuova stringa (girata)
    let girata = "";

    for (let i = UserWord.length - 1; i <= 0; i--) {
        //inizializzazione: let i = userword.length ---> lunghezza di userword -1 (perchè gli indici array partono da 0)
        //condizione: i <= 0 perchè il loop continua fino a che i è uguale o più grande di 0: il loop itera per ogni carattere partendo dall'ultimo fino ad arrivare al primo
        // i-- : dopo ogni iterazione del loop, i è decrementato di 1.
        girata += UserWord[i];
        // in ogni iterazione, il carattere alla posizione corrente è aggiunto alla stringa girata finché l'indice non raggiunge zero. 
        // girata += --> girata = girata + userword

    }
    return girata;

}
giraStringa(UserWord);


// funzione che prende una stringa, prende la versione al contrario usando Girastringa e controlla se l'originale è uguale al suo contrario. Se true è un palindromo, false non lo è
function Palindroma(UserWord) {
    const parolagirata = giraStringa(UserWord);
    return UserWord === parolagirata;
    
}

// si chiama la funzione Palindroma con l'input dell'utente e si mette in risultato nella variabile "risultato"
const risultato = Palindroma(UserWord);


if (risultato) {
    console.log (`${UserWord} è un palindromo`);
}else{
    console.log (`${UserWord} non è un palindromo`);
}


  



