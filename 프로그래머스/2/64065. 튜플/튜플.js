function solution(s) {
    // 순서가 다르면, 서로 다른 튜플
    // (2,1,3,4)
    // -> {{2}, {2, 1}, {2, 1, 3}, {2, 1, 3, 4}}
    
    // 1. 문자열 -> 배열
    s = s.slice(2, s.length -2).split('},{')
    
    let s_arr = s.map((elem)=> {
        return elem.split(',')
    })
    
    // 2. 초기 리스트
    let arr
    s_arr.forEach((elem)=>{
        if(elem.length === s_arr.length){
            arr = elem
        }
    })
    
    let list = {}
    arr.forEach((elem)=>{
        list[elem] = 0
    })
    
    // 3. 배열 순회하며 개수와 함께 리스트에 넣기
    s_arr.forEach((elem)=>{
        elem.forEach((num)=>{
            list[num]++
        })
    })
    
    
    // 4. 튜플 생성하기
    let tuple_arr = []
    for(const key in list){
        tuple_arr.push([key, list[key]])
    }
    
    tuple_arr.sort((a,b)=> b[1]-a[1])
    
    let answer = tuple_arr.map((elem)=>{
        return +elem[0]
    })
    
    return answer
}