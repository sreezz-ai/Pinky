const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const request = require('request');
const got = require("got");


let wk = Config.WORKTYPE == 'private' ? true : false

Asena.addCommand({pattern: 'qr ?(.*)', fromMe: wk, desc: 'Convert text to qr' }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage('conVerting');

    var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Coded by alpha',quoted: message.data})

}));

