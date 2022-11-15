function solution(my_string, letter) {
    var answer = [];
    
    let str = my_string.split('');
    str.map((e)=>{
        if(e !== letter){
            answer.push(e);
        }
    })
    answer = answer.join('');
    return answer;
}