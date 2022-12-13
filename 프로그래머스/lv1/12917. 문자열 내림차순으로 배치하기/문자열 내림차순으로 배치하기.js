function solution(s) {
    s = s.split('');
    
    let ascii = [];
    s.map((e)=>{
        ascii.push(e.charCodeAt());
    })
    ascii.sort((a,b)=>{
        return b-a;
    })
    
    let str = [];
    ascii.map((e)=>{
        str.push(String.fromCharCode(e));
    })
    
    let answer = str.join('');
    return answer;
}