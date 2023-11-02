function solution(babbling) {
    const can = ["aya", "ye", "woo", "ma"]
    let result = []
    
    babbling.forEach((bab)=>{
        // console.log('##', bab)
        const origin = bab
        // 네 가지 발음
        if(can.includes(bab)){
            result.push(bab)
        } 
        // 네 가지 발음 조합
        else if(can.includes(bab.slice(0,2)) || can.includes(bab.slice(0,3))){
            for(let i=0; i<50; i++){
                // console.log(bab)
                if(can.includes(bab.slice(0,2))){
                    const curr = bab.slice(0,2)
                    const next = bab.slice(2,4)
                    // 연속해서 같은 발음 X
                    if(curr === next) break 
                    
                    bab = bab.slice(2)
                    
                    if(bab.length === 0){
                        result.push(origin)
                        break
                    }
                    
                } else if(can.includes(bab.slice(0,3))){
                    const curr = bab.slice(0,3)
                    const next = bab.slice(3,6)
                    // 연속해서 같은 발음 X
                    if(curr === next) break
                    
                    bab = bab.slice(3)
                    
                    if(bab.length === 0){
                        result.push(origin)
                        break
                    }
                } else {
                    break
                }
            }
        } 
        
        
    })
    
    return result.length
}