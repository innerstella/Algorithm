function solution(array, commands) {
    return commands.map((command) => {
        const [i, j, k] = command
        const modifiedArr = array.slice(i-1, j).sort((a,b)=> a-b)
        
        return modifiedArr[k-1]
    })
}