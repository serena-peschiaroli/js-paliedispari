
// chiedere all'utente di scegliere pari o dispari
PariDispari = prompt("Pari o dispari?");
console.log(PariDispari);
UserNumber = parseInt(prompt("Scegli un numero"));
console.log(UserNumber);


//funzione per numero casuale da 1 a 100;
function RndCpuNumber () {
    return Math.floor(Math.random() * 101);
}

//richiamare la funzione cpunumer;
const cpuNumber = RndCpuNumber();
console.log(cpuNumber);

//funzione per determinare chi ha vinto
//parametri: UserNumber cpuNumber, PariDispari, 
function WinOrLose (PariDispari , UserNumber , cpuNumber ) {

    // somma = UserNumber + cpuNumber;
    //risultato = somma / 2
    //--if somma /2 = 0 Pari
    //else dispari

    let somma = UserNumber + cpuNumber;
    let ePari = somma % 2 === 0;

    console.log (` Il risultato è ${somma}`)

    if (ePari ) {
        console.log ("Pari");

    }else{
        console.log ("dispari");
    }

    if (ePari && PariDispari === "pari") {
        console.log("Hai vinto!")
    }else if (!ePari && PariDispari === "dispari") {
        console.log ("Hai vinto!")
    }else{
        console.log ("Hai perso!");
    }
    
}

//chiamare la funzione per determinare il vincitore:

WinOrLose (PariDispari, UserNumber, cpuNumber);

