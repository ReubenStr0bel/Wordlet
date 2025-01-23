/**
 * @jest-environment jsdom
 */
const { test, expect } = require("@jest/globals");
const { updateKeyboard } = require("../scripts/script.js");
const $ = require("jquery"); // Import jQuery from npm

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

test('Background colour to change to green for a correct guess', () => {
    updateKeyboard('🐯', "correct-guess");
    const element = document.querySelector("#keyboard .box-1");
    const backgroundColor = element.css("background-color");
    expect(backgroundColor).toBe('rgb(200, 182, 83');
});