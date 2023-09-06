function solution(num_list) {
    let oddSum = 0, evenSum = 0
    
    for(let i=1; i<=num_list.length; i++){
        let num = num_list[i-1]
        i%2 === 0 ? evenSum += num : oddSum += num
    }
    
    return Math.max(oddSum, evenSum)
    
}