function solution(n_str) {
    while(n_str.length > 0){
        if(n_str[0] === '0'){
            n_str = n_str.substr(1)
        } else {
            break
        }
    }
    
    return n_str
}