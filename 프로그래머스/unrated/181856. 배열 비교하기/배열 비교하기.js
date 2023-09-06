function solution(arr1, arr2) {
    let answer
    if(arr1.length !== arr2.length){
        arr1.length > arr2.length ? answer = 1 : answer = -1
    } else {
        let sum1 = 0, sum2 = 0
        arr1.forEach((num)=> sum1 += num)
        arr2.forEach((num)=> sum2 += num)
        if(sum1>sum2){
            answer = 1
        } else if(sum1 < sum2){
            answer = -1
        } else{
            answer = 0
        }
    }
    
    return answer
}