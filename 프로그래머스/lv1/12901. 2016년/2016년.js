function solution(a, b) {
    const now = new Date(`2016-${a}-${b}`);
    const day = now.getDay();
    
    if (day === 1){
        return "MON";
    } else if (day === 2){
        return "TUE";
    } else if (day === 3){
        return "WED";
    } else if (day === 4){
        return "THU";
    } else if (day === 5){
        return "FRI";
    } else if (day === 6){
        return "SAT";
    } else if (day === 0){
        return "SUN";
    }

}