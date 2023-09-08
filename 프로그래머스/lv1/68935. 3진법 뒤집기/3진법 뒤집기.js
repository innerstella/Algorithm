function solution(n) {
    // 1. 10진수 -> 3진수
    let num1 = n.toString(3)
    
    // 2. 3진수 앞뒤 반전
    let num2 = num1.split('').reverse().join('')
    
    // 3. 3진수 -> 10진수
    let num3 = parseInt(num2, 3).toString(10)
    return +num3
}