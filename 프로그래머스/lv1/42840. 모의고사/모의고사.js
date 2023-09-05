function solution(answers) {
    // 정답 길이만큼 답안 배열 만들기
    const ans_len = answers.length
    let user1 = [], user2 = [], user3 = []
    
    for(let i=0; i<ans_len; i++){
        // user1
        let curr1 = 1
        while(user1.length !== ans_len){
            user1.push(curr1)
            curr1 < 5 ? curr1++ : curr1 = 1
        }
        // user2
        let idx2 = 1
        let prev2 = 5
        while(user2.length !== ans_len){
            if(idx2%2 === 1){
                user2.push(2)
            } else {
                if(prev2 === 5){
                    user2.push(1)
                    prev2 = 1
                } else if (prev2 === 1){
                    user2.push(3)
                    prev2 = 3
                } else if (prev2 === 3){
                    user2.push(4)
                    prev2 = 4
                } else if (prev2 === 4){
                    user2.push(5)
                    prev2 = 5
                }
            }
            idx2++
        }
        
        // user3
        let idx3 = 1
        let prev3 = 3
        while(user3.length !== ans_len){
            user3.push(prev3)
            if(idx3%2 === 0){
                if(prev3 === 3){
                    prev3 = 1
                } else if (prev3 === 1){
                    prev3 = 2
                } else if (prev3 === 2){
                    prev3 = 4
                } else if (prev3 === 4){
                    prev3 = 5
                } else if (prev3 === 5){
                    prev3 = 3
                }
            }
            idx3++
        }
    }
    
    // 정답 개수 세기
    let check1 = 0, check2 = 0, check3 = 0
    for(let i=0; i<answers.length; i++){
        if(user1[i] === answers[i]){
            check1++
        }
        if(user2[i] === answers[i]){
            check2++
        }
        if(user3[i] === answers[i]){
            check3++
        }
    }
    
    // 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return
    let check = [check1, check2, check3]
    let answer = []
    let max = Math.max(...check)
    for(let i=0; i<3; i++){
        if(check[i] === max){
            answer.push(i+1)
        }
    }
    
    return answer
}