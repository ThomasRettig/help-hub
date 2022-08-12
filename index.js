const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { token, FILTER_LIST } = require("./config.json");

client.login(token);

client.on("message", async (message) => {
	message.channel.sendMessage("GET THAT THE FUCK OUT OF HERE");
});
