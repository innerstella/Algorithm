function solution(sizes) {
    // 1. 지갑 정리하기
    let arranged = sizes.map((wallet)=>{
        if(wallet[0] < wallet[1]){
            return [wallet[1], wallet[0]]
        } else {
            return wallet
        }
    })
    
    // 2. 최대 가로 길이, 최대 세로 길이 
    let x = arranged.map((wallet)=>wallet[0])
    let y = arranged.map((wallet)=>wallet[1])
    
    return Number(Math.max(...x))*Number(Math.max(...y))
}