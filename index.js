let variable = new variables();
//console.log(variable);

function changeStyling(curCell) {
    //console.log(curvariable)
    curCell.innerHTML = variable.player
    curCell.style.pointerEvents = 'none';
    curCell.className = "selected"
}


function checkWinner() {
    //check rows
    if (variable.curStateCell[0] === variable.curStateCell[1] && variable.curStateCell[1] === variable.curStateCell[2]) {   //console.log("1");
        return variable.curStateCell[0];

    }
    else if (variable.curStateCell[3] === variable.curStateCell[4] && variable.curStateCell[4] === variable.curStateCell[5]) {   //console.log("2");
        return variable.curStateCell[3];

    }
    else if (variable.curStateCell[6] === variable.curStateCell[7] && variable.curStateCell[7] === variable.curStateCell[8]) {  //console.log("3");
        return variable.curStateCell[6];

    }

    //check columns
    else if (variable.curStateCell[0] === variable.curStateCell[3] && variable.curStateCell[3] === variable.curStateCell[6]) { //console.log("4");
        return variable.curStateCell[0];

    }
    else if (variable.curStateCell[1] === variable.curStateCell[4] && variable.curStateCell[4] === variable.curStateCell[7]) {  //console.log("5");
        return variable.curStateCell[1];

    }
    else if (variable.curStateCell[2] === variable.curStateCell[5] && variable.curStateCell[5] === variable.curStateCell[8]) {   //console.log("6");
        return variable.curStateCell[2];

    }

    //check diagnols
    else if (variable.curStateCell[0] === variable.curStateCell[4] && variable.curStateCell[4] === variable.curStateCell[8]) {
        //console.log("7");
        return variable.curStateCell[0];

    }

    else if (variable.curStateCell[2] === variable.curStateCell[4] && variable.curStateCell[4] === variable.curStateCell[6]) {   //console.log("8");
        return variable.curStateCell[2];

    }


    return "-"

}

function displayWinner(winnerCode) {
    var winDisplay = document.getElementById("resultDisplay");
    winDisplay.className = "winnerDisplay";
    if (winnerCode == "X") {
        winDisplay.innerHTML = "player-1 Wins";
    }
    else if (winnerCode == "O") {
        winDisplay.innerHTML = "player-2 Wins";
    }

    var messageDisplay = document.getElementById("messageDisplay");
    messageDisplay.className = "winnerDisplay";
    messageDisplay.innerHTML = "Press Reset Button to pay again"

}

function disableClick() {
    for (let i = 0; i < variable.curStateCell.length; i++) {
        document.getElementById(i).style.pointerEvents = "none";
    }
}

function displayDraw() {
    var winDisplay = document.getElementById("resultDisplay");
    winDisplay.className = "winnerDisplay";
    winDisplay.innerHTML = "Game Drawn"
    var messageDisplay = document.getElementById("messageDisplay");
    messageDisplay.className = "winnerDisplay";
    messageDisplay.innerHTML = "Press Reset Button to pay again"
}



function handleClick() {
    //console.log(this);
    // console.log("into event");
    if (!variable.numberFilled) {
        variable.numberFilled = 1;
    }
    else {
        variable.numberFilled++;
    }
    //console.log(this);
    changeStyling(this);
    //console.log(this.id);
    //console.log(this.id+"="+variable.player);
    variable.curStateCell[this.id] = variable.player;
    let wincode = checkWinner();
    //console.log(wincode);
    if (wincode !== "-") {
        displayWinner(wincode);
        disableClick();
    }
    else if (variable.numberFilled == 9) {
        displayDraw();

    }

    //console.log(variable.player);
    variable.player = (variable.player === 'X') ? 'O' : 'X'
    //console.log(variable.player)
}


function removeWinnerInfo() {
    var winDisplay = document.getElementById("resultDisplay");
    winDisplay.className = "";
    winDisplay.innerHTML = "";

    var messageDisplay = document.getElementById("messageDisplay");
    messageDisplay.className = "";
    messageDisplay.innerHTML = ""

}


function resetGame() {
    //location.reload();
    variable.player = "X";
    variable.numberFilled = null
    variable.cell.forEach(function (element) {
        let cellElement = document.getElementById(element);
        cellElement.innerHTML = ""
        cellElement.className = "variable.cell";
        cellElement.style.pointerEvents = "auto"
    })

    for (let i = 0; i < variable.curStateCell.length; i++) {
        variable.curStateCell[i] = i;
    }
    removeWinnerInfo();

}



function main() {
    for (let i = 0; i < variable.curStateCell.length; i++) {
        variable.curStateCell[i] = i;
    }
    variable.player = "X";
    variable.cell.forEach(function (element) {
        let cellElement = document.getElementById(element);
        //console.log(variable.cellElement);
        cellElement.addEventListener('click', handleClick, false);
    }
    )

    document.getElementById("resetButton").addEventListener('click', resetGame, false);


}

//console.log("into js");
main();