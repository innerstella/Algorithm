function solution(arr, k) {
    let answer = [...new Set(arr)]
    answer = answer.slice(0,k)
    
    if(answer.length === k) return answer
    
    answer = [...answer, ...new Array(k-answer.length).fill(-1)]

    return answer
}