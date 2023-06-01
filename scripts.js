/*
let userClock = prompt('Напиши колличество часов')
    mathCalcSeconds = userClock * 3600
alert(`${mathCalcSeconds} секунд в ${userClock} часах`)
*/


// ДЗ 3. Починаємо програмувати

/*
let userName  = prompt('Как тебя зовут?')
alert(`Hello, ${userName}! How are you?`)
 */


/*
let firstNumber = prompt('Введи первое число')
let secondNumber = prompt('Введи второе число')
let thirdNumber = prompt('Введи третье число')
let resultNumber = (+firstNumber + +secondNumber + +thirdNumber) / 3
alert(`Среднее арифметическое число ${resultNumber}`)
*/


/*
let valueFirst = prompt('Введи первое значение')
let valueSecond = prompt('Введи второе значение')
if(valueFirst == valueSecond) {
    alert('true')
} else {
    alert('false')
}
*/


/*
let firstValue = prompt('Введи первое число')
let secondValue = prompt('Введи второе число')
let mathSymbol = prompt('Введи матеметический символ (+ - * /) для выпонения опреации ')
let result

if(mathSymbol == '+') {
    result = Number(firstValue) + Number(secondValue)
    alert(result)
}else if (mathSymbol == '-'){
    result = Number(firstValue) - Number(secondValue)
    alert(result)
} else if (mathSymbol == '*') {
    result = Number(firstValue) * Number(secondValue)
    alert(result)
}else if (mathSymbol == '/') {
    result = Number(firstValue) / Number(secondValue)
    alert(result)
} else {
    alert('Введен некоректный символ, попробуй еще раз!')
}
*/


/*
let number = prompt('Введи 5-ти значное число')

if(number.length == 5) {
    let firstNumber = Math.floor((number /10000) % 10)
    let secondNumber = Math.floor((number / 1000) % 10)
    let thirdNumber = Math.floor((number / 100) % 10)
    let fourthNumber = Math.floor((number / 10) % 10)
    let fiveNumber = number % 10
    alert(`${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber} ${fiveNumber}`)
} else {
    alert('Что-то не так, поробуйте еще раз!')
}
*/
