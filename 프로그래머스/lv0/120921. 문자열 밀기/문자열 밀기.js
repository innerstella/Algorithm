function solution(A, B) {
    if (A === B){
        return 0;
    }
    
    A =  A.split('');

    let cnt = 0;
    while (cnt < A.length ){
        cnt++;
        let a = A.pop()
        A.unshift(a);
        let temp = A.join('');
        if (temp === B){
            return cnt;
        }
    }
    
    if (cnt === A.length){
        return -1;
    }
}