function solution(arr) {
    const answer = arr.map((elem)=>{
        if(elem >= 50 && elem%2 === 0){
            return elem/2
        } else if (elem < 50 && elem%2 === 1){
            return elem*2
        } else {
            return elem
        }
    })
    return answer
}