function solution(triangle) {
    for(let i=1; i<triangle.length; i++){
        for(let j=0; j<triangle[i].length; j++){
            let first = triangle[i-1][j-1] ?? 0
            let second = triangle[i-1][j] ?? 0
            
            if(second >= first){
                triangle[i][j] += second
            } else {
                triangle[i][j] += first
            }
        }
    }
    return Math.max(...triangle.at(-1))
}