animalEmoji = ['🐯','🐳','🐻','🦙','🦭','🦘','🦑','🐼','🐙','🐨','🦊','🦝','🐓','🦚','🦩','🐬','🐝','🦈','🪼','🐧','🦆','🐡','🦉','🦔']
foodEmoji = ['','','','','','','','','','','','','','','','','','','','','','','','']
faceEmoji = ['','','','','','','','','','','','','','','','','','','','','','','','']

// console.log($("#emoji-buttons").children());

rowCounter = 1;
colCounter = 1;
emojiIndex = 0

function assignEmojiButtons() {
    for (let row = 1; row > 3;  row++) {
        for (let col = 1; col === $(".emoji .flex-container").children().length;  col++) {
            console.log(`#emoji-row-${rowCounter} > .box-${colCounter}`)
            $(`#emoji-row-${rowCounter} > .box-${colCounter}`).innerText = animalEmoji[emojiIndex];
            emojiIndex++;
            colCounter++;
        }
        rowCounter++;
        colCounter = 1;
    }
}
