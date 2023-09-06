function solution(num_str) {
    let answer = 0
    num_str.split('').map((num)=>{
        answer += +num
    })
    
    return answer
}