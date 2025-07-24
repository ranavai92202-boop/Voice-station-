module.exports.config = {
  name: "tag",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Shahadat Islam",
  description: "Group এ সবাইকে 10 বার mention করার কমান্ড",
  commandCategory: "group",
  usages: "/sobai",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const threadID = event.threadID;
  const threadInfo = await api.getThreadInfo(threadID);
  const mentions = [];
  const memberIDs = threadInfo.participantIDs;

  for (let id of memberIDs) {
    if (id != api.getCurrentUserID()) {
      mentions.push({
        tag: "@everyone",
        id: id
      });
    }
  }

  const message = {
    body: `📢 @everyone\n\nসবাই চিপা থেকে বের হও🐸`,
    mentions
  };

  
  for (let i = 0; i < 10; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    api.sendMessage(message, threadID);
  }
};
