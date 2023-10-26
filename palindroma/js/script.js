

const UserWord = prompt("Inserisci una parola!");

// funzione che gira la parola:

function giraStringa (UserWord) {
    let girata = "";

    for (let i = UserWord.length - 1; i >= 0; i--) {
        girata += UserWord[i];

    }
    console.log(girata);

}
giraStringa(UserWord);

  



