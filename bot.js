var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var rules, ruleString, gymsKey, gymsValue, raid;

//add bot to discord https://discordapp.com/oauth2/authorize?client_id=552241750928916496&scope=bot&permissions=0
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
	rules = require('fs');
	var array = rules.readFileSync('./rules.txt').toString().split("\n");
	ruleString = "";
	for(i in array) {
		ruleString += array[i].toString() + "\n";
	}
	array = rules.readFileSync('./gyms.txt').toString().split("\n");
	gymsKey = [];
	gymsValue = [];
	for(i in array) {
		if(i%2 == 0)
			gymsKey[i] = array[i];
		else
			gymsValue[i-1] = array[i];    
	}
	array = rules.readFileSync('./raids.txt').toString().split("\n");
	
	raid = [];
	for(i in array)
	{
		raid[i] = array[i];
	}	
});

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        cmd = cmd.toLowerCase();
        args = args.splice(1);
		if(cmd.trim() === 'rules')
		{
			bot.sendMessage({to: channelID, message: ruleString});
		}
		for(i in gymsKey)
		{
			if(cmd.trim() == gymsKey[i].toString().trim())
			{
				bot.sendMessage({to: channelID, message: '' + gymsValue[i].toString()});
			}
		}
		for(i in raid)
		{
			if(cmd.trim() == raid[i].trim())
			{
				var path = require('path');
				var filePath = path.join('./raids/', raid[i], '.txt');
				var message = "";
				var array = rules.readFileSync(filePath).toString().split("\n");
				for(i in array)
				{
					message += array[i];
				}
				bot.sendMessage({to: channelID, message: 'found it:: ' + message});
			}
		}
     }
});
