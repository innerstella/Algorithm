function solution(my_string) {
    var answer = '';
    
    my_string = my_string.split('');
    my_string = my_string.map((s)=>{
        answer += s.toLowerCase();
    })
    
    answer = answer.split('').sort().join('');
    return answer;
}