function solution(myString, pat) {
    let str = myString.split('').map((s)=> s.toLowerCase()).join('')
    let p = pat.split('').map((s)=>s.toLowerCase()).join('')
    
    if(str.includes(p)){
        return 1
    } else {
        return 0
    }
}