function solution(myString) {
    let answer = ''
    let l_str = 'l'
    let l_code = l_str.charCodeAt(0)
    
    myString.split('').forEach((s)=>{
        let code = s.charCodeAt(0)
        if(code < l_code){
            answer += 'l'
        } else {
            answer += s
        }
    })
    
    return answer
}