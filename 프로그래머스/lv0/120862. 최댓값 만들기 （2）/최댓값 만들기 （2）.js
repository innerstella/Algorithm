function solution(numbers) {
    numbers = numbers.sort(function(a,b){
        return b-a;
    });
    let pMax = numbers[0]*numbers[1];
    let nMax = numbers[numbers.length-1]*numbers[numbers.length-2];
    let answer = Math.max(pMax, nMax);
    return answer;
}