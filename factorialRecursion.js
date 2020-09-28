// 8! === 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

const factorial = function(x) {
    if (x === 0) {
        return 1;
    }

    return x * factorial(x - 1);
}

console.log(factorial(6))

