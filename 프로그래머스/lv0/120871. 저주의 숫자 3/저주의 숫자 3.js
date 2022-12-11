function solution(n) {
    let answer = 0;
    let cnt = 1;
    
    while(cnt <= n ){
        let temp = answer + 1;
        if (isThree(temp) === true){
            while(isThree(temp) === true){
                temp++;
                if(isThree(temp) === false){
                    answer = temp;
                }
            }
        } else {
            answer++;
        }
        
        console.log('10진법:', cnt, '3x진법:', answer);
        cnt++;
    }
    return answer;
}

function isThree (n) {
    let n_arr = n.toString().split('');
    if (n%3 === 0 || n_arr.includes('3')){
        return true;
    } else {
        return false;
    }
} 