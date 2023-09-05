function solution(id_list, report, k) {
    // 데이터 담을 배열 생성
    let data = {}
    id_list.forEach((id)=>{
        data[id] = [[],[]]
    })
    
    // 신고 기록 배열화
    report = report.map((r)=>r.split(' '))
    
    // 신고 기록 돌면서 추가하기
    report.forEach((r)=>{
        // 피해자
        data[r[0]][0].push(r[1])
        // 가해자
        data[r[1]][1].push(r[0])
    })
    
    // 중복 제거
    const data_entry = Object.entries(data);
    
    const data_set = {}
    for(const [key, val] of data_entry){
        let report = Array.from(new Set(val[0]))
        let reported = Array.from(new Set(val[1]))
        data_set[key] = [report, reported]
    }
    
    // 정지 유저 리스트    
    const data_set_entry = Object.entries(data_set);
    
    let stop = []
    for(const [key,val] of data_set_entry){
        if(val[1].length >= k){
            stop.push(key)
        }
    }
    // 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return
    let answer = []
    for(const [key, val] of data_set_entry){
        let temp = val[0].filter((v)=>stop.includes(v)).length
        answer.push(temp)
    }
    return answer
}