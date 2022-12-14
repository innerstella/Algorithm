function solution(s) {
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    console.log(s.length);
    if (s.length !== 4 && s.length !== 6){
        return false;
    }
    let arr = s.split('');
    let wrong = 0;
    arr.map((e)=>{
        if(numbers.includes(e) === false){
            wrong++;
        }
    })
    
    if (wrong === 0){
        return true;
    } else {
        return false;
    }
    
}