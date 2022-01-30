let currentPlayer = "X";
let round = 1;
let win_x = 0;
let win_y = 0;

function move(id) {
    let butt = document.getElementById(id).innerHTML
    let player_x = document.getElementById("x_wins");
    let player_y = document.getElementById("y_wins");

    if (butt == " ") {
        document.getElementById("feedback").innerHTML = " "
        let previousPlayer = currentPlayer;

        document.getElementById(id).innerHTML = currentPlayer;
        if (currentPlayer == "X") currentPlayer = "O"
        else currentPlayer = "X"

        if (isWin(previousPlayer)) {
            info.innerHTML = "Winner: " + previousPlayer;

            if (previousPlayer == "X") {
                win_x++;
                player_x.innerHTML = "X wins: " + win_x;
            } else {
                win_y++;
                player_y.innerHTML = "Y wins: " + win_y;
            }
            displayButtons();

        } else {
            if (isDraw()) {
                info.innerHTML = "Draw!!!";
                displayButtons();

            } else {
                info.innerHTML = "Current move: " + currentPlayer;
            }

        }

    } else {
        document.getElementById("feedback").innerHTML = "Place is already taken"
    }


}

function isWin(player) {
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

        if (sq_1 == sq_2 && sq_2 == sq_3 && sq_3 == player && sq_1 != " ") {
            return true;
        }
    }
    return false;
}
function isDraw() {
    for (let i = 1; i < 10; i++) {
        if (document.getElementById(i).innerHTML == " ") return false;
    }
    return true;
}

function startGame() {
    for (let i = 1; i < 10; i++) {
        button = document.getElementById(i);
        button.innerHTML = " ";
        button.removeAttribute('disabled');
    }
}

function displayButtons() {
    for (let i = 1; i < 10; i++){
        
        document.getElementById(i).setAttribute('disabled', 'disabled');
       
    }
}

function newGame(){
    let player_x = document.getElementById("x_wins");
    let player_y = document.getElementById("y_wins");
 
    startGame();
    player_x.innerHTML = "X wins: 0";
    player_y.innerHTML = "Y wins: 0";
}