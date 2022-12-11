function solution(score) {
    let answer = [];
    let avg_list = []; //원래 순서, 평균 점수
    
    for(let i=0; i<score.length; i++){
        let avg = (score[i][0] + score[i][1])/2;
        avg_list.push([i, avg]);
    }
    
    
    // 정렬해서 등수 매기기
    avg_list = avg_list.sort(function(a,b){
        return b[1] - a[1];
    });
    
    let num_list = [];
    avg_list.map((e)=>{
        let temp = e[1];
        num_list.push([e[0], e[1], avg_list.filter(e => e[1] === temp).length]);
    })
    
    let temp = 1;
    num_list[0].push(1);
    
    for(let i=1; i<num_list.length; i++){
        if(num_list[i-1][1] !== num_list[i][1]){
            temp = temp + num_list[i-1][2];
            num_list[i].push(temp);
        } else if(num_list[i-1][1] === num_list[i][1]) {
            num_list[i].push(temp);
        }
    }
   
    // 원래 순서대로 정렬
    num_list.sort((a,b)=>{
        return a[0]-b[0];
    })
    
    num_list.map((e)=>{
        answer.push(e[3]);
    })
    
    return answer;
}