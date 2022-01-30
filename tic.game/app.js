let currentPlayer = "X";


function draw(id){
    document.getElementById(id).innerHTML = currentPlayer;
    let info = document.getElementById("info");
    
    if (currentPlayer == "X") currentPlayer = "O"
    else currentPlayer = "X"
    info.innerHTML = "Current move: " + currentPlayer;
    
}