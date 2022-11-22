function solution(my_string) {
    var answer = 0;
    
    let numbers = ['0', '1', '2', '3', '4', '5', '6','7','8','9'];
    my_string = my_string.split('');
    
    let nums = [];
    my_string.map((e)=>{
        if(numbers.includes(e)){
            nums.push(parseInt(e));
        }
    })
    
    nums.map((e)=>{
        answer += e;
    })
    
    return answer;
}