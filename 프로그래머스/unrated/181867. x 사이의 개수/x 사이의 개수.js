function solution(myString) {
    const xArr = myString.split('x')
    
    return xArr.map((elem)=>{
        return elem.length
    })

}