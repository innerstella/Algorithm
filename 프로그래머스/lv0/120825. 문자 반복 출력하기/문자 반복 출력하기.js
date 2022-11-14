function solution(my_string, n) {
    var answer = '';
    let result = [];
    
    let str = my_string.split('');
    str.map((e)=>{
        for(let i=1; i<=n; i++){
             result.push(e) 
        }
    })
    
    answer = result.join('')
    return answer;
}