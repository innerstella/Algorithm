function solution(genres, plays) {
    var answer = [];
    
    // 장르별 총 재생 횟수
    let list = [];
    for(let i=0; i<genres.length; i++){
        list.push([i, genres[i], plays[i]]);
    }
    

    let genreList = genres.reduce((l, k)=>{
        l[k] = 0;
        return l;
    },{})
    
    let objList = Object.entries(genreList);
    list.map((song)=>{
        objList.map((g)=>{
            if(g[0]===song[1]){
                g[1] += song[2];
            }
        })
    })
 
    objList.sort((a,b)=>{
        return b[1] - a[1];
    })

    list.sort((a,b)=>{
        return b[2] - a[2];
    })
    console.log(list);
    objList.map((song)=>{
        console.log(song[0]);
        let gen = song[0];
        let temp = [];
        for (let i=0; i<list.length; i++){
            if(gen === list[i][1]){
                temp.push(list[i][0]);
            }
        }
        console.log(temp);
        if(temp.length === 1){
            answer.push(temp[0]);
        } else {
            answer.push(temp[0], temp[1]);
        }
    })
    
    
    
    return answer;
}