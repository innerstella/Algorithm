function solution(M, N) {
    if (M === 1 && N === 1){
        return 0;
    }
    
    let answer = (M-1) + (N-1)*M;
    
    return answer;
}