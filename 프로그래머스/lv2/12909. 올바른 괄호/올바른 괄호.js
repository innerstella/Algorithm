function solution(s){
    // 스택
    if(s[0] === ')'){
        return false;
    }
    
    let stack = [s[0]];
    for(let i=1; i<s.length; i++){
        if(s[i] === '('){
            stack.push(s[i]);
        } else {
            if (stack[stack.length-1] === '(' ){
                stack.pop();
            }
        }
        
    }
    return stack.length === 0 ?  true :  false;
}