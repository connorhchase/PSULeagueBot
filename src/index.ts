import * as Discord from "discord.js";

const bot: Discord.Client = new Discord.Client();
let Channel: Discord.Channel = new Discord.Channel(bot, Discord.Message);

bot.on("ready", () => {
        console.log("Bot On")
})

bot.login("NjMxNTc4NTI4MTYwMjg0Njcy.XaDlCg.hJKJDpGJIoZUHZe5OjcRwfK_Rsg");

bot.on("message", message => {
});