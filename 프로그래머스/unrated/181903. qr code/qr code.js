function solution(q, r, code) {
    return code.split('').map((elem, idx)=>{
        if(idx%q === r){
            return elem
        } 
        return ''
    }).join('')
}