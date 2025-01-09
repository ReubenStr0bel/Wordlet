animalEmoji = [1,2,3...];
foodEmoji = [1,2,3...];
faceEmoji = [1,2,3...];

rowCounter = 1;
colCounter = 1;
emojiIndex = 0
chosenEmoji = ___________ (this will come from a modal)

for (num of rows) {
	for (num of buttons) {
		$(`#emoji-row-${rowCounter} > .box-${colCounter}`).innerText = chosenEmoji[emojiIndex]
		emojiIndex++
		if (colCounter === $(".emoji .flex-container").length() -1) {
			rowCounter++
			colCounter = 0
		}
	}
}