function solution(myString) {
    return myString.split('').map((str)=>{
        if(str === 'a'){
            return 'A'
        } else if (str !== 'A') {
            return str.toLowerCase()
        } else {
            return str
        }
    }).join('')
    
}