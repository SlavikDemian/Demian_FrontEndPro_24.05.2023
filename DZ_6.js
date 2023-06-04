/*
const a = 80;
const b = 200;
(a>b) ? alert(`${a} больше, а ${b} меньше`) : alert(`${b} больше, а ${a} меньше`)
*/

/*
const distanceMeter = 10;
const distanceFt = 20;
let convMeToFT = distanceFt * 0.305;
(distanceMeter > convMeToFT) ? alert(`${convMeToFT} эта дистанция меньше всего`) : alert(`${distanceMeter} эта дистанция меньше всего`)
*/

/*
const a = 11;
const b = 2;
const valueA = (a % b === 0) ? `${a} являеться делителем числа ${b}.` : `${a} не являеться делителем числа ${b}.`;
const valueB = (b % a === 0) ? `${b} являеться делителем числа ${a}.` : `${b} не являеться делителем числа ${a}.`;
alert(`${valueA} ${valueB}`)
*/

/*
const a = 54321;
const result = (a % 2 === 0) ? `Заканчиваеться парной цифрой, последняя цифра ${a % 10}` : `Не являеться парной цифрой, последняя цифра ${a % 10}`;
alert(result)
*/


/*
const a = 97;
const b = Math.floor(a / 10) % 10;
const c = a % 10;
(b>c) ? alert('Первая цифра больше второй') : alert('Вторая цифра больше первой')
 */

/*
const value = 529;
const a = Math.floor(value / 100) % 10;
const b = Math.floor(value / 10) % 10;
const c = value % 10;
let sumOfDigit = a + b + c;
let sumOfMultiplic = a * b * c;

const result1 = (sumOfDigit % 2 === 0) ? `Сумма цифр ${value} является парной.` : `Сумма цифр ${value} не парная.`;
const result2 = (sumOfDigit % 5 === 0) ? `Сумма цифр ${value} кратна пяти.`: `Сумма цифр ${value} не кратная пяти.`;
const result3 = (sumOfMultiplic >= 100) ? `Произведение суммы цифр ${value} больше 100.`: `Произведение суммы цифр ${value} меньше 100.`;

alert(`${result1} ${result2} ${result3}`);
*/

/*
const value = 515;
const a = Math.floor(value / 100) % 10;
const b = Math.floor(value / 10) % 10;
const c = value % 10;

const result1 = (a === b && b === c) ? `Все цифры числа ${value} одинаковы.` : `Одно или больше цифр в числе ${value} не одинаковы.`
const result2 = (a === b || a === c || b === a || b === c || c===a || c ===b ) ? `Одно или больше цифр в числе ${value} одинаковы.` : `Ниодной одинаковой цифры в числе ${value} нет.`

alert(`${result1} ${result2}`);
*/

/*
const value = 147741;
const a = Math.floor(value / 100000) % 10;
const b = Math.floor(value / 10000) % 10;
const c = Math.floor(value / 1000) % 10;
const d = Math.floor(value / 100) % 10;
const f = Math.floor(value / 10) % 10;
const g = value % 10;

(a === g && b === f && c === d) ? alert(`Число ${value} является зеркальным`) : alert(`Число ${value} не зеркальное`);
 */