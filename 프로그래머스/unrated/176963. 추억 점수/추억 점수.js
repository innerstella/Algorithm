function solution(name, yearning, photo) {
    // 인물 별 그리움 점수 객체
    let people = {}
    
    for(let i=0; i<name.length; i++){
        people[name[i]] = yearning[i]
    }
    console.log(people)
    
    // 카운트
    let result = []
    
    photo.forEach((p)=>{
        let temp = 0
        
        p.forEach((person)=>{
            if(name.includes(person)){
                temp += people[person]
            }
        })
        
        result.push(temp)
    })
    
    return result
}