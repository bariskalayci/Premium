const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 5000);
client.user.setPresence({
        game: {
            name: `Cheeis | Sunucu Botu`,
            type: 'WATCHING'   //WATCHING = İZLİYOR        LISTINING = DİNLİYOR
        },
        status: 'online'   //online - Çevrimiçi           idle - Boşta          dnd - Rahatsız Etmeyin        ofline - Görünmez
    })
    console.log(`[star]: Bot Hazır, Komutlar Yüklendi`);
}


