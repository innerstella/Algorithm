function solution(n, edge) {
    const connects = new Array(n).fill().map(_ => [])
    
    edge.forEach((e)=>{
        connects[e[0]-1].push(e[1]-1)
        connects[e[1]-1].push(e[0]-1)
    })
    
    let visited = [1]
    let needVisit = [0]
    
    while(needVisit.length !== 0){
        const node = needVisit.shift()
        
        for(const n of connects[node]){
            if(!visited[n]){
                visited[n] = visited[node] + 1
                needVisit.push(n)
            }
        }
    }
    
    const max = Math.max(...visited)
    
    return visited.filter((e)=>e === max).length
}