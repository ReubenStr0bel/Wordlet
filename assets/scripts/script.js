/* jshint esversion: 11, jquery: true */    
document.addEventListener("DOMContentLoaded", (event) => {    
    // Emojis taken from emojipedia
    const animalEmoji = ['🐯','🐳','🐻','🦙','🦭','🦘','🦑','🐼','🐙','🐨','🦊','🦝','🐓','🦚','🦩','🐬','🐝','🦈'];
    const foodEmoji = ['🥑','🍫','🍒','🍉','🥦','🍆','🍊','🍬','🫐','🥕','🍋','🫑','🍌','🍍','🥬','🍎','🍇','🍑'];
    const faceEmoji = ['😀','🤩','😜','😁','🤑','😂','🥰','🤔','🤤','🥳','😶‍🌫️','😴','🥶','😰','🥹','😡','😑','👿'];
    
    // Setting global variables needed in multiple functions
    const allEmoji = animalEmoji.concat(foodEmoji,faceEmoji);
    let chosenEmoji;
    let emojiIndex = 0;
    let word = "";
    let guesses = [];
    let wins = 0;
    let gameRunning = false;

    // Retrieving the element where the answer is stored
    const answer = document.getElementById("answer");
    
    // variables to track which box is the next to have an emoji entered
    let gameRow = 1;
    let gameCol = 1;

    function newGame() {
        // Resetting game variables
        gameRow = 1;
        gameCol = 1;
        emojiIndex = 0;
        gameRunning = true;

        // Showing keyboard, which is hidden when page first loads
        $("#emoji-buttons").removeClass("d-none");

        // Hiding answer/congratulatory text
        $("#congratulations").addClass("d-none");
        $("#correct-response").addClass("d-none");

        // Clear the current game grid
        for (let r = 1; r <= 6; r++) {
            for (let c = 1; c <= 5; c++) {
                $(`#${r}-${c}`).text("");
                $(`#${r}-${c}`).removeClass("incorrect-guess wrong-square-guess correct-guess");
            }
        }

        // Clear classes from emoji keyboard, resetting background colours
        for (let col = 1; col <= $("#keyboard").children().length; col++) {
            $(`#keyboard .box-${col}`).removeClass("incorrect-guess wrong-square-guess correct-guess");
        }

        // generating a random answer from the chosen emoji category
        let emojiArray = [];
        while (emojiArray.length < 5) {
            let randomIndex = Math.floor(Math.random() * chosenEmoji.length);
            if (!emojiArray.includes(chosenEmoji[randomIndex])) {
                emojiArray.push(chosenEmoji[randomIndex]);
            }    
        }

        // Saving the answer in string format
        word = emojiArray.join("");

        $("#answer").children().remove();
        
        // Saving the answer to the #answer div
        for (let i = 0; i < emojiArray.length; i++) {
            let newSpan = document.createElement("span");
            newSpan.innerText = emojiArray[i];
            $("#answer").append(newSpan);
        }
    }

    // Assigns the emojis to their respective keyboard buttons based on which category was selected
    function assignEmojiButtons() { 
        for (let col = 1; col <= $("#keyboard").children().length; col++) {
            let box = $(`#keyboard .box-${col}`);
            box.text(chosenEmoji[emojiIndex]);
            emojiIndex++;
        }
    }

    // Checking guess against the answer and updating background colours
    function handleSubmit() {
        if (gameCol === 6) { //Function will only run if all 5 emojis have been entered
            guesses = [];
            let correctGuesses = 0;
            for (let i = 1; i <= 5; i++) {
                let box = $(`#${gameRow}-${i}`);
                let guess = $(`#${gameRow}-${i}`).text();
                let answerEmoji = answer.children[i-1].innerText;
                let keyboardUpdateClass;
                
                if (guess === answerEmoji) {
                    box.addClass("correct-guess");
                    keyboardUpdateClass = "correct-guess";
                    correctGuesses++;
                } else if (guesses.includes(guess)) { // Prevents duplicate guesses becoming yellow
                    box.addClass("incorrect-guess");
                    keyboardUpdateClass = "incorrect-guess";
                } else if (guess !== answerEmoji && word.includes(guess)) {
                    box.addClass("wrong-square-guess");
                    keyboardUpdateClass = "wrong-square-guess";
                } else {
                    box.addClass("incorrect-guess");
                    keyboardUpdateClass = "incorrect-guess";
                }

                guesses.push(guess);
                updateKeyboard(guess, keyboardUpdateClass);

                if (correctGuesses === 5) {
                    result("win");
                    $("#win-tracker").removeClass("d-none");
                } else if (gameRow === 6) {
                    result("loss");
                }
            }
            gameRow++;
            gameCol = 1;
        }
    }

    // Reveal answer/text depending on win/loss, set gameRunning to false so no more emojis can be entered
    function result(gameResult) {
        if (gameResult === "win") {
            wins++;
            $("#congratulations").removeClass("d-none");
        } else if (gameResult === "loss") {
            wins = 0;
            $("#correct-response").removeClass("d-none");
        }
        $("#win-tracker").text(`Wins: ${wins}`);
        gameRunning = false;
    }

    // Changes the background colour of boxes in the keyboard to show which have been guessed and the result
    function updateKeyboard(guess, keyboardUpdateClass) {
        for (let col = 1; col <= $("#keyboard").children().length; col++) {
            let emoji = $(`#keyboard .box-${col}`);
            if (guess === emoji.text()) {
                if (emoji.hasClass("incorrect-guess") && keyboardUpdateClass !== "incorrect-guess") {
                    emoji.removeClass("incorrect-guess");
                } else if (emoji.hasClass("wrong-square-guess") && keyboardUpdateClass === "correct-guess") {
                    emoji.removeClass("wrong-square-guess");
                }
                emoji.addClass(keyboardUpdateClass);
            }
        }
    }

    // Create the game grid
    for (let row = 1; row <= 6; row++) {
        for (let col = 1; col <= 5; col++) {
            let box = document.createElement("span");
            box.id = `${row}-${col}`;
            box.classList.add("box");
            // Add random emojis to fill the boxes temporarily, for decorative purposes
            let randomIndex = Math.floor(Math.random() * allEmoji.length);
            box.innerText = (allEmoji[randomIndex]);
            $("#game-grid").append(box);
        }
    }

    // Assign event listeners to backspace and submit buttons
    $("#backspace").on("click", function () {
        if (gameRunning) {
            if (gameCol > 1) {
                gameCol--;
                $(`#${gameRow}-${gameCol}`).text("");
            }
        }
    });
    $("#submit").on("click", handleSubmit);

    // Assign event listeners to the buttons within the game options modal
    let emojiThemes = [animalEmoji, foodEmoji, faceEmoji];
    let options = $("#emoji-choices").children();
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function () {
            chosenEmoji = emojiThemes[i];
            for (let index = 0; index <= 2; index++) {
                $(`#emoji-choices .box-${index+1}`).removeClass("correct-guess");
            }
            $(this).addClass("correct-guess");
        });
    }

    // Assign emoji keyboard event handlers
    for (let col = 1; col <= $("#keyboard").children().length; col++) {
        let box = $(`#keyboard .box-${col}`);
        box.on("click", function () {
            if (gameRunning) {
                $(`#${gameRow}-${gameCol}`).text($(this).text());
                if (gameCol <= 5) {
                    gameCol++;
                }
            }
        });
    }

    // Assign event listener to New Game button in modal
    $("#start-game").on("click", function () {
        assignEmojiButtons();
        newGame();
    });
});

    // TO DO
    // JEST - test how many spans are created in game grid