function solution(numbers) {
    var answer = '';
    numbers = numbers.map((n)=> n + '');
    console.log(numbers);
    numbers.sort((a,b)=>{
        return (b+a) - (a+b);
    })
    
    numbers[0] === '0' ? answer = '0' : answer = numbers.join('');
    
    return answer;
}