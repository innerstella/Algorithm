function solution(arr)
{
    const answer = []
    
    arr.forEach((elem, idx)=>{
        if(elem !== answer[answer.length - 1]){
            answer.push(elem)
        }
    })
    
    return answer
}