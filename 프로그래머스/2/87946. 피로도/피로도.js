function solution(k, dungeons) {
    // 최소 필요 피로도 : 해당 던전을 탐험하기 위해 가지고 있어야 하는 최소한의 피로도
    // k : 현재 피로도
    // dungeons : [최소 필요 피로도(r), 소모 피로도(s)]
    
    // 던전을 돌 수 있는 방법
    const dungeonsNum = []
    for(let i=0; i<dungeons.length; i++){
        dungeonsNum.push(i)
    }
    
    const makePermutation = (arr) => {
        if(arr.length === 1){
            return [arr]
        }
        
        const permutations = []
        
        for(let i=0; i<arr.length; i++){
            const curr = arr[i]
            const remainElement = arr.slice(0,i).concat(arr.slice(i+1))
            const remainPermutations = makePermutation(remainElement)
            
            for(const permutation of remainPermutations){
                permutations.push([curr, ...permutation])
            }
        }
        
        return permutations
    }
    const orders = makePermutation(dungeonsNum)
    
    // 유저가 탐험할 수 있는 최대 던전 수
    let max = -Infinity
    
    orders.forEach((order)=>{
        let cnt = 0
        let hp = k
        order.forEach((dungeon)=>{
            const req = dungeons[dungeon][0] // 최소 필요 피로도
            const spend = dungeons[dungeon][1] // 소모 피로도
            if(hp >= req){
                hp -= spend
                cnt++
            }
        })
        
        max = Math.max(max, cnt)
    })
    
    return max
}