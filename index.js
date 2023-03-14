const playerOne = document.querySelector(".playerOne-score");
const playerTwo = document.querySelector(".playerTwo-score");

const btnPlayerOneOne = document.querySelector(".btn-playerOne-one");
const btnPlayerOneTwo = document.querySelector(".btn-playerOne-two");
const btnPlayerOneFive = document.querySelector(".btn-playerOne-five");

const btnPlayerTwoOne = document.querySelector(".btn-playerTwo-one");
const btnPlayerTwoTwo = document.querySelector(".btn-playerTwo-two");
const btnPlayerTwoFive = document.querySelector(".btn-playerTwo-five");

const btnReset = document.querySelector(".reset");

let playerOneScore = 0;
let playerTwoScore = 0;

const increment = (pointToIncrement, team) => {
    if(team === 'playerOne'){
        playerOneScore += pointToIncrement;
    }
    else{
        playerTwoScore += pointToIncrement;
    }
    render();
}

const reset = () => {
    playerOneScore = 0;
    playerTwoScore = 0; 
    render();
}

const render = () => {
    playerOne.textContent = playerOneScore;
    playerTwo.textContent = playerTwoScore;
}

btnPlayerOneOne.addEventListener("click", () => increment(1, "playerOne"));
btnPlayerOneTwo.addEventListener("click", () => increment(2, "playerOne"));
btnPlayerOneFive.addEventListener("click", () => increment(5, "playerOne"));

btnReset.addEventListener("click", reset);

btnPlayerTwoOne.addEventListener("click", () => increment(1, "playerTwo"));
btnPlayerTwoTwo.addEventListener("click", () => increment(2, "playerTwo"));
btnPlayerTwoFive.addEventListener("click", () => increment(5, "playerTwo"));