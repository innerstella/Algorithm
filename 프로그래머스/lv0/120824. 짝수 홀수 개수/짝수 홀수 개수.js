function solution(num_list) {
    var answer = [];
    
    let even = 0;
    let odd = 0;
    num_list.map((e)=>{
        {e%2 ===0?even += 1: odd+=1};
    })
    answer = [even, odd];
    return answer;
}