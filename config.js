import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'

// Global variables
global.owner = [
  ['917439317360', '⎯⎯ּ︭   🧸̼᪲ 𝕹̸𑄜᳟ὶ𝗋ֺ  ❜❜ ᪶', true], 
  ]

global.mods = ['917439317360','923184070915', '233268374753', '923184474176', '233268374753'] 
global.prems = ['917439317360', '94789481495', '918360234087', '233268374753']
global.allowed = ['917439317360', '233268374753', '918360234087', '233268374753']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = global.keysZens[Math.floor(global.keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = global.keysxteammm[Math.floor(global.keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = global.keysneoxrrr[Math.floor(global.keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = {
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { 
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': global.keysneoxr,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': global.keysxxx, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '𝘟𝘭𝘪𝘤𝘰𝘯 𝘝𝘰𝘭 2'
global.premium = 'true'
global.packname = '𝐌𝐀𝐃𝐄 𝐁𝐘' 
global.author = '⎯⎯ּ︭   🧸̼᪲ 𝕹̸𑄜᳟ὶ𝗋ֺ  ❜❜ ᪶' 
global.menuvid = 'https://files.catbox.moe/yu3j54.mp4'
global.igfg = 'https://chat.whatsapp.com/DWlD69vg1Q0CYYUggG25pv' 
global.dygp = 'https://chat.whatsapp.com/DWlD69vg1Q0CYYUggG25pv'
global.fgsc = 'https://github.com/salmanytofficial/XLICON-V2-MD' 
global.fgyt = 'https://youtube.com/'
global.fgpyp = 'https://youtube.com/'
global.fglog = 'XLICON.jpg' 
global.thumb = fs.readFileSync('./XLICON.jpg')

global.wait = '*🕣 _WAIT BROO..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✔️'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
