function solution(food) {
    let food_num = food.length - 1
    
    let list = ''
    for(let i=1; i<=food_num; i++){
        let num = Math.floor(food[i] / 2)
        if(num > 0){
            for(let j=0; j<num; j++){
                list += i
            }
        }
    }

    let user1 = list
    let user2 = list.split('').reverse().join('')
    
    return `${user1}0${user2}`
}