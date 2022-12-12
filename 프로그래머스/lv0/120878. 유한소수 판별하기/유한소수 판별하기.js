function solution(a, b) {
    // 기약분수 만들기
    let gcd = (a,b) => b? gcd(b, a%b) : a;
    b = b / gcd(a,b);

    // 분모의 소인수가 2와 5만 존재하는 지 확인하기
    while (b !== 1){
        if (b%2 === 0){
            b /= 2;
        } else if (b%5 === 0){
             b /= 5;
        } else {
            return 2;
        }
    }
    return 1;
}
