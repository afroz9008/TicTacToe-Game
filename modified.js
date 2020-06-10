let xo, count, box, winner, checkWinner, draw, checkCondition, styleHideAndShow, total = 0, player1Win = 0, player2Win = 0;
class Game {
    constructor(game) {
        document.getElementById("container2").style.display = "none";
        document.getElementById("winLos").style.display = "none";
        xo = "O", count = 0, box = [], winner = "";
        document.getElementById("results").innerHTML = `<pre>Player 1 : O      Total Played Game : ${total} <br>Player 2 : X \t      Player 1 Wins : ${player1Win}<br>\t\t      Player 2 Wins : ${player2Win}</pre>`;
        for (let i = 0; i < 9; i++) {
            document.getElementById("box-" + (i + 1)).addEventListener('click', game);
            document.getElementById("box-" + (i + 1)).innerText = "";
        }
        styleHideAndShow = () => {
            document.getElementById("results").innerHTML = `<pre>Player 1 : O      Total Played Game : ${total} <br>Player 2 : X \t      Player 1 Wins : ${player1Win}<br>\t\t      Player 2 Wins : ${player2Win}</pre>`;
            document.getElementById("winLos").style.display = "block";
            document.getElementById("container2").style.display = "block";
            count = 0;
        }
        checkWinner = function (win) {
            total++;
            styleHideAndShow();
            document.getElementById("winlossContain").innerHTML = "<font color='green'>Player " + win + " is Won</font><br>";
        }
        draw = function () {
            if (count == 9) {
            	total++;
                styleHideAndShow();
                document.getElementById("winlossContain").innerHTML = "<font color='blue'>Match is Draw </font><br>";
            }
        }
        checkCondition = () => {
            xo === "O" ? player2Win++ : player1Win++;
            winner = xo === "O" ? xo = "X" : xo = "O";
            checkWinner(winner);
        }
    };
};
//Start New Game
document.getElementById("newGameBtn").addEventListener('click', () => { new Game(game) });

function game() {
    for (let i = 0; i < 9; i++) {
        box[i] = document.getElementById("box-" + (i + 1));
    }
    let b = document.getElementById(this.id).innerText;
    if (!(b === "X" || b === "O")) {
        document.getElementById(this.id).innerText = xo;
        xo === "O" ? xo = "X" : xo = "O";
        count++;
    }


    if (this === box[0]) {
        if (this.innerText == box[1].innerText && this.innerText == box[2].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[3].innerText && this.innerText == box[6].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[4].innerText && this.innerText == box[8].innerText) {
            checkCondition();
        }
        else {
            draw();
        }
    }
    else if (this === box[1]) {
        if (this.innerText == box[0].innerText && this.innerText == box[2].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[4].innerText && this.innerText == box[7].innerText) {
            checkCondition();
        }
        else {
            draw();
        }
    }
    else if (this === box[2]) {
        if (this.innerText == box[0].innerText && this.innerText == box[1].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[4].innerText && this.innerText == box[6].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[5].innerText && this.innerText == box[8].innerText) {
            checkCondition();
        }
        else {
            draw();
        }
    }
    else if (this === box[3]) {
        if (this.innerText == box[0].innerText && this.innerText == box[6].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[4].innerText && this.innerText == box[5].innerText) {
            checkCondition();
        }
        else {
            draw();
        }
    }
    else if (this === box[4]) {
        if (this.innerText == box[0].innerText && this.innerText == box[8].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[1].innerText && this.innerText == box[7].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[2].innerText && this.innerText == box[6].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[3].innerText && this.innerText == box[5].innerText) {
            checkCondition();
        }
        else {
            draw();
        }
    }
    else if (this === box[5]) {
        if (this.innerText == box[2].innerText && this.innerText == box[8].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[3].innerText && this.innerText == box[4].innerText) {
            checkCondition();
        }
        else {
            draw();
        }
    }
    else if (this === box[6]) {
        if (this.innerText == box[0].innerText && this.innerText == box[3].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[2].innerText && this.innerText == box[4].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[7].innerText && this.innerText == box[8].innerText) {
            checkCondition();
        }
        else {
            draw();
        }
    }
    else if (this === box[7]) {
        if (this.innerText == box[1].innerText && this.innerText == box[4].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[6].innerText && this.innerText == box[8].innerText) {
            checkCondition();
        }
        else {
            draw();
        }
    }
    else if (this === box[8]) {
        if (this.innerText == box[0].innerText && this.innerText == box[4].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[2].innerText && this.innerText == box[5].innerText) {
            checkCondition();
        }
        else if (this.innerText == box[6].innerText && this.innerText == box[7].innerText) {
            checkCondition();
        }
        else {
            draw();
        }
    }



}
new Game(game);


