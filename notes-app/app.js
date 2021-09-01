const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Long.\n')
fs.appendFileSync('notes.txt', 'This is supposed to be the second line.')