function solution(n) {
    let result = 1
    
    for(let i=1; i<= Math.floor(n/2); i++){
        let sum = 0
        let j = i
        while (sum < n){
            sum += j
            j++
        }
        // console.log(i, sum)
        if(n === sum){
            result++
        }
    }
    
    return result
}

// function solution(n) {
//     let result = 0
    
//     for(let i=1; i<=n; i++){
//         let sum = 0
//         let j = i
//         while (sum < n){
//             sum += j
//             j++
//         }
//         if(n === sum){
//             result++
//         }
//     }
    
//     return result;
// }