function solution(numbers) {
    var answer = '';
    // console.log(numbers.slice(0,2), numbers);
    // let i = 0;
    // let temp = '';
    // while(numbers.length > 0){
    //     temp += numbers[i];
    //     if (temp === 'one'){
    //         answer += 1;
    //         temp = '';
    //     }
    //     i++;
    // }
    let temp = '';
    for (let i=0; i<numbers.length; i++){
        temp += numbers[i];
        if(temp === 'one'){
            answer += 1;
            temp = '';
        }
        if(temp === 'two'){
            answer += 2;
            temp = '';
        }
        if(temp === 'three'){
            answer += 3;
            temp = '';
        }if(temp === 'four'){
            answer += 4;
            temp = '';
        }if(temp === 'five'){
            answer += 5;
            temp = '';
        }if(temp === 'six'){
            answer += 6;
            temp = '';
        }if(temp === 'seven'){
            answer += 7;
            temp = '';
        }if(temp === 'eight'){
            answer += 8;
            temp = '';
        }if(temp === 'nine'){
            answer += 9;
            temp = '';
        }if(temp === 'zero'){
            answer += 0;
            temp = '';
        }
    }
    answer = parseInt(answer);
    return answer;
}