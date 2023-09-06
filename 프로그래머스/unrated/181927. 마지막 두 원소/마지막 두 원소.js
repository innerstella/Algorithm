function solution(num_list) {
    let prev = num_list[num_list.length-2]
    let last = num_list[num_list.length-1]
    if(last > prev){
        num_list.push(last - prev)
    } else {
        num_list.push(last*2)
    }
    return num_list
}