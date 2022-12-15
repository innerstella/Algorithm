function solution(s) {
    
    s = s.split(' ');

    let answer = `${Math.min(...s)} ${Math.max(...s)}`;
    return answer;
}