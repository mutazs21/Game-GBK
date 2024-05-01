const game = () => {
    let pScore = 0;
    let cScore = 0;
    let tScore = 0;

    // start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        const computerOptions = ["batu", "kertas", "gunting"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                        compareHands(this.textContent, computerChoice);
                        playerHand.src = `./assets/${this.textContent}.png`;
                        computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScocre = document.querySelector(".computer-score p");
        const tieScore = document.querySelector(".tie-score p");
        
        playerScore.textContent = pScore;
        computerScocre.textContent = cScore;
        tieScore.textContent = tScore;
    };

const winner = document.querySelector('.winner');
const compareHands = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        winner.textContent = "Seri";
        tScore++;
        updateScore();
        return;
    }

    if (playerChoice === "batu") {
        if (computerChoice === "gunting") {
            winner.textContent = "Kamu Menang";
            pScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "Komputer Menang";
            cScore++;
            updateScore();
            return;
        }
    }

    if (playerChoice === "kertas") {
        if (computerChoice === "gunting") {
            winner.textContent = "Komputer Menang";
            cScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "Kamu Menang";
            pScore++;
            updateScore();
            return;
        }
    }

    if (playerChoice === "gunting") {
        if (computerChoice === "batu") {
            winner.textContent = "Komputer Menang";
            cScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "Kamu Menang";
            pScore++;
            updateScore();
            return;
        }
    }
}

    startGame();
    playMatch();

    };

    game()