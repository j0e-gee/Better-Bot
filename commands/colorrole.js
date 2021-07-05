module.exports = {
    name: 'colorrole',
    aliases: ['reactionrole', 'reactrole', 'cr'],
    permissions: ["ADMINISTRATOR"],
    description: "Sets up a color role message!",
    async execute(client, message, cmd, args, Discord, profileData) {
     if (message.member.id != "473850297702285322") return message.channel.send(`To prevent errors, contact Joe before running this command.`);
        const channel = '849824394640359424';

        const blackColorRole = message.guild.roles.cache.find(role => role.name === "Color - Black");
        const redColorRole = message.guild.roles.cache.find(role => role.name === "Color - Red");
        const yellowColorRole = message.guild.roles.cache.find(role => role.name === "Color - Yellow");
        const greenColorRole = message.guild.roles.cache.find(role => role.name === "Color - Green");
        const purpleColorRole = message.guild.roles.cache.find(role => role.name === "Color - Purple");
        const whiteColorRole = message.guild.roles.cache.find(role => role.name === "Color - White");

        const blackColorEmoji = '⚫'
        const redColorEmoji = '🔴'
        const yellowColorEmoji = '🟡'
        const greenColorEmoji = '🟢'
        const purpleColorEmoji = '🟣'
        const whiteColorEmoji = '⚪'

        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setFooter(`Bot created by j0egee#0001`, "https://cdn.discordapp.com/attachments/845366607080456265/861746867008569384/Untitled_Artwork_3.png")
        .setTitle('Choose a color you want!')
        .setDescription('\n*Remove your reaction to remove the color role.*\n\n'
            + `${blackColorEmoji} for ${blackColorRole}!\n`
            + `${redColorEmoji} for ${redColorRole}!\n`
            + `${yellowColorEmoji} for ${yellowColorRole}!\n`
            + `${greenColorEmoji} for ${greenColorRole}!\n`
            + `${purpleColorEmoji} for ${purpleColorRole}!\n`
            + `${whiteColorEmoji} for ${whiteColorRole}!`);


    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(blackColorEmoji);
    messageEmbed.react(redColorEmoji);
    messageEmbed.react(yellowColorEmoji);
    messageEmbed.react(greenColorEmoji);
    messageEmbed.react(purpleColorEmoji);
    messageEmbed.react(whiteColorEmoji);

    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {

            if (reaction.emoji.name === blackColorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(blackColorRole);
            }
            if (reaction.emoji.name === redColorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(redColorRole);
            }
            if (reaction.emoji.name === yellowColorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(yellowColorRole);
            }
            if (reaction.emoji.name === greenColorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(greenColorRole);
            }
            if (reaction.emoji.name === purpleColorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(purpleColorRole);
            }
            if (reaction.emoji.name === whiteColorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(whiteColorRole);
            }
        } else {
            return;
        
        }
    });

    client.on('messageReactionRemove', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {
            
            if (reaction.emoji.name === blackColorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(blackColorRole);
            }
            if (reaction.emoji.name === redColorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(redColorRole);
            }
            if (reaction.emoji.name === yellowColorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowColorRole);
            }
            if (reaction.emoji.name === greenColorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(greenColorRole);
            }
            if (reaction.emoji.name === purpleColorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(purpleColorRole);
            }
            if (reaction.emoji.name === whiteColorEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(whiteColorRole);
            }
        } else {
            return;
        }
    });

    }
}