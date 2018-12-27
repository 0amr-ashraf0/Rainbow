const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'sr')) {
      let role = message.guild.roles.find('name', 'Rainbow ')
    if(role) return message.channel.send(`يوجد بلفعل رتبه موجوده ضع البوت فوق الرتبه`)
  if(!role){
    rainbow =  message.guild.createRole({
   name: "Rainbow ",//اسم الرتبه 
   color: "#000000",//الون الاساسي للرنبو 
   permissions:[]//الرتبه المسموح بيها للرنبو  مثال MANAGE_ROLES ADMINISTRATOR   
 //نهايه الكود هنا
})

}
message.channel.send('تم اعداد رتبه الرنبو بنجاح 🌈')//if the step completed
}})

client.on('ready', () => {//لا تغير شي هنا
  setInterval(function(){//Codes Server
      client.guilds.forEach(g => {//Codes Server
                  var role = g.roles.find('name', 'Rainbow ');//اسم رتبه رنبو 
                  if (role) {//Codes Server
                      role.edit({color : "RANDOM"});//Codes Server
                  };
      });//Codes Server
  }, 5000);//سرعه تغير الالوان
})//Codes Server



client.login(process.env.BOT_TOKEN);
