function solution(num_list) {
    let answer = 0
    
    num_list.forEach((num)=>{
        let cnt = 0
        while(num !== 1){
            if(num%2 === 0){
                num = num/2
            } else {
                num = (num-1)/2
            }
                cnt++
        }
        answer += cnt
    })
    
    return answer
}