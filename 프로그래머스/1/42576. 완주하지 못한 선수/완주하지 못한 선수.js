function solution(participant, completion) {
    const participantMap = {}
    
    participant.forEach((person)=>{
        if(participantMap[person]){
            participantMap[person] ++
        } else {
            participantMap[person] = 1
        }
    })
    
    completion.forEach((person)=>{
        participantMap[person] --
    })
    
    for(const key in participantMap){
        if(participantMap[key] === 1) return key
    }
}