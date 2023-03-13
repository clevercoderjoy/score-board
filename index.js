const scoreHome = document.querySelector(".home-score");
const scoreGuest = document.querySelector(".guest-score");

const btnHomeOne = document.querySelector(".btn-home-one");
const btnHomeTwo = document.querySelector(".btn-home-two");
const btnHomeFive = document.querySelector(".btn-home-five");
const btnHomeReset = document.querySelector(".btn-home-reset");

const btnGuestOne = document.querySelector(".btn-guest-one");
const btnGuestTwo = document.querySelector(".btn-guest-two");
const btnGuestFive = document.querySelector(".btn-guest-five");
const btnGuestReset = document.querySelector(".btn-guest-reset");

let homeScore = 0;
let guestScore = 0;

btnHomeOne.addEventListener("click", () => scoreHome.textContent = `${homeScore += 1}`);
btnHomeTwo.addEventListener("click", () => scoreHome.textContent = `${homeScore += 2}`);
btnHomeFive.addEventListener("click", () => scoreHome.textContent = `${homeScore += 5}`);
btnHomeReset.addEventListener("click", () => scoreHome.textContent = `${homeScore = 0}`);
btnGuestOne.addEventListener("click", () => scoreGuest.textContent = `${guestScore += 1}`);
btnGuestTwo.addEventListener("click", () => scoreGuest.textContent = `${guestScore += 2}`);
btnGuestFive.addEventListener("click", () => scoreGuest.textContent = `${guestScore += 5}`);
btnGuestReset.addEventListener("click", () => scoreGuest.textContent = `${guestScore = 0}`);