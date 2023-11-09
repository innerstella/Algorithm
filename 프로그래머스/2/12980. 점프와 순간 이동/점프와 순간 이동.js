function solution(n) {
    // 사용해야 하는 건전지 사용량의 최솟값
    
    // 1. 한 번에 K 칸을 앞으로 점프 (연료 K)
    // 2. 현재까지 온 거리 *2 에 해당하는 위치로 순간이동 (연료 X)
    
    let answer = 0
    while(n!==0){
        if(n%2 === 0){
            n /= 2
        } else {
            n--
            answer++
        }
    }
    return answer
}