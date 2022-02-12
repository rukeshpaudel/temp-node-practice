//CommonJS, every file is a module by default
//Modules are encapsulated codes to only share minimum  
const flavors= require('./6-alternative-module')
const sayHi= require(`./5-second-module`)
const fname= require(`./4-first-module`)
require(`./7-mind-grenade`)
    
sayHi(`Rukesh`)
sayHi(fname.John)
sayHi(fname.Leo)