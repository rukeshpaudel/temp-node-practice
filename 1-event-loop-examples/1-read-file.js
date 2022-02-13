const { readFile } = require('fs');
const { result } = require('lodash');

console.log('Started the first task');

//reading file from a path

readFile('./content/first.txt','utf8',(err,result)=>{
        if (err)
        {
            console.log(err);
            return
        }

    console.log(result);
    console.log('Done with the second task');
})

console.log('Task Completed ! ');