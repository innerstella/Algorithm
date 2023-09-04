function solution(numbers, n) {
    let answer = 0
    for(const num of numbers){
        answer += num
        if(answer>n){
              return answer
        }
    }
  
}