function solution(num, total) {
    var answer = [];
    let temp = 0;
    
    return makeNum(num, total);
    
}

function makeNum (num, total) {
    let temp = 0;
    let list = [];
    for(let i = -1000; i<=1000; i++){
        for(let j=i; j<i+num; j++){
            temp += j;
            list.push(j);
        }
        if (temp === total){
            return list;
        }
        temp = 0;
        list = [];
    }
    
    // return temp;
}