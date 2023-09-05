function solution(numbers, hand) {
    // 키패드 좌표화
    // * 10 0 11 # 12
    let keypadArr = []
    const rows = 4
    const cols = 3
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            keypadArr.push([i, j])
        }
    }
   
    let answer = ''
    let prevL = 10 
    let prevR = 12
    for(let i=0; i<numbers.length; i++){
        let num = numbers[i]
        let keypadIdx = 0
        if(num >= 1 && num <= 9){
            keypadIdx = num-1
        } else if(num === 0){
            keypadIdx = 10
        }
        
        // console.log('###', prevL, prevR, num)
        if(num === 1 || num === 4 || num === 7){
            answer += 'L'
            prevL = num
            // console.log(answer)
        } else if (num === 3 || num === 6 || num === 9){
            answer += 'R'
            prevR = num
            // console.log(answer)
        } else {
            let prevLArr = keypadArr[prevL-1]
            let prevRArr = keypadArr[prevR-1]
            let currArr = keypadArr[keypadIdx]
            // console.log(prevLArr, prevRArr, currArr)
            let distanceL = Math.abs(prevLArr[0] - currArr[0]) + Math.abs(prevLArr[1] - currArr[1])
            let distanceR = Math.abs(prevRArr[0] - currArr[0]) + Math.abs(prevRArr[1] - currArr[1])
            // console.log(distanceL, distanceR)
            if (distanceL === distanceR){
                if(hand === 'right'){
                    answer += 'R'
                    num!==0 ? prevR = num : prevR = 11
                    
                } else {
                    answer += 'L'
                    num!==0 ? prevL = num : prevL = 11
                }
            } else {
                 if(distanceR < distanceL){
                    answer += 'R'
                    num!==0 ? prevR = num : prevR = 11
                     
                } else {
                    answer += 'L'
                    num!==0 ? prevL = num : prevL = 11
                }
            }
        }
    }
    
    return answer
}