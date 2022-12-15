function solution(price, money, count) {
    let result = price;
    for(let i=2; i<=count; i++){
        result += price*i;
    }

    let answer = 0;
    result-money > 0 ? answer = result - money : answer = 0;
    
    return answer;
}