function solution(spell, dic) {
    let result = 0;
    
    let count = 0;
    dic.map((dic)=>{
        let isIn = 0;
        spell.map((spell)=>{
            if(dic.includes(spell)){
                isIn++;
            }
        })
        if (isIn === spell.length){
            result++;
        }
    })
    
    let answer = 0;
    if (result > 0){
        answer = 1;
    } else {
        answer = 2;
    }
    return answer;
}