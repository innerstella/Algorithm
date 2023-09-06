function solution(my_string, n) {
    let start = my_string.length - n
    return my_string.slice(start, my_string.length)
}