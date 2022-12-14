function solution(participant, completion) {
    // 동명이인 구분
    let list = completion.reduce((list, person)=>{
        if (list[person]){
            list[person] = list[person]+1;
        } else {
            list[person] = 1;
        }
        
        return list;
    }, {}) // 초기값 {}
    
    let answer = '';
    participant.map((e)=>{
        if(list[e] > 0){
            list[e] -= 1;
        } else {
            answer = e;
        }
   })
    return answer;
}