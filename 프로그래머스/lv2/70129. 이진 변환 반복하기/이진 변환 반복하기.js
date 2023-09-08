function solution(s) {
    let answer = []
    let result = s
    
    let cnt = 0 // 이진 변환의 횟수
    let num0 = 0 // 제거된 모든 0의 개수
    while (true){
        // 1. 모든 0 제거
        result.split('').forEach((num)=>{
            if(num === '0'){
                num0++
            }
        })
        let val1 = result.split('').filter((num)=>num !== '0').join('')
        answer.push(num0)
        
    
        // 2. 길이를 2진수로 변환
        result = val1.length.toString(2)
        cnt++
        
        if(result === '1'){
            break
        }
        
    }
    
    return [cnt, num0]
}