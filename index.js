const Discord = require("discord.js")

const client = new Discord.Client();

client.once('ready', () => {
	console.log("BeepBoop is online");
})


client.on('message', message =>{

	const args = message.content;
	const command = args.toLowerCase();

	if (command === 'beepboop lovetest'){
		var a = Math.floor(Math.random() * 101) + 0;
		var b = a.toString();
		message.channel.send(b + "% of love");
	} else if (command == "beepboop showdate"){
		var date = new Date();
		var result = date.getDate().toString() + "-" + date.getMonth().toString() + "-" + date.getFullYear().toString();
		message.channel.send(result);
	} else if (command == "beepboop sendsomegif"){
		var a = Math.floor(Math.random() * 3) + 0;
		if (a == 0){
			message.channel.send("https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif");
		} else if (a == 1){
			message.channel.send("https://media.giphy.com/media/Jd5YlXOVTcQtW/giphy.gif");
		} else if (a == 2){
			message.channel.send("https://media.giphy.com/media/emWySpOLFLUAM/giphy.gif");
		}
	} else if (command == "beepboop tellastory"){
		var a = Math.floor(Math.random() * 2) + 0;
		if (a == 0){
			message.channel.send('Once upon a time, there was a Beepboop-20 talking to a Beepboop-26. BeepBoop-20 said "beep beep boop beep". And the BeepBoop-26 said "boop beep beep boop beep".');
		} else {
			message.channel.send('"Why did you betray me Sabrina ?" - a man said. Then, the woman just reply with a bark, and let another person pet her.');
		}
	} else if (command == "beepboop saysomething"){
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
	} else if (command == "beepboop help"){
		message.channel.send("Beep boop beep boop, hello fellow human. \nTo use me, type: beepboop [command] \n\nCommands: \nsaysomething    tellastory    sendsomegif    lovetest    showdate    help \n\nSpecial commands: cf [side] \nhead    tail");
	} else if (command == "beepboop cf head"){
		var a = Math.floor(Math.random() * 2) + 0;
		if (a==0) {
			message.channel.send("The coin goes for the head \nYou win!");
		} else {
			message.channel.send("The coin goes for the tail \nYou lose!");
		}
	} else if (command == "beepboop cf tail"){
		var a = Math.floor(Math.random() * 2) + 0;
		if (a==0) {
			message.channel.send("The coin goes for the tail \nYou win!");
		} else {
			message.channel.send("The coin goes for the head \nYou lose!");
		}
	}
});


client.login("NzQ2Mzg3MTE4MDYyMDQzMjA2.Xz_lLA.MKnnUt7c1LLJ3F00FnyTfHZrVLM");