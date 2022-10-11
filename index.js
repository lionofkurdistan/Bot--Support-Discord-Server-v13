const { Client, Message, MessageEmbed } = require('discord.js')
const config = require('./config.json')
const prefix = config.prefix
const token = process.env.token
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});

client.on('ready', () => {
console.log(`${client.user.tag}`)
 client.user.setActivity(`${prefix}help`, { type: 'STREAMING', url: 'https://www.twitch.tv/turbo' })  
});

const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch("Id channel vc") 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
});

// tax pro atuo
let autotax = ['id chats channel'];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(autotax.includes(message.channel.id)){

  var args = message.content.split(' ').slice(0).join(' ')
if(!args) return;
  
if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    
    let embed = new MessageEmbed()
      
.setAuthor(`TAX CALCULATOR`, client.user.avatarURL({ dynamic: true }))

   .setThumbnail(client.user.avatarURL({ dynamic: true }))   
      
.addFields([
    {
    name: `Amount: `,
    value: `${tax}`
},
  {
    name: `Tax: `, 
    value: `${tax2}`
  }
])
        .setColor(message.guild.me.displayColor)
  .setTimestamp()
    
   message.reply({embeds: [embed]}).catch((err) => {
   console.log(err.message)
   });    
  }
}); 

// tax pro bot prfix
client.on("messageCreate", async message => {
    if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) { 
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); 
    if(!args) return message.reply("**:rolling_eyes: Please enter a number**").catch((err) => {
   console.log(err.message)
   });
    
if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    
    let embed = new MessageEmbed()
      
.setAuthor(`TAX CALCULATOR`, client.user.avatarURL({ dynamic: true }))

   .setThumbnail(client.user.avatarURL({ dynamic: true }))   
      
.addFields([
    {
    name: `Amount: `,
    value: `${tax}`
},
  {
    name: `Tax: `, 
    value: `${tax2}`
  }
])
        .setColor(message.guild.me.displayColor)
  .setTimestamp()
    
   message.reply({embeds: [embed]}).catch((err) => {
   console.log(err.message)
   });    
  }
}); 

// text react auto and line
let embedline = ['id channel'];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(embedline.includes(message.channel.id)){   

  message.react("❤️")
  message.react("✨")
  
 let args = message.content.split(',')

 let embed = new MessageEmbed()
    
.setColor(message.guild.me.displayColor)
    .setImage(`link line`)
  
  message.channel.send({embeds: [embed]}).catch((err) => {
   console.log(err.message)
   })
   }
});

// cahts reple
client.on('messageCreate', message => {
  if (message.content.startsWith('text')) {
    return message.reply('text add')
  }
});

// react auto 
client.on("messageCreate", message => {
    if(message.channel.id == "id chats chann") {
        message.react("❤")
        message.react("💚")
    }
})

// send dm tag
client.on("messageCreate", async message => {
    if (message.author.bot) return;
if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'send')) {
      
if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`** :rolling_eyes: You don't have permissions **`)
      
let id = message.content.split(' ')[1]
      
let user = message.mentions.members.first() || message.guild.members.cache.get(id)
      
let argss = message.content.split(' ').slice(2).join(' ')
if (!user) return message.channel.send(`**:rolling_eyes: Please mention member or id **`)


if (!argss) return message.channel.send(`**:x: Please send something **`)

let attach = message.attachments.first()
if (attach) {


    user.send({content: argss, files: [attach]}).then(m => {
        message.channel.send(`**:white_check_mark: Done message sent **`)
    }).catch(err => {
        return message.channel.send(`**:x: Can't send message to this user**`)
    })
} else {
    user.send(argss).then(m => {
        message.channel.send(`**:white_check_mark: Done message sent **`)
    }).catch(err => {
        return message.channel.send(`**:x: Can't send message to this user**`)
    })
      }
    }
})

//nuke
client.on("messageCreate", Alex => {
  if(Alex.content.startsWith( 'text'))
Alex.delete().catch((err) => {
   console.log(err.message)
   });
}) 

client.login(token)
