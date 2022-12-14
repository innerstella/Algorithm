function solution(n, lost, reserve) {
    let answer = 0;
    
    answer = n - lost.length;
    lost.sort();
    reserve.sort();
    
    // 여벌 체육복가져온 애가 도난 당했을 경우 빌려줄 수 없음
    reserve.map((student)=>{
        if(lost.includes(student)){
            let indexReserve = reserve.indexOf(student);
            let indexLost = lost.indexOf(student);
            delete reserve[indexReserve];
            delete lost[indexLost];
            answer++;
        }
    })
    
    // lost 순회 -> +- 1이 reserve에 있다면 answer++ 하고 reserve 배열에서는 빼기
    lost.map((l)=>{
        if(reserve.includes(l-1) && lost.includes(l-1) === false){
            console.log('빌려줘');
            answer++;
            let index = reserve.indexOf(l-1);
            delete reserve[index];
        }
        else if(reserve.includes(l+1) && lost.includes(l+1) === false){
            console.log('빌려줘');
            answer++;
            let index = reserve.indexOf(l+1);
            delete reserve[index];
        }
        
    })
    
    return answer;
}


