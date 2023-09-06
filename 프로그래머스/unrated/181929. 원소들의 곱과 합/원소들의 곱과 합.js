function solution(num_list) {
    let mul = 1, sum = 0
    
    num_list.forEach((num)=>{
        mul = mul*num
        sum += num
    })
    
    if(mul < sum**2){
        return 1
    } else {
        return 0
    }
    
}