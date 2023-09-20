function checkBeforeUp(next, curr_bridge, weight, bridge_length){
    // 다음 트럭을 올린 후의 상태 체크
    let next_bridge = [next, ...curr_bridge]
    next_bridge.pop()
    
    // let next_weight = 0
    // next_bridge.forEach((truck) => next_weight += truck)
    let next_weight = next_bridge.reduce((a,b) => a + b, 0)
    
    if(next_weight <= weight){
        return next_bridge
    } else {
        return false
    }
}

function solution(bridge_length, weight, truck_weights) {
    let time = 0 // 경과 시간
    let curr_bridge = new Array(bridge_length).fill(0) // 다리
    let done = [] // 건넌 트럭
    let num = truck_weights.length
    
    while(curr_bridge.length){
        time++
        
        curr_bridge.shift();
        if(truck_weights.length){
            const sum = curr_bridge.reduce((a,b)=>a+b,0)
            if(sum + truck_weights[0] <= weight){
                curr_bridge.push(truck_weights.shift())
            } else {
                curr_bridge.push(0)
            }
        }
        
    }
    
    return time
}