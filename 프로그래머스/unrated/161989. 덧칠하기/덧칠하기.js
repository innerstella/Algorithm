// function solution(n, m, section) {
//     // 롤러
//     const roller = new Array(m).fill(1)
    
//     // 벽 01 배열화
//     let wall = []
//     for(let i=1; i<=n; i++){
//         section.includes(i) ? wall.push(0) : wall.push(1)
//     }
    
//     // 벽 순회
//     let cnt = 0
//     for(let i=0; i<wall.length; i++){
//         if(wall[i] === 0){
//             wall.splice(i, m, ...roller)
//             cnt++
//         }
//         if (!wall.includes(0)){
//             break
//         }
//     }
//     return cnt
// }
function solution(n, m, section) {
    const sortedSections = section.sort((a, b) => a - b); // 구역을 오름차순 정렬
    let paintCount = 0; // 벽을 칠하는 횟수

    // 다시 칠할 위치를 저장하는 배열
    const repaint = new Array(n + 1).fill(false);
    for (const sec of sortedSections) {
        repaint[sec] = true;
    }

    for (let i = 1; i <= n; i++) {
        if (repaint[i]) {
            paintCount++;
            i += m - 1; // 롤러의 길이를 고려하여 다음 위치로 이동
        }
    }

    return paintCount;
}
