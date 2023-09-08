function solution(rank, attendance) {
    let result = []
    
    for(let i=0; i<rank.length; i++){
        if(attendance[i]){
            result.push([i, rank[i]])
        }
    }
    
    result = result.sort((a,b)=>a[1]-b[1])
    let answer = 10000*result[0][0] + 100*result[1][0] + result[2][0]
    return answer
}