// 10진수 -> 2진수
function convert10to2 (n, num) {
    let arr = []
    for(let i=n-1; i>=0; i--){
        let div = 2**i
        if(num - div >= 0){
            arr.push(1)
            num -= div
        } else {
            arr.push(0)
        }
    }
    return arr
}


function solution(n, arr1, arr2) {
    // 10진수 -> 2진수
    let map1 = arr1.map((elem)=>{
        return convert10to2(n, elem)
    })
    let map2 = arr2.map((elem)=>{
        return convert10to2(n, elem)
    })
    
    let map = []
    for(let i=0; i<n; i++){
        let temp = []
        for(let j=0; j<n; j++){
            if(map1[i][j] === 0 && map2[i][j] === 0){
                temp.push(' ')
            } else {
                temp.push('#')
            }
        }
        map.push(temp.join(''))
    }
    return map
}