function solution(priorities, location) {
    let cnt = 0
    
    while(true){
        const pop = priorities.shift()
        
        if(pop >= Math.max(...priorities)){
            cnt++
            // console.log('pop',location,  priorities)
            if(location === 0) return cnt
        } else {
            priorities.push(pop)
            // console.log(location, priorities)
        }
        location = location === 0 ? priorities.length - 1 : location - 1
    }
}