function solution(my_string) {
    my_string = my_string.split(' ');
    // console.log(my_string);
    let answer = parseInt(my_string[0]);
    for(let i=1; i<my_string.length; i = i+2){
        if(my_string[i] === '+'){
            answer += parseInt(my_string[i+1]);
        } else if(my_string[i] === '-'){
            answer -= parseInt(my_string[i+1]);
        }
    }
    return answer;
}