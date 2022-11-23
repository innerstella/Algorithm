function solution(s) {
    var answer = 0;
    let ans = [];
    
    s = s.split(' ');
    for(let i=0; i<s.length; i++){
        if(s[i] !== 'Z'){
            // answer += parseInt(s[i]);
            ans.push(parseInt(s[i]));
        } else if (s[i] === 'Z'){
            ans.pop();
        }
    }
    console.log(ans);
    ans.map((e)=>{
        answer += e;
    })
    return answer;
}