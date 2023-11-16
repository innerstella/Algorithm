function solution(phone_book) {
    phone_book = phone_book.sort((a,b) => a-b)
    
    const prefixSet = new Set();

    for (const number of phone_book) {
        for (let i = 0; i < number.length; i++) {
            const prefix = number.slice(0, i);
            if (prefixSet.has(prefix)) {
                return false;
            }
        }
        // 전화번호를 prefixSet에 추가
        prefixSet.add(number);
    }

    return true;
}
