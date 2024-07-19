function solution(strArr) {
    const lengthMap = {}
    
    strArr.forEach((elem)=>{
         if(lengthMap[elem.length]){
             lengthMap[elem.length] += 1
         } else {
             lengthMap[elem.length] = 1
         }
    })
    
    let answer = 0
    
    for(const key in lengthMap){
        answer = Math.max(answer, lengthMap[key])
    }
    
    return answer;
}