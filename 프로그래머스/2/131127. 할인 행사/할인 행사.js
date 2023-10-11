function solution(want, number, discount) {
    let answer = 0
    // 자신이 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입
    
    let wantList = []
    for(let i=0; i<want.length; i++){
        for(let j=0; j<number[i]; j++){
            wantList.push(want[i])
        }
    }
    wantList.sort()
    
    // 배열 길이 10씩 잘라가면서 want & number 충족 시키는 지 확인
    for(let i=0; i<discount.length - 9; i++){
        let temp = discount.slice(i, i+10)
        temp.sort()
        
        if(checkEvalArr(wantList, temp)){
            answer++
        }
    }
    return answer
    
}

function checkEvalArr(wantList, temp){
    for(let i=0; i<temp.length; i++){
        if(temp[i] !== wantList[i]){
            return false
        }
    }
    
    return true
}