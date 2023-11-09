function solution(people, limit) {
    // 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
    // 구명보트를 최대한 적게 사용하여 모든 사람을 구출
    // 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 
    
    people = people.sort((a,b)=>a-b)
    
    let left = 0 // 가장 가벼운 사람
    let right = people.length -1 // 가장 무거운 사람
    let boat = 0
    
    while(left <= boat){
        if(people[left] + people[right] <= limit){
            left++
        }
        right--
        boat++
        
         if (left > right) {
            break;
        }
    }
    
    return boat
}