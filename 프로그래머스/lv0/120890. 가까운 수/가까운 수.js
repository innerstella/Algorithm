function solution(array, n) {
    let gap = Math.abs(array[0] - n);
    let answer = array[0]
    for(let i=1; i<array.length; i++){
        if (Math.abs(array[i] - n) < gap){
            gap = Math.abs(array[i]-n);
            answer = array[i];
        } else if (Math.abs(array[i]-n) === gap){
            console.log(i, '같아');
            answer = Math.min(answer, array[i]);
        }
    }
    return answer;
}