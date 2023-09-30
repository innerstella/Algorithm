function solution(prices) {
    let answer = []
    
    for (let i=0; i<prices.length; i++){
        const curr = prices[i]
        let cnt = 0
        
        for(let j=i+1; j<prices.length; j++){
            cnt++
            if(prices[j] < curr){
                break
            }
        }
        // const queue = prices.slice(i+1)
        
        // for(let j=0; j<queue.length; j++){
        //     cnt++
        //     if(queue[j] < curr){
        //         break
        //     }
        // }
        // console.log('###', curr, queue, cnt)
        
        answer.push(cnt)
    }
    return answer
}