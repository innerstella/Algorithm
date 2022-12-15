function solution(s) {
    var answer = '';
    let list = [];
    let nums = ['0','1,','2','3','4','5','6','7','8','9'];
    
    s = s.split(' ');

    s.map((e)=>{
        let temp = '';
        if (e === ''){
            list.push('');
            return;
        }
        if(nums.includes(e[0])){
            temp += e[0];
        } else if (nums.includes(e[0]) === false){
            temp += e[0].toUpperCase();
        }
        for(let i=1; i<e.length; i++){
            temp += e[i].toLowerCase();
        }
        list.push(temp);
    })
    
    answer = list.join(' ');
    return answer;
}