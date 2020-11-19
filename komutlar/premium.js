const Discord = require('discord.js'); 
exports.run = async(client, message, args) => {

      const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("Cheeis Preminum", client.user.avatarURL)
.setColor("PURPLE")
.setDescription("Hep bizimle daha ileriye!")
 .addField("Bize Ulaşman Dileğiyle!","Kardeşim Gördüğün Gibi Bu Ahmak Komutu Kullanamıyorsun Değilmi? Gözümüzden Kaçmış Bize Ulaş Hemen Düzeltelim [Gel Güzel Kardeşim](https://discord.gg/hqcdc6RATJ)")
 .setFooter("Tüm Hakları Saklıdır © Cheeis Preminum", client.user.avatarURL)
 
 return message.channel.send(Embed)
}

  


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

module.exports.help = {
  name: 'premium',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
