// Function to generate a random number between 1 and 6 (simulating a dice roll).
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Update the roll value on the HTML page for a specific player.
function updateRoll(playerId, roll) {
    const rollElement = document.getElementById(playerId + "-roll");
    rollElement.textContent = roll;
}

// Event listener for the roll button.
document.getElementById("roll-button").addEventListener("click", function () {
    const player1Roll = rollDice();
    const player2Roll = rollDice();

    updateRoll("player1", player1Roll);
    updateRoll("player2", player2Roll);
});
// Previous JavaScript code remains mostly unchanged

// Function to simulate rolling a dice with animation.
function rollDiceAnimation(diceElement) {
    diceElement.style.animation = "none";
    void diceElement.offsetWidth; // Trigger reflow
    diceElement.style.animation = null; // Restart animation
}

// Function to display the congratulations message.
function displayCongratulations(winner) {
    const congratulations = document.getElementById("congratulations");
    const winnerElement = document.getElementById("winner");
    winnerElement.textContent = winner;
    congratulations.classList.remove("hidden");
}

// Event listener for the roll button.
document.getElementById("roll-button").addEventListener("click", function () {
    const player1Roll = rollDice();
    const player2Roll = rollDice();

    // Simulate rolling animation
    rollDiceAnimation(document.getElementById("dice1"));
    rollDiceAnimation(document.getElementById("dice2"));

    setTimeout(function () {
        updateRoll("player1", player1Roll);
        updateRoll("player2", player2Roll);

        if (player1Roll > player2Roll) {
            displayCongratulations("Player 1");
        } else if (player2Roll > player1Roll) {
            displayCongratulations("Player 2");
        } else {
            displayCongratulations("It's a Tie!");
        }
    }, 1000); // Wait for the animation to complete
});
