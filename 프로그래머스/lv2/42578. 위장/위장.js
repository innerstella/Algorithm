function solution(clothes) {
    //스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return
    let answer = 0;
    let result = [];
    
    let type = [];
    clothes.map((e)=>{
            type.push(e[1]);
    })
    
    let typeList = type.reduce((list, t)=>{
        if(list[t] > 0){
            list[t] += 1;
        } else {
            list[t] = 1;
        }
        return list;
    },{});
    
    // console.log(typeList);
    clothes.map((e)=>{
        let item = e[0];
        let itemType = e[1];
        
        typeList[itemType] -= 1;
        // 다른 종류의 옷 개수+1 씩 곱해서 더해주기
        console.log(Object.entries(typeList));
        let temp = 1;
        Object.entries(typeList).map((e)=>{
            if(e[0] !== itemType && e[1] > 0){
                temp *= (1+ e[1]);
            }
        })
        answer += temp
        console.log(item, temp, answer);
    })
    
    return answer;
}