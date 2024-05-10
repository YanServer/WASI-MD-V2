//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/G0fzSq4LWFXGZHkuIEPRen";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/x1xmqgpH/love-img.jpg";
global.devs = "6282313360152";
global.sudo = process.env.SUDO || "923135673658,923192173398";
global.owner = process.env.OWNER_NUMBER || "6282313360152";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUw2MVgyTXVZVUlNbFBKNFFZU2NudVVueDhUeDFrMGtSMkhuaGIyWlJIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWcveXB4VElOdThIK041N3Brc28xaG5IRURnakFRWENYbUV0aEttZDZEYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQlhXbldmWVdHaWRPOHlCR1pub2Jxbld5VVJxaSt1OFNMWEZPNUxaSzFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIya0U3RG84WWxDeFI5V1FZenRCejlDaWpwTm5LY1B1UUtoTk1wY29QWENVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPbnczTmFOd0VTOUxuUUJjcFhic1VEUHp3bDlLL0R0NGE5MGxrU2hKa009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpKUkdrQzMzaTFJNnUxQlRoYVg4c3ZRd2JZdDdFdkwrRjdISXdmZUc4M3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUdqZGs5ZG1VVUJvRGdQTVpBcytCK3RKUC9XTjhIc3RobWtNbnFIUnhtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1F0dnptRk9ZZXpUYTY3Y2lESExlUVQ3L0hRenVibFlzcHI4Q2JZblhHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5Pa0ZTWnM0V0FQejNmOUJkbG10WXJUWjNudzlnaWZLZVJYQktPTXNHS1Vxa0pDSkhhQ09vTHhOK0x0UWUrV2NyVW5UREthT3RSRXg4NEJ5K1ZHQmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6IlVsaGpRaDFrRUdMRkFtQWdud1FPMFU4R1A4bGtwc1JubW9HQlk1cFY4V2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkQ4UlVOMlJRU3M2MXdFTFNKbWMySkEiLCJwaG9uZUlkIjoiZmU4ZmNjMDEtZTQzMC00MmMxLWJiMjctZWZkOGEzNzJjNmY1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5rY1I3YTBDSC9WNVhDSkxhVWp6ZzlUS2pscz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzakFZaENHRzFvd3pST2lJbkd3WGNQQmZvUDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUktDQzcyUjUiLCJtZSI6eyJpZCI6IjYyODEyMTQ1NTI5NDI6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4oCOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZVN0OW9FRVBQKzlyRUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmTFVYczJLdkc1UzM1bzZ3MTFqTlFFekY1ZFFuZ3pRYkhYSmYwaHRUcVU0PSIsImFjY291bnRTaWduYXR1cmUiOiJwL1c3RVAyNEp4T3NCLzlPQ2JQSXY0dWZZbnFCRDVESHl4eDNpQmxaTVhqa3BDNndQMzhvOHhoWXQzc0FGM05nZ3RPQjdwOExZM1Y0L2lOdzhqbzVDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU3BRSSt1UEFheXRiZkZoK0pqRHN3NmxubmpGMUxyVGw1bGQ1OGZTb2xJMTBOeXRrS1NWemRxUVkvZWtUSU9DL0xtRXVvb2VRRlU2MFdTUFRmRnJFZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2MjgxMjE0NTUyOTQyOjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh5MUY3TmlyeHVVdCthT3NOZFl6VUJNeGVYVUo0TTBHeDF5WDlJYlU2bE8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTUzMjI3NTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0RzIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐀𝐑𝐘𝐀𝐍𝐊𝐈𝐍𝐆👑",
  author: process.env.PACK_AUTHER || "𝐅𝐑𝐄𝐄",
  packname: process.env.PACK_NAME || "𝐒𝐓𝐈𝐂𝐊𝐄𝐑",
  botname: process.env.BOT_NAME || "𝐘𝐀𝐍𝐁𝐎𝐓𝐙",
  ownername: process.env.OWNER_NAME || "𝐀𝐑𝐘𝐀𝐍",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "𝐀𝐑𝐘𝐀𝐍").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
