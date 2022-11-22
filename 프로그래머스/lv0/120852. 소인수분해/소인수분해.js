function solution(n) {
    var answer = [];
    

    while (n%2 === 0){
        answer.push(2);
        n = n/2;
    }
  
    for (let i=3; i*i<=n; i = i+2){
        while(n%i === 0){
            n = n/i;
            answer.push(i);
        }
    }
    if (n > 2){
        answer.push(n);
    }
    
    // 중복된 2 제거
    const set = new Set(answer);
    answer = Array.from(set);
    

    return answer;
}