function solution(array) {
    var answer = 0;
    
    let list = new Set(array);
    list = Array.from(list);
    
    let countList = [];
    list.map(e=>{
        countList.push([e,0]);
    })
    
    console.log(countList);
    
    for (let i =0; i < array.length; i++){
        for (let j=0; j<countList.length; j++){
            if (array[i] === countList[j][0]){
                countList[j][1] += 1;
            }
        }
    }
    
    console.log(countList);
    
    countList.sort(function(a,b) {
        return b[1] - a[1];
    })
    console.log(countList);
    
    if (countList.length === 1){
        answer = countList[0][0];
    } else {
        if (countList[0][1] === countList[1][1]){
            answer = -1;
        } else {
            answer = countList[0][0];
        }
    }
    return answer;
}