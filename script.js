//Script per il gioco del tris
/*Regole del gioco:
1. Il gioco si svolge su una griglia 3x3.
2. Due giocatori, X e O, si alternano nel posizionare il proprio simbolo in una cella vuota della griglia.
3. Il primo giocatore a posizionare tre simboli in fila, colonna o diagonale vince la partita.
4. Se tutte le celle sono piene e nessun giocatore ha vinto, la partita termina in pareggio.
*/

// Inizializza la variabile per i giocatori
let players = [
    { name: "GIOCATORE 1", symbol: "X", punteggio: 0 },
    { name: "GIOCATORE 2", symbol: "O", punteggio: 0 }
];

// Uso una variabile currentPlayer per memorizzare quale giocatore sta giocando
let currentPlayer = players[0]; // Passo la referenza al JSON
console.log("currentPlayer", currentPlayer);

let punteggio = players.punteggio; // Inizializzo il punteggio a 0
console.log("punteggio", punteggio);
document.getElementById("scorePlayer1").textContent = players[0].punteggio; // Mostro il punteggio nell'HTML
document.getElementById("scorePlayer2").textContent = players[1].punteggio; // Mostro il punteggio nell'HTML

// Evento che si attiva quando il DOM è completamente caricato
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    document.getElementById("reset").style.display = "none"; // Nascondo il bottone di reset
    // Visualizzo quale giocatore sta giocando sull'HTML
    document.getElementById("currentPlayerID").textContent = currentPlayer.name;
});

// Funzione per gestire il click su una cella
function posiziona(cell) {
    if (cell.textContent !== "") { // Controllo se la cella è vuota
        alert("Cella già occupata! Scegli un'altra cella.");
        return; // Esco dalla funzione se la cella è già occupata
    }
    else {
        cell.textContent = currentPlayer.symbol; // Posiziono il simbolo del giocatore corrente
        cell.style.color = currentPlayer.symbol === "X" ? "blue" : "red"; // Cambio il colore del testo in base al simbolo
    }

    // Controllo se il giocatore corrente ha vinto
    if (controllaVittoria()) {
        alert(currentPlayer.name + " ha vinto!"); // Mostro un messaggio di vittoria
        document.getElementById("reset").style.display = "block"; // Mostro il bottone di reset
        // Incremento il punteggio del giocatore vincente
        if (currentPlayer.symbol === "X") {
            players[0].punteggio++;
            document.getElementById("scorePlayer1").textContent = players[0].punteggio; // Aggiorno il punteggio nell'HTML
        } else {
            players[1].punteggio++;
            document.getElementById("scorePlayer2").textContent = players[1].punteggio; // Aggiorno il punteggio nell'HTML
        }
        return; // Esco dalla funzione se c'è un vincitore
    }


    // Cambio il giocatore corrente
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    // Aggiorno il testo del giocatore corrente nell'HTML
    document.getElementById("currentPlayerID").textContent = currentPlayer.name;
}

function controllaVittoria() {
    // Ottengo tutte le celle della griglia
    const celle = document.querySelectorAll(".cell");
    // Controllo le righe
    for (let i = 0; i < 3; i++) {
        if (celle[i * 3].textContent === currentPlayer.symbol &&
            celle[i * 3 + 1].textContent === currentPlayer.symbol &&
            celle[i * 3 + 2].textContent === currentPlayer.symbol) {
            return true; // Vittoria in riga
        }
    }
    // Controllo le colonne
    for (let i = 0; i < 3; i++) {
        if (celle[i].textContent === currentPlayer.symbol &&
            celle[i + 3].textContent === currentPlayer.symbol &&
            celle[i + 6].textContent === currentPlayer.symbol) {
            return true; // Vittoria in colonna
        }
    }
    // Controllo le diagonali
    if (celle[0].textContent === currentPlayer.symbol &&
        celle[4].textContent === currentPlayer.symbol &&
        celle[8].textContent === currentPlayer.symbol) {
        return true; // Vittoria diagonale principale
    }
    if (celle[2].textContent === currentPlayer.symbol &&
        celle[4].textContent === currentPlayer.symbol &&
        celle[6].textContent === currentPlayer.symbol) {
        return true; // Vittoria diagonale secondaria
    }

    // Controllo pareggio
    let pareggio = true;
    for (let i = 0; i < celle.length; i++) {
        if (celle[i].textContent === "") {
            pareggio = false;
            break;
        }
    }
    if (pareggio) {
        alert("Pareggio!"); // Mostro un messaggio di pareggio
        document.getElementById("reset").style.display = "block"; // Mostro il bottone di reset
    }

    return false; // Nessun vincitore o pareggio
}

// Resetto la pagina
function resetGame() {
    location.reload();
}
