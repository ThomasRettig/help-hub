const { Client, EmbedBuilder } = require("discord.js");
const client = new Client({ intents: ["Guilds", "GuildMessages", "MessageContent"] }); // establish client intents
const { triggers } = require("./blacklist.json"); // import suicidal trigger words

// get environment secrets
const dotenv = require("dotenv");
dotenv.config();
const token = process.env.token;

// random messages
const randomGreeting = ["Hey", "Howdy", "Hey there", "Hi", "Hello"];

const randomSign = [
	"It seems like you are showing signs of suicidal ideation",
	"It looks like you’re suffering from depression",
	"It looks like you’re going through some tough times",
	"You seem to be having suicidal thoughts",
	"It seems like you are showing some suicidal thoughts"
];

const randomComfort = [
	"I want to let you know that you’re not alone",
	"I’m really sorry that you’re going through all of this — I really understand how hard it can be",
	"I know that life can be really difficult at times… But don’t fret — I’m here to help",
	"I really understand how you’re feeling right now… Don’t worry — we’re in this together",
	"I want you to know that there is light at the end of the tunnel — not all is lost"
];

client.login(token);

// set up
client.on("ready", async () => {
	console.log("Logged in as", "\x1b[33m", `${client.user.tag}!`, "\x1b[0m");
});

// main code
client.on("messageCreate", async (message) => {
	if (message.author.bot) return false; // prevent bot from scanning its own messages and declaring false positive
	if (
		message.content.includes(triggers[0]) ||
		message.content.includes(triggers[1]) ||
		message.content.includes(triggers[2]) ||
		message.content.includes(triggers[3]) ||
		message.content.includes(triggers[4]) ||
		message.content.includes(triggers[5]) ||
		message.content.includes(triggers[6]) ||
		message.content.includes(triggers[7]) ||
		message.content.includes(triggers[8]) ||
		message.content.includes(triggers[9]) ||
		message.content.includes(triggers[10]) ||
		message.content.includes(triggers[11]) ||
		message.content.includes(triggers[12]) ||
		message.content.includes(triggers[13]) ||
		message.content.includes(triggers[14]) ||
		message.content.includes(triggers[15]) ||
		message.content.includes(triggers[16]) ||
		message.content.includes(triggers[17]) ||
		message.content.includes(triggers[18]) ||
		message.content.includes(triggers[19]) ||
		message.content.includes(triggers[20]) ||
		message.content.includes(triggers[21]) ||
		message.content.includes(triggers[22]) ||
		message.content.includes(triggers[23]) ||
		message.content.includes(triggers[24]) ||
		message.content.includes(triggers[25]) ||
		message.content.includes(triggers[26]) ||
		message.content.includes(triggers[27]) ||
		message.content.includes(triggers[28]) ||
		message.content.includes(triggers[29]) ||
		message.content.includes(triggers[30]) ||
		message.content.includes(triggers[31]) ||
		message.content.includes(triggers[32]) ||
		message.content.includes(triggers[33]) ||
		message.content.includes(triggers[34]) ||
		message.content.includes(triggers[35]) ||
		message.content.includes(triggers[36]) ||
		message.content.includes(triggers[37]) ||
		message.content.includes(triggers[38]) ||
		message.content.includes(triggers[39]) ||
		message.content.includes(triggers[40]) ||
		message.content.includes(triggers[41]) ||
		message.content.includes(triggers[42]) ||
		message.content.includes(triggers[43]) ||
		message.content.includes(triggers[44]) ||
		message.content.includes(triggers[45]) ||
		message.content.includes(triggers[46]) ||
		message.content.includes(triggers[47]) ||
		message.content.includes(triggers[48]) ||
		message.content.includes(triggers[49]) ||
		message.content.includes(triggers[50]) ||
		message.content.includes(triggers[51]) ||
		message.content.includes(triggers[52]) ||
		message.content.includes(triggers[53]) ||
		message.content.includes(triggers[54]) ||
		message.content.includes(triggers[55]) ||
		message.content.includes(triggers[56]) ||
		message.content.includes(triggers[57]) ||
		message.content.includes(triggers[58]) ||
		message.content.includes(triggers[59]) ||
		message.content.includes(triggers[60]) ||
		message.content.includes(triggers[61]) ||
		message.content.includes(triggers[62]) ||
		message.content.includes(triggers[63]) ||
		message.content.includes(triggers[64])
	) {
		let greeting = randomGreeting[Math.floor(Math.random() * randomGreeting.length)];
		let comfort = randomComfort[Math.floor(Math.random() * randomComfort.length)];
		let sign = randomSign[Math.floor(Math.random() * randomSign.length)];
		let messageAuthor = message.author.toString();

		message.reply(`${greeting} ${messageAuthor} 👋\n**${sign}**. ${comfort}.`);

		const hotlineEmbed = new EmbedBuilder()
			.setTitle("Help is available.")
			.setDescription("Call 1-767 to speak to someone today.")
			.setImage("https://i.imgur.com/Zs8E4sp.png")
			.setFooter({ text: "We’re in this together 💪" });

		message.channel.send({ embeds: [hotlineEmbed] }); // send hotline embed
	}
});
