const { Client, GatewayIntentBits } = require('discord.js');
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("VoidCore™ Bot is running 💀");
});
app.listen(3000, () => console.log("Web server ready"));

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.TOKEN);
