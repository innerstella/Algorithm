function solution(board) {
    let answer = 0;
    let board_length = board.length**2;
   
    for(let i=0; i<board.length; i++){
        for (let j=0; j<board.length; j++){
            if (isNearSafe(board, i,j) === true && board[i][j] === 0){
                answer++;
            }
        }
    }
    return answer;
}

function isNearSafe (board, i, j) {
    let near_arr = [];    
    
    if(i-1 >= 0){
        let n = board[i-1][j];
        near_arr.push(n);
    }
    if (j+1 < board.length){
        let e = board[i][j+1];
        near_arr.push(e);
    }
    if (j-1 >= 0){
        let w = board[i][j-1];
        near_arr.push(w);
    }
    if (i+1 < board.length){
        let s = board[i+1][j];
        near_arr.push(s);
    }
    if (i-1 >= 0 && j-1 >=0){
        let nw = board[i-1][j-1];
        near_arr.push(nw);
    }
    if (i-1 >= 0 && j+1 <board.length){
        let ne = board[i-1][j+1];
        near_arr.push(ne);
    }
    if (i+1 < board.length && j-1 >=0){
        let sw = board[i+1][j-1];
        near_arr.push(sw);
    }
    if (i+1 < board.length && j+1 < board.length){
        let se = board[i+1][j+1];
        near_arr.push(se);
    }
    
    // console.log(i,j,near_arr);
    let cnt = 0;
    near_arr.map((p) =>{
        if(p === 1){
            cnt++;
        }
    })
    if (cnt === 0){
        return true;
    } else {
        return false;
    }

}