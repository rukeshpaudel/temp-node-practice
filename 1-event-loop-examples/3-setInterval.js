setInterval(()=>{
    console.log('hello world');
}, 2000)

console.log("I will run first");

//app keeps on running because of the event loop, it keeps on envoking the callback function after every 2 seconds.