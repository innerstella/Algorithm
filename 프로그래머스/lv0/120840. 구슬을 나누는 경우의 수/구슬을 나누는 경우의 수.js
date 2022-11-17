function solution(balls, share) {
    let answer = 0;

    function fac(n){
    let f = BigInt(1);
    for(let i=2; i <= n; i++){
        f *= BigInt(i);
    }
    return f;
}
    if ( balls === share){
        answer = 1;
    } else {
        let a = fac(balls);
        let b = fac(balls - share);
        let c = fac(share);
        answer = a / (b*c);
    } 
    
    return answer;
}

