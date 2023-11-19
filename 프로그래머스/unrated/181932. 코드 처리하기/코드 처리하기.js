function solution(code) {
    let mode = 0
    let ret = ''
    
    for(let i=0; i<code.length; i++){
        const curr = code[i]
        
        if(mode === 0){
            if(curr !== '1'){
                if(i%2===0) ret += curr
            } else {
                mode = 1
            }
        } else {
            if(curr !== '1'){
                if(i%2===1) ret += curr
            } else {
                mode = 0
            }
        }
    }
    
    if(ret.length){
        return ret
    } 
    
    return 'EMPTY'
}