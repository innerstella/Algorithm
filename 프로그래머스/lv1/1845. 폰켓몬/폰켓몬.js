function solution(nums) {
    let answer = 0;
    
    let select = nums.length/2;
    let set = new Set(nums);
    nums = Array.from(set);
    
    answer = Math.min(select, nums.length);
    
    return answer;
}