function solution(my_string, is_prefix) {
    if(my_string.substr(0, is_prefix.length) === is_prefix){
        return 1
    } else {
        return 0
    }
}