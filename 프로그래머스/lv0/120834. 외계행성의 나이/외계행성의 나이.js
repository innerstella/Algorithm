function solution(age) {
    var answer = '';
    age = age.toString().split('');
    
    age.map((e)=>{
        e = parseInt(e);
        answer += String.fromCharCode(97+e);
    })
    return answer;
}