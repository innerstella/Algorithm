function solution(players, callings) {
    // 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다.
    let playersIdx = {}
    let rankIdx = {}
    
    players.forEach((player,idx)=>{
        const rank = idx+1
        playersIdx[player] = rank
        rankIdx[rank] = player
    })
    
    
    callings.forEach((call)=>{
        let lose = rankIdx[playersIdx[call] -1]
        
        rankIdx[playersIdx[call]] = lose
        rankIdx[playersIdx[lose]] = call
        
        
        playersIdx[lose] ++
        playersIdx[call] --
        
    })
     return Object.values(rankIdx)
}