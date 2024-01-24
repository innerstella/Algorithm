function solution(s) {
    let sArr = s.split('')
    let result = 0
    
    // 배열 길이만큼 돌리기
    for(let i=0; i<sArr.length; i++){
        if(i > 0){
            let front = sArr[0]
            
            sArr.shift()
            sArr.push(front)
        }
        
        checkBracket(sArr) && result++
    }
    
    
    return result
}

// 올바른 괄호 체크 함수
function checkBracket(arr){
    const opening = ['(', '{', '[']
    const closing = [')','}',']']
    const pairs = { '(':')', '{':'}','[':']'}
    
    let stack = []
    
    
    for(let i=0; i<arr.length; i++){
        let bracket = arr[i]
        
        if(opening.includes(bracket)){
            stack.push(bracket)
        } else {
            let prev = stack[stack.length - 1]
            
            // 이전 괄호 요소가 짝 맞으면 Pop
            if(opening.includes(prev) && pairs[prev] === bracket){
                stack.pop()
            } else {
                // 안 맞으면 RETURN false
                return false
            }
        }
    }
    
    if(stack.length === 0) {
        return true
    }
    
    return false
}