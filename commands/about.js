const Discord = require('discord.js');
const pfp = 'https://i.imgur.com/0HQORDD.png';
module.exports = {
    name: 'about',
    description: 'Gives information about the bot.',
    cooldown: 1.5,
    guildOnly: true,
    run: async(client, message, args) =>{

        const target = message.mentions.members.first()

        if(target || args[0]){
            const ErrorLOL = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> The command failed")
            .setColor("#ff6961")
            .setFooter('Ticket System * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(ErrorLOL)
        }

        const embed = new Discord.MessageEmbed()
        .setAuthor('Ticket System', pfp)
        .setDescription('The bot is coded in JavaScript.')

        .addFields(
            { name: 'Creator', value: 'Squshu' },
            { name: 'Member Count', value: `${client.guilds.cache.size}`},
        )
        .addField('Github', 'https://github.com/emboxity/embox-bot')
        .addField('Source Code', 'https://github.com/emboxity/Ticket-System', true)
        .setFooter('Ticket System * made by shiba#2254',client.user.displayAvatarURL())

        message.channel.send(embed)



        
        }}
