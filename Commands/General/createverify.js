const {EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, SlashCommandBuilder, CommandInteraction, PermissionFlagsBits} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('createverify')
    .setDescription('Ustaw kanał weryfikacji')
    .addChannelOption(option =>
        option.setName('channel')
        .setDescription('Wyślij osadzoną weryfikację na tym kanale')
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');
        const verifyEmbed = new EmbedBuilder()
        .setTitle("Weryfikacja")
        .setDescription('Kliknij przycisk nadole aby sie zweryfikować.')
        .setColor(0x1100ff)
        let sendChannel = channel.send({
            embeds: ([verifyEmbed]),
            components: [
                new ActionRowBuilder().setComponents(
                    new ButtonBuilder().setCustomId('✅').setLabel('✅').setStyle(ButtonStyle.Success),
                ),
            ],
        });
        if (!sendChannel) {
            return interaction.reply({content: 'Wystąpił błąd! Spróbuj ponownie później.', ephemeral: true});
        } else {
            return interaction.reply({content: 'Kanał weryfikacji został pomyślnie ustawiony!', ephemeral: true});
        }
    },
};