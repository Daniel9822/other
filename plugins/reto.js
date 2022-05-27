let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`*┌────「 TENGO UN RETO 」─*\n*“${pickRandom(global.bucine)}”*\n*└────「 PAIN-BOT 」─*`, m)
}
handler.help = ['reto']
handler.tags = ['games']
handler.customPrefix = /reto|Reto|juego|hasta|gracias/
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucine = [
"Pasa el pack de una hormiga",
"Dile a tus amigos que te vas a vivir a EU y mándame una captura de lo que te haya dicho",
"Mandale un audio al 8vo chat diciendole que quieres tener un hijo con el/ella",
"Escribe el nombre de tu crush",
"Debes de poner el nombre de mi creador en tu estado de WhatsApp, sin dar contexto",
"Envíame una fotografía tuya",
"Debes de dibujar en alguna parte de tu cuerpo el nombre de algún integrante del grupo, luego realiza una foto y envíala",
"Hazte una foto dándole un beso a una Televisión",
 "Dedicale una cancion a alguien del grupo",
"Escribe en tu estado de WhatsApp que te gusta comer tierra",
"Debes de poner la fotografía de un participante del grupo que sea del sexo opuesto al tuyo en tu perfil de WhatsApp durante 3 días 📸📸",
"Tienes que mandar un audio cantando la canción: Un pato que va cantando alegremente cua cua 🦆",
"Envía un mensaje a tu ex y dile todavía me gustas", "Envía un audio diciendo Bot hazme un hijo", 
"Dile a tu crush que la amas y pasa captura al grupo", "Envía un audio cantando", 
"Envía una foto en la que salgas tu sin taparte la cara ni nada", "Envía un video bailando", 
"Invita a personas que no conoces a jugar contigo y si pierden le devuelves el oro", 
"Elija algunos números aleatorios de sus contactos y envíeles un mensaje de texto con el mensaje 'Estoy embarazad@'.", 
"Di este travalenguas 'Podador que podas la parra, ¿qué parra podas? ¿Podas mi parra o tu parra podas? Ni podo tu parra ni mi parra podo, que podo la parra de mi tío Bartolo.'", 
"Tome un número aleatorio de sus contactos, llámelo y dígale 'te amo' ", 
"Juega un vs con la persona que mando el msj antes que tu el que pierda debera pagar 5 Millones (sin usar gemas ningunos o no seria valido)", 
" Pon en tu estado 'Me estas viendo la cara de pendejo'.", 
" Enviale un te amo al 6to chat", 
" Envia un audio al pv del 5to chat diciendo te amo princesa y luego dile que te confundiste de chat ", 
" Tienes que jugar 5 partidas en equipo con la persona que envie un msj despues de este", 
" Caminando aplaudiendo y cantando la canción 'Feliz cumpleaños' de la clase al pasillo.", 
" Arrodíllate sobre una rodilla y di '¿Cásate conmigo?' la primera persona en entrar a la habitación.", 
" Haz un tocado absurdo con tejido, sea lo que sea, sigue pidiendo poses frente a la cámara, sigue subiendo", 
"Dile 'ERES HERMOSA / MUY HERMOSA, NO MIENTES' a la chica que crees que es la más bonita de esta clase.", 
" Dile a alguien en clase: 'Primero me dijeron que era tu gemelo, nos separamos y luego me sometí a una cirugía plástica. Y esto es lo más serio que he dicho' ", 
" Tirar el cuaderno de alguien a la basura, frente a sus ojos, diciendo 'Este libro nadie puede entender' ", 
" Le debes dar 2 Millones a la primera persona que te escriba 'a mi' al pv", 
" Juega un vs con el bot y el que pierda tiene que pagar 5 Millones", 
" Envia un audio contando un chiste al que logres hacer reir, tiene que darte 2 Millones.", 
" Crea una mesa de 6 con las primeras 6 personas que enviaron un msj despues de este, el que gane de primero los demas deben darle 1 Millon cada uno.", 
" Pon en tu perfil la foto de este grupo por dos horas.", 
" Trae un nuevo integrante activo al grupo y un admi te debe 1 Millon ", 
"Envía un mensaje de texto al 4to chat preguntandole si quiere ver tu video porno en xnxx ", 
"Envíales un mensaje de texto a tus padres: 'Mamá, papá, ya sé que soy un niño adoptado del orfanato. No ocultes esto más'.", 
" Enviale un msj al 9no chat diciendo 'Me aceptaron en un casting para un video porno' ", 
" Dona un set de dados Epicos a la persona que diga 'YO'", 
" Reta en vs al que envio el tercer mensaje contando de este para arriba el que pierda tiene que pagar 2 Millones (tu no puedes usar gemas y el si) .", 
" Regalale un set de dados raros a la persona que envio el msj antes que el tuyo", 
"Debes traer 5 participantes activos al grupo y el admi darte 5 millones (Valido solo para ti)", 
"Regalale 1 Millon a la persona que mando el msj despues de este.", 
"Manda un video cantando una cancion que te guste.", 
"Manda un audio diciendo este travalenguas 'María Chuzena su choza techaba, y un techador que por ahí pasaba le dijo: María Chuzena, ¿tú techas tu choza o techas la ajena? No techo mi choza ni techo la ajena.'.", 
"Dile a tu 5to chat que te tienen secuestrad@ y manda cap de su reaccion.", 
"Manda una foto tuya de cuando eras adolecente.", 
"Manda un video bailando bachata", 
"Cante la canción Baby Shark en voz alta.", 
"Dile a tu mejor amig@ del juego, que tu novi@ te dijo que lo bloques y lo haras, y manda cap", 
"Pidele el pack a tu 7to chat ", 
" Pídale dinero a alguien (al azar ) en el pv diciendo 'No tengo dinero para comprar el pase'.", 
" Presiona mandar foto y envia la primera que aparezca.", 
" Manda la primera foto que tengas en la galeria.", 
" Manda un audio diciendo este travalenguas 'El rey de Constantinopla esta constantinoplizado Consta que Constanza, no lo pudo desconstantinoplizar El desconstantinoplizador que desconstantinoplizare al rey de Constantinopla, buen desconstantinoplizador será'.", 
" Manda un audio diciendo este travalenguas 'Cuando yo digo diego, digo digo, y cuando digo digo diego diego'.", 
" Pon en tu estado 'Sabia que me romperian el corazon'.", 
" Mandale un audio al 5to chat diciendo 'Me rompieron el corazon no me vuelvo a enamorar'", 
" Comprale el pase dorado a alguien que te agrade del grupo",  
" Elija una persona del grupo (que tenga poco oro) y regalale 5 Millones", 
" Elige a una persona al azar en el grupo y retalo a un reto en vs de 20 Millones", 
" Fingir estar poseído ejm: poseído por un tigre, etc.", 
" Crea una mesa de 4 con las primeras 4 personas que escribieron despues de este msj, los que ganen de primero y segundo deben darle 10 millones al 3ro y al 4to lugar", 
" Mandale un audio llorando a tu tercer chat (si es grupo te salvas) debes mandar cap", 
" Ve vs en reto de 30 Millones con el primero que responda este msj, si no cumples eres gallina", 
"Manda la foto tuya que mas te gusta", 
"Llama a tu mamá y dile 'mamá, quiero casarme lo antes posible' ", 
"Llama a tu ex y dile 'te extraño' ", 
"Mandale un msj a tu segundo chat diciendole 'No saves lo enamorad@ que estoy de ti 🥺👉🏼👈🏼' y manda cap", 
"Pon una foto de estado en whatsapp de la persona del grupo con la cual te llevas bien (pueden ser varias para que no te metas en problemas)", 
"Manda un audio cantando cualquier cancion, si le gusta a alguien debe darte una cara de fenix o 10 Millones", 
"Manda una foto sin filtro, y el que envie el segundo msj despues de la foto debe darte 5 Millones",  
"diga '¡Bienvenido alguién quiere ser millonario!' a todos los grupos que tienes", 
"canta el coro de la última canción que tocaste", 
"Envia un audio de voz a tu ex / enamorado / novia, dile hola (nombre), quiero llamar, solo un momento. Te Extraño🥺👉🏼👈🏼 ", 
"Dile a la gente al azar: Primero me dijeron que era tu gemelo, nos separamos y luego me sometí a una cirugía plástica. Y esto", 
"¡Haz 1 rima para el mejor jugador de parchis!", 
"cuenta tu propia versión de cosas vergonzosas", 
"cambiar el nombre a 'Gay' durante 24 horas", 
"Debes jugar una partida en vs con la persona que mando el msj antes que el tuyo y el que pierda debe darle 20 Millones al ganador", 
"Di 'Estoy enamorado de ti, ¿quieres ser mi novio o no?' al último sexo opuesto con el que conversaste en WhatsApp, espera a que responda y manda capture", 
"Háblale a tu ex por WhatsApp y dile 'te amo, por favor vuelve'. Manda una captura de pantalla como evidencia de reto cumplido!",
"Tienes que poner una foto en tu perfil de whatsapp de la persona que mando el msj antes del tuyo.",
"Debes donarle 5 Millones a la persona que mando el msj antes que el tuyo, si no cumples eres un puto tacaño",
"Tienes que regalarle una cara del dado Fenix al msj numero tres, contando desde este hazta arriba, si no tienes Fenix le debes 10 Millones",
"Manda un audio diciendo que amas a un admi del grupo (nombre) ",
"Debes mandar una foto tuya (la que te parezca mas bonita) y el primero que la vea te debe 5 Millones en parchis",
"Debes mandar un audio diciendole cosas bonitas a alguien del grupo",
"Tienes que jugar una partida con la persona que mando el msj antes que el tuyo, si pierden le tienes que devolves dos veces el valor de la partida",
"Tienes que poner un estado diciendo que no crees en el amor, con caritas tristes",
"Si no eres tacaño/a regalale 5 Millones a la primera persona que responda este msj",
"Crea una mesa de 4 jugadores donde el ultimo en entrar tenga que pagar 1 Millon a cada uno de los jugadores"

] 
