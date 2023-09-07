function checkDate(date, term, terms_dict){
    let due = date.slice()
    let day = +terms_dict[term] * 28 - 1
    due[1] += Math.floor(day/28)
    due[2] += day%28 
    
    // 일수 넘어감
    if(due[2] > 28){
        due[1]++
        due[2] -= 28
    }
    // 해 넘어감
    if(due[1] > 12){
        due[0]++
        due[1] -= 12
    }
    return due
}

function solution(today, terms, privacies) {
    today = today.split('.').map((t)=>+t)
    let today_num = today[0]*28*12 + today[1]*28 + today[2]
    console.log(today, today_num)
    // 모든 달은 28일까지 
    
    // 약관 딕셔너리
    let terms_arr = terms.map((term)=>{
        return term = term.split(' ')
    })
    let terms_dict = {}
    terms_arr.forEach((term)=>{
        terms_dict[term[0]] = term[1]
    })
    
    // 정보 배열
    let privacies_arr = privacies.map((data)=>{
        return data = data.split(' ')
    })
    
    // 기간 확인
    let answer = []
    
    for(let i=0; i<privacies_arr.length; i++){
        // 기간 -> 숫자 배열
        let date = privacies_arr[i][0].split('.').map((d)=>+d)
        let date_num = date[0]*28*12 + date[1]*28 + date[2] + terms_dict[privacies_arr[i][1]]*28 - 1
        // let dueDate = checkDate(date, privacies_arr[i][1], terms_dict)
        // console.log(date, date_num)
        
        // 기간 체크
        if(today_num > date_num){
            answer.push(i+1)
        }
        
        // 파기
//         let dueNum = +dueDate.map((elem)=>{
//             if(elem > 10){
//                 return `${elem}`
//             } else {
//                 return `0${elem}`
//             }
//         }).join('')
//         let todayNum = +today.map((elem)=>{
//             if(elem > 10){
//                 return `${elem}`
//             } else {
//                 return `0${elem}`
//             }
//         }).join('')
        
//         if(todayNum > dueNum){
//             answer.push(i+1)
//         }
    }
    
    
    // 파기해야 할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return
    return answer
}