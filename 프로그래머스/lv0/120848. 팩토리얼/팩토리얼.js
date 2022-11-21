function solution(n) {
    var answer = 0;
    
    function fac(n){
        if (n ===0){
            return 1;
        } else {
            let f = 1;
            for (let i=2; i<=n; i++){
                f *= i;
            }
            return f;
        }
    }
    
    let i = 1;
    while (true){
        let gap = n - fac(i);
        if (gap < 0){
            return i-1;
        }
        i ++;
        
        //  if (Math.abs(n - fac(i)) > answer && n >= fac(i)){
        //      return i-1;
        //  } else if (Math.abs(n - fac(i)) > answer && n < fac(i)){
        //      return i-2;
        //  }
        // i++;
    }
    
    
    return answer;
}