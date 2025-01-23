/**
 * @jest-environment jsdom
 */
const { test, expect } = require("@jest/globals");
const { updateKeyboard } = require("../scripts/script.js");
const { describe } = require("yargs");
// const $ = require('https://code.jquery.com/jquery-3.7.1.js');

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
    expect(backgroundColor).toBe('#C8B653');
});