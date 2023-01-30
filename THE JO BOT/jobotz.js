require('../functionjo/settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const crypto = require('crypto')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const yts = require('yt-search')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const toMs = require('ms')
const jimp = require('jimp')
const baileys = require('@adiwajshing/baileys')
const { uptotelegra } = require('./lib/upload')
const { color, bgcolor, mycolor } = require('./lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/functions')
const { thejo } = require('./virtex/thejo')
const { jobot } = require('./virtex/jobot')
const { virusv1 } = require('./virtex/virusv1')
const { virusv2 } = require('./virtex/virusv2')
const { virusv3 } = require('./virtex/virusv3')
virgam = fs.readFileSync('./THE JO BOT/image/thejo.jpeg')
wm = `© 𝐏𝐑𝐈ᷨ𝐕ͦ𝐀ͭ𝐓𝐄`

module.exports = thejobot = async (thejobot, m, chatUpdate, store) => {
try {
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const content = JSON.stringify(m.message)
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await thejobot.decodeJid(thejobot.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const { chats } = m
        
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
        
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const groupMetadata = m.isGroup ? await thejobot.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	
if (!thejobot.public) {
if (!m.key.fromMe) return
}

if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }

if (m.sender.startsWith('212')) return thejobot.updateBlockStatus(m.sender, 'block')

        const isFoVid = (type === 'imageMessage' || type === 'videoMessage')
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
		
		const sendFileFromUrl = async (from, url, caption, m, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
            return thejobot.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
            }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
            return thejobot.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
            }
            if(mime.split("/")[0] === "image"){
            return thejobot.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
            return thejobot.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m })
            }
            if(mime.split("/")[0] === "audio"){
            return thejobot.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            }
            }
            
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
        userJid: thejobot.user.id,
        quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, thejobot.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)],
        type: 'append'
        }
        thejobot.ev.emit('messages.upsert', msg)
        }
        
        try {
        ppuser = await thejobot.profilePictureUrl(m.sender, 'image')
        } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        ppnyauser = await getBuffer(ppuser)
        
        const reply = async(teks) => {
		try {
        ppuser = await thejobot.profilePictureUrl(m.sender, 'image')
        } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        userpp = await getBuffer(ppuser)
        thejobot.sendMessage(m.chat, { text: teks, contextInfo:{ 
        "forwardingScore":999,
        "isForwarded":true, 
        "mentionedJid": [m.sender], 
        "externalAdReply" : { 
        "title" : `Hallo Kak`, 
        "body" : `Mampir Website Di Bawah Yaa`, 
        "previewType" : "PHOTO", 
        "thumbnailUrl" : ``, 
        "thumbnail" : userpp, 
        "sourceUrl": `https://youtube.com/@thejobot2393`}}}, 
        { quoted: m })
        }
        
const generateProfilePicture = async(buffer) => {
const jimp_1 = await jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, jimp.AUTO) : jimp_1.resize(jimp.AUTO, 650)
const jimp_2 = await jimp.read(await resz.getBufferAsync(jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(jimp.MIME_JPEG)
}
}

tosend = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
let cekno = await thejobot.onWhatsApp(tosend)

const fgamjo = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${thejo}`, 
"jpegThumbnail": fs.readFileSync(`./THE JO BOT/image/thejo.jpeg`)
} 
} 
}

const fdocjo = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${virusv3}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

const fkonjo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {})}, message: { "contactMessage":{"displayName": `© ${thejo} ${virusv3}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN: THE JO BOT\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}

