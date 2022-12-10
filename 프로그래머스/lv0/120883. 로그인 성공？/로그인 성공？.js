function solution(id_pw, db) {
    let isId = false;
    let isPw = false;
    let pw = '';
    
    // 아이디 있는지 체크
    for(let i=0; i<db.length; i++){
        if(db[i][0] === id_pw[0]){
            isId = true;
            pw = db[i][1];
        } 
    }
    
    // 비번 체크
    if (pw === id_pw[1]){
        isPw = true;
    }
    
    let answer = '';
    if(isId === false){
        answer = 'fail';
    } else if(isId === true && isPw === false){
        answer = 'wrong pw';
    } else if (isId ===  true && isPw === true){
        answer = 'login';
    }
    return answer;
}