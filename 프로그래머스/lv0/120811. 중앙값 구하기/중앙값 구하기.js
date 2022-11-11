function solution(array) {
    var answer = 0;
    array = array.sort(function(a,b){
        return a-b;
    });
    console.log(array);

    
    let mid =  Math.floor(array.length / 2)
    console.log(mid);

    answer = array[mid];
 
    return answer;
}