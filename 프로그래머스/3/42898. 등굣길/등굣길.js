function solution(m, n, puddles) {
    const MOD = 1000000007
    const dp = new Array(n+1).fill().map(_ => new Array(m+1).fill(0));
    dp[1][1] = 1
    
//     for(let i=1; i<=n; i++){
//         for(let j=1; j<=m; j++){
//             // if(i === 1 && j === 1){
//             //     dp[1][1] = 1
//             //     continue
//             // }
//             if(isPuddle(i, j, puddles)){
//                 dp[i][j] = 0
//                 continue
//             }
            
//             dp[i][j] = dp[i-1][j] + dp[i][j-1]
//         }
//     }
    
    const puddleSet = new Set(puddles.map(([y, x]) => `${x},${y}`));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i === 1 && j === 1) continue;
            if (puddleSet.has(`${i},${j}`)) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
            }
        }
    }

    
    return dp[n][m] % MOD
  
 
}


const isPuddle = (x, y, puddles) => {
  for(const puddle of puddles) {
    if(puddle[0] === y && puddle[1] === x)
      return true;
  }
  return false;
}