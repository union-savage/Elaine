require('../../../settings')
const axios = require('axios')
module.exports = {
    name: "repo",
    alias: ["elaina"],
    usage: `${prefa}repo`,
    desc: "Will send you details of our bot",
    react: "š„ŗ",
    
    category: "General",
    start: async (client, m, {
        command,
        prefix,
        text,
        args
    }) => {
let yup = [
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg',
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg',
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg',
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg',
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg',
            'https://telegra.ph/file/8eed1568a71b3b55dac05.jpg'
          ]
let nezuko = await axios.get('https://api.github.com/union-savage/Elaina-md')
let rae = yup[Math.floor(Math.random() * yup.length)]

var rr = `āØ _*Elaina*_  āØ\n\nš *Description:* ${nezuko.data.description}\n\n š *Repo Link:* ${nezuko.data.html_url} \n\n š  *Total Star:* ${nezuko.data.stargazers_count}\n\n š *Total Forks:* ${nezuko.data.forks} \n\n šš»āāļø *Tutorial:* https://www.youtube.com/watch?v=KqcOlvV8 \n`
await client.sendMessage(m.from,{image:{url:rae}, caption:rr},{quoted:m})
    }
}
