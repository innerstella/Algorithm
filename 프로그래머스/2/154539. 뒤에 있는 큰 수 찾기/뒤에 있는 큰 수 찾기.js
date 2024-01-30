function solution(numbers) {
    const length = numbers.length;
    const result = Array(length).fill(-1); // 결과 배열을 -1로 초기화

    let stack = [];

    for (let i = 0; i < length; i++) {
        while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
            const idx = stack.pop();
            result[idx] = numbers[i];
        }

        stack.push(i);
    }

    return result;
}
