function solution(record) {
    record = record.map((elem)=>elem.split(' '))
    
    const lastID = {}
    record.forEach((elem)=>{
        let type = elem[0]
        let uid = elem[1]
        let nickname = elem[2]
        
        if(type !== 'Leave'){
            lastID[uid] = nickname
        }
        
    })
    
    const log = []
    for(let i=0; i<record.length; i++){
        const elem = record[i]
        if(elem[0] === 'Enter'){
            log.push(`${lastID[elem[1]]}님이 들어왔습니다.`)
        } else if(elem[0] === 'Leave'){
            log.push(`${lastID[elem[1]]}님이 나갔습니다.`)
        } 
    }
    
    return log
    
}