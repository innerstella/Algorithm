function solution(k, tangerine) {
    let numOfTangerine = new Array(Math.max(...tangerine)).fill([0,0])
    numOfTangerine = numOfTangerine.map((t, idx)=>{
        return [idx, 0]
    })
    
    tangerine.forEach((t)=>{
        numOfTangerine[t-1][1]++
    })
    
    numOfTangerine.sort((a,b)=>a[1]-b[1])
    
    console.log(numOfTangerine)
    
    let type = 0
    
    while(true){
        let t = numOfTangerine.pop()
        let [size, num] = t
        
        type++
        k -= num
        
        if(k <= 0) break
    }
    
    return type
    
}