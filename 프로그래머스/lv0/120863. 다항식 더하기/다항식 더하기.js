function solution(polynomial) {
    let first_order_arr = [];
    let constant_arr = [];
    
    polynomial = polynomial.split(' ');
    polynomial.map((p)=>{
        if(p.includes('x') && p.includes('+')===false){
            first_order_arr.push(p);
        } else if (p.includes('x') === false && p.includes('+')===false) {
            constant_arr.push(p);
        }
    })
    
    let first_order = 0;
    first_order_arr.map((e)=>{
        if (e.length === 1){
            first_order++;
        } else {
            let num = e.slice(0,e.length-1);
            first_order += parseInt(num);
        }
    })
    
    let constant = 0;
    constant_arr.map((e)=>{
        constant += parseInt(e);
    })
  
    let answer = '';    
    
    if (first_order === 0){
        if (constant === 0){
            answer =  ``;
        } else {
            answer =  `${constant}`;
        }
    } else if (first_order === 1){
        if (constant === 0){
            answer = `x`;
        } else {
            answer = `x + ${constant}`;
        }
    } else if (first_order > 1){
        if (constant === 0){
            answer = `${first_order}x`;
        } else {
            answer = `${first_order}x + ${constant}`;
        }
    }

    return answer;
}