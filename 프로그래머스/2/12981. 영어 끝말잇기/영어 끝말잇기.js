function solution(n, words) {
    // 가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지
    
    // 말한 단어들
    let spoken = [words[0]]
    
    let cnt = 0
    while(true){
        let curr = words[cnt]
        let next = words[cnt+1]
        
        let curr_last = curr[curr.length -1]
        let next_first = next[0]
        
        cnt++
        
        if(curr_last === next_first && !spoken.includes(next)){
            spoken.push(next)
        } else {
            break
        }
        
        if(cnt === words.length - 1) return [0,0]
        
    }
    
    
    return [ cnt%n + 1, Math.floor(cnt/n) + 1]
}