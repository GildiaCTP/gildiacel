const { CommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",

  execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command) {
        interaction.reply({ content: "przestarzałe kommendy" });
      }
      command.execute(interaction, client);
    } else if (interaction.isButton()) {
      const role = interaction.guild.roles.cache.get("1019525737327366211");
      return interaction.member.roles.add(role).then((member) =>
        interaction.reply({
          content: `${role} został Ci przydzielony.`,
          ephemeral: true,
        })
      );
    } else {
      return;
    }
  },
};
