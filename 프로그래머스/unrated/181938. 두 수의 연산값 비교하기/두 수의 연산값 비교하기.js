function solution(a, b) {
    const ans1 = a.toString() + b.toString()
    const ans2 = 2 * a * b
    
    const ans = [+ans1, ans2]
    
    return Math.max(...ans)
}