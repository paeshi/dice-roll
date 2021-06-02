let randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);
let randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);
let randomNumber3 = Math.floor(Math.random() * (7 - 1) + 1);
let randomNumber4 = Math.floor(Math.random() * (7 - 1) + 1);

let dice1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", `images/dice${randomNumber1}.png`);

let dice2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", `images/dice${randomNumber2}.png`);

let dice3 = document
  .querySelectorAll("img")[2]
  .setAttribute("src", `images/dice${randomNumber3}.png`);

let dice4 = document
  .querySelectorAll("img")[3]
  .setAttribute("src", `images/dice${randomNumber4}.png`);

let result1 = randomNumber1 + randomNumber2;
let result2 = randomNumber3 + randomNumber4;

function winner(num1, num2) {
  if (num1 > num2) {
    document.querySelector(".result").textContent = "Player 1 Wins!";
  } else if (num2 > num1) {
    document.querySelector(".result").textContent = "Player 2 Wins!";
  } else {
    document.querySelector(".result").textContent = "Tie!";
  }
}

function refresh() {
  window.location.reload();
}

winner(result1, result2);

//   .setAttribute("src", `images/dice${randomNumber1}.png`);
