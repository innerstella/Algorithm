function solution(my_string, overwrite_string, s) {
    const result = my_string.split('').map((word, idx)=>{
        if(idx >= s && idx < overwrite_string.length + s){
            return overwrite_string[idx-s]
        } else {
            return word
        }
    }).join('')
    
    return result
}