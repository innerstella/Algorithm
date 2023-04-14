function solution(n, computers) {
    var answer = 0;
    
    const dfs = (node, visited, computer) => {
        visited[node] = true
        for(let i=0; i<computer.length; i++){
            if(computer[node][i] === 1 && !visited[i]){
                dfs(i, visited, computer)
            }
        }
    }
    
    const visited = []
    for(let i=0; i<n; i++){
        if(!visited[i]){
            dfs(i, visited, computers)
            answer++
        }
    }
    
    return answer;
}