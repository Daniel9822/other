let handler = async (m, { conn }) => {
let emot = pickRandom(["🎃", "❤", "😘", "😍", "💕", "😎", "🙌", "⭐", "👻", "🔥","🤖","🧛‍♀️","🧟‍♂️","🤌","👎","🤰","🤦‍♂️","🏃","👩‍❤️‍👨","🥷🏼","🧙🏼‍♂️","🖕🏾"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
}})}
handler.customPrefix = /(daniel|Daniel|Hola|ola|hola|pain|Pain|Grupo|grupo)/i
handler.command = new RegExp
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
