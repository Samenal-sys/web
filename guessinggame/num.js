

let secretNumber;
let attemptsLeft;
 // i need to change the file
function start() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    document.getElementById("message").innerText = "Game started. You have 10 attempts. Only sigmas can win this EPIC game.";
    document.getElementById("estim").value = "";
    document.getElementById("estim").disabled = false;
    document.getElementById("guess").disabled = false;
    const access = localStorage.getItem("lost");
    if (access == 1) {
        alert("nuh uh buddy you lost the test and arent sigma");
        window.location.href="about:blank";
    }

}

function guess() {
    let guess = parseInt(document.getElementById("estim").value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("not so sigma of you please enter a real number that is between or equal to 1 and 100.");
        return;
    }

    attemptsLeft--;
    if (guess === secretNumber) {
        document.getElementById("message").innerText = `you are so sigma for getting ${secretNumber} in ${10 - attemptsLeft} attempts. + ${10 + attemptsLeft} aura.`;
        document.getElementById("estim").disabled = true;
        document.getElementById("estim").value = ""
        document.getElementById("guess").disabled = true;
    } else if (attemptsLeft === 0) {
        document.getElementById("message").innerText = `Out of attempts. The number was ${secretNumber}. you failed so you arent a sigma`;
        localStorage.setItem("lost","1");
        document.getElementById("estim").disabled = true;
        document.getElementById("estim").value = ""
        document.getElementById("guess").disabled = true;
        alert("banned from playing");
        window.location.href="about:blank";
        
    } else {
        let hint = guess < secretNumber ? "higher" : "lower";
        document.getElementById("message").innerText = `Incorrect. Try a ${hint} number. Attempts left: ${attemptsLeft}. dont lose or you get banned.`;
    }
}
