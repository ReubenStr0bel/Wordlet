document.addEventListener('DOMContentLoaded', function() {
    // Emojis taken from emojipedia
    const animalEmoji = ['🐯','🐳','🐻','🦙','🦭','🦘','🦑','🐼','🐙','🐨','🦊','🦝','🐓','🦚','🦩','🐬','🐝','🦈','🪼','🐧','🦆','🐡','🦉','🦔']
    const foodEmoji = ['🥑','🍫','🍒','🍉','🥦','🍆','🍊','🍬','🫐','🥕','🍋','🫑','🍌','🍍','🥬','🍎','🍇','🍑','🥪','🌶️','🍕','🧀','🍔','🍩']
    const faceEmoji = ['😀','🤩','😜','😁','🤑','😂','🥰','🤔','🤤','🥳','😶‍🌫️','😴','🥶','😰','🥹','😡','😑','👿','🤗','😚','😎','🙃','🤒','😫']
    let chosenEmoji



    chosenEmoji = animalEmoji // temporary for testing, will come from modal selection in future
    emojiIndex = 0
    function assignEmojiButtons() { // Assigns the emojis to their respective buttons based on which category was selected
        for (let row = 1; row < 4;  row++) {
            for (let col = 1; col !== $(`#emoji-row-${row}`).children().length; col++) {
                console.log($(`#emoji-row-${row} > .box-${col}`));
                $(`#emoji-row-${row} > .box-${col}`).text(chosenEmoji[emojiIndex]);
                emojiIndex++;
            }
        }
    }

    assignEmojiButtons()

}