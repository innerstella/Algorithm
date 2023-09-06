function solution(my_string, alp) {
    return my_string.split('').map((s)=>{
        if(s === alp){
            return s.toUpperCase()
        } else{
            return s
        }
    }).join('')
    
    
}