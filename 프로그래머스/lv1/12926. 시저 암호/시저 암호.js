function solution(s, n) {
    var answer = '';
    
    s = s.split('');
    
    s.map((str)=>{
        let ascii = str.charCodeAt() + n;
        // 공백
        if (str === ' '){
            answer += ' ';
        } else {
            if (str === str.toLowerCase() && ascii > 122){
                ascii -= 26;
            } else if (str === str.toUpperCase() && ascii > 90){
                ascii -= 26;
            }
            answer += String.fromCharCode(ascii);
        }
        
        
        // // 소문자
        // else if (str === str.toLowerCase()){
        //     console.log(str, '소문자');
        //     let ascii = str.charCodeAt() + n;
        //     // z
        //     if (ascii >= 122){
        //         ascii = ascii - 26;
        //     }
        //     answer += String.fromCharCode(ascii);
        // }
        // // 대문자
        // else if (str === str.toUpperCase()){
        //     console.log(str, '대문자');
        //     let ascii = str.charCodeAt() + n;
        //     // Z
        //     if (ascii >= 90){
        //         ascii = ascii - 27;
        //     }
        //     answer += String.fromCharCode(ascii);
        // }
    })    
    
    return answer;
}