function newGame() {

    document.getElementById("container2").style.display = "none";
    document.getElementById("winLos").style.display = "none";
    document.getElementById("container").style.marginLeft = "500px";
    let box = [], firstTime = [], winner;
    let xo = 'O', count = 0;

    for (let i = 0; i < 9; i++) {
        box[i] = document.getElementById("box-" + (i + 1)).id;
        firstTime[i] = true;
        document.getElementById(box[i]).innerHTML = i + 1;
        document.getElementById(box[i]).style.fontSize = "0px";
    }

    //row-1
    document.getElementById("box-1").addEventListener('click', function () {
        if (firstTime[0]) {
            document.getElementById(this.id).style.fontSize = "150px";
            this.innerHTML = xo;
            xo === 'O' ? xo = 'X' : xo = 'O';
            count++;
            firstTime[0] = false;
        }

        //check all box is same or not
        if ((document.getElementById(box[0]).innerText == document.getElementById(box[1]).innerText) && (document.getElementById(box[0]).innerText == document.getElementById(box[2]).innerText)) {

            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();
        }
        else if ((document.getElementById(box[0]).innerText == document.getElementById(box[3]).innerText) && (document.getElementById(box[0]).innerText == document.getElementById(box[6]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[0]).innerText == document.getElementById(box[4]).innerText) && (document.getElementById(box[0]).innerText == document.getElementById(box[8]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else {
            draw();
        }
    });
    document.getElementById("box-2").addEventListener('click', function () {
        if (firstTime[1]) {
            document.getElementById(this.id).style.fontSize = "150px";
            this.innerHTML = xo;
            xo === 'O' ? xo = 'X' : xo = 'O';
            count++;
            firstTime[1] = false;
        }

        if ((document.getElementById(box[1]).innerText == document.getElementById(box[0]).innerText) && (document.getElementById(box[1]).innerText == document.getElementById(box[2]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[1]).innerText == document.getElementById(box[4]).innerText) && (document.getElementById(box[1]).innerText == document.getElementById(box[7]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else {
            draw();
        }
    });
    document.getElementById("box-3").addEventListener('click', function () {
        if (firstTime[2]) {
            document.getElementById(this.id).style.fontSize = "150px";
            this.innerHTML = xo;
            xo === 'O' ? xo = 'X' : xo = 'O';
            count++;
            firstTime[2] = false;

        }
        if ((document.getElementById(box[2]).innerText == document.getElementById(box[1]).innerText) && (document.getElementById(box[2]).innerText == document.getElementById(box[0]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[2]).innerText == document.getElementById(box[4]).innerText) && (document.getElementById(box[2]).innerText == document.getElementById(box[6]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[2]).innerText == document.getElementById(box[5]).innerText) && (document.getElementById(box[2]).innerText == document.getElementById(box[8]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else {
            draw();
        }
    });



    //row-2
    document.getElementById("box-4").addEventListener('click', function () {
        if (firstTime[3]) {
            document.getElementById(this.id).style.fontSize = "150px";
            this.innerHTML = xo;
            xo === 'O' ? xo = 'X' : xo = 'O';
            count++;
            firstTime[3] = false;
        }
        if ((document.getElementById(box[3]).innerText == document.getElementById(box[4]).innerText) && (document.getElementById(box[3]).innerText == document.getElementById(box[5]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[3]).innerText == document.getElementById(box[0]).innerText) && (document.getElementById(box[3]).innerText == document.getElementById(box[6]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else {
            draw();
        }
    });
    document.getElementById("box-5").addEventListener('click', function () {
        if (firstTime[4]) {
            document.getElementById(this.id).style.fontSize = "150px";
            this.innerHTML = xo;
            xo === 'O' ? xo = 'X' : xo = 'O';
            count++;
            firstTime[4] = false;
        }

        if ((document.getElementById(box[4]).innerText == document.getElementById(box[3]).innerText) && (document.getElementById(box[4]).innerText == document.getElementById(box[5]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[4]).innerText == document.getElementById(box[0]).innerText) && (document.getElementById(box[4]).innerText == document.getElementById(box[8]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[4]).innerText == document.getElementById(box[1]).innerText) && (document.getElementById(box[4]).innerText == document.getElementById(box[7]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[4]).innerText == document.getElementById(box[2]).innerText) && (document.getElementById(box[4]).innerText == document.getElementById(box[6]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else {
            draw();
        }
    });
    document.getElementById("box-6").addEventListener('click', function () {
        if (firstTime[5]) {
            document.getElementById(this.id).style.fontSize = "150px";
            this.innerHTML = xo;
            xo === 'O' ? xo = 'X' : xo = 'O';
            count++;
            firstTime[5] = false;
        }


        if ((document.getElementById(box[5]).innerText == document.getElementById(box[3]).innerText) && (document.getElementById(box[5]).innerText == document.getElementById(box[4]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[5]).innerText == document.getElementById(box[2]).innerText) && (document.getElementById(box[5]).innerText == document.getElementById(box[8]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else {
            draw();
        }
    });



    //row-3
    document.getElementById("box-7").addEventListener('click', function () {
        if (firstTime[6]) {
            document.getElementById(this.id).style.fontSize = "150px";
            this.innerHTML = xo;
            xo === 'O' ? xo = 'X' : xo = 'O';
            count++;
            firstTime[6] = false;
        }



        if ((document.getElementById(box[6]).innerText == document.getElementById(box[7]).innerText) && (document.getElementById(box[6]).innerText == document.getElementById(box[8]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[6]).innerText == document.getElementById(box[0]).innerText) && (document.getElementById(box[6]).innerText == document.getElementById(box[3]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[6]).innerText == document.getElementById(box[2]).innerText) && (document.getElementById(box[6]).innerText == document.getElementById(box[4]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else {
            draw();
        }
    });
    document.getElementById("box-8").addEventListener('click', function () {
        if (firstTime[7]) {
            document.getElementById(this.id).style.fontSize = "150px";
            this.innerHTML = xo;
            xo === 'O' ? xo = 'X' : xo = 'O';
            count++;
            firstTime[7] = false;
        }



        if ((document.getElementById(box[7]).innerText == document.getElementById(box[6]).innerText) && (document.getElementById(box[7]).innerText == document.getElementById(box[8]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[7]).innerText == document.getElementById(box[4]).innerText) && (document.getElementById(box[7]).innerText == document.getElementById(box[1]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else {
            draw();
        }
    });
    document.getElementById("box-9").addEventListener('click', function () {
        if (firstTime[8]) {
            document.getElementById(this.id).style.fontSize = "150px";
            this.innerHTML = xo;
            xo === 'O' ? xo = 'X' : xo = 'O';
            count++;
            firstTime[8] = false;
        }


        if ((document.getElementById(box[8]).innerText == document.getElementById(box[6]).innerText) && (document.getElementById(box[8]).innerText == document.getElementById(box[7]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[8]).innerText == document.getElementById(box[0]).innerText) && (document.getElementById(box[8]).innerText == document.getElementById(box[4]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else if ((document.getElementById(box[8]).innerText == document.getElementById(box[2]).innerText) && (document.getElementById(box[8]).innerText == document.getElementById(box[5]).innerText)) {
            firstTime.fill(false, 0);
            winner = this.innerText;
            checkWinner();

        }
        else {
            draw();
        }
    });

    function checkWinner() {
        document.getElementById("container").style.marginLeft = "10px";
        document.getElementById("winLos").style.display = "block";
        document.getElementById("winlossContain").innerHTML = "<font color='green'>Player " + winner + " is Won</font><br>";
        document.getElementById("container2").style.display = "block";
        count = 0;
    }
    function draw() {
        if (count == 9) {
            document.getElementById("container").style.marginLeft = "10px";
            document.getElementById("winLos").style.display = "block";
            winner = "Match is Darw";
            document.getElementById("winlossContain").innerHTML = "<font color='blue'>" + winner + "</font><br>";
            document.getElementById("container2").style.display = "block";
            count = 0;
        }
    }
}