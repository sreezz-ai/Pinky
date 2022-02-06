const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const ANIME = "\n*~* ```ANIME 🍭 LIST``` *~*\n\n\n┎🫐 ```.loli```\n┃\n┝🫐 ```.wifu```\n┃\n┝🫐 ```.neko```\n┃\n┝🫐 ```.awoo```\n┃\n┝🫐 ```.yuri```\n┃\n┝🫐 ```.shinobu```\n┃\n┝🫐 ```.hentai```\n┃\n┗🫐 ```.megumin```\n\n"
const fs = require('fs');
const Ln = "Anime List"
const axios = require('axios');
const Config = require('../config');

let wk = Config.WORKTYPE == 'private' ? true : false

    Asena.addCommand({ pattern: 'loli ?(.*)', fromMe: wk,dontaddCommandList: true }, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg})
    
    }));
   
    
    Asena.addCommand({ pattern: 'wifu ?(.*)', fromMe: wk,dontaddCommandList: true }, (async (message, match) => {

       var ttinullimage = await axios.get(`https://bx-hunter.herokuapp.com/api/sfw/waifu?apikey=Ikyy69`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg})
    
    }));


    Asena.addCommand({ pattern: 'awoo ?(.*)', fromMe: wk,dontaddCommandList: true }, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-hunter.herokuapp.com/api/sfw/awoo?apikey=Ikyy69`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg})
    
    }));   
    
    
    Asena.addCommand({ pattern: 'shinobu ?(.*)', fromMe: wk,dontaddCommandList: true }, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-hunter.herokuapp.com/api/sfw/shinobu?apikey=Ikyy69`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg})
    
    }));
    
    Asena.addCommand({ pattern: 'hentai ?(.*)', fromMe: wk, onlyPm: true,dontaddCommandList: true }, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://hadi-api.herokuapp.com/api/hentai`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg})
    
    }));
    
    Asena.addCommand({ pattern: 'yuri ?(.*)', fromMe: wk, onlyPm: true,dontaddCommandList: true }, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://hadi-api.herokuapp.com/api/yuri`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg})
    
    }));

    Asena.addCommand({ pattern: 'megumin ?(.*)', fromMe: wk,dontaddCommandList: true }, (async (message, match) => {
        

        var ttinullimage = await axios.get(`https://bx-hunter.herokuapp.com/api/sfw/megumin?apikey=Ikyy69`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg})
    
    }));

    Asena.addCommand({ pattern: 'animelist ?(.*)', fromMe: wk, desc: "Anime Images list." }, (async (message, match) => {await message.client.sendMessage(message.jid,ANIME, MessageType.text);

    }));

    Asena.addCommand({ pattern: 'neko ?(.*)', fromMe: wk,dontaddCommandList: true }, (async (message, match) => {

       var ttinullimage = await axios.get(`https://bx-hunter.herokuapp.com/api/sfw/neko?apikey=Ikyy69`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg})
    
    }));
