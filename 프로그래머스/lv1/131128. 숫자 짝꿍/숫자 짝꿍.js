function solution(X, Y) {
    let result = '';
    
    X = X.split('');
    Y = Y.split('');
    
    let yList = Y.reduce((list, num)=>{
       if(list[num]){
           list[num] += 1;
       } else {
           list[num] = 1;
       }
        return list;
    },{});
    
    X.map((x)=>{
        x = parseInt(x);
        if(yList[x] > 0){
            yList[x] -= 1;
            result += x.toString();
        }
    })
    
    result = result.split('');
    result.sort((a,b)=>{
        return b-a;
    });
    result = result.join('');
   
    let set = new Set(result);
    let arr = Array.from(set);

    if (arr[0] === '0' && arr.length === 1){
        result = '0';
    }
    
    
    if (result === ''){
        return '-1';
    } else {
        return result;
    }
    
}