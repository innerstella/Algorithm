function solution(dartResult) {
    const result = []
    
    for(let i=0; i<3; i++){
        let score, bonus, option
        
        // score
        if(!isNaN(+dartResult[1])){
            // 10
            score = dartResult.slice(0,2)
            dartResult = dartResult.slice(2)
        } else {
            // 0~9
            score = dartResult.slice(0,1)
            // bonus = dartResult.slice(1,2)
            dartResult = dartResult.slice(1)
        }
        
        // bonus
        bonus = dartResult.slice(0,1)
        dartResult = dartResult.slice(1)
        
        // option
        if(isNaN(+dartResult[0])){
            option = dartResult.slice(0,1)
            dartResult = dartResult.slice(1)
        }
        
        result.push([score, bonus, option])
    }
    
    console.log(result)
    
    // 계산
    const answer = []
    
    // result.forEach((dart)=>{
    for(let i=0; i<3; i++){
        let dart = result[i]
        let ans = 0
        let score = dart[0]
        let bonus = dart[1]
        let option = dart[2]
        
        // bonus
        if (bonus === 'S') {
            ans = score;
        } else if (bonus === 'D') {
            ans = score **2
        } else if (bonus === 'T') {
            ans = score **3
        }
        
        // option
        if(option === '*'){
            answer[i-1] *= 2
            ans *= 2
        } else if (option === '#'){
            ans *= (-1)
        }

        answer.push(ans)
    }
    
    console.log(answer)
    
    // 총 점 계산
    let totalScore = 0
    answer.forEach((num)=>{
        totalScore += +num
    })
    
    return totalScore
}