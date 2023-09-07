function solution(arr, delete_list) {
    let delete_arr = arr.map((num)=>{
        if(!delete_list.includes(num)){
            return num
        }
    })
    
    let answer = delete_arr.filter(num=> num !== undefined)
    
    return answer
}