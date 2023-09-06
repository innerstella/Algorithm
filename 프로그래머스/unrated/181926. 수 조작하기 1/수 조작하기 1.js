function solution(n, control) {
    control.split('').forEach((elem)=>{
        if(elem === 'w'){
            n += 1
        } else if (elem === 's'){
            n-=1
        } else if (elem === 'd'){
            n += 10
        } else if (elem === 'a'){
            n-=10
        } 
    })
    
    return n
}