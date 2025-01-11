    // Emojis taken from emojipedia
    const animalEmoji = ['🐯','🐳','🐻','🦙','🦭','🦘','🦑','🐼','🐙','🐨','🦊','🦝','🐓','🦚','🦩','🐬','🐝','🦈','🪼','🐧','🦆','🐡','🦉','🦔']
    const foodEmoji = ['🥑','🍫','🍒','🍉','🥦','🍆','🍊','🍬','🫐','🥕','🍋','🫑','🍌','🍍','🥬','🍎','🍇','🍑','🥪','🌶️','🍕','🧀','🍔','🍩']
    const faceEmoji = ['😀','🤩','😜','😁','🤑','😂','🥰','🤔','🤤','🥳','😶‍🌫️','😴','🥶','😰','🥹','😡','😑','👿','🤗','😚','😎','🙃','🤒','😫']
    let chosenEmoji
    emojiIndex = 0
    
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
            answer = $("#answer").text().replace(/,/g, '');
            for (let i = 1; i <= 5; i++) {
                box = $(`#${gameRow}-${i}`)
                guess = $(`#${gameRow}-${i}`).text();
                console.log(guess)
                console.log(answer[i])
                if (guess === answer[i]) {
                    box.addClass("correct-guess");
                } else if (guess !== answer[i] && answer.includes(guess)) {
                    box.addClass("wrong-square-guess");
                } else {
                    box.addClass("incorrect-guess");
                }
            }
            gameRow++;
            gameCol = 1;
        }
    }

    assignEmojiButtons()

    newGame()

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