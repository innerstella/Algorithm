function solution(money) {
    var answer = [];
    
    let coffee = 5500;
    let cup = Math.floor(money/coffee);
    let change = money - coffee*cup;
    
    answer = [cup, change];
    return answer;
}