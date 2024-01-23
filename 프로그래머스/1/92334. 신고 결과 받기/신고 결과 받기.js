function solution(id_list, report, k) {
    // 중복 제거
    report = [...new Set(report)]
    
    // 리포트 개수 세기
    const reportLog = {}
    
    for(const user of id_list){
        reportLog[user] = 0
    }
    
    report.forEach((rep)=>{
        const [from, to] = rep.split(' ')
        
        reportLog[to]++
    })
    
    // 정지된 유저
    const bannedList = []
    
    for(const key in reportLog){
        if(reportLog[key] >= k){
            bannedList.push(key)
        }
    }
    
    // 메일 리스트
    const mailList = {}
    
    report.forEach((rep)=>{
        const [from, to] = rep.split(' ')
        
        if(bannedList.includes(to)){
            mailList[from]  ? mailList[from]++ : mailList[from] = 1
        }
    })
    
    
    // return
    return id_list.map((id)=>{
        if(mailList[id]){
            return mailList[id]
        } else {
            return 0
        }
    })
}