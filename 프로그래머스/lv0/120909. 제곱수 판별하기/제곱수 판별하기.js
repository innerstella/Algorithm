function solution(n) {
    var answer = isRoot(n);
    return answer;
}

function isRoot(n) {
    let i = 2;
    while(true){
        if(n >= i*i && n/i === i){
            return 1;
        }
        if(n < i*i){
            return 2;
        }
        i++;
    }
}