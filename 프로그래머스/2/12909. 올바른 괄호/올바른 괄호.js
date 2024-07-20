function solution(s){
    const brackets = []
    
    if(s[0] === ')') return false
    
    for(let i=0; i<s.length; i++){
        if(i===0) brackets.push
        
        const prev = brackets[brackets.length - 1]
        const next = s[i]
        
        if(prev === '(' && next === ')'){
            brackets.pop()
        } else {
            brackets.push(next)
        }
    }
    
    return brackets.length === 0 ? true : false
}