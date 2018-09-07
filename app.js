const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const Text = require('./text/text');

require('dotenv').config();

const gameShortName = 'nCent'
const gameUrl = 'http://'

const markup = Extra.markup(
    Markup.inlineKeyboard([
        Markup.gameButton('Create Wallet'),
        Markup.urlButton('Integration with BUTTON', 'www.buttonwallet.com')
    ])
)

const bot = new Telegraf(process.env.BOT_TOKEN)
// bot.start(({ replyWithGame }) => replyWithGame(gameShortName))
// bot.command('foo', ({ replyWithGame }) => replyWithGame(gameShortName, markup))
// bot.gameQuery(({ answerGameQuery }) => answerGameQuery(gameUrl))
bot.startPolling()

bot.hears(/start/i, ({ reply }) => {
    return reply(Text.keyboards.start.msg, Markup
        .keyboard(Text.keyboards.start.kbd)
        .resize()
        .extra()
    )
});

bot.hears(Text.keyboards.start.kbd[0][0], ({ reply }) => {
    return reply(Text.keyboards.wallet.msg, Markup
        .keyboard(Text.keyboards.wallet.kbd)
        .oneTime()
        .resize()
        .extra()
    )
})

bot.hears(Text.keyboards.wallet.kbd[0][0], ({ replyWithGame }) => replyWithGame(gameShortName, markup))
bot.gameQuery(({ answerGameQuery }) => answerGameQuery(gameUrl))