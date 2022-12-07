function solution(n, t) {
    var answer = n;
    for(let i=1; i<=t; i++){
        answer = answer * 2;
        console.log(`${i}시간 후 ${answer} 마리`);
    }
    return answer;
}