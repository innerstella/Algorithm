function solution(letter) {
    var answer = '';
    letter = letter.split(' ');
    console.log(letter);
    
    let morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    };
    const m = Object.keys(morse);
    const word = Object.values(morse);
    console.log(word);
    letter.map((e)=>{
        for(let i=0; i<m.length; i++){
            if (e === m[i]){
                answer = answer + word[i];
            }
        }
    })
    
    return answer;
}