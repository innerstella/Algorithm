function solution(numbers) {
    var answer = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i; j<numbers.length; j++){
            if(i!==j){
                answer.push(numbers[i]+numbers[j]);
            }  
        }
    }
    
    let list = new Set(answer);
    answer = Array.from(list).sort((a,b)=>{return a-b;})
    return answer;
}