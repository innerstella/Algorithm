function solution(my_string) {
    var answer = [];
    my_string = my_string.split('');
    let number = ['0','1','2','3','4','5','6','7','8','9'];
    my_string.map((e)=>{
        if (number.includes(e)){
            answer.push(parseInt(e));
        }
    })
    answer.sort(function(a,b){
        return a-b;
    })
    return answer;
}