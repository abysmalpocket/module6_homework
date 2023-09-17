function getSum (number) {
    return function (number2) {
        return number + number2;
    }
}

console.log(getSum(1)(5));