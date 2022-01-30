let currentPlayer = "X";


function draw(id){
    document.getElementById(id).innerHTML = currentPlayer;
    let info = document.getElementById("info");
    
    if (currentPlayer == "X") currentPlayer = "Y"
    else currentPlayer = "X"
    info.innerHTML = "Current move: " + currentPlayer;
    
    
    
}