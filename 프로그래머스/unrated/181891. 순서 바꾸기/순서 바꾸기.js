function solution(num_list, n) {
    let arr1 = num_list.slice(0,n)
    let arr2 = num_list.slice(n,num_list.length)
    
    return [...arr2, ...arr1]
}