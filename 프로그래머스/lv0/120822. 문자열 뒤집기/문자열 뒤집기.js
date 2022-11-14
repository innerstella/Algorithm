function solution(my_string) {
    var answer = '';
    
    let str = my_string.split('');
    answer = str.reverse();
    answer = answer.join('');
    
    return answer;
}