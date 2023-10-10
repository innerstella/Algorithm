function solution(n) {
    // 빈 배열 만들기
    let result = new Array(n).fill(null).map(() => []);
    
    // 순회에 필요한 변수
    let x = 0, y = -1, num = 0
    
    // 순회
    while(true){
        // y-axis
        for(let i=0; i<n; i++){
            result[++y][x] = ++num
        }        
        // complete
        if(n === 0) break
        n--
        
        // x-axis
        for(let j=0; j<n; j++){
            result[y][++x] = ++num
        }
        // complete
        if(n === 0) break
        n--
        
        // diagonal
        for(let k=0; k<n; k++){
            result[--y][--x] = ++num
        }
        // complete
        if(n === 0) break
        n--
    }
        
    
    // 합쳐서 리턴
    return [].concat(...result)
    
}