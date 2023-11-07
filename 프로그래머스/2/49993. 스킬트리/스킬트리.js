function solution(skill, skill_trees) {
    let answer = 0
    
    
    skill_trees.forEach((tree)=>{
        let skill_order = skill.split('')
        let order = skill_order.shift()
        console.log('###', tree)
        
        tree = tree.split('')
        for(let i=0; i<tree.length; i++){
            let t = tree[i]
            if(skill.split('').includes(t)){
                console.log(t, 'check')
                if(t === order){
                    console.log('-pass')
                    order = skill_order.shift()
                } else {
                    console.log('-break')
                    return
                }
            } else {
                console.log(t, 'pass')
            }
        }
        answer++
    })
    return answer
}