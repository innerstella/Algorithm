function solution(s) {
    var answer = 0;
    let sameCount = 0, diffCount = 0, sameStr
    s.split('').forEach((str)=>{
        // 첫 시작일 경우
        if(sameStr === undefined){
            sameStr = str
            sameCount++
        }
        // 첫 시작은 아닌데 같은 글자가 나올 경우
        else if(sameStr === str){
            sameCount++
        }
        // 첫 시작은 아닌테 다른 글자가 나올 경우
        else{
            diffCount++
        }

        // 처음으로 두 횟수가 같이지는 순간
        if(sameCount === diffCount){
            sameCount = 0
            diffCount = 0
            sameStr = undefined
            answer++
        }
    })

    // 남은 부분이 존재하면 해당 문자열도 추가 분리 
    if(sameCount !==0 || diffCount !== 0)
        answer++

    return answer

}