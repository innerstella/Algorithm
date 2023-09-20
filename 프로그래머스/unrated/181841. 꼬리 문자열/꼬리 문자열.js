function solution(str_list, ex) {
    let answer = ''
    str_list.forEach((str)=>{
        if(!str.includes(ex)){
            answer += str
        }
    })
    
    return answer
}