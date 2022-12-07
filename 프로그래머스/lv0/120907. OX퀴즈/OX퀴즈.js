function cal(num1, symbol, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    if(symbol === '+'){
        return num1+num2
    }
    if(symbol === '-'){
        return num1-num2;
    }
}

function solution(quiz) {
    var answer = [];
    let quiz_arr = [];
    quiz.map((q) => {
        quiz_arr.push(q.split(' '));
    })
    quiz_arr.map((q)=>{
        let ans = parseInt(q[4]);

        if(cal(q[0], q[1], q[2]) === ans){
            answer.push('O');
        } else {
            answer.push('X');
        }
        
    })
    return answer;
}

