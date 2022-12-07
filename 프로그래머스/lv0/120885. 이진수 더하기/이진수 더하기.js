function solution(bin1, bin2) {
    let ten1 = binToTen(bin1);
    let ten2 = binToTen(bin2);
    let ten = ten1 + ten2;
    let answer = tenToBin(ten).split('').reverse().join('');
    
    return answer;
}

function binToTen(n){
    let ten = 0;
    if(n === '0'){
        ten = 0;
    } else {
        n = n.split('').reverse();
        for(let i=0; i<n.length; i++){
        ten = ten + (2**i)*parseInt(n[i]);
        }
    }
    
    return ten;
}

function tenToBin(n){
    let bin = '';
    if(n === 0){
        bin = '0';
    } else {
        let share = n;
        while(share >= 1){
            let remainder = share%2;
            bin += remainder;
            share = Math.floor(share/2);
        }
    }
   
    return bin;
}