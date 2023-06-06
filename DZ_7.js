

/*
let string = '';
let i;
for(i = 10; i <=20; i++){
    string += i;
    string += ', ';
}
alert(string)
*/


/*
let string = '';
let i;
for(i = 10; i <=20; i++){
    string = string + (i ** 2);
    string += ', ';
}
alert(string)
*/


/*
let string = '';
let i;
for (i = 1; i <=10; i++){
    string = string + i + ' x 7 =' + (i * 7);
    string += ', '
    }
alert(string)
*/


/*
let sum = 0;
let i;
for (i = 1; i <= 15; i++){
    if(i % 1 === 0) {
        sum += i;
    } else {
        continue;
    }
}
alert(sum)
 */


/*
let string = '';
let i;
for (i = 15; i <= 35; i++){
    if(i % 1 === 0) {
        string += (i * i);
        string += ', ';
    } else {
        continue;
    }
}
alert(string)
 */


/*
let sum = 0;
let i;
for (i = 1; i <= 500; i++){
    if(i % 1 === 0) {
        sum += i;
    } else {
        continue;
    }
}
const result = sum / i
alert(result)
 */


/*
let string = '';
let i;
for (i = 30; i <= 80; i++){
    if(i % 2 === 0) {
        string += i;
        string += ', ';
    } else {
        continue;
    }
}
alert(string)
*/


/*
let string = '';
let i;
for (i = 100; i <= 200; i++){
    if(i % 3 === 0) {
        string += i;
        string += ', ';
    } else {
        continue;
    }
}
alert(string)
*/


/*
const naturalNum = 50;
let i;
let value = 0;
let count = 0;
let sum = 0;
for (i = 1; i * 2 <= naturalNum; i++) {
    if (naturalNum % i === 0) {
        value += i;
        value += ', ';
        if (i % 2 === 0) {
            count++;
            sum += i;
        }
    } else {
        continue;
    }
}
alert(`Все делители натурального числа (${naturalNum}): ${value}. Колличество его четных делителей: ${count}. Сумма четных делителей: ${sum} `)
*/


/*
let i;
let j;
for (i = 1; i <= 10; i++) {
    document.write("<div style='float: left; width: 70px;'>")
    for (j = 1; j <= 10; j++) {
        document.write(i + 'x' + j + '=' + (j * i) + " ")
    }
    document.write("</div>")
}
*/