const paijo = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
contextInfo: { externalAdReply:{title:`${wm}`,body: `${wm} \n${thejo}`, previewType:"PHOTO", showAdAttribution: true, thumbnail: virgam,sourceUrl:`https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`, thumbnail: virgam,
}}, quoted: fkonjo
}

        const fakeYete = async(teks) => {
        thejobot.sendMessage(m.chat, { text : teks, mentions: await thejobot.parseMention(teks), contextInfo : {
        "forwardingScore":999,
        "isForwarded":true, 
        "mentionedJid": [m.sender],
        "externalAdReply": {
        "title": `Hai Kak ${pushname}👋🏻`, 
        "mediaType": 2, 
        "thumbnailUrl": "https://telegra.ph/file/313cd5e07455d25a8db88.jpg",
        "previewType": "VIDEO",
        "mediaUrl": `https://youtu.be/@thejobot2393`}}},
        { quoted: m })
        }
        
        const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        async function buttonnya(teks) {
        const buttonsDefault = [
        { 
        callButton: { 
        displayText: `Nomor Telepon Owner`, 
        phoneNumber: `${nomerOwner}` 
        } 
        },
        {
        urlButton: {
        displayText: 'WhatsApp Creator',
        url: `${nomorowner}`
        }
        },
        { 
        urlButton: { 
        displayText: `Copy Kak`, 
        url: `https://www.whatsapp.com/otp/copy/${nomorowner}`
        }
        },
        { 
        quickReplyButton: { 
        displayText: `Owner Bot`, 
        id: `.owner`
        }
        }]                 
        const buttonMessage = { 
        text: teks, 
        footer: "© BOT WHATSAPP 2023", 
        templateButtons: buttonsDefault, 
        image: {url: ppnyauser}                                   
        }
        return thejobot.sendMessage(from, buttonMessage)
        }
        
        function randomNomor(min, max = null) {
        if (max !== null) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        } else {
        return Math.floor(Math.random() * min) + 1
        }
        }
        function monospace(string) {
        return '```' + string + '```'
        }

