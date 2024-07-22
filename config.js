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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZmM2pTZElDMjVUY0xHSTBXZ2puYWZVZ2hpaDEyL25pTUdsM3E4UUEwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1ljVGcxNzhLRnFmWkNHaWE1MUdVQllFdVNjSkppVUhCMG5hYmhCNncyYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlR2VzVmwvN2lBWWZVamwyR2o3VnhXbDlRRWkzRlFNdDI0QmduS0cxZzFrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjWHlORWw0RXI3RUxUS0duc1pnOXgrMkNJVHUrTWhOOVE1bkVtVWpjdWs4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOc1lCUzN4Z2tscURQV0xSeFV3RWJnWVJudnd0WlJWbXhrODZKWVJ3R1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktWeUlKWWQ0Sy9Qdm4vWEdITWJkQ2JJUzAzZG0zUWZtZUZScGlFb2J1VVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtVeXFHSXhnSit2eTJyTW0rWTdrTFBINXBWR2Q0aUI5R0pnQkhDTE4xbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmw1Qmw0eFZqQ3lvNnY4UytjT21aSXZRUUVibWRtNEphemMzSUVPMmJRaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitTanlaVEhFUWdBcWVyczhtMTloSUVUSGxTSHNBb2RqK3RrQmZIMGFGdE9JSXVLaGFmaUI4TStNclFEbVJoVGkzRzNoZ0xSS0U5TWNIVHdaMmRza0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6ImEwS1U0NEZEdmJXUnY5dzR3UXNPTTdzQzdsWVJjSHRPazlyYm5IVkhzWDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZyZXd1Rkw4Um1HTE9YM2tDVmtuVkEiLCJwaG9uZUlkIjoiNjVjNzg4ODQtYzlhYy00NTM0LTg0M2MtY2Q2YTZiNThiNGZlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpPdklwdXJUOW9CNzQ4V0Q0VmJZaThkckxvOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIydHBjVlpSbUJsZDJXQm1IMFF1TGxrRDJ5Ykk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUtMU0hCRTYiLCJtZSI6eyJpZCI6IjYyODIzMTMzNjAxNTI6OTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQVlTWFNZQSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlQwK3FFQkVOZmI5N1FHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidTN6TWRGUGhRbmkyZlFlRTd4UTh1UnlsbEtZRnIweDRaYWNtTXpMd2lDOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU0ttdWNoYjZaMkkyaUh3TTdhNk5QN2pnVStnL01SRytRWGROR2c0Mkltejk2V0NIMVVEL2xYQmlGNVpkYklDcTY0MVE2NG9NdmEwRmJpcjNTY3JwQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjFkZ3NKYnVSUjNYbFBUeSswRUxsRVZNQ1B2dHpLY1did1JnZ2VvY0NIRnhVRGxSTkVQZkF2M29xZzVxYzdDR3dYUU1xOGd6WEZKbFZPZGdoMmFxdkRnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjI4MjMxMzM2MDE1Mjo5MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJidDh6SFJUNFVKNHRuMEhoTzhVUExrY3BaU21CYTlNZUdXbkpqTXk4SWd2In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNjI2MDgzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5XTiJ9"
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
