function solution(n) {
    var answer = 0;
    
    let pizza = 0;
    pizza = Math.floor(n/7);
    
    let left = n % 7;
    
    {left === 0 ? answer = pizza : answer = pizza + 1}
    
    return answer;
}