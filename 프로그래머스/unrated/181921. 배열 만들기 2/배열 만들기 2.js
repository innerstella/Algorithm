function solution(l, r) {
    let answer = []
    const not = ['1', '2', '3','4','6','7','8','9']
    
    for(let i=l; i<=r; i++){
        let nums = i.toString().split('')
        
        if(!nums.some((elem)=>not.includes(elem))){
            answer.push(i)
        }
        
    }
    
    if(answer.length === 0){
        return [-1]
    } 
    return answer
}