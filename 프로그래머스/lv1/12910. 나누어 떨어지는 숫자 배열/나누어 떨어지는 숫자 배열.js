function solution(arr, divisor) {
    var answer = [];
    
    arr.map((a)=>{
        if(a%divisor ===0){
            answer.push(a);
        }
    })
    answer.sort((a,b)=>{
        return a-b;
    })
    
    answer.length === 0 ? answer =  [-1] : answer = answer;
    return answer;
}