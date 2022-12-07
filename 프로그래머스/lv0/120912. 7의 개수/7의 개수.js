function solution(array) {
    var answer = 0;
    let check = '';
    
    array.map((e)=>{
        check += e.toString();
    })
    
    check.split('').map((e)=>{
        if(parseInt(e) === 7){
            answer++;
        }
    })
    return answer;
}