var cell = document.getElementsByClassName("cell");
// var playerTest = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 6, 9], [7, 5, 3]];
var playerOne = [];
var playerTwo = [];
var turn = 1;
var countOne = 0
var count = 0
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
        var rslt = "";
        for (var i = 0; i < choicOne.length; i++) {
            for (var j = 1; j < choicOne.length; j++) {
                for (var k = 2; k < choicOne.length; k++) {
                    if ((choicOne[i] == 1 && choicOne[j] == 2 && choicOne[k] == 3) || (choicOne[i] == 4 && choicOne[j] == 5 && choicOne[k] == 6) ||
                        (choicOne[i] == 7 && choicOne[j] == 8 && choicOne[k] == 9) || (choicOne[i] == 1 && choicOne[j] == 5 && choicOne[k] == 9) ||
                        (choicOne[i] == 3 && choicOne[j] == 5 && choicOne[k] == 7) || (choicOne[i] == 1 && choicOne[j] == 4 && choicOne[k] == 7) ||
                        (choicOne[i] == 2 && choicOne[j] == 5 && choicOne[k] == 8) || (choicOne[i] == 3 && choicOne[j] == 6 && choicOne[k] == 9)) {
                        rslt = "one"
                        break
                    } else if ((choicTwo[i] == 1 && choicTwo[j] == 2 && choicTwo[k] == 3) || (choicTwo[i] == 4 && choicTwo[j] == 5 && choicTwo[k] == 6) ||
                        (choicTwo[i] == 7 && choicTwo[j] == 8 && choicTwo[k] == 9) || (choicTwo[i] == 1 && choicTwo[j] == 5 && choicTwo[k] == 9) ||
                        (choicTwo[i] == 3 && choicTwo[j] == 5 && choicTwo[k] == 7)) {
                        rslt = "two"
                        break
                    }
                }
            }
        }
        if (rslt === "one" && count >= 3) {
            alert("X are Won!");
            // for(var x = 0 ; x < cell.length ; x++){
            //     cell[x].innerHTML = "?"
            // }
        } else if (rslt === "two"  && count >= 3) {
            alert("O are Won!")
        }else if((count == 5) && (rslt != "one" && rslt != "two")){
            alert("Nobody Won!")
        }
    }

}



// '1', '5', '9', '7', '2'
// document.getElementById("check").onclick = function () {
//     playerOne.sort(function(a,b){
//         return a-b
//     })
//     var choicOne = []
//     for(var i=0;i < playerOne.length;i++){
//         choicOne.push(playerOne[i])
//     }
//     playerTwo.sort(function(a,b){
//         return a-b
//     })
//     var choicTwo = []
//     for(var i=0;i < playerTwo.length;i++){
//         choicTwo.push(playerTwo[i])
//     }
//     var rslt = "";
//     for (var i = 0; i < choicOne.length; i++) {
//         for (var j = 1; j < choicOne.length; j++) {
//             for (var k = 2; k < choicOne.length; k++) {
//                 if ((choicOne[i] == 1 && choicOne[j] == 2 && choicOne[k] == 3) || (choicOne[i] == 4 && choicOne[j] == 5 && choicOne[k] == 6) ||
//                     (choicOne[i] == 7 && choicOne[j] == 8 && choicOne[k] == 9) || (choicOne[i] == 1 && choicOne[j] == 5 && choicOne[k] == 9) ||
//                     (choicOne[i] == 3 && choicOne[j] == 5 && choicOne[k] == 7) || (choicOne[i] == 1 && choicOne[j] == 4 && choicOne[k] == 7) ||
//                     (choicOne[i] == 2 && choicOne[j] == 5 && choicOne[k] == 8)|| (choicOne[i] == 3 && choicOne[j] == 6 && choicOne[k] == 9)) {
//                     rslt = "one"
//                 } else if ((choicTwo[i] == 1 && choicTwo[j] == 2 && choicTwo[k] == 3) || (choicTwo[i] == 4 && choicTwo[j] == 5 && choicTwo[k] == 6) ||
//                     (choicTwo[i] == 7 && choicTwo[j] == 8 && choicTwo[k] == 9) || (choicTwo[i] == 1 && choicTwo[j] == 5 && choicTwo[k] == 9) ||
//                     (choicTwo[i] == 3 && choicTwo[j] == 5 && choicTwo[k] == 7)) {
//                     rslt = "two"
//                 }
//             }
//         }
//     }
//     if(rslt === "one"){
//         alert("X is Win!")
//     }else if(rslt === "two"){
//         alert("O is Win!")
//     }else{
//         alert("nobody Win!")
//     }
//     console.log(choicOne.reverse())
//     console.log(choicTwo.reverse())
// }