switch (command) {

case 'menu': {
menu_nya = `
┏━━━━━━━━━━━━━━━━━━┓
┃ ┏━━━━━━━━━━━━━━━━┓
┃ ┃ ╭┈────────────╮
┃ ┃ ┃     𝐌𝐄𝐍𝐔_𝐍𝐘𝐀  
┃ ┃ ╰┈────────────╯
┃ ┗━━━━━━━━━━━━━━━━┛
┣━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓 ݊⃟̥⃝̇݊⃟╾━━━•
┃ ╭━━━━━━━━━━━━━━╮
┃ ┃
┃ ╰━━━━━━━━━━━━━━╯
┣━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓 ݊⃟̥⃝̇݊⃟╾━━━•
┃ ╭━━━━━━━━━━━━━━╮
┃ ┃
┃ ╰━━━━━━━━━━━━━━╯
┣━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓 ݊⃟̥⃝̇݊⃟╾━━━•
┃ ╭━━━━━━━━━━━━━━╮
┃ ┃
┃ ╰━━━━━━━━━━━━━━╯
┣━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓 ݊⃟̥⃝̇݊⃟╾━━━•
┃ ╭━━━━━━━━━━━━━━╮
┃ ┃
┃ ╰━━━━━━━━━━━━━━╯
┣━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓 ݊⃟̥⃝̇݊⃟╾━━━•
┃
┗━━━━━━━━━━━━━━━━━━┛
▰▱▰▱▰▱▰▱▰▱▰▱▰▱

╭━━━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐏𝐑𝐈𝐕𝐀𝐓𝐄 ݊⃟̥⃝̇݊⃟╾━━━━━╮
┃ ╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•𝐌𝐄𝐍𝐔_𝐍𝐘𝐀•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╯
┣━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓 ݊⃟̥⃝̇݊⃟╾━━━•
┃╭━━━━━━━━━━━━━━━━╾•
┃┃     ݊⃟̥⃝̇݊⃟╾•𝐌𝐄𝐍𝐔_𝐍𝐘𝐀•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╾•
┃╭━━━━━━━━━━━━━━━━╾•
┃│⃟͙⃝̇݊݊⃟ ⃟•╾
┃│⃟͙⃝̇݊݊⃟ ⃟•╾
┃│⃟͙⃝̇݊݊⃟ ⃟•╾
┃│⃟͙⃝̇݊݊⃟ ⃟•╾
┃│⃟͙⃝̇݊݊⃟ ⃟•╾
┃│⃟͙⃝̇݊݊⃟ ⃟•╾
┃│⃟͙⃝̇݊݊⃟ ⃟•╾
┃│⃟͙⃝̇݊݊⃟ ⃟•╾
┃│⃟͙⃝̇݊݊⃟ ⃟•╾
┃╰━━━━━━━━━━━━━━━━╾•
╰━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓 ݊⃟̥⃝̇݊⃟╾━━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱

╭━━━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐏𝐑𝐈𝐕𝐀𝐓𝐄 ݊⃟̥⃝̇݊⃟╾━━━━━╮
┃ ╭━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │  ݊⃟̥⃝̇݊⃟╾•𝐌𝐄𝐍𝐔_𝐍𝐘𝐀•╼⃟݊⃟̥⃝̇݊݊⃟   
┃ ┃ ╰┈────────────╯
┃ ╰━━•›ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙‹•━━╯
┣━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓 ݊⃟̥⃝̇݊⃟╾━━━•
┃╭━━━━━━━━━━━━━━━━╾•
┃┃    ݊⃟̥⃝̇݊⃟╾•𝐌𝐄𝐍𝐔_𝐍𝐘𝐀•╼⃟݊⃟̥⃝̇݊݊⃟   
┃╰━━━━━━━━━━━━━━━━╾•
┃╭━━━━━━━━━━━━━━━━╾•
┃│᭄⃟ꪶ⃟•╾ 
┃│᭄⃟ꪶ⃟•╾
┃│᭄⃟ꪶ⃟•╾ 
┃│᭄⃟ꪶ⃟•╾ 
┃│᭄⃟ꪶ⃟•╾ 
┃│᭄⃟ꪶ⃟•╾
┃│᭄⃟ꪶ⃟•╾ 
┃│᭄⃟ꪶ⃟•╾ 
┃╰━━━━━━━━━━━━━━━━╾•
╰━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓 ݊⃟̥⃝̇݊⃟╾━━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱

╭━━❍𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓_𝐕𝟗❍━━╮
┃ ╭━━━━━━━━━━━━━━━━╮
┃ ┃ ╭┈────────────╮
┃ ┃ │❍ 𝐌𝐄𝐍𝐔_𝐍𝐘𝐀 ❍ 
┃ ┃ ╰┈────────────╯
┃ ╰━━━━━━━━━━━━━━━━╯
┣━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓 ݊⃟̥⃝̇݊⃟╾━━━•
┃╭━━━━━━━━━━━━━━━━╾•
┃┃    ❍ 𝐌𝐄𝐍𝐔_𝐍𝐘𝐀 ❍ 
┃╰━━━━━━━━━━━━━━━━╾•
┃╭━━━━━━━━━━━━━━━━╾•
┃│⃟❍➢
┃│⃟❍➢
┃│⃟❍➢
┃│⃟❍➢
┃│⃟❍➢ 
┃│⃟❍➢
┃│⃟❍➢ 
┃│⃟❍➢ 
┃╰━━━━━━━━━━━━━━━━╾•
╰━━━╼⃟݊⃟̥⃝̇݊݊⃟ 𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓 ݊⃟̥⃝̇݊⃟╾━━━╯
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱

© 𝐓𝐇𝐄_𝐉𝐎_𝐁𝐎𝐓
`
thejobot.sendMessage(m.chat, { image: thumb,  
"contextInfo": {
"externalAdReply": {
"title": `©⏤͟͟͞𝐓𝐇𝐄 𝐉𝐎 𝐁𝐎𝐓`,
"body": wm,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://youtube.com/channel/UC-wt99jFVc-zXMkxKRDZ56w`,
"thumbnail": virgam
}}, caption: menu_nya }, {quoted: m, contextInfo:{}})
}
break

case 'infogempa':
fetchJson(`https://saipulanuar.ga/api/info/gempa?apikey=jPHjZpQF`)
.then(xg =>{
reply(`*INFO GEMPA*

*tanggal:* ${xg.result.tanggal}
*jam:* ${xg.result.jam}
*datetime:* ${xg.result.datetime}
*coordinates:* ${xg.result.coordinates}
*lintang:* ${xg.result.lintang}
*bujur:* ${xg.result.bujur}
*magnitude:* ${xg.result.magnitude}
*kedalaman:* ${xg.result.kedalaman}
*wilayah:* ${xg.result.wilayah}
*potensi:* ${xg.result.potensi}
*dirasakan:* ${xg.result.dirasakan}`)
})
break

//Disini tempat kalian tambahin case//


default:
if (budy.startsWith('=>')) {
if (!isCreator) return reply(krmd.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(krmd.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!isCreator) return reply(krmd.owner)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
if (budy.startsWith('$')){
if (!isCreator) return reply(krmd.owner)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})