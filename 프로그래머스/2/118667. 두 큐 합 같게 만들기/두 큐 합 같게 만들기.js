class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear++] = value;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }

    length() {
        return this.rear - this.front;
    }
}

function solution(queue1, queue2) {
    const queueL = new Queue();
    const queueR = new Queue();

    queue1.forEach((elem) => queueL.enqueue(elem));
    queue2.forEach((elem) => queueR.enqueue(elem));

    let cnt = 0;
    const initL = queueL.queue.slice();
    const initR = queueR.queue.slice();
    
    let sumL = queueL.queue.reduce((a, b) => a + b, 0);
    let sumR = queueR.queue.reduce((a, b) => a + b, 0);
    
    if((sumL + sumR)%2 === 1) return -1

    while (true) {
        if (sumL > sumR) {
            const l = queueL.dequeue();
            queueR.enqueue(l);
            sumL -= l
            sumR += l
            cnt++;
        } else if (sumL < sumR) {
            const r = queueR.dequeue();
            queueL.enqueue(r);
            sumR -= r
            sumL += r
            cnt++;
        } else {
            break
        }
        
        if(cnt === 2*(queueL.length() + queueR.length())) return -1
    }

    return cnt;
}


