const { EmbedBuilder } = require("discord.js");

// Note: If you find an embed doesn't look as it should,
// you likely need more parameters here.
function createEmbed({
    title,
    description,
    color,
    fields,
    thumbnailUrl,
    imageUrl,
    titleUrl,
}) {
    const embed = new EmbedBuilder();

    if (title) {
        embed.setTitle(title);
    }

    if (description) {
        embed.setDescription(description);
    }

    if (color) {
        embed.setColor(color);
    }

    if (fields) {
        fields.forEach((field) =>
            embed.addFields({
                name: field.name,
                value: field.value,
                inline: field.inline || false,
            })
        );
    }

    if (thumbnailUrl) {
        embed.setThumbnail(thumbnailUrl);
    }

    if (imageUrl) {
        embed.setImage(imageUrl);
    }

    if (titleUrl) {
        embed.setURL(titleUrl);
    }

    return embed;
}

module.exports = { createEmbed };
