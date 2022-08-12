const { Client, GatewayIntentBits, REST, Routes } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { token } = require("./config.json");
const rest = new REST({ version: '10' }).setToken(token);

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1007571386128158750"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === "ping") {
		await interaction.reply("Pong!");
	}
});

client.login(token);