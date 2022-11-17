function solution(rsp) {
    var answer = '';
    rsp = rsp.split('');
    
    rsp.map((e) => {
        if (e === '2'){
            answer += '0';
        } else if (e === '5'){
            answer += '2';
        } else if (e === '0'){
            answer += '5';
        }
    })
    return answer;
}