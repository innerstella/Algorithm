function countDivisors(number) {
    let count = 0;
    
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            if (i * i === number) {
                count++; // 제곱수인 경우 중복으로 세지 않음
            } else {
                count += 2; // 두 개의 약수를 찾음
            }
        }
    }
    
    return count;
}


function solution(number, limit, power) {
    // 약수 세기
    let div_list = [1]
    // for(let i=2; i<= number; i++){
    //     let cnt = 1
    //     for(let j=2; j<=i; j++){
    //         if(i%j === 0){
    //             cnt++
    //         }
    //     }
    //     div_list.push(cnt)
    // }
     for (let i = 2; i <= number; i++) {
        let cnt = countDivisors(i);
        div_list.push(cnt);
    }
    
    
    // 실제 공격력 계산
    let real_list = div_list.map((elem)=>{
        if(elem <= limit){
            return elem
        } else {
            return power
        }
    })
    
    
    // 철 무게
    let answer = 0
    real_list.forEach((elem)=> answer += elem)
    
    return answer
}