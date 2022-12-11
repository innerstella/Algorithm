function solution(common) {
    let answer = 0;
    
    let diff = [];
    // 등차? 등비?
    for(let i=0; i<common.length -1; i++){
        diff.push(common[i+1] - common[i]);
    }
    let set = new Set(diff);
    
    let temp = common.length + 1;
    if (Array.from(set).length === 1){
        console.log('등차수열');
        let d = diff[0];
        answer = common[0] + (temp - 1)*d;
    } else {
        console.log('등비수열');
        let r = diff[1]/diff[0];
        answer = common[0] * (r**(temp-1));
    }
    
    
    return answer;
}