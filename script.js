//Script per il gioco del tris
/*Regole del gioco:
1. Il gioco si svolge su una griglia 3x3.
2. Due giocatori, X e O, si alternano nel posizionare il proprio simbolo in una cella vuota della griglia.
3. Il primo giocatore a posizionare tre simboli in fila, colonna o diagonale vince la partita.
4. Se tutte le celle sono piene e nessun giocatore ha vinto, la partita termina in pareggio.
*/

// Inizializza la variabile per i giocatori
let players = [
    { name: "GIOCATORE 1", symbol: "X" },
    { name: "GIOCATORE 2", symbol: "O" }
];

// Uso una variabile currentPlayer per memorizzare quale giocatore sta giocando
let currentPlayer = players[0]; // Passo la referenza al JSON
console.log("currentPlayer", currentPlayer);

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
    // Cambio il giocatore corrente
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    // Aggiorno il testo del giocatore corrente nell'HTML
    document.getElementById("currentPlayerID").textContent = currentPlayer.name;
}
    


// Resetto la pagina
function resetPage() {
    location.reload();
}
