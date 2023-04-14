function solution(citations) {
    var answer = 0;
    citations.sort()
    let result = []
    let h = []
    for(let i=0; i<=Math.max(...citations); i++){
        //i번 이상 인용된 논문이 i편 이상?
        let reports = []
        citations.map((e)=>{
            e >= i && reports.push(e)
        })
        // console.log(i, reports)
        
        // 나머지는 i 번 미만 인용?
        
        
        if(i <= reports.length){
            result = reports
            // answer = i
            h.push(i);
            // console.log(i,'------------')
        }
    }
    // console.log(h)
    answer = Math.max(...h)
    return answer;
}