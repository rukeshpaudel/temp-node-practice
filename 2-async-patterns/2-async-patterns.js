const {readFile, writeFile} =require('fs').promises
// const util = require('util')
// const readFilepromise = util.promisify(readFile)
// const writeFilepromise = util.promisify(writeFile)

const start = async()=>{
    try {
    
        const first= await readFile('./content/first.txt','utf-8')       
        const second= await readFile('./content/second.txt','utf-8') 
        await writeFile('./content/result-mind-greanade.txt',`This is where John Smilga shouts AWESOME! : ${first} ${second} `,{flag:'a'})
        console.log(first,second)       
    }
    catch (err) {
        console.log(err)  
    }
}    

    start();

    // const getText = (path)=>{
    //     return new Promise((resolve,reject)=>{
    //         readFilepromise(path,'utf-8',(err,data)=>{
    //             if(err)
    //             {
    //                 reject(err);
    //             }
    //             else{
    //                 resolve(data);
    //             }
            
    //         })
    
    //     })
    // }

// getText('./content/first.txt')
// .then((result)=>
// {
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err)
// })   
