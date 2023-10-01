const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    let answer = ''
    line.split('').forEach((elem)=>{
        if(elem.toUpperCase() === elem){
            answer += elem.toLowerCase()
        } else {
            answer += elem.toUpperCase()
        }
    })
    
    console.log(answer)
}).on('close',function(){
    str = input[0];
});