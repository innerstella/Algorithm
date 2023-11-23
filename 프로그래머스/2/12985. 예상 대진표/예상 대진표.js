function solution(n,a,b)
{
    let round = 1
    
    while(true){
        let max = Math.max(a,b)
        let min = Math.min(a,b)
        let diff = max - min
        
        if(max%2 === 0 && min%2 === 1 && diff === 1){
            break
        } else {
            round++
            a%2 === 0 ? a = a/2 : a = (a+1)/2
            b%2 === 0 ? b = b/2 : b = (b+1)/2
        }
    }
    
    return round
}