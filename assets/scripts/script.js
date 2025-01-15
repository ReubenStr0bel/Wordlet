    // Emojis taken from emojipedia
    const animalEmoji = ['🐯','🐳','🐻','🦙','🦭','🦘','🦑','🐼','🐙','🐨','🦊','🦝','🐓','🦚','🦩','🐬','🐝','🦈']
    const foodEmoji = ['🥑','🍫','🍒','🍉','🥦','🍆','🍊','🍬','🫐','🥕','🍋','🫑','🍌','🍍','🥬','🍎','🍇','🍑']
    const faceEmoji = ['😀','🤩','😜','😁','🤑','😂','🥰','🤔','🤤','🥳','😶‍🌫️','😴','🥶','😰','🥹','😡','😑','👿']
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
        gameRow = 1 // Reset these values to 1 in case the user starts a game after having played
        gameCol = 1
        emojiIndex = 0
        gameRunning = true;

        // Clear the current game grid
        for (let r = 1; r <= 6; r++) {
            for (let c = 1; c <= 5; c++) {
                $(`#${r}-${c}`).text("");
                $(`#${r}-${c}`).removeClass("incorrect-guess wrong-square-guess correct-guess");
            }
        }

        // Clear classes from emoji keyboard
        for (let row = 1; row <= $("#emoji-buttons").children().length;  row++) {
            for (let col = 1; col !== $(`#emoji-row-${row}`).children().length; col++) {
                $(`#emoji-row-${row} > .box-${col}`).removeClass("incorrect-guess wrong-square-guess correct-guess");
            }
        }

        // generating a random answer from the chosen emoji category
        let emojiArray = [];
        while (emojiArray.length < 5) {
            randomIndex = Math.floor(Math.random() * chosenEmoji.length)
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
        };
    }

    function assignEmojiButtons() { 
        // Assigns the emojis to their respective buttons based on which category was selected
        for (let row = 1; row <= $("#emoji-buttons").children().length;  row++) {
            for (let col = 1; col !== $(`#emoji-row-${row}`).children().length; col++) {
                box = $(`#emoji-row-${row} > .box-${col}`)
                box.text(chosenEmoji[emojiIndex]);
                emojiIndex++;
            }
        }
    }

    function handleSubmit() {
        // Add in way to test if the game was won or lost
        if (gameCol === 6) { //Function will only run if 5 emojis have been entered
            guesses = []
            let correctGuesses = 0
            for (let i = 1; i <= 5; i++) {
                let box = $(`#${gameRow}-${i}`)
                let guess = $(`#${gameRow}-${i}`).text();
                let answerEmoji = answer.children[i-1].innerText;
                let keyboardUpdateClass;
                
                if (guess === answerEmoji) {
                    box.addClass("correct-guess");
                    keyboardUpdateClass = "correct-guess";
                    correctGuesses++
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
                } else if (gameRow === 6) {
                    result("loss");
                }
            }
            gameRow++;
            gameCol = 1;
        }
    }

    function result(gameResult) {
        if (gameResult === "win") {
            wins++;
            $("#win-tracker").text(`Wins: ${wins}`);
            gameRunning = false;
        } else if (gameResult === "loss") {
            wins = 0;
            $("#win-tracker").text(`Wins: ${wins}`);
            gameRunning = false;
        }
    }

    function updateKeyboard(guess, keyboardUpdateClass) {
        for (let row = 1; row <= $("#emoji-buttons").children().length;  row++) {
            for (let col = 1; col < $(`#emoji-row-${row}`).children().length; col++) {
                let emoji = $(`#emoji-row-${row} > .box-${col}`);
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
    }

    // Create the game grid
    for (let row = 1; row <= 6; row++) {
        for (let col = 1; col <= 5; col++) {
            let box = document.createElement("span");
            box.id = `${row}-${col}`;
            box.classList.add("box");
            $("#game-grid").append(box);
        }
    }

    // Assign event listeners to backspace and submit buttons
    $("#backspace").on("click", function () {
        if (gameRunning) {
            if (gameCol > 1) {
                gameCol--
                $(`#${gameRow}-${gameCol}`).text("");
            }
        }
    });
    $("#submit").on("click", handleSubmit);

    // Assign event listeners to the buttons within the game modal
    let emojiThemes = [animalEmoji, foodEmoji, faceEmoji];
    let options = $("#emoji-choices").children();
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function () {
            chosenEmoji = emojiThemes[i];
            for (let index = 0; index <= 2; index++) {
                $(`#emoji-choices .box-${index+1}`).removeClass("correct-guess");
            }
            $(this).addClass("correct-guess");
        })
    }

    // Assign emoji keyboard event handlers
    for (let row = 1; row <= $("#emoji-buttons").children().length;  row++) {
        for (let col = 1; col !== $(`#emoji-row-${row}`).children().length; col++) {
            box = $(`#emoji-row-${row} > .box-${col}`);
            box.on("click", function () {
                if (gameRunning) {
                    $(`#${gameRow}-${gameCol}`).text($(this).text());
                    if (gameCol <= 5) { // Incrementing gameCol to 6 will mean that button presses
                        gameCol++       // won't change the final box once the row is full
                    }
                }
            });
        }
    }

    // Assign event listener to New Game button in modal
    $("#start-game").on("click", function () {
        assignEmojiButtons();
        newGame();
    });
    

    // TO DO
    // Add system to check if game is won or lost and check how many wins in a row
    // Update display method to make it work on phones (to % maybe)