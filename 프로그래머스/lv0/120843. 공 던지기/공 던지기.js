function solution(numbers, k) {
    var answer = 0;
    
    let cnt = 1;
    let next = 1;
    while ( cnt < k){
        next = next + 2;
        
        if (next > numbers.length){
            next -= numbers.length;
        }
        answer = numbers[next-1];
        cnt++;
    }
    return answer;
}