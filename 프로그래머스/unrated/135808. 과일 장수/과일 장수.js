function solution(k, m, score) {
    score = score.sort((a,b)=>b-a)
    let box = Math.floor(score.length / m)
    let boxList = []
    
    for(let i=0; i<box; i++){
        let temp = [];
        for(let j=0; j<m;j++){
            temp.push(score[j+m*i])
        }
        boxList.push(temp)
    }
    
    let answer = 0;
    boxList.forEach((box)=>{
        answer += m*Math.min(...box)
    })
    
    return answer
}