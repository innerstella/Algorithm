function solution(number) {
    let sum = 0
    number.split('').forEach((num)=> sum += +num)
    
    return sum%9
}