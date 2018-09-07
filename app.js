const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');
const Text = require('./text.json');
const Keyboard = require('./keyboard/keyboard');

require('dotenv').config();

const gameShortName = 'keypair'
// let gameUrl = '';

const markup = Extra.markup(
    Markup.inlineKeyboard([
        Markup.gameButton('Create account'),
        // Markup.urlButton('text', 'www')
    ])
)

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.startPolling()

bot.hears(/start/i, (ctx) => ctx.replyWithGame(gameShortName, markup));

// bot.hears(Text.keyboards.start.kbd[0][0], ({ reply }) => {
//     return reply(Text.keyboards.wallet.msg, Markup
//         .keyboard(Text.keyboards.wallet.kbd)
//         .oneTime()
//         .resize()
//         .extra()
//     )
// })

bot.gameQuery((ctx) => ctx.answerGameQuery('http://23.100.12.138:3000/'+ctx.from.id+'/keys.html'))