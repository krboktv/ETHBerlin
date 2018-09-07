const Markup = require('telegraf/markup');
const Text = require('./text.json');

let start_buttons = [
    [
        Markup.callbackButton('1', 'A1'),
        Markup.callbackButton('2', 'B1')
    ],
];

const start_keyboard = Markup.inlineKeyboard(start_buttons).extra();

module.exports = {
    start: start_keyboard
}