let myUser = async function (message, args, command) {
  let member = message.mentions.members.first();
  let memberId = args[0];
  if (Number(memberId)) {
    try {
      member = await message.guild.members.fetch(memberId);
    } catch {
      console.error("Error fetching member");
    }
  }
  if (!member)
    return message.channel.send(
      "Please Provide a valid Id of someone who is already in the server"
    );
  if (command === "scholarrole") {

    await member.roles.add("904062704564715603");
    message.channel.send(`${member.user.tag} has been given the Scholar role`);
  }

  if (command === "removerole") {
   
     
      await member.roles.remove("904062704564715603");
      message.channel.send(`The Scholarrole has beeen removed from ${member.user.tag}`);
  }
  
};

module.exports = { myUser };