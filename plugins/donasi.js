let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0882-3734-9850]
│ •  [0882-3734-9850]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
