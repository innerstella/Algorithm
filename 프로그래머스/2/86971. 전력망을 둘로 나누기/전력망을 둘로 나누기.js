function solution(n, wires) {
    let min = Infinity
    
    wires.forEach(([eraseFrom, eraseTo])=>{
        const connect = {}
        for(let i=1; i<=n; i++){
            connect[i] = []
        }
        
        wires.forEach(([from, to])=>{
            if(!(eraseFrom === from && eraseTo === to)){
                connect[from].push(to)
                connect[to].push(from)
            }
        })
        
        const searchs = [1]
        const visited = []
        while(searchs.length !== 0){
            const searchIdx = searchs.pop()
            if(!visited.includes(searchIdx)){
                searchs.push(...connect[searchIdx])
                visited.push(searchIdx)
            }
        }
        
        const wire1 = n - visited.length
        const wire2 = visited.length
        min = Math.min(min, Math.abs(wire1-wire2))
    })
    
    return min
}