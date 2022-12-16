function solution(board, moves) {
    var answer = 0;
    console.log(board);
    let list = [];
    moves.map((m)=>{
        let pos = m-1;
        for(let i=0; i<board.length; i++){
            if(board[i][pos] > 0){
                if (list[list.length-1] === board[i][pos]){
                    answer += 2;
                    list.pop();
                } else {
                    list.push(board[i][pos]);
                }
                board[i][pos] = 0;
                break;
            }
            
        }
    })
   return answer;
}

