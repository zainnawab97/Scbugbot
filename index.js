//base by DGXeon (Xeon Bot Inc.)
//YouTube: @Zainibhaii
//Instagram: zainibhaii
//Telegram: t.me/darkheartoffical
//GitHub: @Zainnawab69
//WhatsApp: +923074060856
//want more free bot scripts? subscribe to my youtube channel: https://youtu.be/TnUAvasM-1k

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
