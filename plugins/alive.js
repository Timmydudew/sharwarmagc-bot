const { cmd } = require("../command");

cmd(
  {
    pattern: "alive",
    react: "🩵",
    desc: "Show bot status",
    category: "main",
    filename: __filename,
    fromMe: false,
  },
  async (malvin, mek, m, { reply }) => {
    try {
      const from = mek.key.remoteJid;

      await malvin.sendPresenceUpdate("recording", from);

      // Alive Image & Caption
      await malvin.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/l1si25.jpg",
          },
          caption: `sup nigga i am alive
  
𝗼𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 group -: https://chat.whatsapp.com/FpMtUBVLuEo3NMBtugtkop?mode=ems_copy_c
𝗚𝗶𝘁 𝗛𝘂𝗯 𝗥𝗲𝗽𝗼 -: dont bother

𝗢𝘄𝗻𝗲𝗿 -: https://wa.me/2349020899265?text=𝐇𝐈_SHARWARMA_BOT_𝐍𝐄𝐖_𝐔𝐒𝐄𝐑_𝐈_𝐍𝐄𝐄𝐃_𝐇𝐄𝐋𝐏🫡
          
*𝙸 𝙻𝙾𝚅𝙴 𝙰𝙻𝙻 𝚄𝚂𝙴𝚁𝚂 ❤️💪*  
*SHERE THIS ALIVE MSG AND SUP OURE DEVLOPERS*  
*PLZ JOIN OUR WHATSAPP GROUP*  
*SHARWARMA BOT `,
        },
        { quoted: mek }
      );

      // Delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Voice Message
      await malvin.sendMessage(
        from,
        {
          audio: {
            url: "https://files.catbox.moe/l1si25.jpg",
          },
          mimetype: "audio/mpeg",
          ptt: true,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.error("❌ Error in .alive command:", e);
      reply("❌ Error while sending alive message!");
    }
          })
