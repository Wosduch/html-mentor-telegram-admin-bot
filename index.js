const { Telegraf } = require("telegraf");
const fs = require("fs");
const token_obj = JSON.parse(fs.readFileSync("token.json"));

const bot = new Telegraf(token_obj.token);

bot.start((ctx) => {
    ctx.reply("Привет!").then(() => {
        ctx.reply("Я - админ-бот для этого чата. Пока что я ничего не умею. А еще я был бы очень рад, если бы кто-нибудь предоставил бесплатный сервер для меня.\r\n \r\n По всем предложениям писать сюда: https://github.com/Wosduch/html-mentor-telegram-admin-bot/issues");
    })
});