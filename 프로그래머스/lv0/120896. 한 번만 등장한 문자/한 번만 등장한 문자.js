function solution(s) {
    s = s.split('').sort();
    let cnt = 1;
    let answer = '';
    
    for(let i=0; i<s.length; i++){
        if(s[i] !== s[i-1] && s[i] !== s[i+1]){
            answer += s[i];
        }
    }
    return answer;
}