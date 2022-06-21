console.log("Welcome to Tic Tac Toe")

let music = new Audio("sounds/gameplay.mp3")
let audioTurn = new Audio("sounds/pop.mp3")
let youwin = new Audio("sounds/youwin.mp3")
let player = "X"
let gameovers = false;

// Funtion to change the player turn
const changeTurn = () => {
    return player === "X" ? "O" : "X"
}

const changeTurnstop = () => {
    return player === "X" ? "" : "" 
}

//Function to check the winner 
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameovers = true
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "200px"
            youwin.play()
            player = changeTurnstop();
            
        }
    })
}

// Logic for game 
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = player;
            player = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameovers) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + player;
                
                
            }
        }
    })
});

// Reset function
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    player = "X"
    gameovers = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + player;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px"
})