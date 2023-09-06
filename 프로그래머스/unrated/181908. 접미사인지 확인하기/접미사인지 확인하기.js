function solution(my_string, is_suffix) {
    let start_idx = my_string.length - is_suffix.length
    
    if(my_string.substr(start_idx) === is_suffix){
        return 1
    } else {
        return 0
    }
    
}