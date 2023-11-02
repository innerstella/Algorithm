function solution(wallpaper) {
    // 파일 좌표
    const files = []
    
    for(let i=0; i<wallpaper.length; i++){
        let row = wallpaper[i]
        for(let j=0; j<row.length; j++){
            if(row[j] === '#'){
                files.push([i,j])
            }
        }
    }
    
    // 상하좌우
    const x = []
    const y = []
    for(let i=0; i<files.length; i++){
        x.push(files[i][0])
        y.push(files[i][1])
    }
    
    const x_min = Math.min(...x)
    const x_max = Math.max(...x)
    const y_min = Math.min(...y)
    const y_max = Math.max(...y)
    
    return [x_min, y_min, x_max+1, y_max+1]
}