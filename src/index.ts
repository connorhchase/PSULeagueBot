import * as Discord from "discord.js";

const bot: Discord.Client = new Discord.Client();
let Channel: Discord.Channel = new Discord.Channel(bot, Discord.Message);

bot.on("ready", () => {
        console.log("Bot On")
})

bot.login("");

bot.on("message", message => {
});