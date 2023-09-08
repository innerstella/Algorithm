function solution(n) {
    // 2진수 n
    let n_2_1 = 0
    let n_2 = n.toString(2).split('').forEach((n)=>{
         n === '1' && n_2_1++
    })
    
    
    let next = n + 1
    while (true){
        let next_2_1 = 0
        let next_2 = next.toString(2).split('').forEach((n)=>{
            n === '1' && next_2_1++
        })
        if(n_2_1 === next_2_1){
            break
        }
        
        next++
        
    }
    return next    
}