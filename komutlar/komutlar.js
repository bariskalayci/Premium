﻿const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    try {
        await message.channel.send(`Komutlar: \n${client.commands.map(props => `\`${props.help.name}\``).join(" | ")}`);
    } catch (e) {
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 4
};

module.exports.help = {
  name: 'yardım',
  kategori: 'genel',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};