function solution(num_list) {
    let even = '', odd = ''
    
    num_list.forEach((num)=>{
        num%2 === 0 ? even += num.toString() : odd += num.toString()
    })
    
    return +even + +odd
}