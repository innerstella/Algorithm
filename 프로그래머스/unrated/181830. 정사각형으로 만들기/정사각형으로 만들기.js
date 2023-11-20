function solution(arr) {
    // 행, 열 수 세기
    const m = arr.length
    const n = arr[0].length
    console.log(m, n)
    
    // 순회하며 늘리기
    let result;
    
    if(m > n){
        result = arr.map((elem)=>{
            return [...elem, ...new Array(m-n).fill(0)]
        })
    }
    
    if(m < n){
        result = arr
        
        for(let i=0; i<n-m; i++){
            result.push(new Array(n).fill(0))
        }
    }
    
    if(m === n){
        result = arr
    }
    
    return result
   
}