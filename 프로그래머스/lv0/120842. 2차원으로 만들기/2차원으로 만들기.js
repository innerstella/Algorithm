function solution(num_list, n) {
    var answer = [];
    
    while (num_list.length >0){
        answer.push(num_list.splice(0, n));
    }
   
    
    return answer;
}