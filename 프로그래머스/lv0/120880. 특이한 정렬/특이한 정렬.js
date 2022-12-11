function solution(numlist, n) {
    let answer = [];
    
    let order = [];
    numlist.map((num)=>{
        order.push([num, Math.abs(num-n)]);
    })
    order.sort(function(a,b){
        if (a[1] !== b[1]){
            return a[1] - b[1];
        } else {
            return b[0] - a[0];
        }
    })
    order.map((num)=>{
        answer.push(num[0]);
    })
    
    return answer;
}