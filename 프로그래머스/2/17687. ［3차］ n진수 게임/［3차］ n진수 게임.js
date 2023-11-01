function solution(n, t, m, p) {
    // const a = 3
    // console.log(a.toString(2))
    
    // 튜브 차례
    const turns = []
    let turn = 0
    for(let i=1; i<=t; i++){
        i === 1 ? turn += p : turn += m
        turns.push(turn)
    }
    
    // 튜브가 말해야 하는 마지막 순서 = 글자 수
    const lastTurn = turns[turns.length - 1]
    
    let numbers = ''
    let cnt = 0
    while(true){
        if(numbers.length >= lastTurn){
            break
        }
        
        const n_num = cnt.toString(n)
        numbers += n_num
        cnt++
    }
    
    // 튜브 순서 때 말할 숫자
    const answerList = []
    turns.forEach((turn)=>{
        const say = numbers[turn - 1]
        
        if(!isNaN(+say)){
            answerList.push(say)
        } else {
            answerList.push(say.toUpperCase())
        }
    })
    
    
    return answerList.join('')
}