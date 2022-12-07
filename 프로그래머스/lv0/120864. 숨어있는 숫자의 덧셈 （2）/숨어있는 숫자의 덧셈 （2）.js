function solution(my_string) {
    let answer = 0;
    
    let num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let num_str = '';
    
    my_string.split('').map((s)=>{
        if(num_arr.includes(s)){
            num_str += s;
        } else { 
            num_str += ' ';
        }
    })
    
    let arr = num_str.split(' ').filter(s => s !== '');
    arr.map((e)=>{
        let n = parseInt(e);
        answer += n;
    })
    
    return answer;
}