function solution(order) {
    let totalPrice = 0
    
    order.forEach((menu)=>{
        if(menu === 'anything' || menu.includes('americano')){
            totalPrice += 4500
        }
        if(menu.includes('cafelatte')){
            totalPrice += 5000
        }
    })
    
    return totalPrice
}