function solution(routes) {
    routes = routes.sort((a,b)=>a[0]-b[0])
    
    let min = routes[0][0]
    let max = routes[0][1]
    let cnt = 1
    
    for(let i=1; i<routes.length; i++){
        const [start, end] = routes[i]
        
        if(min <= start && max >= end){ // 아예 포함
            min = start
            max = end
            continue
        }
        
         if(min <= start && max >= start){ // 진입 걸침
            continue
        }
        
        cnt++
        min = start
        max = end
    }
    return cnt
}