function solution(arr, query) {
    query.forEach((elem, idx)=>{
        if(idx%2 === 0){
            arr = arr.slice(0, elem + 1)
        } else {
            arr = arr.slice(elem)
        }
    })
    
    return arr
}