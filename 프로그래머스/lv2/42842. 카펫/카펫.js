function solution(brown, yellow) {
    // 1. yellow로 뽑을 수 있는 격자 후보
    let yellow_arr = []
    for(let i=1; i <= yellow; i++){
        let div = yellow / i
        if(div === Math.floor(div)){
            let temp = [i, div]
            let sorted = temp.sort((a,b)=>a-b)
            yellow_arr.push(sorted.toString())
        }
    }
    
    yellow_arr = [...new Set(yellow_arr)]
    
    yellow_arr = yellow_arr.map((elem)=>{
        return elem.split(',')
    })
    
    
    // 2. brown으로 둘러지는 지 확인
    // (yellow_x * 2) + (yellow_y * 2) + 4
    let carpet = []
    yellow_arr.forEach((elem)=>{
        let yellow_x = +elem[0]
        let yellow_y = +elem[1]
        
        let brown_num = yellow_x*2 + yellow_y*2 + 4
        
        if(brown_num === brown){
            carpet.push(yellow_x + 2, yellow_y + 2)
        }
    })
    
    // 3. yellow에 2칸 씩 더해서 리턴 (긴 길이가 가로)
    return carpet.sort((a,b)=>b-a)    
}