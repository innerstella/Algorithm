function solution(dots) {
    let x_arr = [];
    let y_arr = [];
    
    dots.map((dot)=>{
        x_arr.push(dot[0]);
        y_arr.push(dot[1]);
    })

    let x = Math.abs(Math.max(...x_arr) - Math.min(...x_arr));
    let y = Math.abs(Math.max(...y_arr) - Math.min(...y_arr));
    let answer = x*y;
     
    return answer;
}