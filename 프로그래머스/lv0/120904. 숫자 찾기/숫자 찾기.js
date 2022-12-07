function solution(num, k) {
    let answer = 0;
    let arr = num.toString().split('');
    k = k.toString();
    
    if (arr.includes(k) === false){
        return -1;
    } else {
        arr.map((n)=>{
            if(n===k){
                answer = arr.indexOf(k) + 1
            }
        })
    }
    return answer;
}