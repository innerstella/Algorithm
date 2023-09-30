class Queue {
    constructor(){
        this.queue = []
        this.front = 0
        this.rear = 0
    }
    
    enqueue(value){
        this.queue[this.rear++] = value
    }
    
    dequeue(){
        const value = this.queue[this.front] // FIFO
        delete this.queue[this.front]
        this.front += 1
        return value
    }
    
    peek(){
        return this.queue[this.front]
    }
    
    size(){
        return this.rear - this.front
    }
}

function solution(priorities, location) {
    const process = new Queue()
    for(let i=0; i<priorities.length; i++){
        process.enqueue([priorities[i], i])
    }
    priorities.sort((a,b)=>b-a)
    
    let cnt = 0
    while (true){
        const curr = process.peek()
        if(curr[0] < priorities[cnt]){ // 현재 우선순위가 지금까지 수행한 우선순위보다 작은경우
            process.enqueue(process.dequeue())
        } else {
            const value = process.dequeue()
            cnt++
            if(location === value[1]){ // 우리가 찾던 문서라면
                return cnt
            }
        }
    }
}