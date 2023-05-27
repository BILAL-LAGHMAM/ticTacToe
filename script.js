var cell = document.getElementsByClassName("cell");
// var playerTest = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 6, 9], [7, 5, 3]];
var playerOne = [];
var playerTwo = [];
var turn = 1;
var count = 0;
var result_First = 0;
var result_Second = 0;
var res = false;
function reset() {
    for (var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = ""
    }
    res = true
}
for (var i = 0; i < cell.length; i++) {
    cell[i].onclick = function () {
        if (this.innerHTML == "") {
            if (turn == 1) {
                this.innerHTML = "X";
                turn = 2
                playerOne.push(this.getAttribute('id'))
                count += 1
            } else {
                this.innerHTML = "O";
                turn = 1
                playerTwo.push(this.getAttribute('id'))
            }
        }
        playerOne.sort(function (a, b) {
            return a - b
        })
        var choicOne = []
        for (var i = 0; i < playerOne.length; i++) {
            choicOne.push(playerOne[i])
        }
        playerTwo.sort(function (a, b) {
            return a - b
        })
        var choicTwo = []
        for (var i = 0; i < playerTwo.length; i++) {
            choicTwo.push(playerTwo[i])
        }
        var winner = "";
        for (var i = 0; i < choicOne.length; i++) {
            for (var j = 1; j < choicOne.length; j++) {
                for (var k = 2; k < choicOne.length; k++) {
                    if ((choicOne[i] == 1 && choicOne[j] == 2 && choicOne[k] == 3) || (choicOne[i] == 4 && choicOne[j] == 5 && choicOne[k] == 6) ||
                        (choicOne[i] == 7 && choicOne[j] == 8 && choicOne[k] == 9) || (choicOne[i] == 1 && choicOne[j] == 5 && choicOne[k] == 9) ||
                        (choicOne[i] == 3 && choicOne[j] == 5 && choicOne[k] == 7) || (choicOne[i] == 1 && choicOne[j] == 4 && choicOne[k] == 7) ||
                        (choicOne[i] == 2 && choicOne[j] == 5 && choicOne[k] == 8) || (choicOne[i] == 3 && choicOne[j] == 6 && choicOne[k] == 9)) {
                        winner = "firstPlayer"
                    } else if ((choicTwo[i] == 1 && choicTwo[j] == 2 && choicTwo[k] == 3) || (choicTwo[i] == 4 && choicTwo[j] == 5 && choicTwo[k] == 6) ||
                        (choicTwo[i] == 7 && choicTwo[j] == 8 && choicTwo[k] == 9) || (choicTwo[i] == 1 && choicTwo[j] == 5 && choicTwo[k] == 9) ||
                        (choicTwo[i] == 3 && choicTwo[j] == 5 && choicTwo[k] == 7)) {
                        winner = "secondPlayer"
                    }
                }
            }
        }

        if (winner === "firstPlayer" && count >= 3 && !res) {
            alert("X are Won!");
            result_First += 1;
            document.getElementById("showResult").innerHTML = `X: ${result_First} <br> O is: ${result_Second}`

        } else if (winner === "secondPlayer" && count >= 3 && !res) {
            alert("O are Won!");
            result_Second += 1;
            document.getElementById("showResult").innerHTML = `X: ${result_First} <br> O is: ${result_Second}`

        } else if ((count == 5) && (winner != "firstPlayer" && winner != "secondPlayer" && !res)) {
            alert("Nobody Won!")
            document.getElementById("showResult").innerHTML = `X: ${result_First} <br> O is: ${result_Second}`
        }
    }
    document.getElementById("showResult").innerHTML = `X: ${result_First} <br> O is: ${result_Second}`
}
