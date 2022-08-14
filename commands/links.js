const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("links")
		.setDescription("Get links to mental health resources"),
	async execute(interaction) {
		await interaction.reply("“If I am feeling suicidal” https://www.sos.org.sg/get-help/if-i-am-feeling-suicidal");
	},
};
