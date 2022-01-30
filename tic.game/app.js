let currentPlayer = "X";

function draw(id) {
    let butt = document.getElementById(id).innerHTML
    let info = document.getElementById("info");
        

    if (butt == " "){
        document.getElementById("feedback").innerHTML = " "
        let previousPlayer = currentPlayer;
        
        document.getElementById(id).innerHTML = currentPlayer;
        if (currentPlayer == "X") currentPlayer = "O"
        else currentPlayer = "X"

        if (check(previousPlayer)) {
            info.innerHTML = "Winner: " + currentPlayer;
        } else {
            info.innerHTML = "Current move: " + currentPlayer;
        }

    } else {
        document.getElementById("feedback").innerHTML = "Place is already taken"
    }
    
    
}

function check(player) {
    sides = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],

        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],

        ["1", "5", "9"],
        ["3", "5", "7"]
    ]
    for (let i = 0; i < sides.length; i++) {
        array = sides[i]
        let sq_1 = document.getElementById(array[0]).innerHTML;
        let sq_2 = document.getElementById(array[1]).innerHTML;
        let sq_3 = document.getElementById(array[2]).innerHTML;

        if (sq_1 == sq_2 == sq_3 == player && sq_1 != "") {
            alert("123123")
            return true;
        }
    }
    return false;


}