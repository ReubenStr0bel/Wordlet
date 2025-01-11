    // Emojis taken from emojipedia
    const animalEmoji = ['🐯','🐳','🐻','🦙','🦭','🦘','🦑','🐼','🐙','🐨','🦊','🦝','🐓','🦚','🦩','🐬','🐝','🦈','🪼','🐧','🦆','🐡','🦉','🦔']
    const foodEmoji = ['🥑','🍫','🍒','🍉','🥦','🍆','🍊','🍬','🫐','🥕','🍋','🫑','🍌','🍍','🥬','🍎','🍇','🍑','🥪','🌶️','🍕','🧀','🍔','🍩']
    const faceEmoji = ['😀','🤩','😜','😁','🤑','😂','🥰','🤔','🤤','🥳','😶‍🌫️','😴','🥶','😰','🥹','😡','😑','👿','🤗','😚','😎','🙃','🤒','😫']
    let chosenEmoji;
    let emojiIndex = 0;
    let word = "";

    // Retrieving the element where the answer is stored
    const answer = document.getElementById("answer");
    
    // variables to track which box is the next to have an emoji entered
    let gameRow = 1;
    let gameCol = 1;

    function newGame() {
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
        
        // Saving the answer to the #answer div
        for (let i = 0; i < emojiArray.length; i++) {
            let newSpan = document.createElement("span");
            newSpan.innerText = emojiArray[i];
            $("#answer").append(newSpan);
        };

        gameRow = 1
        gameCol = 1
    }

    chosenEmoji = animalEmoji // temporary for testing, will come from modal selection in future
    function assignEmojiButtons() { 
        // Assigns the emojis to their respective buttons based on which category was selected
        for (let row = 1; row <= $("#emoji-buttons").children().length;  row++) {
            for (let col = 1; col !== $(`#emoji-row-${row}`).children().length; col++) {
                box = $(`#emoji-row-${row} > .box-${col}`)
                box.text(chosenEmoji[emojiIndex]);
                emojiIndex++;
                box.on("click", function () {
                    $(`#${gameRow}-${gameCol}`).text($(this).text());
                    if (gameCol <= 5) { // Incrementing gameCol to 6 will mean that button presses
                        gameCol++       // won't change the final box once the row is full
                    }
                })
            }
        }
    }

    function handleSubmit() {
        if (gameCol === 6) {
            for (let i = 1; i <= 5; i++) {
                let box = $(`#${gameRow}-${i}`)
                let guess = $(`#${gameRow}-${i}`).text();
                let answerEmoji = answer.children[i-1].innerText;

                if (guess === answerEmoji) {
                    box.addClass("correct-guess");
                } else if (guess !== answerEmoji && word.includes(guess)) {
                    box.addClass("wrong-square-guess");
                } else {
                    box.addClass("incorrect-guess");
                }
            }
            gameRow++;
            gameCol = 1;
        }
    }

    assignEmojiButtons();

    newGame();

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
        if (gameCol > 0) {
            gameCol--
            $(`#${gameRow}-${gameCol}`).text("");
        }
    });
    $("#submit").on("click", handleSubmit);