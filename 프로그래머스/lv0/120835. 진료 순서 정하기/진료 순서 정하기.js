function solution(emergency) {
    var answer = [];
    
    let sunseo = [];
    
    for (let i=1; i<=emergency.length; i++){
         sunseo.push([emergency[i-1], i, 0]); //응급도, 원래 순서, 진료 순서
    }
 
    sunseo = sunseo.sort(function(a,b,c){
        return b[0]-a[0];
    });
    

    // 진료 순서
    for(let i=1; i<=emergency.length; i++){
        sunseo[i-1][2] = i;
    }
    

    // 원래 순서대로 정렬
    sunseo.sort(function(a,b,c){
        return a[1] - b[1];
    })
    
    sunseo.map((e)=>{
        answer.push(e[2]);
    })
    
    return answer;
}