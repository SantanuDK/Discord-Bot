const mySecret = process.env['BOT_TOKEN']
const { Client } = require("discord.js");
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});
const getUser = require("./getUser");
const {runjs} = require("./run.js")

const prefix = "-";

client.on("ready", () => {
  console.log("Bot is online!");
});


client.on("messageCreate", async (message) => {
  const args = message.content.slice(prefix.length).trim().split(/\s+/);
  const command = args.shift().toLowerCase();
  client.user.setActivity("Use &help",  { type: 'PLAYING'});

  if (command === "scholarrole") {
    if (message.member.roles.cache.has("904064116736557136")) {
      return getUser.myUser(message, args, command);
    } else {
      message.channel.send("You do not have permission to use this command");
    }
  } else if (command === "removerole") {
    if (message.member.roles.cache.has("904064116736557136")) {
      getUser.myUser(message, args, command);
    } else {
      message.channel.send("You do not have permission to use this command!");
    }
  }
});
client.on("messageCreate", async (message) => {
  if (message.content === "&help") {
    message.channel.send(
      "To Add the scholar role use '-scholarrole (DiscordId)'"
    );
    message.channel.send(
      "To Remove the scholar role use '-removerole (DiscordId)'"
    );
  }
});

client.login(mySecret);

