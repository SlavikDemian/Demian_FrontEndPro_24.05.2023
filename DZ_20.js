class SuperMath {
    check(obj) {
        let isConfirmed = confirm(`Хотете произвести действие? Знак вычисления: - '${obj.znak}', первое значение: - ${obj.x}, второе значение: - ${obj.y}`);
        if (isConfirmed) {
            return alert(this.input(obj))

        } else {
            return alert(this.input(this.promptMethod()))
        }
    }
    promptMethod(){
        const x = +prompt("Введите первое число");
        const znak = prompt("Введите операцию которую хотите совершить: можливі варіанти znak => + - / * %");
        const y = +prompt("Введите второе число");
        return {x, znak, y}
    }
    input(obj) {
        const {x, znak, y} = obj;

        switch (znak) {
            case "+":
                return  x + y;

            case "-":
                return  x - y;

            case "*":
                return  x * y;

            case "/":
                return  x / y;

            case "%":
                return  x % y;

            default:
                return `Введен неверный знак`
        }
    }
}
const obj = {x: 12, znak: '/', y: 3 }

const p = new SuperMath();
p.check(obj)







// isConfirmedMethod(znak, X, Y){
//     let result;
//     switch (znak) {
//         case "+":
//             result = X + Y;
//             break;
//         case "-":
//             result = X - Y;
//             break;
//         case "*":
//             result = X * Y;
//             break;
//         case "/":
//             result = X / Y;
//             break;
//         case "%":
//             result = X % Y;
//             break;
//     }
//     return result;
// }









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