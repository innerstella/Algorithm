function solution(numbers) {
    var answer = 0;
    numbers.map(e => {
        answer += e;
    })
    
    answer = answer / numbers.length;
    
    return answer;
}