function solution(keyinput, board) {
    var answer = [0,0];
    keyinput.map((key)=>{
        if (key === 'left'){
            answer[0]--;
            boardCheck(answer, board);
        }
        if (key === 'right'){
            answer[0]++;
            boardCheck(answer, board);
        }
        if (key === 'up'){
            answer[1]++;
           boardCheck(answer, board);
        }
        if (key === 'down'){
            answer[1]--;
            boardCheck(answer, board);
        }
    })
    
    
    
    
    if (answer[0] < board[0]){}
    
    return answer;
}

function boardCheck (answer, board) {
    let x_max = (board[0]-1)/2;
    let y_max = (board[1]-1)/2;
    
    if(answer[0] > x_max){
        answer[0] = x_max;
    } else if (answer[0] < (-1)*x_max){
        answer[0] = (-1)*x_max;
    }
    
    if(answer[1] > y_max){
        answer[1] = y_max;
    } else if (answer[1] < (-1)*y_max){
        answer[1] = (-1)*y_max;
    }
    
    return answer;
}