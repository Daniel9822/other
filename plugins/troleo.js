let handler = async(m, { conn }) => {
    await conn.sendButton(m.chat, '🔥🔥', '©THE PAIN-BOT', pickRandom(trol),[['🔥🔥🔥🔥', `${"!tts es" + "PEEEEEEEEENDeeejoo" }`]],m)
    }
    
    handler.command = /^xxxxxxxx$/i
    export default handler
    
    function pickRandom(list) {
      return list[Math.floor(list.length * Math.random())]
    }
    
    const trol = [

        "https://f.top4top.io/m_2316iht351.mp4",
        "https://g.top4top.io/m_2316cqzgr2.mp4",
        "https://h.top4top.io/m_2316b8lsb3.mp4",
        "https://i.top4top.io/m_2316i6kkp4.mp4",
        "https://j.top4top.io/m_2316rcvky5.mp4",
        "https://k.top4top.io/m_2316csgym6.mp4",
        "https://l.top4top.io/m_23164j3q97.mp4",

    ]