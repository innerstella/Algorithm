function solution(my_string) {
    var answer = '';
    let aeiou = ['a', 'e', 'i','o','u'];
    
    my_string = my_string.split('');
    my_string.map((e)=>{
        if(aeiou.includes(e) === false){
            answer += e;
        } else if(e === ' '){
            answer += ' ';
        }
    })
    return answer;
}