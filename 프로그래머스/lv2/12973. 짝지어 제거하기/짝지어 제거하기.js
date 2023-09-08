function solution(s){
    s = s.split('')
    
    let temp = []
    for(let i=0; i<s.length; i++){
        temp.push(s[i])
        let len = temp.length
        if(len > 1 && temp[len-2] === temp[len-1]){
            temp.pop()
            temp.pop()
        }
    }
    
    
    let answer
    temp.length === 0 ? answer = 1 : answer = 0
    return answer
}