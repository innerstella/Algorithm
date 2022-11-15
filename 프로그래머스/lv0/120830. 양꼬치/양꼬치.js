function solution(n, k) {
    var answer = 0;
    
    let lamb = 12000;
    let drink = 2000;
    let free = 0;
    if (lamb > 10){
        free = Math.floor(n/10);
    }

    answer = lamb*n + (k - free)*drink;
    return answer;
}