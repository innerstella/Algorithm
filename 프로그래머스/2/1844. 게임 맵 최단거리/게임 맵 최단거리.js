function solution(maps) {
    let mapX = maps.length
    let mapY = maps[0].length
    
    let queue = [[0,0]]
    let dx = [-1,1,0,0]
    let dy = [0,0,-1,1]
    
    while(queue.length){
        let [x, y] = queue.shift()
        
        for(let i = 0; i<4; i++){
            let nx = x + dx[i]
            let ny = y + dy[i]
            
            if(nx < 0 || ny < 0 || nx >= mapX || ny >= mapY) continue
            if(maps[nx][ny] === 0 || nx === 0 && ny === 0) continue
            if(maps[nx][ny] === 1){
                maps[nx][ny] = maps[x][y] + 1
                queue.push([nx, ny])
            }
        }
    }
    
    if(maps[mapX-1][mapY-1] === 1){
        return -1
    } else {
        return maps[mapX-1][mapY-1]
    }
}