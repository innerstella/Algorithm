function solution(my_string) {
    var answer = '';
    
    let str_set = new Set(my_string);
    let result = Array.from(str_set);
    result.map((e)=>{
        answer += e;
    })
    return answer;
}