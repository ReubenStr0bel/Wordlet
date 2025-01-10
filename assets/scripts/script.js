// Emojis taken from emojipedia
const animalEmoji = ['🐯','🐳','🐻','🦙','🦭','🦘','🦑','🐼','🐙','🐨','🦊','🦝','🐓','🦚','🦩','🐬','🐝','🦈','🪼','🐧','🦆','🐡','🦉','🦔']
const foodEmoji = ['🥑','🍫','🍒','🍉','🥦','🍆','🍊','🍬','🫐','🥕','🍋','🫑','🍌','🍍','🥬','🍎','🍇','🍑','🥪','🌶️','🍕','🧀','🍔','🍩']
const faceEmoji = ['😀','🤩','😜','😁','🤑','😂','🥰','🤔','🤤','🥳','😶‍🌫️','😴','🥶','😰','🥹','😡','😑','👿','🤗','😚','😎','🙃','🤒','😫']

// console.log($("#emoji-buttons").children());

emojiIndex = 0
function assignEmojiButtons() {
    for (let row = 1; row < 4;  row++) {
        for (let col = 1; col !== $(`#emoji-row-${row}`).children().length; col++) {
            console.log($(`#emoji-row-${row} > .box-${col}`));
            $(`#emoji-row-${row} > .box-${col}`).text(animalEmoji[emojiIndex]);
            emojiIndex++;
        }
    }
}

assignEmojiButtons()