function solution(strings, n) {
     // return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
    strings.sort((a,b)=>{
        if (a[n] > b[n]){
            return 1
        } else if (a[n] < b[n]){
            return -1
        } else {
            return a>b? 1:-1
        }
    })
    return strings;
}