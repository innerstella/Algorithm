function solution(n) {
    // let result = new Array(n).fill(new Array(n))
    let result = new Array(n);
    for(let i = 0; i < result.length; i++){
        result[i] = new Array(n);
    }
    // console.log(result)

    
    let dir = 1
    let x = -1, y = 0, num = 0
    
    while(true){
        // x-axis
        for(let i=0; i<n; i++){
            x += dir
            result[y][x] = ++num
        }
        n--
        
        if(n === 0) break
        
        // y-axis
        for(let j=0; j<n; j++){
            y += dir
            result[y][x] = ++num
        }
        dir *= -1
    }
    
    return result
}