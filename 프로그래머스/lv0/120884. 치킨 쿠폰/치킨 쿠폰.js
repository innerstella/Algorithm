function solution(chicken) {
    var answer = 0;
    
    let coupon = chicken;
    
    while(true){
        if (coupon >= 10){
            let left = Math.floor(coupon%10);
            let bonus = Math.floor(coupon/10);
            coupon = left + bonus;
            answer += bonus;
            console.log(left, bonus, coupon);
        } else {
            return answer;
        }
    }
    
    return answer;
}