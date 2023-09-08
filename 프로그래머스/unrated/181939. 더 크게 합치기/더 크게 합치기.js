function solution(a, b) {
    let sum1 = +`${a}${b}`
    let sum2 = +`${b}${a}`
    
    let answer
    sum1 >= sum2 ? answer = sum1 : answer = sum2
    return answer
}