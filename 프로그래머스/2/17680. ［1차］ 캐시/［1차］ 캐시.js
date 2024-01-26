function solution(cacheSize, cities) {
    let totalTime = 0
    let cache = new Map()
    
    if (cacheSize === 0) return cities.length * 5;
    
    cities.forEach((city, idx) => {
        city = city.toLowerCase();

        // cache hit
        if (cache.has(city)) { 
            totalTime += 1; 
            
            cache.delete(city)
            cache.set(city, idx+1)
        } 
        // cache miss
        else {
            totalTime += 5;
            
            if (cache.size >= cacheSize) {
                const lruCity = cache.keys().next().value;
            
                cache.delete(lruCity);
            }
            
            cache.set(city, idx + 1);
        }


    });

    
    return totalTime
}