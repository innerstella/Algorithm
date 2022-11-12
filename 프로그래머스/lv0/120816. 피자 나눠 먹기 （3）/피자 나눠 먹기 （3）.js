function solution(slice, n) {
    var answer = 0;
    
    // gcd
    let gcd = (a,b) => b? gcd(b, a%b) : a;
    let gcd_cal = gcd(slice, n);
    
    const other = (slice, n) => {
        let candidate = [];
        for (let i=1; i<30; i++){
            candidate.push(i*slice);
        }
        for (let i=0; i<candidate.length; i++){
            if (candidate[i] >= n){
                // console.log(candidate[i]/slice);
                return candidate[i]/slice;
            }
        }
    };
    
    if (gcd_cal !== 1){
        answer = n / gcd_cal;
    } else {
       answer = other(slice, n);
    }  
    return answer;
}