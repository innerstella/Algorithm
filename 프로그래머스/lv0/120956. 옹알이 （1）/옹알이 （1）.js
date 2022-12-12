function solution(babbling) {
    let answer = 0;
    let available = ["aya", "ye", "woo", "ma"];
    
    babbling.map((e)=>{
        let temp=0;
        while (temp < e.length){
            if (available.includes(e.slice(temp,temp+2))){
                // console.log(e.slice(temp,temp+2));
                temp += 2;
            } else if (available.includes(e.slice(temp, temp+3))){
                // console.log(e.slice(temp, temp+3));
                temp += 3;
            } else {
                console.log('엥');
                return;
            }
            if (temp === e.length){
                // return e;
                answer++;
            }
        }
        
    })
    
    return answer;
}
