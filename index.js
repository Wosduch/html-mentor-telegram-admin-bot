const { Telegraf } = require("telegraf");
const fs = require("fs");
const token_obj = JSON.parse(fs.readFileSync("token.json"));

const bot = new Telegraf(token_obj.token);