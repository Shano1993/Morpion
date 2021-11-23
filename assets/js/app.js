/*
    Variable declaration
 */

let playerX = false;
let playerO = false;
let caseAll = document.getElementsByClassName('case');


/*
    Delete right click menu
 */

document.addEventListener("contextmenu", function (event){
    event.preventDefault();
});

/*
    Assign the right click and left click keys
 */

for (let i = 0; i <= 8; i++) {
    caseAll[i].addEventListener("mouseup", function (event) {
        switch (event.button) {
            case 0: // set the left click to "X"
                caseAll[i].innerHTML = "X";
                break;
            case 2: // set the right click to "O"
                caseAll[i].innerHTML = "O";
        }
        checkCases();
    })
}

/*
    Function check cases horizontal / vertical / diagonal
 */

function checkCases() {
    playerX = checkHorizontal("X");
    playerO = checkHorizontal("O");
    if (!playerX && !playerO) {
        playerX = checkVertical("X");
        playerO = checkVertical("O");
        if (!playerX && !playerO) {
            playerX = checkDiagonal("X");
            playerO = checkDiagonal("O");
        }
    }
    if (playerX) {
        document.getElementById('result').innerHTML = "Le joueur X a gagné !";
    }
    else if (playerO) {
        document.getElementById('result').innerHTML = "Le joueur O a gagné !";
    }
}

/*
    Function check horizontal cases
 */

function checkHorizontal(player) {
    for (let i = 0; i <= 8; i +=3) {
        if (caseAll[i].innerHTML === player && caseAll[i+1].innerHTML === player && caseAll[i+2].innerHTML === player) {
            return true;
        }
    }
    return false;
}

/*
    Function check vertical cases
 */

function checkVertical(player) {
    for (let i = 0; i <= 2; i++) {
        if (caseAll[i].innerHTML === player && caseAll[i+3].innerHTML === player && caseAll[i+6].innerHTML === player) {
            return true;
        }
    }
    return false;
}

/*
    Function check diagonal cases
 */

function checkDiagonal(player) {
    if (caseAll[0].innerHTML === player && caseAll[4].innerHTML === player && caseAll[8].innerHTML === player) {
        return true;
    }
    else if (caseAll[2].innerHTML === player && caseAll[4].innerHTML === player && caseAll[6].innerHTML === player) {
        return true;
    }
    return false;
}

/*
    Function restart game
 */

document.getElementById('again').addEventListener("click", function () {
    for (let restart of caseAll) {
        restart.innerHTML = "";
        document.getElementById('result').innerHTML = "";
    }
    playerX = playerO = false;
    document.getElementById('result').innerHTML = "";
})





