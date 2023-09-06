function solution(a, b) {
    let answer = 0
    if(a%2 === 1 && b%2 === 1){
        let score = a**2 + b**2
        answer += score
    } else if(a%2 === 0 && b%2 === 0){
        let score = Math.abs(a-b)
        answer += score
    } else {
        answer += 2*(a+b)
    }
    
    return answer
}