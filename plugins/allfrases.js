let handler  = async (m, { conn }) => {
    conn.reply(m.chat,`*┌────「 MOTIVACION 」─*\n*“${pickRandom(global.allfrases)}”*\n*└────「 PAIN-BOT 」─*`, m)
  }
  handler.help = ['allfrases']
  handler.tags = ['frases']
  handler.customPrefix = /Buenos dias|Buenos días|buenos dias|buenos días|buen dia|Buen dia|Buen día|buen día|buenas|Buenas/
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
  
  global.allfrases = [
    "El único modo de hacer un gran trabajo es amar lo que haces ",
    "El amor es el que hace que la vida se vuelva una experiencia inolvidable ",
    "Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo",
    "El dinero no es la clave del éxito; la libertad para poder crear lo es",
    "Cuanto más duramente trabajo, más suerte tengo",
    "La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica ",
    "El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu",
    "Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan",
    "Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida ",
    "Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro ",
    "La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar",
    "A veces la adversidad es lo que necesitas encarar para ser exitoso",
    "Para tener éxito tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso ",
    "Tu actitud, no tu aptitud, determinará tu altitud ",
    "Si no pierdes, no puedes disfrutar de las victorias",
    "Piensa, sueña, cree y atrévete ",
    "Los obstáculos son esas cosas atemorizantes que ves cuando apartas los ojos de tu meta",
    "Asegúrate de que colocas tus pies en el lugar correcto, y luego mantente firme",
    "Las ideas pueden cambiar la vida. A veces a lo único que tienes que abrir la puerta es a una buena idea ",
    "La mejor manera para empezar es callándote y empezar a hacer ",
    "Nadie se desembaraza de un hábito o de un vicio tirándolo de una vez por la ventana; hay que sacarlo por la escalera, peldaño a peldaño ",
    "Si te caes siete veces, levántate ocho ",
    "La perfección no es alcanzable, pero si perseguimos la perfección podemos conseguir la excelencia ",
    "Tienes que esperar cosas de ti mismo antes de poder hacerlas ",
    "La edad no es barrera. Es una limitación que pones en tu mente ",
    "Solo aquellos que se arriesgan a ir demasiado lejos pueden descubrir lo lejos que pueden llegar ",
    "Del sufrimiento emergieron las almas más fuertes, los caracteres sólidos tienen cicatrices",
    "El universo no conspira contra ti, pero tampoco se desvía para alinear tu camino",
    "Si puedes soñarlo, puedes hacerlo",
    "El secreto para salir adelante es comenzar ",
    "La vida es como montar en bicicleta. para mantener el equilibrio tienes que avanzar",
    "El éxito no es definitivo, el fracaso no es fatídico. Lo que cuenta es el valor para continuar",
    "Sé valiente. Toma riesgos. Nada puede sustituir la experiencia",
    "El futuro pertenece a aquellos que creen en la belleza de sus sueños",
    "He aprendido que el valor no es la ausencia de miedo, sino el triunfo sobre él. El hombre valiente no es el que no siente miedo, sino el que lo domina",
    "Aferrarse al rencor es como beber veneno y esperar que otra persona muera",
    "No pares cuando estés cansado. Para cuando hayas terminado",
    "No importa lo que te diga la gente, las palabras y las ideas pueden cambiar el mundo",
    "Si tienes un sueño y crees en él, corres el riesgo de que se convierta en realidad ",
    "Nunca se es demasiado viejo para fijar otra meta o para soñar un nuevo sueño",
    "Lo que no te mata, te hace más fuerte",
    "El hombre/mujer que mueven montañas comienza cargando pequeñas piedras",
    "Buenos amigos, buenos libros y una conciencia tranquila: esa es la vida ideal ",
    "El éxito es la suma de pequeños esfuerzos, que se repiten día tras día",
    "Sal de tu zona de confort. Solo puedes crecer si estás dispuesto a sentirte raro e incómodo cuando intentas algo nuevo ",
    "¿Por qué contentarnos con vivir a rastras cuando sentimos el anhelo de volar?",
    "Entrega siempre más de lo que esperan de ti",
    "Un día despertarás y descubrirás que no tienes más tiempo para hacer lo que soñabas. El momento es ahora. Actúa",
    "Hoy eres un lector y mañana serás un líder ",
    "Los dos guerreros más poderosos son la paciencia y el tiempo",
    "Recordar que vas a morir, es la mejor manera que conozco para no pensar que tienes algo que perder. Ya estás desnudo. No hay ninguna razón para no seguir a tu corazón",
    "Existe al menos un rincón del universo que con toda seguridad puedes mejorar, y eres tú mismo",
    "Haz el amor y no la guerra",
    "Lo peor que hacen los malos es obligarnos a dudar de los buenos",
    "Las guerras seguirán mientras el color de la piel siga siendo más importante que el de los ojos",
    "Aprende a vivir y sabrás morir bien",
    "El mundo no está en peligro por las malas personas sino por aquellas que permiten la maldad",
    "No hay nada que un hombre no sea capaz de hacer cuando una mujer le mira",
    "Dar el ejemplo no es la principal manera de influir sobre los demás; es la única manera.",
    "Pero a medianoche se oyó un clamor: ‘¡Aquí está el novio! Salid a recibirlo’ (Mateo 25:6).",

   "He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entraré a él, y cenaré con él y él conmigo (Apocalipsis 3:20).",

   "Entonces aparecerá en el cielo la señal del Hijo del Hombre; y entonces todas las tribus de la tierra harán duelo, y verán al Hijo del Hombre que viene sobre las nubes del cielo con poder y gran gloria (Mateo 24:30).",

  "He aquí, viene con las nubes y todo ojo le verá, aun los que le traspasaron; y todas las tribus de la tierra harán lamentación por Él; sí. Amén (Apocalipsis 1:7).",

  "He aquí, vengo como ladrón. Bienaventurado el que vela y guarda sus ropas, no sea que ande desnudo y vean su vergüenza (Apocalipsis 16:15).",

  "Por tanto, si no velas, vendré como ladrón, y no sabrás a qué hora vendré sobre ti (Apocalipsis 3:3).",

  "Vosotros también estad preparados, porque el Hijo del Hombre vendrá a la hora que no esperéis (Lucas 12:40).",

  "Porque como el relámpago al fulgurar resplandece desde un extremo del cielo hasta el otro extremo del cielo, así será el Hijo del Hombre en su día. Pero primero es necesario que Él padezca mucho y sea rechazado por esta generación (Lucas 17:24-25)."


  ]
