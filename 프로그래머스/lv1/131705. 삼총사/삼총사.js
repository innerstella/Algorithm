function solution(number) {
    var answer = 0;
    
    let list =[];
    for(let i=0; i<number.length; i++){
        for(let j=i+1; j<number.length; j++){
            for(let k=j+1; k<number.length; k++){
                list.push(number[i]+number[j]+number[k]);
            }
        }
    }
    list.map((e)=>{
        if (e === 0){
            answer++;
        }
    })
    return answer;
}