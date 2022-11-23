function solution(sides) {
    var answer = 0;
    sides = sides.sort(function(a,b){
        return b-a;
    });
    console.log(sides);
    {sides[0] < sides[1] + sides[2] ? answer = 1:answer = 2}
        
    
    return answer;
}