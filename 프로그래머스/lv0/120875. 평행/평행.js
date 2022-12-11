function solution(dots) {
    let slope_arr = [];
    
    for(let i=0; i<dots.length; i++){
        for(let j=i+1; j<dots.length; j++){
            let x = dots[i][0] - dots[j][0];
            let y = dots[i][1] - dots[j][1];
            let slope = y/x;
            slope_arr.push(slope);
        }
    }    
    
    let set = new Set(slope_arr);
    let after = Array.from(set);
    if (slope_arr.length !== after.length){
        return 1;
    } else{
        return 0;
    }

}