function solution(park, routes) {
    // 시작 좌표
    let origin = []
    let start
    for(let i = 0; i<park.length; i++){
        if(park[i].includes('S')){
            origin.push(i)
            start = park[i]
        }
    }
    origin.push(start.split('').indexOf('S'))
    console.log('시작 좌표 : ', origin)
    
    // 이동
    // 움직이기 전 확인 -> 해당 명령 무시 후 다음 명령 진행
    // 1. 공원을 벗어나는지
    // 2. 이동 중 장애물을 만나는지
    let x = park.length
    let y = park[0].length
    // console.log('x : ', x, 'y : ', y)
    
    routes.forEach((route)=>{
        let dir = route[0]
        let val = +route[2]
        // console.log('###', dir, val)
        
        let temp = origin.slice()
        if(dir === 'N'){
            temp[0] -= val
        } else if (dir === 'E'){
            temp[1] += val
        } else if (dir === 'W'){
            temp[1] -= val
        } else {
            temp[0] += val
        }
        // console.log('temp', temp)
        
        // 이동 경로
        let path = ''
        // console.log(origin, '->', temp)
        let idx, from, to, fix
        // origin[0] !== temp [0] ? move = 0 : move = 1 
        if(origin[0] !== temp[0]){
            idx = 0
            from = Math.min(origin[0], temp[0])
            to = Math.max(origin[0], temp[0])
            fix = origin[1]
        } else {
            idx = 1
            from = Math.min(origin[1], temp[1])
            to = Math.max(origin[1], temp[1])
            fix = origin[0]
        }
        
        let currX = temp[0] + 1
        let currY = temp[1] + 1
        if(currX > 0 && currY > 0 && currX <= x && currY <= y){
            for(let i=from; i<=to; i++){
                if(idx === 0){
                    path += park[i][fix]
                } else {
                    path += park[fix][i]
                }
            }
            
            if (!path.includes('X')){
                origin = temp
            }
        }
       
        
//         // console.log('path', path)
        
//         // console.log(temp[0], temp[1])
        
//         if(currX > 0 && currY > 0 && currX <= x && currY <= y && !path.includes('X')){
//             // 조건에 해당안되면
//             origin = temp
//             // console.log('이동', origin)
//         }
    })
    // 모든 명령을 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표] 
    return origin
}