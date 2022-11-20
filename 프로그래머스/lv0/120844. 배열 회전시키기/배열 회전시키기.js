function solution(numbers, direction) {
    var answer = [];
    
    if (direction === 'right'){
        answer.push(numbers[numbers.length-1]);
        numbers.slice(0, numbers.length-1).map((e)=>{
            answer.push(e);
        })
    } else if (direction === 'left'){
        numbers.slice(1, numbers.length).map((e)=>{
            answer.push(e);
        });
        answer.push(numbers[0]);
    }
    return answer;
}