const Discord = require("discord.js")

const client = new Discord.Client();

const prefix = "beepboop ";

client.once('ready', () => {
	console.log("BeepBoop is online");
})


client.on('message', message =>{

	if (!message.content.startsWith(prefix) || message.author.bot) return;


	const args = message.content.slice(prefix.length);
	const command = args.toLowerCase();

	console.log(command);


	if (command == "showdate"){
		var date = new Date();
		var special = date.getMonth() + 1;
		var result = date.getDate().toString() + "-" + special.toString() + "-" + date.getFullYear().toString();
		message.channel.send(result);
	} else if (command == "sendsomegif"){
		var a = Math.floor(Math.random() * 3) + 0;
		if (a == 0){
			message.channel.send("https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif");
		} else if (a == 1){
			message.channel.send("https://media.giphy.com/media/Jd5YlXOVTcQtW/giphy.gif");
		} else if (a == 2){
			message.channel.send("https://media.giphy.com/media/emWySpOLFLUAM/giphy.gif");
		}
	} else if (command == "tellastory"){
		var a = Math.floor(Math.random() * 2) + 0;
		if (a == 0){
			message.channel.send('Once upon a time, there was a Beepboop-20 talking to a Beepboop-26. BeepBoop-20 said "beep beep boop beep". And the BeepBoop-26 said "boop beep beep boop beep".');
		} else {
			message.channel.send('"Why did you betray me Sabrina ?" - a man said. Then, the woman just reply with a bark, and let another person pet her.');
		}
	} else if (command == "saysomething"){
		var a = Math.floor(Math.random() * 5) + 0;
		if (a == 0){
			message.channel.send('Beep boop boop beep');
		} else if (a == 1){
			message.channel.send('I love you <3');
		} else if (a == 2){
			message.channel.send('beep boop...');
		} else if (a == 3){
			message.channel.send("I'm Beepboop, bot of the cringe");
		} else if (a == 4){
			message.channel.send("Hello there, human thingy kinda stuffs...");
		}
	} else if (command == "help"){
		message.channel.send("Beep boop beep boop, hello fellow human. \nTo use me, type: beepboop [command] \n\nCommands: \nsaysomething    laugh    tellastory    sendsomegif    goodbye \nkill    hello    showdate    help    kiss \n\nSpecial commands: cf [side] \nhead    tail");
	} else if (command == "cf head"){
		var a = Math.floor(Math.random() * 2) + 0;
		if (a==0) {
			message.channel.send("The coin goes for the head \nYou win!");
		} else {
			message.channel.send("The coin goes for the tail \nYou lose!");
		}
	} else if (command == "cf tail"){
		var a = Math.floor(Math.random() * 2) + 0;
		if (a==0) {
			message.channel.send("The coin goes for the tail \nYou win!");
		} else {
			message.channel.send("The coin goes for the head \nYou lose!");
		}
	} else if (command == "goodbye") {
		message.channel.send("Goodbye fellow human!");
	} else if (command == "hello") {
		message.channel.send("Hello fellow human!");
	} else if (command == "iluvu") {
		message.channel.send("*Hug, hold hand, kiss");
	} else if (command == "laugh"){
		var a = Math.floor(Math.random() * 2) + 0;
		if (a == 0){
			message.channel.send('Lmao');
		} else {
			message.channel.send('LOL');
		}
	} else if (command.substr(0,8) == 'lovetest') {
		var a = Math.floor(Math.random() * 101) + 0;
		var b = a.toString();
		message.channel.send(b + "% of love");
	} else if (command.substr(0,4) == 'kill') {
		message.channel.send("https://media.giphy.com/media/el2RCIJ9tibK2JuEET/giphy.gif" + "\n" + command.slice(4) + " terminated!");
	} else if (command.substr(0,4) == 'kiss') {
		message.channel.send("https://media.giphy.com/media/W2KQ2RKAOCtvCTewdR/giphy.gif" + "\nMoah, " + command.slice(4));
	}
});


client.login(/*Enter token here*/);
