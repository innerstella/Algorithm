function solution(denum1, num1, denum2, num2) {
    var answer = [];
    
    let gcd = (a,b) => b? gcd(b, a%b) : a;
    let lcm = (a,b) => {return a * b / gcd(a,b)};
    
    let lcm_cal = lcm(num1, num2);
    denum1 = denum1 * (lcm_cal / num1);
    denum2 = denum2 * (lcm_cal / num2);
    
    let denum = denum1 + denum2;
    let num = lcm(num1, num2);
    
    let gcd_cal = gcd(denum, num);
    denum = denum / gcd_cal;
    num = num / gcd_cal;
    
    // console.log(`${denum}/${num}`);
    answer.push(denum, num);
    
    return answer;
}