function solution(arr) {
    let result = arr.pop();
    
    while (true) {
        let cal = getLCM(result, arr.pop());
        result = cal;
        
        if(arr.length === 0) break
    }
    
    return result
}

function getLCM (num1, num2) {
	let lcm = 1;
   
    while(true){
      if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
      lcm++;
    }
  	return lcm
}
