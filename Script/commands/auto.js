module.exports = {
 config:{
 name: "autodl",
 version: "0.0.2",
 hasPermssion: 0,
 credits: "SHAON",
 description: "auto video download",
 commandCategory: "user",
 usages: "",
 cooldowns: 5,
},
run: async function({ api, event, args }) {},
handleEvent: async function ({ api, event, args }) {
 const axios = require("axios")
 const request = require("request")
 const fs = require("fs-extra")
 const content = event.body ? event.body : '';
 const body = content.toLowerCase();
 const { alldown } = require("shaon-videos-downloader")
 if (body.startsWith("https://")) {
 api.setMessageReaction("⚠️", event.messageID, (err) => {}, true);
const data = await alldown(content);
 console.log(data)
 let Shaon = data.url;
 api.setMessageReaction("🍼", event.messageID, (err) => {}, true);
 const video = (await axios.get(Shaon, {
 responseType: "arraybuffer",
 })).data;
 fs.writeFileSync(__dirname + "/cache/auto.mp4", Buffer.from(video, "utf-8"))

 return api.sendMessage({
 body: `🔥🚀 —͟͟͞͞𝐕𝐨𝐢𝐜𝐞 𝐒𝐭𝐚𝐭𝐢𝐨𝐧 𝐁𝐨𝐭 🔥💻 
📥⚡𝗔𝘂𝘁𝗼 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗿⚡📂
🎬  𝗧𝗶𝘁𝗹𝗲: ${data.title || "N/A"}\n`,
 attachment: fs.createReadStream(__dirname + "/cache/auto.mp4")

 }, event.threadID, event.messageID);
 }
}
}
