let startTime, char;

function randomChar() {
  if (Math.random() > 0.5) {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  } else {
    return String(Math.floor(Math.random() * 10));
  }
}

function startGame() {
  char = randomChar();
  document.getElementById("stimulus").textContent = char;
  document.getElementById("result").textContent = "";
  startTime = Date.now();
}

document.addEventListener("keydown", function(e) {
  if (!char) return;

  let correct = false;
  let isLetter = /[A-Z]/.test(char);

  if (isLetter && e.key.toUpperCase() === "A") correct = true;
  if (!isLetter && e.key.toUpperCase() === "L") correct = true;

  let time = Date.now() - startTime;

  document.getElementById("result").textContent =
    (correct ? "Correct" : "Wrong") + " - " + time + " ms";

  char = null;
});
