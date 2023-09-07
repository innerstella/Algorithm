function solution(keymap, targets) {
    let answer = []
    
    targets.forEach((target)=>{
        let cnt = []
        
        target.split('').forEach((elem)=>{
            let clickList = []
            keymap.forEach((key)=>{
                if(key.includes(elem)){
                    clickList.push(key.indexOf(elem) + 1)
                }
            })
            // cnt += Math.min(...clickList)
            cnt.push(Math.min(...clickList))
            
            if(clickList.length === 0){
                // cnt = -1
                cnt.push(-1)
            }
        })
        // answer.push(cnt)
        if(cnt.includes(-1)){
            answer.push(-1)
        } else {
            let sum = cnt.reduce((acc, curr) => acc + curr, 0);
            answer.push(sum)
        }
    })
    return answer
}