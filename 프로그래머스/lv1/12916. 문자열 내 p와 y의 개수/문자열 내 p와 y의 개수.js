function solution(s){
    let cntP = 0;
    let cntY = 0;
    
    s = s.split('');
    s.map((e)=>{
        if(e === 'p' || e === 'P'){
            cntP++;
        }
        if (e === 'y' || e ==='Y'){
            cntY++;
        }
    })
    
    if (cntP === cntY){
        return true;
    } else {
        return false;
    }

}