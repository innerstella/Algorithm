function solution(a, b, c, d) {
    let dices = new Array(6).fill(0)
    let abcd = [a,b,c,d]
    
    abcd.forEach((elem)=>{
        dices[elem-1]++
    })
    
    const max = Math.max(...dices)
    const maxNum = dices.indexOf(max) + 1
    
    
    if(max === 4) return 1111*maxNum
    if(max === 3){
        const other = dices.indexOf(1) + 1
        
        return (10*maxNum + other)**2
    }
    if(max === 2){
        const set = new Set(abcd)
        let arr = Array.from(set).filter((e)=>e !== maxNum)
        const p = maxNum
        const q = arr[0]
        
        if(arr.length === 1){
            return (p+q)*Math.abs(p-q)
        } 
        
        const r = arr[1]
        
        return q*r
    }
    
    return Math.min(...abcd)
    
    
}