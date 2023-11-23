function solution(bandage, health, attacks) {
    const endTime = attacks.at(-1)[0]
    const [skillT, skillQ, bonus] = bandage
   
    let hp = health
    let fever = 0
    let currAttack = attacks.shift()
    
    
    for(let t=0; t<=endTime; t++){
        const [attackT, attackQ] = currAttack
        
        // 공격 O
        if(t === attackT){
            fever = 0
            hp -= attackQ
            currAttack = attacks.shift()
        } 
        // 공격 X
        else {
            hp += skillQ
            fever++
            
            if(fever === skillT){
                hp += bonus
                fever = 0
            }
            
            hp = Math.min(health, hp)
        }
        
        
        // 게임 종료
        if(hp <= 0) return -1
    }
    
    return hp
}