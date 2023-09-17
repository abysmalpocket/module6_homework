let arrN = [1, 2, 10, 4, 'undefined', 'fly', 7, 0, 9, 6, null, 'crawl'];


function evenOdd (arr){
    let itemEven = 0;
    let itemOdd = 0;
    let itemOther = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            itemOther++;
        } else {
            if (arr[i] % 2 === 0) {
                itemEven++;
            } else {
                itemOdd++;
            }
        }
    }

    return [itemEven, itemOdd, itemOther];
}

let result = evenOdd(arrN);

console.log("Четных чисел " + result[0]);
console.log("Не четных чисел " + result[1]);
console.log("Другие значения " + result[2]);