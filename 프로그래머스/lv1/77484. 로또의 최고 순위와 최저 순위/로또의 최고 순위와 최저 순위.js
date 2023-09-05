const calLotto = (num) => {
    if(num > 1){
        return 7-num
    } else {
        return 6
    }
}

function solution(lottos, win_nums) {
    // 현재 정답 번호 수
    let currAns = 0
    
    // 같은 수 제거
    let lottos_remain = []
    for(let i=0; i<6; i++){
        if(!win_nums.includes(lottos[i])){
            lottos_remain.push(lottos[i])
            // win_remain.push(win_nums[win_nums.indexOf(lottos[i])])
        } else {
            currAns++
        }
    }
    
    let win_remain = []
    for(let i=0; i<6; i++){
        if(!lottos.includes(win_nums[i])){
            win_remain.push(win_nums[i])
        }
    }
    
    // 최고 순위
    let zeroCnt = 0
    lottos_remain.forEach((l)=>{
        if(l === 0){
            zeroCnt++
        }
    })
    let max_num = currAns + zeroCnt
    let max = calLotto(max_num)
    
    // 최저 순위
    let min_num = currAns
    let min = calLotto(min_num)
  
    let answer = [max, min]
    return answer
    
}

