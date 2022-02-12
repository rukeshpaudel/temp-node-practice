const os= require('os')

//info about current user

const user= os.userInfo()

console.log(user)

//method returns system uptime in seconds

console.log(`The system has been running for ${os.uptime()} seconds`);

//object to show the details of the system

const currentOS= {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);