function solution(s) {
    var answer = [];
    
    s = s.split('');
    for(let i=0; i<s.length; i++){
        let temp = [];
        let curr = s[i];
        for(let j=0; j<i; j++){
            if (s[j] === s[i]){
                temp.push(i-j);
            }
        }
        if (temp.length === 0){
            answer.push(-1);
        } else {
            answer.push(Math.min(...temp));
        }
    }
    
    return answer;
}