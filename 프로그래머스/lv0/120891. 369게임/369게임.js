function solution(order) {
    var answer = 0;
    
    let clap = ['3','6','9'];
    order.toString().split('').map((e)=>{
        if (clap.includes(e)){
            answer += 1;
        }
    })
    return answer;
}