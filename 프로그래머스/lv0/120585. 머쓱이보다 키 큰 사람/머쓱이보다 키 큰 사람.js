function solution(array, height) {
    var answer = 0;
    array.map((e) => {
        if (e > height){
            answer += 1;
        }
    })
    return answer;
}