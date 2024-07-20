function solution(nums) {
    // 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택
    // 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 
    const pocketmons = {}
    
    nums.forEach((num)=>{
        if(pocketmons[num]){
            pocketmons[num]++
        } else {
            pocketmons[num] = 1
        }
    })
    
    const pocketmonsArr = []
    
    for(const key in pocketmons){
        pocketmonsArr.push(pocketmons[key])
    }
    
    
    let answer = 0
    
    for(let i=0; i<nums.length/2; i++){
        if(i >= pocketmonsArr.length) break
        
        pocketmonsArr[i] -= 1
        answer++
    }
    
    return answer
}