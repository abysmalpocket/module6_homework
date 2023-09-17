function getNumber (number) {
    if (number > 1000) return "Данные неверны.";
    if (number === 0) return  "Ноль - это ненатуральное число.";
    if (number === 1) return "Один - это не простое и не составное число, так как у него всего один делитель - 1.";

    let value = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) value++;
    }

    if (value === 2)
        return "Это простое число.";
    else
        return "Это состовное число.";
}

console.log(getNumber(20));