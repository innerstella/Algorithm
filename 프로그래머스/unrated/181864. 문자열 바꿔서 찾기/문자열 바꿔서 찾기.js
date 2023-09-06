function solution(myString, pat) {
    // 바꾸기
    let trans = myString.split('').map((str)=>{
        if(str === 'A'){
            return 'B'
        } else { 
            return 'A'
        }
    }).join('')
    
    // 체크
    if(trans.includes(pat)){
        return 1
    } else {
        return 0
    }
}