function solution(numbers) {
    // 1. 만들 수 있는 숫자 리스트
    let set = new Set()
    numOfCase(numbers, '')
    function numOfCase(arr, str){
        if(arr.length){
            for(let i=0; i<arr.length; i++){
                let copy = [...arr]
                copy.splice(i,1)
                numOfCase(copy, str+arr[i])
            }
        }
        if(str>0){
            set.add(Number(str))
        }
    }
    
    let numList = [...set]
    
    // 2. 소수 판별
    let answer = 0
    numList.forEach((num)=>{
        checkNum(num) && answer++
    })
    
    function checkNum(num){
        let list = []
        if(num === 1 || num === 0){
            return false
        } else if(num === 2){
            return true
        } else if(num % 2 === 0 ){
            return false
        } else {
            for(let i=3; i<=Math.sqrt(num); i++){
                if(num%i === 0){
                    return false
                } 
            }
            return true
        }
    }
    
    return answer
}