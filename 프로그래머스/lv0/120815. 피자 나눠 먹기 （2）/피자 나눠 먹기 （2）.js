function solution(n) {
    var answer = 0;
    
    // gcd
    let gcd = (a,b) => b? gcd(b, a%b) : a;
    let gcd_cal = gcd(n, 6);
    
    // 피자 판 수 = 사람 수 / gcd
    answer = n / gcd_cal;
    
    
    return answer;
}