function solution(binomial) {
    const splitBinomial = binomial.split(' ')
    let [a, op, b] = splitBinomial
    a = +a
    b = +b
    
    if(op === '+') return a+b
    if(op === '-') return a-b
    if(op === '*') return a*b
}