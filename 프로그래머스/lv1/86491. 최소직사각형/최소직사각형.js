function solution(sizes) {
    var answer = 0;
    
    let X = [];
    let Y = [];
    sizes.map((x)=>{
        X.push(Math.max(...x));
        Y.push(Math.min(...x));
    })

    let x_max = Math.max(...X);
    let y_max = Math.max(...Y);

    answer = x_max * y_max;
    
    return answer;
}