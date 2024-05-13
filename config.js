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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/s2SQvLVv/IMG-20240505-101623.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0V4QURyTlVjZUlNY1VVcFRKbWh4Y3hoVk9uQzhyS0VzV01BbFNGb3kzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDBOQ24rMjBGeVArUkZoOSszQW9EV0hpYlA2RlhsbW81VS9yckt2TjZDND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyS2VPMG9YOGM4bWR2YnBITVVOMGxRUjAxaHpSWTBMSXluTUVtVzlTNjN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJodUNMaHEyaVlpT2NZdFZUT2NxS20yeXlrOVZuYzNUU2NrN0xRWGhKdEhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdNekgxc2dBMjFrcW5ObzBjYnVHQlpGTFJvOUsyY3d1a2ZzdG0xTE50VkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVMVpKNjQ5dW5uK2dZalR1TURibnFoT0Fld29oY1BpVjNiL3o0ZW1LZzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5ReXBOYnRmaDZwUnF5Q0h5QzN6cU9lU3RaVEFaOFQ3bzRnMXg1ZWdYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjhVZGlLVitMZGhjODgxVjd6TmZYd202WlVCQUFDSjZBSVFpTzJLbHB6Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV4V0ozQmhzTjN1eWVwZDN5SDZ6cEhvU05XbUhYUUFTQkNlbHE0WmI0MkQrc3ZKeTFIYnhTZ2JmVXZPUHFRbnc0cDBpS3NYb0Jpd0RjeW5sWTU2VURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE3LCJhZHZTZWNyZXRLZXkiOiJIZVBXNU5zOFlXajd6VS9ZRGpHNG1iQ3BCaFIrWEpZRXV5NWJWdzdpZ0ZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxMU9BbTRRaFJGS3JGeHZORzA4eFdBIiwicGhvbmVJZCI6ImY1YjJkOWU4LTg4Y2ItNDE4My1iYzdiLTZkNTg2MjRiNmYxNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5aE9xS1g1UjhOZy9YQ2daY2ZFbzZLcDRDb3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidStWMTRVWnZXZERUSGZVcy9Kek53UnJGNENvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhYN0dLTUhHIiwibWUiOnsiaWQiOiI2MjgyMzEzMzYwMTUyOjYwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ill6RHJhZ29ucyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEhmMzh3SEVNdWhpTElHR0JrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiKzBpRDdrWUtSOFlxWnJOc243MTdzNUF2WkV5dlAxUzBoUTUvRzZ3aGd6Zz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRGxTeHhIcm9ETnQvQXd2TjBFVHJuOWhza3czVjR3UUlYVE5QZm9xUGRNTG9GbjVNY0h6NWFpK0ZNZitUcFROUU1UQzJLWGxHeVlkVEtXeU0wWXEvRGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImdBeVVWV0EybVBYSDhBNkIvcmFUdFlkbllRRmhVWDFobmlGdmgzVmJLeTJzTHc1UnJsdmdGNks4bU45ajV2RkpibmRMcUs4eWtjc0NuMUdiaktWOURRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjI4MjMxMzM2MDE1Mjo2MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmdElnKzVHQ2tmR0ttYXpiSis5ZTdPUUwyUk1yejlVdElVT2Z4dXNJWU00In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1NjA1NzIwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUU3ZSJ9"
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
