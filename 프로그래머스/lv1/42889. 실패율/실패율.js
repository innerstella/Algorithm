function solution(N, stages) {
    let fail_ratio = [] // stage, ratio
    
    for(let stage = 1; stage <= N; stage++){
        let reach = 0 // 스테이지에 도달한 플레이어 수
        let yet = 0 // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
        stages.forEach((user)=>{
            if(user >= stage){
                reach++
            }
            if (user === stage){
                yet++
            }
        })
        let ratio = yet/reach
        fail_ratio.push([stage, ratio])
    }
    
    fail_ratio = fail_ratio.sort((a,b)=> b[1]-a[1])
    return fail_ratio.map((elem)=>elem[0])
    
}