const eventEmitter = require('events')

const  customEmmitter = new eventEmitter();
 customEmmitter.on('response',(name,id)=>{
     console.log(`data received with ${name} and id: ${id}`);
    })

customEmmitter.on('response',()=>{
    console.log('some other logic! ');
})

customEmmitter.emit('response','john','24')