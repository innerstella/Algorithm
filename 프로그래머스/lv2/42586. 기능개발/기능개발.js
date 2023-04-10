function solution(progresses, speeds) {
    var answer = [];
    
    // 걸리는 날짜 days
    let days = [];
    for(let i=0; i<progresses.length; i++){
        let takes = Math.ceil((100-progresses[i])/speeds[i]);
        days.push(takes);
    }
    
    let maxDay = days[0];
    let cnt = 1;
    for(let i=1; i<days.length; i++){
        if(maxDay >= days[i]){
            cnt++;
        } else {
            answer.push(cnt);
            cnt=1;
            maxDay = days[i];
        }
       
    }
     answer.push(cnt);
    return answer;
}