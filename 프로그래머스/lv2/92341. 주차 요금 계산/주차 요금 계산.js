function solution(fees, records) {    
    // 입/출차 기록
    records = records.map(rec => rec.split(' '))
    
    // 시뮬레이션
    let parkingLot = {}
    let feeList = {}
    records.forEach((rec)=>feeList[rec[1]] = 0)
    records.forEach((rec)=>{
        let time = rec[0]
        let carNum = rec[1]
        let type = rec[2]
        
        if(type === 'IN'){
            parkingLot[carNum] = time
        } else {
            let inTime = parkingLot[carNum]
            let diff = calTime(inTime, time)
            feeList[carNum] += diff
            delete parkingLot[carNum]
        }
    })
    
    // 입차된 후에 출차된 내역이 없다면, 23:59에 출차된 것으로 간주합니다.
    for(const key in parkingLot){
        let diff = calTime(parkingLot[key], '23:59')
        feeList[key] += diff
    }
    
    // 요금 계산
    // 요금표
    let basicTime = fees[0]
    let basicFee = fees[1]
    let unitTime = fees[2]
    let unitFee = fees[3]
    
    let answer = []
    for(const key in feeList){
        let fee = basicFee
        let time = feeList[key]
        
        if(time <= basicTime){
            answer.push([key, basicFee])
        } else {
            let over = Math.ceil((time - basicTime) / unitTime)*unitTime
            let overFee = (over/unitTime)*unitFee
            answer.push([key, basicFee + overFee])
        }
    }
    
    
    // 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 정수 배열에 담아서 return
    answer.sort((a,b)=>a[0]-b[0])
    return answer.map(elem => elem[1])   
}

function calTime (inTime, outTime){
    inTime = inTime.split(':').map(t=>+t)
    outTime = outTime.split(':').map(t=>+t)
    
    let inMin = inTime[0] * 60 + inTime[1]
    let outMin = outTime[0] * 60 + outTime[1]
    let diffMin = outMin - inMin
    
    return diffMin
}