

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│ Name      : Timmy
 ◈ •│
 ◈ •│ Place      : Earth
 ◈ •│
 ◈ •│ Gender    : ᴍᴀʟᴇ
 ◈ •│
 ◈ •│ Age       : 16
 ◈ •│
 ◈ •│ Status     : 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁
 ◈ •│
 ◈ •│ Phone     : wa.me/2349020899265
 ◈ •│
 ◈ •│ Github     : Dontstallkme
 ◈ •│
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ • *◆◆◆◆◆◆◆◆◆◆◆◆*

 ◈ •*[ • 𝙽𝙴𝙽𝙾 𝚇𝙼𝙳 - TEAM • ]*
 ◈ •*╭┈───────────────•*
 ◈ •*│  ◦* *▢➠𝙽𝙸𝙼𝙴𝚂𝙷𝙺𝙰 𝙼𝙸𝙷𝙸𝚁𝙰𝙼*
 ◈ •*│  ◦* *▢➠𝚂𝙷𝙰𝙵𝙾𝚆 𝙵𝚇*
 ◈ •*│  ◦* *▢➠𝙱𝙻𝙰𝙲𝙺𝚈*
 ◈ •*╰┈───────────────•*
 ◈ •*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇɴᴏ xᴍᴅ
 ◈ •*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
