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
global.gurl = process.env.GURL || "https://wa.me/6282313360152";
global.website = process.env.GURL || "https://wa.me/6282313360152";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/s2SQvLVv/IMG-20240505-101623.jpg";
global.devs = "6282313360152";
global.sudo = process.env.SUDO || "6282313360152";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUwrK3QvcU56V3doeW9HdSt5R3RNWjRUYmdWSzBQY3B5VWpTcXg3eXUwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjViOUV6NWlMMTBuSkxBWTdiMk9aRUU4QlRuOFpDQ3hRZjNvellQbTZtZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvR29WMzJKcytnc2pKU3BUcE1jNXFncldHZlphTFRQbUFUUFF1bU9YN0U4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1cnZNR2lzU0F6SDlrMDZPTEFkUlJlMHJwenhVR1FRM0dpZ2tNeWJvdno0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBMHJTeGlaSlpoWkNTcGJTUDZCSnBxT2J3Q25iZ3p6N3ErY081NHN0bEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdIOEp0V0c5amw5R1VRY0NLaHZJaVF6bTUxSGRwYWlKSE9mR21kSzU3bWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09lZEQreTQzUjYwNGpPNy9QRWFsZ1hMK0FXSW5MVUZvcVY1VlBpVTBIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkRLK2t0V2EvM2U3MERTSVUrWitwS0JOVE93azNCcWx6QXhHc0xueG1uYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZab1ZBU25OcDgvVnZRV0M2TkJsSlVlVWJLeUdzTktpcm1xN0p4anNXZ0hWenBLR3JzRXVET09xR2Z2QkVvY3JuTjhTUW1LbGxMdjUrMTRQSlZjekNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6ImM1bXVhcVFtd3V5MnVKUTNhbVc3RWNxMk9OTmVTL1lNODV6V0o3dUZlK3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InNwRERubUZjUXJ1WlV4bmc0U2Z4MVEiLCJwaG9uZUlkIjoiMWE0OTE4NmMtZjRkNC00Mzk4LThiMmMtYjYzNmE2OGE0OTBkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN2ZTFVSTh2R0ZDQzZ5QW5ML0FxVkVXYUpSTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSc2tKRThLWEZYd1MrZkV6UW5GdHpYVW5lcDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOFZGUDIxMUMiLCJtZSI6eyJpZCI6IjYyODIzMTMzNjAxNTI6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGh1bmRlciJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjdROEVFUTU2RFhzZ1lZTkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidlJDbWlSanNtVDYrTHlqd3YyZTJTeithWEEyZ0FNNmFnTUpQd2Eyb0VVVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidmJDcFN6L3BsNHhMTTBZZE9mWFRFcFpxaGxzbXB3K3pLeXJTMmJaUGIwQzRrUjVDR2FTK0VOVWRVWWhoaUtvWE9CUVFMcEQxN0dOM3dnZkZFM1FOQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6ImYxb2srR3duQTl6UGs5N3JhUSs0OVR5c2YwV2hNaEtUYU1NdDZkSDJ4dm4zczBPTTB2VnFSVkJnc3VBSGp6Z0dpdkFqMGJnZlFZU1NjYVZPSE5kNUJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjI4MjMxMzM2MDE1MjoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiMFFwb2tZN0prK3ZpOG84TDludGtzL21sd05vQURPbW9EQ1Q4R3RxQkZGIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE2ODk5OTU3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUttQiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐂𝐑𝐄𝐀𝐓𝐄𝐃-𝐁𝐘-𝐀𝐑𝐘𝐀𝐍𝐊𝐈𝐍𝐆👑",
  author: process.env.PACK_AUTHER || "𝐅𝐑𝐄𝐄",
  packname: process.env.PACK_NAME || "𝐒𝐓𝐈𝐂𝐊𝐄𝐑",
  botname: process.env.BOT_NAME || "𝐘𝐀𝐍𝐁𝐎𝐓𝐙",
  ownername: process.env.OWNER_NAME || "𝐀𝐑𝐘𝐀𝐍",
  errorChat: process.env.ERROR_CHAT || "6282313360152",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
