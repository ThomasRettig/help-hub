const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: ["Guilds", "GuildMessages", "MessageContent"] });
const { token } = require("./config.json");
const { triggers } = require("./blacklist.json");

client.on("ready", async () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity("Hi", {
		type: "LISTENING",
	});
});

client.on("messageCreate", async (message) => {
	if (message.author.bot) return false;
	if ((message.content.includes("kill")) || (message.content.includes("KILL")) || (message.content.includes("die")) || (message.content.includes("DIE"))) {
		message.reply("GO GET SOME HELP");
	}
});

client.login(token);
