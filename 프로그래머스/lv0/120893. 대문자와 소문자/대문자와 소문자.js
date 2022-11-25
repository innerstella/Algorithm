function solution(my_string) {
    var answer = '';
    
    my_string.split('').map((e)=>{
        if (e.toUpperCase() === e){
            answer += e.toLowerCase();
        } else {
            answer += e.toUpperCase();
        }
    })
    return answer;
}