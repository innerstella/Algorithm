function solution(k, score) {
    // 상위 k번째 이내
    
    // 매일 발표된 명예의 전당의 최하위 점수
    let result = []
    for(let i=0; i<score.length; i++){
        // 일자별 명예의 전당
        let temp = score.slice(0, i+1).sort((a,b)=>b-a).slice(0, k)
        
        // console.log(i+1,'일차 : ', temp)
        result.push(Math.min(...temp))
    }
    
    return result
}