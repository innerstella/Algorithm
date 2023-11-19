function solution(myString) {
    const xArr = myString.split('x').filter((elem)=>elem !== '').sort()
    
    return xArr
    
}