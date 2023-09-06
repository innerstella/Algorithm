function solution(names) {
    let answer = []
    for(let i=1; i<=names.length; i++){
        if(i%5 === 1){
            answer.push(names[i-1])
        }
    }
    
    return answer
}