function solution(nums) {
    let answer = 0; 
    nums.sort();
 
    let list = [];
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k =j+1; k<nums.length; k++){
                list.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    
    // 소수 체크
    list.map((e)=>{
        let soinsu = sosuCheck(e);
        if (soinsu.length === 1 && soinsu[0] === e){
            answer++;
        }
    })
    
    return answer;
}

function sosuCheck (n) {
    let origin = n;
    let list = [];
    while (n%2 === 0){
        n = n/2;
        list.push(2);
    }
    for (let i=3; i<=origin; i++){
        if(n%i===0){
            n = n/i;
            list.push(i);
        }
    }
    return list;
}