const homePage = document.querySelector(".home-page");
const resultPage = document.querySelector(".result-page");
const rulesPage = document.querySelector(".rules-page");
const bgOverlay = document.querySelector(".overlay");
const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const sissorBtn = document.querySelector(".sissor-btn");
const rulesOpenBtn = document.querySelector(".rules-open-btn");
const rulesCloseBtn = document.querySelector(".rules-close-btn");
const playerChoice = document.querySelector(".player-picked-logo");
const botChoice = document.querySelector(".bot-picked-logo");
const playAgainBtn = document.querySelector(".play-again-btn");
const playerPickedPaper = document.querySelector(".player-paper-logo");
const playerPickedSissor = document.querySelector(".player-sissor-logo");
const playerPickedRock = document.querySelector(".player-rock-logo");
const botPickedPaper = document.querySelector(".bot-paper-logo");
const botPickedSissor = document.querySelector(".bot-sissor-logo");
const botPickedRock = document.querySelector(".bot-rock-logo");
const matchDrawResult = document.querySelector(".draw-result");
const matchWinResult = document.querySelector(".win-result");
const matchLoseResult = document.querySelector(".lose-result");
const playerScoreBoard = document.querySelector(".player-score");
const playerScore = [];
playerScoreBoard.innerHTML = `${playerScore.length}`;

let playerPickedChoice = "";
let botPickedChoice = "";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function resultHandler(playerPickedChoice) {
  homePage.classList.add("hidden");
  resultPage.classList.remove("hidden");
  switch (playerPickedChoice) {
    case "rock":
      playerPickedRock.classList.remove("hidden");
      break;
    case "paper":
      playerPickedPaper.classList.remove("hidden");
      break;
    case "sissor":
      playerPickedSissor.classList.remove("hidden");
      break;
    default:
      break;
  }
  let GetRandomNumber = getRandomInt(3);
  if (GetRandomNumber === 0) {
    botPickedChoice = "rock";
  } else if (GetRandomNumber === 1) {
    botPickedChoice = "paper";
  } else if (GetRandomNumber === 2) {
    botPickedChoice = "sissor";
  }
  switch (botPickedChoice) {
    case "rock":
      botPickedRock.classList.remove("hidden");
      break;
    case "paper":
      botPickedPaper.classList.remove("hidden");
      break;
    case "sissor":
      botPickedSissor.classList.remove("hidden");
      break;
    default:
      break;
  }
  if (
    (playerPickedChoice === "rock" && botPickedChoice === "rock") ||
    (playerPickedChoice === "paper" && botPickedChoice === "paper") ||
    (playerPickedChoice === "sissor" && botPickedChoice === "sissor")
  ) {
    matchDrawResult.classList.remove("hidden");
  } else if (
    (playerPickedChoice === "rock" && botPickedChoice === "sissor") ||
    (playerPickedChoice === "sissor" && botPickedChoice === "paper") ||
    (playerPickedChoice === "paper" && botPickedChoice === "rock")
  ) {
    matchWinResult.classList.remove("hidden");
    playerScore.push("victory");
    playerScoreBoard.innerHTML = `${playerScore.length}`;
  } else if (
    (playerPickedChoice === "rock" && botPickedChoice === "paper") ||
    (playerPickedChoice === "paper" && botPickedChoice === "sissor") ||
    (playerPickedChoice === "sissor" && botPickedChoice === "rock")
  ) {
    matchLoseResult.classList.remove("hidden");
  }
}

function playerPickedRockHandler() {
  playerPickedChoice = "rock";
  resultHandler(playerPickedChoice);
}

function playerPickedPaperHandler() {
  playerPickedChoice = "paper";
  resultHandler(playerPickedChoice);
}

function playerPickedSissorHandler() {
  playerPickedChoice = "sissor";
  resultHandler(playerPickedChoice);
}

function gameRestart() {
  resultPage.classList.add("hidden");
  homePage.classList.remove("hidden");
  playerPickedRock.classList.add("hidden");
  playerPickedPaper.classList.add("hidden");
  playerPickedSissor.classList.add("hidden");
  botPickedRock.classList.add("hidden");
  botPickedPaper.classList.add("hidden");
  botPickedSissor.classList.add("hidden");
  matchDrawResult.classList.add("hidden");
  matchWinResult.classList.add("hidden");
  matchLoseResult.classList.add("hidden");
}

function rulesOpenBtnEvent() {
  bgOverlay.classList.remove("hidden");
  rulesPage.classList.remove("hidden");
}

function rulesCloseBtnEvent() {
  bgOverlay.classList.add("hidden");
  rulesPage.classList.add("hidden");
}

rulesOpenBtn.addEventListener("click", rulesOpenBtnEvent);
rulesCloseBtn.addEventListener("click", rulesCloseBtnEvent);
bgOverlay.addEventListener("click", rulesCloseBtnEvent);
rockBtn.addEventListener("click", playerPickedRockHandler);
paperBtn.addEventListener("click", playerPickedPaperHandler);
sissorBtn.addEventListener("click", playerPickedSissorHandler);
playAgainBtn.addEventListener("click", gameRestart);
