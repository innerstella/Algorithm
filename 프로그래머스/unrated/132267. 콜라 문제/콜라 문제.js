function solution(a, b, n) {
    let answer = 0 // 상빈이가 받을 수 있는 콜라의 병 수
    
    // a : 콜라를 받기 위해 마트에 주어야 하는 병 수
    // b : 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수
    // n : 상빈이가 가지고 있는 빈 병의 개수
    
    let arr = [n,0] // 보유, 받음
    while (true){
    // for(let i=0; i<5; i++){
        arr[0] += arr[1]
        arr[1] = 0
        
        if(arr[0] < a){
            break
        }
        console.log('###', arr)
        let give = Math.floor(arr[0] / a)  // 제출
        
        arr[0] -= give*a
        arr[1] += give * b
        
        answer += arr[1]
       
    }
    return answer
}