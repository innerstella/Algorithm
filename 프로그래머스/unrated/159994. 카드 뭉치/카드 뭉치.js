function solution(cards1, cards2, goal) {
    let list = 1;
    while(true){
        if(list === 1){
            if(cards1[0] === goal[0]){
                cards1.shift()
                goal.shift()
            } else {
                list = 2
            }
        // console.log(1, cards1, goal);
            
        } else if(list === 2){
               if(cards2[0] === goal[0]){
                cards2.shift()
                goal.shift()
                   
            } else {
                list = 1
            }
        // console.log(2,cards2, goal);
            
        }
        
        // console.log(goal);
        
        if(cards1[0] !== goal[0] && cards2[0] !== goal[0] || goal.length === 0){
            break;
        }
    }
    if (goal.length !== 0){
        return 'No'
    } else {
        return 'Yes'
    }
}