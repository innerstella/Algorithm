function solution(sides) {
    let available = [];
    
    let a = Math.min(...sides);
    let b = Math.max(...sides);
    
    // sides Max가 가장 긴 변일 경우
    // b < x+a   // b> x > b-a
    for(let i=b-a+1; i<=b; i++){
        available.push(i);
    }
    
    // 미지의 변이 가장 긴 변일 경우
    // b < x < a+b
    for(let i=b+1; i<a+b; i++){
        available.push(i);
    }

    let answer = available.length;
    return answer;
}