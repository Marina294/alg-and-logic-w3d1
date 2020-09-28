const intInRangeRecursive = function(startValue, endValue) {
    if (endValue - startValue === 2) {
        return [startValue + 1]
    } else {
        let list = intInRangeRecursive(startValue, endValue - 1);
        list.push(endValue - 1);
        return list;
    }
}

console.log(intInRangeRecursive(2, 9));