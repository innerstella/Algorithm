function solution(str1, str2) {
    var answer = 0;
    
    let str1_arr = [];
    for(let i=0; i<str1.length; i++){
        str1_arr.push(str1.substr(i, str2.length));
    }
    if(str1_arr.includes(str2)){
        answer = 1;
    } else {
        answer = 2;
    }
    
    return answer;
}