function solution(n) {
    let sum1 = 0, sum2 = 0
    
   for(let i=1; i<=n; i++){
       i%2 === 1 ? sum1 += i : sum2 += i**2
   }
    
    let answer
    n%2 === 1 ? answer = sum1 : answer = sum2
    return answer
}