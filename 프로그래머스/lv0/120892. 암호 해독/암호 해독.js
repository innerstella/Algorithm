function solution(cipher, code) {
    var answer = '';
    
    let c = code - 1;
    cipher = cipher.split('');
    for(let i= c; i<cipher.length; i += code){
        answer += cipher[i];
        console.log(i);
    }
    
    return answer;
}