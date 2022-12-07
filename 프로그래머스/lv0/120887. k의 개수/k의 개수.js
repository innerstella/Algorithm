function solution(i, j, k) {
    var answer = 0;
    let check = '';
    
    for(i; i<=j; i++){
        check += i.toString();
    }
    
    check.split('').map((e)=>{
        if(e === k.toString()){
            answer += 1;
        }
    });
    
    return answer;
}