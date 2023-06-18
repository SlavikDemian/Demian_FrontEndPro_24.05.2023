
/*
let array = [ 3, 'a',  5, 'b', 10, 'c', 4, 'd', 8, 'e', 15, 'f', 'end'];
let sum = 0;
let count = 0;

function calculateArr() {

    for(let i = 0; i < array.length; i++){

        if (!isNaN(array[i])) {
            count += 1;
            sum += array[i];
        }
    }
    return  sum / count;
}

let result = calculateArr();
alert(result);
 */



/*
function doMath(x, znak, y) {
    x = +prompt("Введите первое число");
    znak = prompt("Введите операцию которую хотите совершить: +, -, *, /, %, ^ ");
    y = +prompt("Введите второе число");
    let result;

    switch (znak) {
        case "+":
            result = x + y;
            break;

        case "-":
            result = x - y;
            break;

        case "*":
            result = x * y;
            break;

        case "/":
            result = x / y;
            break;

        case "%":
            result = x % y;
            break;

        case "^":
            result = x ** y;
            break;
    }
    return result;
}
let resultDoMath = doMath();
alert(resultDoMath);
*/



/*
let arr = [];
function arrAddArray() {
    let amount1 = +prompt("Введите количество массивов в родительском массиве");

    for (let i = 0; i < amount1; i++) {
        arr.push([]);

        let amount2 = prompt("Введите количество елементов в массиве: " + (i + 1));

        for (let j = 0; j < amount2; j++) {
            let elem = prompt("Введите значение элемента номер: " + (j + 1));
            arr[i].push(elem);
        }
    }
}
arrAddArray();
console.log(arr);
*/



/*
let string = prompt('Введите слово или несколько слов через пробел')
let lettersToRemove = [];

function func(str, lettersToRemove) {

    let amount = prompt("Введите количество букв которые хотите удалить: " );

    for (let j = 0; j < amount; j++) {
        let elem = prompt("Введите букву которую хотите удалить: " + (j + 1));
        lettersToRemove.push(elem);
    }

    return str.split('').reduce((acc, current)=> {
        if(lettersToRemove.indexOf(current.toLowerCase()) == -1){
            acc.push(current);
        }
        return acc;
    }, []).join('');
}

const stringResult = func(string, lettersToRemove);

console.log(stringResult);

 */