function solution(arr, k) {
    const answer = arr.map((num)=>{
        if(k%2 === 1){
            return num*k
        } else {
            return num+k
        }
    })
    return answer
}