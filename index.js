const mineflayer = require('mineflayer');

const connect = {
  'host': 'localhost',
  'port': 25565
}

const botCount = 5

const nameChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPKRSTUVWXYZ123456789'.split('')

let genName = () => {
  let gen = ''

  for (let i = 0; i < 12; i++) {
    gen += nameChars[Math.floor(Math.random() * nameChars.length)]
  }
  return gen
}

console.log('Starting bots...')

for (let i = 0; i <= botCount; i++) {
  mineflayer.createBot({
    'host': connect.host,
    'port': connect.port,
    'username': genName()
  }).on('spawn', () => {
    console.console.log('A bot spawned.')
  })
}
